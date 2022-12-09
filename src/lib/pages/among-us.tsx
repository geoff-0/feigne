import {
  Box,
  Center,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ProductRow from "lib/components/product/ProductRow";

const AmongUs = () => {
  return (
    <Center
      display={{ md: "flex" }}
      flexDirection="column"
      overflowX="clip"
      w="90%"
      h="100%"
      mx="auto"
    >
      <ProductRow rowTitle="Among Us: Sus Edition Collection" amount={69} />
    </Center>
  );
};

export default AmongUs;
