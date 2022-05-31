import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Text,
  VStack,
  useBreakpointValue
} from "@chakra-ui/react";
import React from "react";

const Details = () => {
  const colspan = useBreakpointValue({ base: 2, md: 1 })

  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your Details</Heading>
        <Text>If you already have an account, click here and login</Text>
      </VStack>
      <SimpleGrid columns={2} columnGap={3} rowGap={2}>
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="Jhon" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Doe" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel>Adress</FormLabel>
            <Input placeholder="Street 24, 94" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Maracanau" />
          </FormControl>
        </GridItem>
        <GridItem colSpan={colspan}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="br">Brazil</option>
              <option value="us">United States</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to Billing Adress</Checkbox>
        </GridItem>
        <GridItem colSpan={2}>
          <Button background="green.300" size="lg" w="full">Place Order</Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
