import { ChangeEvent, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

import { Heading, ProductList, Search } from "../../components";
import { IProduct } from "../../interfaces/product.interface";

import styles from "./Menu.module.css";

const Menu = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async (name?: string) => {
    console.log("search", name);
    try {
      setIsLoading(true);
      const { data } = await axios.get<IProduct[]>("https://purpleschool.ru/pizza-api-demo/products");
      setProducts(data);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      if (e instanceof AxiosError) setError(e.message);
      setIsLoading(false);
      return;
    }
  };

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const renderContent = () => {
    if (error) return <>{error}</>;
    if (isLoading) return <>Загружаем продукты...</>;

    return products.length === 0 ? <>Не найдено блюд по запросу</> : <ProductList products={products} />;
  };

  return (
    <>
      <div className={styles.head}>
        <Heading>Выбрать</Heading>
        <Search placeholder="Введите блюдо или состав" onChange={onSearch} />
      </div>
      <div className={styles.content}>{renderContent()}</div>
    </>
  );
};

export default Menu;
