import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Box my={20} px={{base : "20px"}}>
      <Flex
        flexDir={{ lg: "row", md: "row", sm: "column", base: "column" }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex justifyContent={'center'}>
          <Image
            src="/plum2.jpg"
            width={{ lg: "45vw", md: "45vw", sm: "90vw", base: "90vw" }}
            height={{lg : "100vh", md : "100vh", sm : "50vh", base : "50vh"}}
            borderRadius={40}
            objectFit={"cover"}
          />
        </Flex>
        <Box
          width={{ lg: "50vw", md: "50vw", sm: "90vw", base: "100vw" }}
          p={{lg : "50px", md : "50px", sm : "30px", base : "30px"}}
        >
          <Heading fontSize={{lg : 80, md : 70, sm : 50, base: 50}} fontFamily={"Anton"} color={"#000"}>
            About Us
          </Heading>
          <Text py={5} fontSize={{lg : 15, md : 15, sm : 12, base : 12}}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
            beatae temporibus officiis! Sit, omnis ratione quam nobis
            repellendus quos numquam est earum eaque deleniti nisi dolorem illo
            expedita, commodi ea. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Soluta beatae temporibus officiis! Sit, omnis
            ratione quam nobis repellendus quos numquam est earum eaque deleniti
            nisi dolorem illo expedita, commodi ea. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Soluta beatae temporibus officiis!
            Sit, omnis ratione quam nobis repellendus quos numquam est earum
            eaque deleniti nisi dolorem illo expedita, commodi ea. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Soluta beatae
            temporibus officiis! Sit, omnis ratione quam nobis repellendus quos
            numquam est earum eaque deleniti nisi dolorem illo expedita, commodi
            ea.
          </Text>
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
