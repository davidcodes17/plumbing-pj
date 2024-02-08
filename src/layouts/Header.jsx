import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";

const Header = () => {
  return (
    <Flex
      // pos={"fixed"}
      justifyContent={"space-between"}
      alignItems="center"
      bg={"#fff"}
      zIndex={99}
      p={5}
      boxShadow={"0px 0px 10px #ddd"}
      width={"full"}
    >
      <Logo />
      <Flex fontSize={12} gap={20} display={{lg : "flex", md : "flex", sm : "none", base : "none"}}>    
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Contact</Text>
        <Text>Connect</Text>
        <Text>Services</Text>
        <Text>Testimonials</Text>
      </Flex>
      <Button
        bg={"#000"}
        color="#fff"
        fontSize={12}
        py={3}
        height={9}
        borderRadius={40}
      >
        Book a Service
      </Button>
    </Flex>
  );
};

export default Header;
