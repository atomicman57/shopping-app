import React, { useState } from "react";
import { Box, Flex, Spacer, Button, Text } from "@chakra-ui/react";
import ProductModal from "./ProductModal";
import PricingRuleModal from "./PricingRuleModal";
import { themeColors } from "../utils/constants";

const Header: React.FC = () => {
  const [isProductModalOpen, setProductModalOpen] = useState(false);
  const [isRuleModalOpen, setRuleModalOpen] = useState(false);

  const closeProductModal = () => setProductModalOpen(false);
  const closeRuleModal = () => setRuleModalOpen(false);
  const openProductModal = () => setProductModalOpen(true);
  const openRuleModal = () => setRuleModalOpen(true);

  return (
    <Box bg={themeColors.darkContainer} py={4}>
      <Flex align="center" px={8}>
        <Text fontSize="2.3em" fontWeight="bold" color={themeColors.darkHeader}>
          Prismic Supermarket
        </Text>
        <Spacer />
        <Button
          mr={3}
          bg={themeColors.darkHeader}
          fontSize="md"
          color={themeColors.darkContainer}
          onClick={openRuleModal}
        >
          New Rule
        </Button>
        <Button
          mr={3}
          bg={themeColors.darkHeader}
          fontSize="md"
          color={themeColors.darkContainer}
          onClick={openProductModal}
        >
          New Product
        </Button>
        <PricingRuleModal
          onOpen={openRuleModal}
          isOpen={isRuleModalOpen}
          onClose={closeRuleModal}
        />
        <ProductModal
          onOpen={openProductModal}
          isOpen={isProductModalOpen}
          onClose={closeProductModal}
        />
      </Flex>
    </Box>
  );
};

export default Header;
