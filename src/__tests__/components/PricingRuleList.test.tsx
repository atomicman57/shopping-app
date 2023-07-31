import { render, screen } from "@testing-library/react";
import { emptyMessages, tableHeaders } from "../../utils/constants";
import PricingRuleList from "../../components/PricingRuleList";
import { centsToDollars } from "../../utils/helpers";

describe("PricingRuleList", () => {
  const mockHandleDeleteRule = jest.fn();
  const mockRules = {
    A: {
      productSku: "A",
      unitPrice: 50,
      specialQuantity: 3,
      specialPrice: 200,
    },
    B: {
      productSku: "B",
      unitPrice: 40,
      specialQuantity: 2,
      specialPrice: 150,
    },
  };
  const mockProducts = {
    A: { sku: "A", unitPrice: 100 },
    B: { sku: "B", unitPrice: 100 },
  };

  test("renders Empty component when no rules are provided", () => {
    render(
      <PricingRuleList
        rules={{}}
        products={mockProducts}
        handleDeleteRule={mockHandleDeleteRule}
      />
    );
    expect(screen.getByText(emptyMessages.pricingRule)).toBeInTheDocument();
  });

  test("renders the correct number of rule rows in CustomTable component", () => {
    render(
      <PricingRuleList
        rules={mockRules}
        products={mockProducts}
        handleDeleteRule={mockHandleDeleteRule}
      />
    );

    tableHeaders.pricingRule.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });

    Object.values(mockRules).forEach((rule) => {
      const specialPrice = `${rule.specialQuantity} for $${centsToDollars(
        rule.specialPrice
      )}`;
      expect(screen.getByText(rule.productSku)).toBeInTheDocument();
      expect(screen.getByText(specialPrice)).toBeInTheDocument();
    });
  });
});
