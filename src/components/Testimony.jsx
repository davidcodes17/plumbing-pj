import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Testimony = ({image,name,text,company}) => {
  return (
    <Box
      width={300}
      as={motion.div}
      whileHover={{ boxShadow: "0px 0px 10px #ddd", scale : 1.1 }}
      borderRadius={10}
    >
      <Text fontSize={12} p={5}>
        {text}
      </Text>
      <Box width={"100%"} height={"1px"} my={3} bg={"#000"}></Box>
      <Flex justifyContent={"center"} pb={5} gap={5} alignItems={"center"}>
        <Flex alignItems={"center"} gap={2}>
          <Image
            src={image}
            width={"30px"}
            height={"30px"}
            borderRadius={50}
            objectFit={"cover"}
          />
          <Text>{name}</Text>
        </Flex>
        <Text fontWeight={700}>{company}</Text>
      </Flex>
    </Box>
  );
};

export default Testimony;
