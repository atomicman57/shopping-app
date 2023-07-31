import React, { useState, useMemo } from "react";
import { Box, Heading } from "@chakra-ui/react";
import Empty from "./Empty";
import CustomTable from "./CustomTable";
import PricingRuleModal from "./PricingRuleModal";
import Actions from "./Actions";
import { PricingRule, Product, PricingRuleListProps } from "../types";
import { centsToDollars } from "../utils/helpers";
import { emptyMessages, tableHeaders, tabsHeadings } from "../utils/constants";

const PricingRuleList: React.FC<PricingRuleListProps> = ({
  rules,
  products,
  handleDeleteRule,
}) => {
  const [selectedRule, setSelectedRule] = useState<PricingRule | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditRule = (rule: PricingRule) => {
    setSelectedRule(rule);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRule(null);
  };

  const tableData = useMemo(
    () =>
      Object.values(rules).map((rule) => {
        const product: Product = products[rule.productSku];
        const specialPrice = `${rule.specialQuantity} for $${centsToDollars(
          rule.specialPrice
        )}`;
        const actions = (
          <Actions
            onEdit={() => handleEditRule(rule)}
            onDelete={() => handleDeleteRule(rule.productSku)}
          />
        );
        return {
          key: rule.productSku,
          data: [
            product.sku,
            centsToDollars(product.unitPrice),
            specialPrice,
            actions,
          ],
        };
      }),
    [handleDeleteRule, products, rules]
  );

  if (!Object.keys(rules).length) {
    return <Empty message={emptyMessages.pricingRule} />;
  }

  return (
    <Box>
      <Heading fontWeight="bold" color="white" mb={6} size="sm">
        {tabsHeadings.pricingRule}
      </Heading>
      <CustomTable headers={tableHeaders.pricingRule} rows={tableData} />
      <PricingRuleModal
        rule={selectedRule}
        key={selectedRule?.productSku}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </Box>
  );
};

export default PricingRuleList;
