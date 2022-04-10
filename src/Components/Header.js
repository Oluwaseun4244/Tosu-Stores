import {
  Box,
  HStack,
  Link,
  Select,
  Text,
  Stack,
  Spacer,
  useDisclosure,
  ScaleFade,
  Avatar,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import {
  BiEnvelope,
  BiPhoneCall,
  BiUser,
  BiCart,
  BiMenu,
} from "react-icons/bi";
import { HiMenuAlt1 } from "react-icons/hi";
import { useNavigate } from "react-router";
import { useCart } from "react-use-cart";

function Header() {
  const navigate = useNavigate();
  const [isLoggedin, setLoggedIn] = useState(false);
  const [userMail, setUserMail] = useState("");
  const { isOpen, onToggle } = useDisclosure();

  const { items, totalUniqueItems, isEmpty } = useCart();
  const checkIfLogged = () => {
    let user = localStorage.getItem("user");
    if (user) {
      setLoggedIn(true);
      let userObj = JSON.parse(user);
      setUserMail(userObj.email);
    } else {
      setLoggedIn(false);
    }
  };

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    checkIfLogged();
  }, []);

  return (
    <Stack
      w="100%"
      bg="#7E33E0"
      px={{ base: "20px", md: "50px" }}
      py={{ base: "10px", md: "10px" }}
      alignItems={{ base: "flex-start", md: "center" }}
      flexWrap="wrap"
      direction={{ base: "column", md: "row" }}
    >
      {!isOpen ? (
        <Box
          onClick={onToggle}
          cursor={"pointer"}
          display={{ base: "flex", md: "none" }}
        >
          <BiMenu size={"35px"} color="white" />
        </Box>
      ) : (
        <Box
          onClick={onToggle}
          cursor={"pointer"}
          display={{ base: "flex", md: "none" }}
        >
          <HiMenuAlt1 size={"35px"} color="white" />
        </Box>
      )}

      {isOpen && (
        <ScaleFade
          display={{ base: "block", md: "none" }}
          bg="#7E33E0"
          w="100%"
          initialScale={0.9}
          in={isOpen}
        >
          <Box transition={"0.3s ease"} display={{ base: "block", md: "none" }}>
            <Stack
              ml={{ base: "0px", md: "30%" }}
              direction={["column"]}
              spacing="25px"
              pt="25px"
            >
              <HStack>
                <BiEnvelope size={"24px"} color="white" />
                <Text color="white" fontSize={"18px"}>
                  {userMail || "texample@gmail.com"}
                </Text>
              </HStack>
              <HStack ml={{ base: "0px", md: "60px" }}>
                <BiPhoneCall size={"24px"} color="white" />
                <Text color="white" fontSize={"18px"}>
                  080300000842
                </Text>
              </HStack>
            </Stack>
            <Stack
              ml={{ base: "0px", md: "30%" }}
              direction={["column"]}
              spacing="25px"
              pt="25px"
            >
              <Select
                color="white"
                fontSize={"18px"}
                w="120px"
                placeholder="English"
              ></Select>
              <HStack>
                {!isLoggedin ? (
                  <Link _hover={{ textDecoration: "none" }} href="/login">
                    <Text color="white" fontSize={"18px"}>
                      Login
                    </Text>
                  </Link>
                ) : (
                  <Box cursor="pointer" onClick={logout}>
                    <Text color="white" fontSize={"18px"}>
                      Logout
                    </Text>
                  </Box>
                )}

                <BiUser size={"24px"} color="white" />
              </HStack>
              <HStack cursor={"pointer"}>
           
                <Link href="/cart">
                  <BiCart size={"24px"} color="white" />
                </Link>
                <Link _hover={{ textDecoration: "none" }} href="/cart">
                  {!isEmpty && (
                    <Avatar
                      bg="red"
                      size="sm"
                      name={String(totalUniqueItems)}
                    />
                  )}
                </Link>
              </HStack>
            </Stack>
          </Box>
        </ScaleFade>
      )}
      <HStack display={{ base: "none", md: "flex" }}>
        <BiEnvelope size={"24px"} color="white" />
        <Text color="white" fontSize={"18px"}>
          {userMail || "texample@gmail.com"}
        </Text>
      </HStack>

      <HStack
        display={{ base: "none", md: "flex" }}
        pl={{ base: "0px", md: "60px" }}
      >
        <BiPhoneCall size={"24px"} color="white" />
        <Text color="white" fontSize={"18px"}>
          080300000842
        </Text>
      </HStack>

      <Spacer />
      <Stack
        display={{ base: "none", md: "flex" }}
        ml={{ base: "0px", md: "30%" }}
        direction={["row"]}
        spacing="40px"
        // mt={{base: "70px", md: "0px"}}
      >
        <Select
          color="white"
          fontSize={"18px"}
          w="120px"
          placeholder="English"
        ></Select>

        <HStack>
          {!isLoggedin ? (
            <Link _hover={{ textDecoration: "none" }} href="/login">
              <Text color="white" fontSize={"18px"}>
                Login
              </Text>
            </Link>
          ) : (
            <Box cursor="pointer" onClick={logout}>
              <Text color="white" fontSize={"18px"}>
                Logout
              </Text>
            </Box>
          )}

          <BiUser size={"24px"} color="white" />
        </HStack>

        <HStack cursor={"pointer"}>
          <Link _hover={{ textDecoration: "none" }} href="/cart">
            <Text color="white" fontSize={"18px"}>
              Cart
            </Text>
          </Link>
          <Link _hover={{ textDecoration: "none" }} href="/cart">
            <BiCart size={"24px"} color="white" />
          </Link>
          <Link _hover={{ textDecoration: "none" }} href="/cart">
            {!isEmpty && (
              <Avatar bg="red" size="sm" name={String(totalUniqueItems)} />
            )}
          </Link>
        </HStack>
      </Stack>
    </Stack>
  );
}

export default Header;