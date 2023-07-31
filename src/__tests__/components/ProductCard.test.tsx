import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../../components/ProductCard";

describe("ProductCard", () => {
  const mockProduct = {
    sku: "ABC123",
    unitPrice: 1000, // Cents
  };
  const mockAddToCart = jest.fn();

  test("renders without errors", () => {
    render(<ProductCard product={mockProduct} addToCart={mockAddToCart} />);
  });

  test("displays the correct product SKU and price", () => {
    render(<ProductCard product={mockProduct} addToCart={mockAddToCart} />);

    expect(screen.getByText(mockProduct.sku)).toBeInTheDocument();
    expect(screen.getByText("$10.00")).toBeInTheDocument(); // Price in dollars
  });

  test("calls addToCart when 'Add to Cart' button is clicked", () => {
    render(<ProductCard product={mockProduct} addToCart={mockAddToCart} />);

    const addToCartButton = screen.getByText("Add to Cart");
    fireEvent.click(addToCartButton);

    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });
});
