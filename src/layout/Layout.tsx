import { NavLink, Outlet, useNavigate } from "react-router-dom";
import cn from "classnames";

import { Button } from "../components";

import styles from "./Layout.module.css";
import { useAppDispatch, useAppSelector } from "../app/store";
import { userLogout } from "../app/user.slice";

const Layout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { email, name } = useAppSelector((state) => state.user.profile);

  const logoutHandler = () => {
    console.log("logout");
    dispatch(userLogout());
    navigate("/auth/login");
  };

  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <div className={styles.user}>
          <img className={styles.avatar} src="/avatar.png" alt="menu-icon" />
          <div className={styles.name}>{name}</div>
          <div className={styles.email}>{email}</div>
        </div>
        <div className={styles.menu}>
          <NavLink to="/" className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}>
            <img src="/icons/menu-icon.svg" alt="menu-icon" />
            Выбрать
          </NavLink>
          <NavLink to="/cart" className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}>
            <img src="/icons/cart-icon.svg" alt="cart-icon" />
            Заказать
          </NavLink>
          <NavLink to="/demo" className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}>
            Демо компонентов
          </NavLink>
          <NavLink to="/zustand" className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}>
            Демо Zustand
          </NavLink>
        </div>
        <Button className={styles.exit} onClick={logoutHandler}>
          <img src="/icons/exit-icon.svg" alt="exit-icon" /> Выход
        </Button>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
