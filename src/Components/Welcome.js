import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Fade from "react-reveal/Fade";

function Welcome() {
  return (
    <Box>
      <Fade left>
        <Text
          textAlign="center"
          my="30px"
          fontWeight="bold"
          fontSize={{base: "20px", md:"30px"}}
          color="#1A0B5B"
        >
          Welcome to TOSU Stores
        </Text>
      </Fade>
    </Box>
  );
}

export default Welcome;
