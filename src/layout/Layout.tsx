import { NavLink, Outlet, useNavigate } from "react-router-dom";
import cn from "classnames";

import { Button } from "../components";

import styles from "./Layout.module.css";

const Layout = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    console.log("logout");
    localStorage.removeItem("jwt");
    navigate("/auth/login");
  };

  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <div className={styles.user}>
          <img className={styles.avatar} src="/avatar.png" alt="menu-icon" />
          <div className={styles.name}>Юзер Юзерович</div>
          <div className={styles.email}>mail@demomail.com</div>
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
