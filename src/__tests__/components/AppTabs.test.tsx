/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import AppTabs from "../../components/AppTabs";
import AppStateProvider from "../../context/AppStateProvider";

const renderAppTabs = () =>
  render(
    <ChakraProvider>
      <AppStateProvider>
        <AppTabs />
      </AppStateProvider>
    </ChakraProvider>
  );

describe("AppTabs Component", () => {
  test("renders all tabs", () => {
    renderAppTabs();

    const productElements = screen.queryAllByText("Products");
    const pricingElements = screen.queryAllByText("Pricing Rules");
    const specificProductElement = productElements[0];

    expect(specificProductElement).toBeInTheDocument();
    expect(pricingElements[0]).toBeInTheDocument();
    expect(screen.getByText("My Cart [0] - [$0.00]")).toBeInTheDocument();
  });
});
