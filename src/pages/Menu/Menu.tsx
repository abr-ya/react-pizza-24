import { ChangeEvent } from "react";
import { Heading, Search } from "../../components";
import styles from "./Menu.module.css";

const Menu = () => {
  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <div className={styles["head"]}>
        <Heading>Выбрать</Heading>
        <Search placeholder="Введите блюдо или состав" onChange={onSearch} />
      </div>
    </>
  );
};

export default Menu;
