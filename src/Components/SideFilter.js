import React from "react";
import {
  Box,
  Stack,
  Text,
  Input,
  Spacer,
  HStack,
  Checkbox,
  SimpleGrid,
} from "@chakra-ui/react";
import brands from "../Data/brand.json";
import categories from "../Data/categories.json";
import data from "../Data/data.json";

function SideFilter({ products, setProducts, setCurrentItems }) {
  const brandFilter = (e, item) => {
    let checked = e.target.checked;
    let brand = e.target.id;
    if (checked) {
      const brandResult = products.filter((product) => product.brand === brand);
      setCurrentItems(brandResult);
    } else {
        setCurrentItems(data);
    }
  };

  const categoryFilter = (e, item) => {
    let checked = e.target.checked;
    let category = e.target.id;
    if (checked) {
      const categoryResult = products.filter(
        (product) => product.category === category
      );
      setCurrentItems(categoryResult);
    } else {
      setCurrentItems(data);
    }
  };

  return (
    <Box w={{ base: "100%", md: "20%" }}>
      <Box>
        <Text textDecoration="underline" fontWeight="bold" color="#151875">
          Product Brand
        </Text>

        {brands.map((item, i) => (
          <HStack key={i} pt="10px">
            <Checkbox
              id={item.brand}
              onChange={(e) => brandFilter(e, item)}
              size="md"
              colorScheme="pink"
            />
            <Text color="#7E81A2">{item.brand}</Text>
          </HStack>
        ))}
      </Box>
      <Box mt="30px">
        <Text textDecoration="underline" fontWeight="bold" color="#151875">
          Categories
        </Text>

        {categories.map((item, i) => (
          <HStack key={i} pt="10px">
            <Checkbox
              id={item.category}
              onChange={(e) => categoryFilter(e, item)}
              size="md"
              colorScheme="pink"
            />
            <Text color="#7E81A2">{item.category}</Text>
          </HStack>
        ))}
      </Box>
      <Box mt="30px">
        <Text textDecoration="underline" fontWeight="bold" color="#151875">
          Price Filter
        </Text>

        {[1, 1, 1, 1, 1].map((item, i) => (
          <HStack key={i} pt="10px">
            <Checkbox size="md" colorScheme="pink" />
            <Text color="#7E81A2">$0.00 - $150.00</Text>
          </HStack>
        ))}
      </Box>
    </Box>
  );
}

export default SideFilter;
