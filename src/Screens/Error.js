import { Box, Button, Image, Link, Stack } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import HeaderLinks from '../Components/HeaderLinks'
import PageTitleBar from '../Components/PageTitleBar'

function Error() {
  return (
 <>
 <Header />
 <HeaderLinks />
 <PageTitleBar pageTitle="Page Not Found" />
 <Stack alignItems="center" direction={["column"]} w="100%">
    <Box mx={{base: "5%", md: "20%"}} w={{base: "100%", md: "60%"}}>
    <Image w="100%" src="../images/error.svg" />
    </Box>
    <Button  _hover={{textDecoration: "none"}} bg="#FB2E86" color="white" as={Link} href="/">Back To Home</Button>

 </Stack>

 <Footer />
 </>
  )
}

export default Error