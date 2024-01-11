import { Button, Heading } from "../../components";
import { useCounter } from "./counter.store";

const Zustand = () => {
  const { value, increment, decrement } = useCounter();

  return (
    <div>
      <Heading>Zustand</Heading>
      Текущее значение: {value}
      <Button onClick={() => increment()}>+1</Button>
      <Button onClick={() => decrement()}>-1</Button>
    </div>
  );
};

export default Zustand;
