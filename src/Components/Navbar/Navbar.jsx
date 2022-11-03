import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import DrawerApp from "./DrawerApp";
import Logo from "./Logo";
import MenuLink from "./MenuLink";
import "../../Styles/App.css"

export default function Navbar() {
  return (
    <Box className="Navbar" p={3} bg="#0F0617" margin="auto">
      <Flex justify="space-between">
        <Logo></Logo>
        <MenuLink></MenuLink>
        <DrawerApp></DrawerApp>
      </Flex>
    </Box>
  );
}
