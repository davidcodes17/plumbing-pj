import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Testimony from "../components/Testimony";

const Testimonial = () => {
  return (
    <Box my={10}>
      <Heading
        textAlign={"center"}
        py={8}
        fontFamily={"Anton"}
        color={"#000"}
        fontSize={{ lg: 70, md: 50, sm: 30, base: 30 }}
      >
        Testimonials
      </Heading>
      <Flex flexWrap={"wrap"} gap={"30px"} justifyContent={"center"}>
        <Testimony
          name={"Lori Field"}
          image={"/plum.jpg"}
          company={"Facebook"}
          text={
            "Fantastic job done by Rick’s Plumbing, the whole team worked hard on a huge project in my furnace room. They took it from an ugly mess of piping to a beautifully organized area"
          }
        />
        <Testimony
          name={"Stefanie Willson"}
          image={"/plum.jpg"}
          company={"Meta"}
          text={
            "Excellent professional service. Scott explained everything he was going to do before he did it and resolved the issue at a reasonable cost"
          }
        />
        <Testimony
          name={"Martha Stew"}
          image={"/plum.jpg"}
          company={"Facebook"}
          text={
            "I called, left a message and a lovely live human called me back, asked what I needed and booked an appointment. Johnathan called me to zero in on exact time, called before coming and did a wonderful job fixing two of our toilets."
          }
        />
        <Testimony
          name={"Peneloper Smith"}
          image={"/plum.jpg"}
          company={"Facebook"}
          text={
            "We had an outdoor water spigot that did not have a shut off valve. We wanted to make sure we could turn it off for winter."
          }
        />
      </Flex>
    </Box>
  );
};

export default Testimonial;
