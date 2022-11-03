import { DeepPartial, Theme, useColorModeValue } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors = {
  brand: {
    primary: "#FF6363",
    secondary: "#FAF5E4",
    sub: "#24292f",
    sub_dark: "#161b22",
  },
  background: {
    light: "white",
    dark: "#080b0c",
  },
  text: {
    light: "#343538",
    dark: "#ffffff",
  },
  placeholder: {
    light: "#79818d",
    dark: "#b5bac1",
  },
  cart: {
    green: "#0aad0a",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
