import { Box, Center, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HeaderLinks from "../Components/HeaderLinks";
import { FaSmileWink } from "react-icons/fa";
import PageTitleBar from "../Components/PageTitleBar";
import HomeCarousels from "../Components/HomeCarousels";
import Welcome from "../Components/Welcome";
import Prod from "../Components/Prod";
import LatestProducts from "../Components/LatestProducts";
import Subscribe from "../Components/Subscribe";
import RubberBand from "react-reveal/RubberBand";

function Home() {
  return (
    <>
      <Header />
      <HeaderLinks active="home" />
      <PageTitleBar pageTitle="Home" />
      <Welcome />
      <HomeCarousels />
      <RubberBand>
        <Text
          textAlign="center"
          my="30px"
          fontWeight="bold"
          fontSize="30px"
          color="#1A0B5B"
          fontFamily="Roboto"
        >
          Featured Products
        </Text>
      </RubberBand>
      <Prod />
      <RubberBand>
        <Text
          textAlign="center"
          my="30px"
          fontWeight="bold"
          fontSize="30px"
          color="#1A0B5B"
          fontFamily="Roboto"
        >
          Latest Products
        </Text>
      </RubberBand>
      <LatestProducts />

      <Subscribe />

      {/* <Heading mb="20px" color="red" textAlign="center">
        This Page is under Construction
      </Heading>
      <Link _hover={{textDecoration: "none"}} href="/products">
        <Text mb="10px" textAlign="center" fontSize="20px" mr="20px">
          Kindly visit products page
        </Text>
      </Link>
      <Center mb="20px">
        <FaSmileWink color="teal" size="30px" />
      </Center>
      <Box w={{ base: "90%", md: "60%" }} mx={{ base: "5%", md: "20%" }}>
        <Image
          w="100%"
          src="https://i0.wp.com/theconstructor.org/wp-content/uploads/2020/04/Preliminary-Works-in-Construction.jpg?fit=1280%2C720&ssl=1"
        />
      </Box> */}

      <Footer />
    </>
  );
}

export default Home;
