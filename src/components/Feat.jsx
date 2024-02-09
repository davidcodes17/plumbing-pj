import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Airdrop } from "iconsax-react";
import React from "react";

const Feat = ({ icon, text, header }) => {
  return (
    <Box width={300} boxShadow={"0px 0px 10px #eee"} p={5} borderRadius={20}>
      <Flex justifyContent={"center"}>
        <Box>
          <Flex gap={3} justifyContent={"center"} flexDir={"column"}>
            <Box>{icon}</Box>
            <Heading
              pb={2}
              fontFamily={"Anton"}
              fontSize={"20px"}
              color={"#000"}
            >
              {header}
            </Heading>
          </Flex>
          <Text fontSize={12}>{text}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Feat;
