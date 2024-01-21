import { MouseEvent } from "react";
import { Link } from "react-router-dom";

import styles from "./ProductCard.module.css";
import { ProductCardProps } from "./ProductCard.props";
import CartIcon from "./cart-button-icon.svg";
import StarIcon from "./star-icon.svg";
import { useAppDispatch } from "../../app/store";
import { increaseInCart } from "../../app/cart.slice";

const ProductCard = ({ description, id, image, name, price, rating }: ProductCardProps) => {
  const dispatch = useAppDispatch();

  const add = (e: MouseEvent) => {
    e.preventDefault();
    dispatch(increaseInCart(id));
  };

  return (
    <Link to={`/product/${id}`} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.head} style={{ backgroundImage: `url('${image}')` }}>
          <div className={styles.price}>
            {price}&nbsp;
            <span className={styles.currency}>₽</span>
          </div>
          <button className={styles.add} onClick={add}>
            <img src={CartIcon} alt="Cart Icon" />
          </button>
          <div className={styles.rating}>
            {rating}&nbsp;
            <img src={StarIcon} alt="Star Icon" />
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.title}>{name}</div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
