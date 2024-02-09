import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box my={20} px={{ base: "20px" }}>
      <Flex
        flexDir={{ lg: "row", md: "row", sm: "column", base: "column" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex justifyContent={"center"}>
          <Image
            src="/plum2.jpg"
            width={{ lg: "45vw", md: "45vw", sm: "90vw", base: "90vw" }}
            height={{ lg: "100vh", md: "100vh", sm: "50vh", base: "50vh" }}
            borderRadius={40}
            objectFit={"cover"}
          />
        </Flex>
        <Box
          width={{ lg: "50vw", md: "50vw", sm: "90vw", base: "100vw" }}
          p={{ lg: "50px", md: "50px", sm: "30px", base: "30px" }}
        >
          <Heading
            fontSize={{ lg: 70, md: 70, sm: 50, base: 50 }}
            fontFamily={"Anton"}
            color={"#000"}
          >
            About Us
          </Heading>
          <Text fontSize={{ lg: 15, md: 15, sm: 12, base: 12 }}>
            We realize technology is continuously evolving and improving. That
            is why the technicians on our team attend training twice a week to
            polish their technical and customer service skills. Weekly training,
            combined with tools and technology of latest industry standards,
            ensures we are providing you with the greatest possible services. We
            also encourage our plumbers to provide you with professional tips
            and suggestions to provide you with a better understanding of your
            plumbing. If you understand the plumbing in your home, you can keep
            it maintained and efficient for years to come.
          </Text>

          <Box py={5}>
            <Heading fontFamily={"Anton"} color={"#000"}>Plumbing Practices</Heading>
            <Text>
              Water leaks are very common and cost Americans hundreds of dollars
              every year in wasted water and water damage. Our plumbers can stop
              leaks in their tracks and provide long-lasting solutions.
            </Text>
          </Box>
          <Box>
            <Heading fontFamily={"Anton"} color={"#000"}>Plumbing Practices</Heading>
            <Text>
              Whether you’re worried about a gas leak or you need your new
              property to be inspected, we can handle gas line services.
            </Text>
          </Box>
          <Button
            _hover={"none"}
            my={2}
            py={6}
            width={"200px"}
            borderRadius={40}
            bg={"#000"}
            color={"#fff"}
          >
            Book Us Now!
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
