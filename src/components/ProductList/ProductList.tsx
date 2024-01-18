import ProductCard from "../ProductCard/ProductCard";
import { ProductListProps } from "./ProductList.props";
import styles from "./ProductList.module.css";
import { FC } from "react";

const ProductList: FC<ProductListProps> = ({ products }) => (
  <div className={styles.wrapper}>
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
);

export default ProductList;
