import { render, screen } from "@testing-library/react";
import { emptyMessages, tableHeaders } from "../../utils/constants";
import Cart from "../../components/Cart";

describe("Cart", () => {
  const mockHandleRemoveItem = jest.fn();
  const mockProducts = {
    A: { sku: "A", unitPrice: 100 },
    B: { sku: "B", unitPrice: 100 },
  };
  const mockCart = {
    A: { sku: "A", quantity: 3 },
    B: { sku: "B", quantity: 2 },
  };
  const mockRules = {};

  test("renders Empty component when no items in the cart", () => {
    render(
      <Cart
        products={mockProducts}
        cart={{}}
        total={0}
        rules={mockRules}
        handleRemoveItem={mockHandleRemoveItem}
      />
    );
    expect(screen.getByText(emptyMessages.cart)).toBeInTheDocument();
  });

  test("renders the correct items and total in the cart", () => {
    render(
      <Cart
        products={mockProducts}
        cart={mockCart}
        total={500}
        rules={mockRules}
        handleRemoveItem={mockHandleRemoveItem}
      />
    );

    tableHeaders.cart.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });

    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("$3.00")).toBeInTheDocument();

    expect(screen.getByText("B")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("$2.00")).toBeInTheDocument();

    expect(screen.getByText("Total: $5.00")).toBeInTheDocument();
  });
});
