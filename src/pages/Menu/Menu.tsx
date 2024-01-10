import { ChangeEvent, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

import { Heading, ProductCard, Search } from "../../components";
import { IProduct } from "../../interfaces/product.interface";

import styles from "./Menu.module.css";

const Menu = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async (name?: string) => {
    console.log("search", name);
    try {
      const { data } = await axios.get<IProduct[]>("https://purpleschool.ru/pizza-api-demo/products");
      setProducts(data);
    } catch (e) {
      console.error(e);
      if (e instanceof AxiosError) {
        console.log(e.message);
      }
      return;
    }
  };

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <div className={styles.head}>
        <Heading>Выбрать</Heading>
        <Search placeholder="Введите блюдо или состав" onChange={onSearch} />
      </div>
      <div className={styles.content}>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            description={p.ingredients.join(", ")}
            rating={p.rating}
            price={p.price}
            image={p.image}
          />
        ))}
      </div>
    </>
  );
};

export default Menu;
