import { Button, Heading, ProductCard, Search } from "../../components";

const Demo = () => (
  <>
    <Heading>Демо компонентов</Heading>
    <Heading variant="h1">Heading H1</Heading>
    <Heading variant="h2">Heading H2</Heading>
    <Heading variant="h3">Heading H3</Heading>

    <Heading variant="h2">Button</Heading>
    <Button onClick={() => console.log("click!")}>Click me!)</Button>

    <Heading variant="h2">Search</Heading>
    <Search />

    <Heading variant="h2">ProductCard</Heading>
    <ProductCard
      id={0}
      name={"Пицца вкусная"}
      description={"Салями, руккола, помидоры, оливки"}
      image={"/product-demo.png"}
      price={300}
      rating={4.5}
    />
  </>
);

export default Demo;
