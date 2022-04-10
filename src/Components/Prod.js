import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaCartPlus } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

const data = {
  imageURL:
    "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/V/144356_1543477776.jpg",
  //   imageURL:
  //     "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
  name: "Wayfarer Classic",
  price: 4200.0,
  rating: 4.2,
  numReviews: 34,
};

function Rating({ rating, numReviews }) {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1", borderColor: "#F5862E" }}
                color={i < rating ? "#F5862E" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

function Prod() {
  return (
    <Stack
      direction={["column", "row"]}
      alignItems="center"
      justifyContent="center"
      spacing={"20px"}
    >
      {[1, 2, 3, 4].map((item, i) => (
        <Box
          w={{ base: "90%", md: "300px" }}
          height={"460px"}
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
          key={i}
        >
          <Box px="10px">
            <Box size="10px" position="absolute" top={2} right={2}>
              <FiHeart cursor={"pointer"} />
            </Box>

            <Image
              src={data.imageURL}
              alt={`Picture of ${data.name}`}
              roundedTop="lg"
              width={"100%"}
              height={"300px"}
            />
          </Box>

          <Box p="6">
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="20px"
                fontWeight="700"
                color={"#303030"}
                lineHeight="tight"
                isTruncated
              >
                {data.name}
              </Box>
            </Flex>

            <Flex justifyContent="space-between" alignContent="center">
              <Rating rating={data.rating} numReviews={data.numReviews} />
            </Flex>
            <Text fontSize="12px" color={"#858383"}>
              Sold by MIA Construction Supply
            </Text>
            <Flex justifyContent="space-between" alignContent="center" mt={2}>
              <Box
                fontSize="xl"
                fontWeight={500}
                //   color={useColorModeValue("gray.800", "white")}
              >
                <Box as="span">₦</Box>
                {data.price.toFixed(2)}
              </Box>
              <Button
                color={"white"}
                size={"md"}
                background={"#F5862E"}
                border={"1px solid white"}
              >
                <FaCartPlus /> &nbsp; Add to Cart
              </Button>
            </Flex>
          </Box>
        </Box>
      ))}
    </Stack>
  );
}

export default Prod;
