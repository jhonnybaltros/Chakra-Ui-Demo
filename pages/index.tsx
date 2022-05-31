import { Container, Flex, VStack } from "@chakra-ui/react";
import Cart from "../src/components/cart";
import Details from "../src/components/Details";

const indexPage = () => (
  <Container maxW="container.xl" p={0}>
    <Flex
      h={{ base: "auto", md: "100vh" }}
      py={[0, 10, 20]}
      direction={{ base: "column-reverse", md: "row" }}
    >
      <Details />
      <Cart />
    </Flex>
  </Container>
);

export default indexPage;
