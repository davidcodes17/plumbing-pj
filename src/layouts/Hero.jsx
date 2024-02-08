import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  return (
    <Flex
      py={"50px"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      gap={100}
      px={{ base: "30px" }}
      alignItems="center"
    >
      <Box>
        <Heading
          color={"#000"}
          transform={"translateY(100px)"}
          opacity={0}
          as={motion.h1}
          whileInView={{ opacity: 1, transform: "translatey(0)" }}
          fontFamily={"Anton"}
          fontSize={{ lg: 60, md: 60, sm: 40, base: 40 }}
        >
          Plumbing & Air <br />
          The Best You Can Trust <br /> For your Plumbing <br /> Services
        </Heading>
        <Flex
          gap={{ lg: 10, md: 10, sm: 0, base: 0 }}
          flexDir={{ lg: "row", md: "row", sm: "column", base: "column" }}
        >
          <Button
            my={4}
            width={200}
            py={6}
            borderRadius={50}
            bg={"none"}
            transform={"translateX(-100px)"}
            opacity={0}
            as={motion.button}
            whileInView={{ opacity: 1, transform: "translateX(0)" }}
            color={"#000"}
            border={"2px solid #000"}
            _hover={"none"}
          >
            Learn More
          </Button>
          <Button
            my={4}
            width={200}
            py={6}
            borderRadius={50}
            transform={"translateX(100px)"}
            opacity={0}
            as={motion.button}
            whileInView={{ opacity: 1, transform: "translateX(0)" }}
            bg={"black"}
            color={"#fff"}
            _hover={"none"}
          >
            Connect with Us
          </Button>
        </Flex>
      </Box>
      <Image
        width={{ lg: "500px", md: "500px", sm: "300px", base: "400px" }}
        borderRadius={100}
        height={"400px"}
        display={{ lg: "block", md: "block", sm: "none", base: "none" }}
        objectFit={"cover"}
        as={motion.img}
        transform={"translateY(100px)"}
        opacity={0}
        whileInView={{ opacity: 1, transform: "translatey(0)" }}
        whileHover={{ boxShadow: "10px -10px 0px #000" }}
        src="/plum.jpg"
      />
    </Flex>
  );
};

export default Hero;
