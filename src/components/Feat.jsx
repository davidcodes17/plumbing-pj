import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Airdrop } from "iconsax-react";
import React from "react";

const Feat = () => {
  return (
    <Box width={300} boxShadow={"0px 0px 10px #eee"} p={5} borderRadius={20}>
      <Flex justifyContent={"center"}>
        <Box>
          <Flex gap={3}>
            <Box>
              <Airdrop variant="Bold" size={40} color="#000" />
            </Box>
            <Heading
              pb={2}
              fontFamily={"Anton"}
              fontSize={"30px"}
              color={"#000"}
            >
              Good & Efficient
            </Heading>
          </Flex>
          <Text fontSize={12}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            saepe sed odio vel quibusdam, voluptas aut eaque minus culpa, id in
            perspiciatis voluptatibus veritatis quis quisquam ipsam nam. Nihil,
            corporis!
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Feat;
