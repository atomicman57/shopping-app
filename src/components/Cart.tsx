import React, { useMemo } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { centsToDollars, getProductRules } from "../utils/helpers";
import { checkout } from "../utils/checkout";
import { emptyMessages, tabsHeadings, tableHeaders } from "../utils/constants";
import Empty from "./Empty";
import CustomTable from "./CustomTable";
import Actions from "./Actions";
import { CartItem, CartProps } from "../types";

const Cart: React.FC<CartProps> = ({
  products,
  cart,
  total,
  rules,
  handleRemoveItem,
}) => {
  const tableData = useMemo(
    () =>
      Object.values(cart).map((item: CartItem) => {
        const product = products[item.sku];
        const itemTotal = checkout(
          item.sku.repeat(item.quantity),
          getProductRules(rules, products)
        );

        const actions = <Actions onDelete={() => handleRemoveItem(item.sku)} />;
        return {
          key: item.sku,
          data: [
            product.sku,
            item.quantity,
            `$${centsToDollars(itemTotal)}`,
            actions,
          ],
        };
      }),
    [cart, handleRemoveItem, products, rules]
  );

  if (!Object.keys(cart).length) {
    return <Empty message={emptyMessages.cart} />;
  }

  return (
    <Box>
      <Heading fontWeight="bold" color="white" mb={6} size="sm">
        {tabsHeadings.cart}
      </Heading>
      <CustomTable headers={tableHeaders.cart} rows={tableData} />
      <Heading fontWeight="bold" color="white" mt={6} size="sm">
        Total: ${centsToDollars(total)}
      </Heading>
    </Box>
  );
};

export default Cart;
