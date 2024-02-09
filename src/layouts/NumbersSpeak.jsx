import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Feat from "../components/Feat";
import { Airdrop, Home, SmsTracking, Wallet, Watch } from "iconsax-react";
import Numb from "../components/Numb";

const NumbersSpeak = () => {
  return (
    <Box>
      <Heading
        textAlign={"center"}
        py={5}
        fontFamily={"Anton"}
        color={"#000"}
        fontSize={{ lg: 70, md: 60, sm: 40, base: 40 }}
      >
        Numbers Speak
      </Heading>
      <Flex pt={10} justifyContent={"center"} gap={10} flexWrap={"wrap"}>
       <Numb text={"Air Conditioning Repairs and Install"} number={"150"} />
       <Numb text={"PLUMBING WORKS AND FIXES"} number={"100"} />
       <Numb text={"Customizers are Satisfied with our Services"} number={"250"} />
       <Numb />
       <Numb />
      </Flex>
    </Box>
  );
};

export default NumbersSpeak;
