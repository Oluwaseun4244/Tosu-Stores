import React from "react";
import {
  Box,
  Stack,
  Text,
  Input,

  InputGroup,

  InputRightAddon,
} from "@chakra-ui/react";

function Footer() {
  return (
    <Stack
      w="100%"
      direction={{ base: "column", md: "row" }}
      px={{ base: "20px", md: "50px" }}
      bg="#EEEFFB"
      py="30px"
      spacing={{base: "40px", md:"80px"}}
      mt="50px"
    >
      <Box>
        <Text
          fontSize="35px"
          fontFamily="Roboto"
          fontWeight="bold"
          color="#000000"
        >
          Tosu Stores
        </Text>
        <InputGroup>
          <Input bg="white" placeholder="Enter Email Address" />
          <InputRightAddon
            rounded="8px"
            color="white"
            bg="#FB2E86"
            cursor="pointer"
            children="Sign Up"
          />
        </InputGroup>
        <Text my="10px" fontWeight="400" color="#8A8FB9">
          Contact Info
        </Text>
        <Text my="10px" fontWeight="400" color="#8A8FB9">
          123, Ikorodu, Lagos, Nigeria
        </Text>
      </Box>
      <Box>
        <Text
          fontSize="20px"
          fontFamily="Josefin Sans"
          fontWeight="bold"
          color="#000000"
          mb="20px"
        >
          Catagories
        </Text>
        {[
          "Laptops & Computers",
          "Cameras & Photography",
          "Smart Phones & Tablets",
          "Video Games & Consoles",
          "Waterproof Headphones",
        ].map((item, i) => (
          <Text my="10px" key={i} fontWeight="400" color="#8A8FB9">
            {item}
          </Text>
        ))}
      </Box>
      <Box>
        <Text
          fontSize="20px"
          fontFamily="Josefin Sans"
          fontWeight="bold"
          color="#000000"
          mb="20px"
        >
          Customer Care
        </Text>
        {[
          "My Account",
          "Discount",
          "Returns",
          "Orders History",
          "Order Tracking",
        ].map((item, i) => (
          <Text my="10px" key={i} fontWeight="400" color="#8A8FB9">
            {item}
          </Text>
        ))}
      </Box>
      <Box>
        <Text
          fontSize="20px"
          fontFamily="Josefin Sans"
          fontWeight="bold"
          color="#000000"
          mb="20px"
        >
          Pages
        </Text>
        {[
          "Blog",
          "Browse the Shop",
          "Category",
          "Pre-Built Pages",
          "Visual Composer Elements",
          "WooCommerce Pages",
        ].map((item, i) => (
          <Text my="10px" key={i} fontWeight="400" color="#8A8FB9">
            {item}
          </Text>
        ))}
      </Box>
    </Stack>
  );
}

export default Footer;
