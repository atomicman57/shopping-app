import React, { useMemo } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import ProductList from "./ProductList";
import PricingRuleList from "./PricingRuleList";
import useAppActions from "../hooks/useAppActions";
import Cart from "./Cart";
import { checkout } from "../utils/checkout";
import {
  centsToDollars,
  getProductSKUs,
  getProductRules,
  getNumberOfItemsInCart,
} from "../utils/helpers";
import { themeColors } from "../utils/constants";

const AppTabs: React.FC = () => {
  const { state, addToCart, handleRemoveItem, handleDeleteRule } =
    useAppActions();

  const { products, rules, cart } = state;

  const numberOfItemsInCart: number = useMemo(
    () => getNumberOfItemsInCart(state.cart),
    [state.cart]
  );

  const total: number = useMemo(
    () =>
      checkout(
        getProductSKUs(state.cart),
        getProductRules(state.rules, state.products)
      ),
    [state.cart, state.rules, state.products]
  );

  const cartTabText = `My Cart [${numberOfItemsInCart}] - [$${centsToDollars(
    total
  )}]`;

  return (
    <Tabs isFitted variant="enclosed-colored">
      <TabList>
        <Tab>Products</Tab>
        <Tab>Pricing Rules</Tab>
        <Tab>{cartTabText}</Tab>
      </TabList>
      <Box
        p={8}
        m={10}
        borderWidth={2}
        borderRadius="md"
        boxShadow="md"
        borderColor={themeColors.darkDivider}
        bg="transparent"
      >
        <TabPanels>
          <TabPanel>
            <ProductList
              addToCart={addToCart}
              products={Object.values(products)}
              data-testid="ProductList"
            />
          </TabPanel>
          <TabPanel>
            <PricingRuleList
              handleDeleteRule={handleDeleteRule}
              rules={rules}
              products={products}
              data-testid="PricingRuleList"
            />
          </TabPanel>
          <TabPanel>
            <Cart
              cart={cart}
              rules={rules}
              products={products}
              total={total}
              handleRemoveItem={handleRemoveItem}
              data-testid="Cart"
            />
          </TabPanel>
        </TabPanels>
      </Box>
    </Tabs>
  );
};

export default AppTabs;
