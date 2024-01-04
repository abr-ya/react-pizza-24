import { Route, Routes } from "react-router-dom";
import { Cart, Demo, Error404, Menu } from "./pages";

const App = () => (
  <>
    <div>
      <a href="/">Меню</a>
      <a href="/cart">Корзина</a>
      <a href="/demo">Демо компонентов</a>
    </div>
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </>
);

export default App;
