import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Feat from "../components/Feat";

const Features = () => {
  return (
    <Box>
      <Heading
        textAlign={"center"}
        py={5}
        fontFamily={"Anton"}
        color={"#000"}
        fontSize={{lg : 70, md : 60, sm : 40, base : 40}}
      >
        Featured Services
      </Heading>
      <Flex pt={10} justifyContent={"center"} gap={10} flexWrap={"wrap"}>
        <Feat />
        <Feat />
        <Feat />
      </Flex>
    </Box>
  );
};

export default Features;
