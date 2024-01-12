import { Heading } from "../../components";
import { getCounterValue } from "../DemoStore/counter.store";

const Cart = () => {
  return (
    <>
      <Heading>Заказать</Heading>А тут значение счётчика получаем без хука: {getCounterValue()}
    </>
  );
};

export default Cart;
