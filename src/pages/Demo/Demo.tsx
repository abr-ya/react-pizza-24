import { Button, Heading } from "../../components";

const Demo = () => (
  <>
    <Heading>Демо компонентов</Heading>
    <Heading variant="h1">Heading H1</Heading>
    <Heading variant="h2">Heading H2</Heading>
    <Heading variant="h3">Heading H3</Heading>
    <Button onClick={() => console.log("click!")}>Click me!)</Button>
  </>
);

export default Demo;
