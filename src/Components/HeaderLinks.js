import React, { useState } from "react";
import {
  Stack,
  Text,
  Link,
  InputGroup,
  Input,
  InputRightElement,
  Spacer,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

function HeaderLinks({active = false}) {
//   const [active, setActive] = useState(false);
  return (
    <Stack
      w="100%"
      alignItems={{ base: "flex-start", md: "center" }}
      direction={{ base: "column", md: "row" }}
      px={{ base: "20px", md: "50px" }}
      py="22px"
    >
      <Text
        fontFamily="Roboto"
        color="#0D0E43"
        fontSize={"30px"}
        fontWeight="900"
      >
        Tosu
      </Text>
      <Stack
        pl={{ base: "0px", md: "10%" }}
        direction={{ base: "column", md: "row" }}
        spacing="25px"
      >
        <Link _hover={{ color: "#FB2E86", textDecoration: "none" }} href="/">
          <Text
            _hover={{ color: "#FB2E86", textDecoration: "none" }}
            fontWeight={"500"}
            color={active === "home"? "#FB2E86" : "#0D0E43"}
          >
            Home
          </Text>
        </Link>

        <Link _hover={{ color: "#FB2E86", textDecoration: "none" }} href="/products">
          <Text
            _hover={{ color: "#FB2E86" }}
            fontWeight={"500"}
            color={active === "products"? "#FB2E86" : "#0D0E43"}
          >
            Products
          </Text>
        </Link>

        <Link _hover={{ color: "#FB2E86", textDecoration: "none" }} href="/contact">
          <Text
            _hover={{ color: "#FB2E86" }}
            fontWeight={"500"}
            color={active === "contact" ? "#FB2E86" : "#0D0E43"}
          >
            Contact
          </Text>
        </Link>
        <Link _hover={{ color: "#FB2E86", textDecoration: "none" }} href="#">
          <Text
            _hover={{ color: "#FB2E86" }}
            fontWeight={"500"}
            color={active === "blog"? "#FB2E86" : "#0D0E43"}
          >
            Blog
          </Text>
        </Link>
      </Stack>
      <Spacer />
      <InputGroup w="220px">
        <InputRightElement
            bg="#FB2E86"
            color="white"
            cursor="pointer"
            borderEndRadius="8px"
            children={<BiSearch />}
          />
        <Input type="text" />
        
      </InputGroup>
    </Stack>
  );
}

export default HeaderLinks;
