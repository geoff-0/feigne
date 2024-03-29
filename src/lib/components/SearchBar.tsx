import {
  Center,
  Fade,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";

export default function SearchBar(props: any) {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });

  return (
    <InputGroup
      variant="unstyled"
      borderWidth="1px"
      borderColor="rgba(0,0,0,0)"
      rounded="full"
      boxShadow={useColorModeValue("md", "dark-lg")}
      w="100%"
      size="lg"
      {...props}
    >
      <InputLeftAddon pl="10px" w="100%">
        <Fade in={isOpen} unmountOnExit={true}>
          <Center
            backgroundColor="brand.primary"
            boxSize="2rem"
            borderRadius="3xl"
          >
            <Icon
              as={Search2Icon}
              color={useColorModeValue("background.light", "background.dark")}
              width="12.5px"
            />
          </Center>
        </Fade>

        <Input
          type="search"
          placeholder="Search products"
          _placeholder={{
            color: useColorModeValue("placeholder.light", "placeholder.dark"),
            fontSize: "15px",
          }}
          onFocus={() => onToggle()}
          onBlur={() => onToggle()}
          variant="unstyled"
          m="10px"
        />
      </InputLeftAddon>
    </InputGroup>
  );
}
