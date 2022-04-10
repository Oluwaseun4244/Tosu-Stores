import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HeaderLinks from "../Components/HeaderLinks";
import PageTitleBar from "../Components/PageTitleBar";

function Home() {
  return (
    <>
      <Header />
      <HeaderLinks active="home" />
    <Heading mb="30px" textAlign="center">This Page is under Construction</Heading>
      <Box w={{base: "90%", md:"60%"}} mx={{base: "5%", md:"20%"}}>
        <Image w="100%" src="https://i0.wp.com/theconstructor.org/wp-content/uploads/2020/04/Preliminary-Works-in-Construction.jpg?fit=1280%2C720&ssl=1" />
      </Box>

      <Footer />
    </>
  );
}

export default Home;
