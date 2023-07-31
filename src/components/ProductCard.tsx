import React from "react";
import { VStack, Text, Image, Button, Box, Flex } from "@chakra-ui/react";
import { ProductCardProps } from "../types";
import { centsToDollars } from "../utils/helpers";
import { defaultProductImage, themeColors } from "../utils/constants";

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <Box
      w="100%"
      maxW="250px"
      borderWidth={1}
      borderRadius="lg"
      overflow="hidden"
      bg={themeColors.darkContainer}
      boxShadow="md"
      borderColor={themeColors.darkDivider}
      _hover={{ boxShadow: "dark-lg" }}
      cursor={"pointer"}
    >
      <Image
        src={defaultProductImage}
        alt={product.sku}
        w="100%"
        h="130px"
        objectFit="cover"
      />
      <VStack p={4} alignItems="flex-start" w="100%" spacing={2}>
        <Text fontWeight="bold" fontSize="lg" color={themeColors.darkHeader}>
          {product.sku}
        </Text>
        <Flex w="100%" alignItems="baseline" justifyContent="space-between">
          <Text fontSize="md" color="white">
            ${centsToDollars(product.unitPrice)}
          </Text>
          <Button
            onClick={() => addToCart(product)}
            bg="lightShade"
            color="white"
            _hover={{ bg: themeColors.darkDivider }}
            _active={{ bg: themeColors.darkDivider }}
            size="md"
          >
            Add to Cart
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default ProductCard;
