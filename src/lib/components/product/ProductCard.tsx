import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Image,
  Text,
  Flex,
  Center,
  Stack,
  useColorModeValue,
  AspectRatio,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import ShoppingBagFilledIcon from "lib/Icons/ShoppingBagFilledIcon";
import { ProductCardConfig } from "lib/types/ProductCardConfig";
import NextLink from "next/link";

export default function ProductCard(product: ProductCardConfig) {
  return (
    <LinkBox w="360px" m="13.5px">
      <NextLink
        href={{ pathname: "/product/[pid]", query: { pid: "1" } }}
        passHref
      >
        <LinkOverlay>
          <Center flexDirection="column">
            <Box
              pos={"relative"}
              backgroundColor={useColorModeValue(
                "background.light",
                "background.dark"
              )}
              borderRadius="xl"
            >
              <Box pos={"relative"} mb="10px" borderRadius="xl">
                <Image
                  src={
                    product.image ||
                    "https://i.etsystatic.com/26514007/r/il/b310e5/3653094048/il_570xN.3653094048_d2ul.jpg"
                  }
                  alt={product.title || "Product Title"}
                  height="300px"
                  w="360px"
                  object-fit="cover"
                  rounded="lg"
                  borderRadius="xl"
                  ml="auto"
                  mr="auto"
                />
              </Box>

              <Stack>
                <Box mb="5px">
                  <Text noOfLines={2} fontWeight="semibold">
                    {product.title || "Product Title"}
                  </Text>
                  <Text as="h4" noOfLines={1}>
                    {product.price || "$3,523"}
                  </Text>
                </Box>

                <Flex
                  as="span"
                  color="gray.600"
                  fontSize="xs"
                  alignContent="center"
                  gap="3px"
                  flexDirection="row"
                >
                  <ShoppingBagFilledIcon
                    fill={useColorModeValue(
                      "background.dark",
                      "background.light"
                    )}
                    boxSize="15px"
                    width="15px"
                  />

                  <Text color={useColorModeValue("gray.700", "gray.500")}>
                    One day delivery
                  </Text>
                </Flex>

                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < 4 ? "teal.500" : "gray.300"}
                      />
                    ))}
                  <Box
                    as="span"
                    ml="2"
                    color={useColorModeValue("gray.700", "gray.500")}
                    fontSize="sm"
                  >
                    420 reviews
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Center>
        </LinkOverlay>
      </NextLink>
    </LinkBox>
  );
}
