import { NavLink, Outlet } from "react-router-dom";
import cn from "classnames";

import styles from "./Layout.module.css";
import { Button } from "../components";

const Layout = () => (
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
          Меню
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}>
          <img src="/icons/cart-icon.svg" alt="cart-icon" />
          Корзина
        </NavLink>
        <NavLink to="/demo" className={({ isActive }) => cn(styles.link, { [styles.active]: isActive })}>
          Демо компонентов
        </NavLink>
      </div>
      <Button className={styles.exit}>
        <img src="/icons/exit-icon.svg" alt="exit-icon" /> Выход
      </Button>
    </div>
    <div className={styles.content}>
      <Outlet />
    </div>
  </div>
);

export default Layout;
