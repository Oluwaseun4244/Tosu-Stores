import {
  Box,
  Image,
  SimpleGrid,
  Text,
  HStack,

  Flex,

  Link,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { BiCart } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import { useCart } from "react-use-cart";
import notify from "../Functions/notify";

function Grid({ product }) {
  const { items, addItem } = useCart();
  const [watch, setWatch] = useState(false);

  const checkAndNotify = (product) => {
    //the (item) is a parameter waiting to be provided by function caller
    const checkItem = (item) => {
      return item.id === product.id;
    };

    const inCart = items.findIndex(checkItem);
    //findIndex maps over the items in cart, call checkItem() and provides each item as argument for checkItem
    //if result condition isn't met, result is -1 and hence below
    if (inCart > -1) {
      notify("Product already in cart", "warn");
    } else {
      addItem(product);

      notify("Product has been added to cart", "success");
    }
  };

  const changeFavorite = (product) => {
    if (product.favorite === true) {
      product.favorite = false;
    } else {
      product.favorite = true;
    }
    setWatch(!watch);
  };

  useEffect(() => {}, [watch]);
  return (
    <Flex my="20px" flexDirection="column" alignItems="center">
      <HStack rounded="8px" p="5px" bg="#F6F7FB">
        <SimpleGrid spacingY="25px">
          <BiCart
            onClick={() => checkAndNotify(product)}
            cursor={"pointer"}
            size={"24px"}
          />
          <BsHeartFill
            onClick={() => changeFavorite(product)}
            color={product.favorite ? "red" : "grey"}
            cursor={"pointer"}
            size={"24px"}
          />
        </SimpleGrid>
        <Box
          as={Link}
          _hover={{ textDecoration: "none" }}
          href={`/products/${product.id}`}
          p="5px"
          w="250px"
          bg="#F6F7FB"
          minHeight="300px"
        >
          <Image w="100%" src={product.image} />
        </Box>
      </HStack>

      <Box>
        <Text fontSize={"18px"} fontWeight={"900"} color="#111C85">
          {product.name}
        </Text>
        <HStack>
          <Text color="#111C85">
            {" "}
            ${new Intl.NumberFormat().format(product.price)}.00
          </Text>
          <Text textDecoration={"line-through"} color="#FF2AAA">
            ${new Intl.NumberFormat().format(product.old_price)}.00
          </Text>
        </HStack>
      </Box>
    </Flex>
  );
}

export default Grid;
