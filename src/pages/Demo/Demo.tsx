import { Button, Heading, Search } from "../../components";

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
  </>
);

export default Demo;
