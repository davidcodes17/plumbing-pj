import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Numb = ({number,text}) => {
  return (
    <Box
      p={10}
      boxShadow={"0px 0px 10px #eee"}
      textAlign={"center"}
      width={"300px"}
      height={"300px"}
      borderRadius={10000}
      className="div"
    >
      <Heading pt={5} fontFamily={"Anton"} fontSize={80}>
        {number}
      </Heading>
      <Text fontSize={20}>{text}</Text>
    </Box>
  );
};

export default Numb;
