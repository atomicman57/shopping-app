/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ProductModal from "../../components/ProductModal";

describe("ProductModal", () => {
  test("renders without errors", () => {
    render(<ProductModal onOpen={() => {}} isOpen={true} onClose={() => {}} />);
  });

  test("calls onClose when cancel button is clicked", () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(
      <ProductModal onOpen={() => {}} isOpen={true} onClose={onCloseMock} />
    );

    const cancelButton = getByText("Cancel");
    fireEvent.click(cancelButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
