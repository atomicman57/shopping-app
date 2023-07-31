import React from "react";
import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import Empty from "./Empty";
import { Product } from "../types";
import { themeColors, emptyMessages, tabsHeadings } from "../utils/constants";

const ProductList: React.FC<{
  products: Product[];
  addToCart: (product: Product) => void;
}> = ({ products, addToCart }) => {
  if (!products.length) {
    return <Empty message={emptyMessages.products} />;
  }
  return (
    <Box>
      <Heading mb={6} size="sm" color={themeColors.darkHeader}>
        {tabsHeadings.products}
      </Heading>
      <SimpleGrid columns={[1, 2, 3, 4, 5, 6]} spacing={6}>
        {products.map((product) => (
          <ProductCard
            addToCart={addToCart}
            key={product.sku}
            product={product}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductList;
