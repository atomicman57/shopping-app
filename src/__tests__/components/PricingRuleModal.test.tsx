/* eslint-disable testing-library/no-unnecessary-act */
import { render, fireEvent, act, screen } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import PricingRuleModal from "../../components/PricingRuleModal";
import useAppActions from "../../hooks/useAppActions";

jest.mock("../../hooks/useAppActions");

const mockUseAppActions = useAppActions;

describe("PricingRuleModal", () => {
  const mockRule = {
    unitPrice: 50,
    productSku: "sku1",
    specialQuantity: 3,
    specialPrice: 100,
  };

  const mockState = {
    rules: {},
    products: {
      sku1: {
        sku: "sku1",
        name: "Product 1",
        unitPrice: 50,
      },
    },
  };

  const mockAddPricingRule = jest.fn();
  const mockUpdatePricingRule = jest.fn();
  const mockCloseModal = jest.fn();

  beforeEach(() => {
    mockUseAppActions.mockReturnValue({
      state: mockState,
      addPricingRule: mockAddPricingRule,
      updatePricingRule: mockUpdatePricingRule,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders correctly and calls addPricingRule on form submission", async () => {
    render(
      <ChakraProvider>
        <PricingRuleModal isOpen={true} onClose={mockCloseModal} />
      </ChakraProvider>
    );

    // Fill in the form
    fireEvent.change(screen.getByLabelText(/Product Name/), {
      target: { value: "sku1" },
    });
    fireEvent.change(screen.getByLabelText(/Quantity/), {
      target: { value: "3" },
    });
    fireEvent.change(screen.getByLabelText(/Special Price/), {
      target: { value: "100" },
    });

    // Submit the form
    await act(async () => {
      fireEvent.click(screen.getByText(/Create Rule/));
    });

    expect(mockAddPricingRule).toHaveBeenCalledWith({
      productSku: "sku1",
      specialQuantity: 3,
      specialPrice: 100,
      unitPrice: 50,
    });
  });

  test("renders correctly and calls updatePricingRule on form submission", async () => {
    render(
      <ChakraProvider>
        <PricingRuleModal
          isOpen={true}
          rule={mockRule}
          onClose={mockCloseModal}
        />
      </ChakraProvider>
    );

    // Submit the form
    await act(async () => {
      fireEvent.click(screen.getByText(/Update Rule/));
    });

    expect(mockUpdatePricingRule).toHaveBeenCalledWith({
      productSku: "sku1",
      specialQuantity: 3,
      specialPrice: 1,
      unitPrice: 50,
    });
  });
});
