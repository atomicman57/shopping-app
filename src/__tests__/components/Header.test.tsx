import { render, fireEvent, screen } from "@testing-library/react";
import Header from "../../components/Header";

describe("Header Component", () => {
  test("renders the header with title, New Rule button, and New Product button", () => {
    render(<Header />);

    expect(screen.getByText("Prismic Supermarket")).toBeInTheDocument();
    expect(screen.getByText("New Rule")).toBeInTheDocument();
    expect(screen.getByText("New Product")).toBeInTheDocument();
  });

  test("opens and closes the PricingRuleModal when clicking New Rule button", () => {
    render(<Header />);

    const newRuleButton = screen.getByText("New Rule");
    fireEvent.click(newRuleButton);

    expect(screen.getByText("New Pricing Rule")).toBeInTheDocument();
  });

  test("opens and closes the ProductModal when clicking New Product button", () => {
    render(<Header />);

    const newProductButton = screen.getByText("New Product");
    fireEvent.click(newProductButton);

    expect(screen.getByText("Create New Product")).toBeInTheDocument();
  });
});
