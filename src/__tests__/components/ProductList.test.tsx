import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { emptyMessages } from "../../utils/constants";
import ProductList from "../../components/ProductList";

describe("ProductList", () => {
  const mockAddToCart = jest.fn();

  test("renders Empty component when no products are provided", () => {
    render(<ProductList products={[]} addToCart={mockAddToCart} />);
    expect(screen.getByText(emptyMessages.products)).toBeInTheDocument();
  });

  test("renders the correct number of ProductCard components", () => {
    const mockProducts = [
      { sku: "A", unitPrice: 100 },
      { sku: "B", unitPrice: 200 },
      { sku: "C", unitPrice: 300 },
    ];

    render(<ProductList products={mockProducts} addToCart={mockAddToCart} />);

    mockProducts.forEach((product) => {
      expect(screen.getByText(product.sku)).toBeInTheDocument();
      // Assuming that the `centsToDollars` function transforms 100 to "$1.00"
      expect(
        screen.getByText(`$${product.unitPrice / 100}.00`)
      ).toBeInTheDocument();
    });
  });

  test("calls addToCart when 'Add to Cart' button is clicked", () => {
    const mockProduct = { sku: "A", unitPrice: 100 };
    render(<ProductList products={[mockProduct]} addToCart={mockAddToCart} />);

    const addToCartButton = screen.getByText("Add to Cart");
    fireEvent.click(addToCartButton);

    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });
});
