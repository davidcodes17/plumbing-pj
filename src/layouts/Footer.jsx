import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Facebook, Instagram, Sms, Twitch, Whatsapp } from "iconsax-react";
import React from "react";

const Footer = () => {
  return (
    <Box bg={"#000"} color={"#fff"} p={20}>
      <Flex gap={100} flexWrap={"wrap"}>
        <Box>
          <Heading fontFamily={"Anton"}>Plumbing & Air</Heading>
          <Text>&copy; All rights reserved @Plumbing and Air</Text>
        </Box>
        <Box>
          <Heading fontFamily={"Anton"}>Navigation</Heading>
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Contact</Text>
          <Text>Connect with Us</Text>
          <Text>Services</Text>
          <Text>Book Service</Text>
        </Box>
        <Box>
          <Heading
            fontFamily={"Anton"}
            fontSize={{ lg: 30, md: 30, sm: 30, base: 30 }}
          >
            Let's Handle Your Next Project
          </Heading>
          <Flex gap={5} py={5} flexWrap={"wrap"}>
            <Facebook size={60} />
            <Instagram size={60} />
            <Whatsapp size={60} />
            <Twitch size={60} />
            <Sms size={60} />
          </Flex>
          <Heading
            fontFamily={"Anton"}
            fontSize={{ lg: 30, md: 30, sm: 30, base: 20 }}
          >
            plumbingandair@gmail.com
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
