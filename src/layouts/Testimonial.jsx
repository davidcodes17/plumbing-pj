import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Testimony from "../components/Testimony";

const Testimonial = () => {
  return (
    <Box my={10}>
      <Heading
        textAlign={"center"}
        py={8}
        fontFamily={"Anton"}
        color={"#000"}
        fontSize={{ lg: 70, md: 50, sm: 30, base: 30 }}
      >
        Testimonials
      </Heading>
      <Flex flexWrap={"wrap"} gap={"30px"} justifyContent={"center"}>
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
        <Testimony />
      </Flex>
    </Box>
  );
};

export default Testimonial;
