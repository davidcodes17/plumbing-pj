import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Feat from "../components/Feat";
import { Airdrop, Home, SmsTracking, Wallet, Watch } from "iconsax-react";

const Features = () => {
  return (
    <Box>
      <Heading
        textAlign={"center"}
        py={5}
        fontFamily={"Anton"}
        color={"#000"}
        fontSize={{ lg: 70, md: 60, sm: 40, base: 40 }}
      >
        Featured Services
      </Heading>
      <Flex pt={10} justifyContent={"center"} gap={10} flexWrap={"wrap"}>
        <Feat
        icon={<Airdrop variant="Bold" size={50} color="#000" />}
          header={"Water Heater Repair and Replacement"}
          text={
            "We won’t let the water run cold! Whether or not your hot water heater is in need of repair or replacement, we can handle the job"
          }
        />
        <Feat
        icon={<SmsTracking variant="Bold" size={50} color="#000" />}
          header={"Tankless Water Heater Installation"}
          text={
            "Tankless units are the modern, energy-efficient alternative to traditional water heaters. We can install, maintain and repair your tankless water heater for you!"
          }
        />
        <Feat
        icon={<Home variant="Bold" size={50} color="#000" />}
          header={"Whole-Home Repiping"}
          text={
            "If you’re consistently dealing with problems like rusty water, low water pressure or frequent leaks, repiping your home might be your best course of action. Let us evaluate your pipes."
          }
        />
      </Flex>
    </Box>
  );
};

export default Features;
