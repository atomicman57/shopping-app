/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from "@testing-library/react";
import NumberInputComponent from "../../components/NumberInput";

describe("NumberInputComponent", () => {
  test("renders the number input with the correct props", () => {
    const handleChange = jest.fn();
    const handleBlur = jest.fn();

    const { getByRole } = render(
      <NumberInputComponent
        name="testInput"
        value={2}
        onChange={handleChange}
        onBlur={handleBlur}
        min={1}
        defaultValue={1}
        precision={1}
        step={0.5}
      />
    );

    const inputElement = getByRole("spinbutton");

    expect(inputElement).toHaveAttribute("name", "testInput");
    expect(inputElement).toHaveAttribute("value", "2");
  });

  test("calls onChange and onBlur handlers correctly", () => {
    const handleChange = jest.fn();
    const handleBlur = jest.fn();

    const { getByRole } = render(
      <NumberInputComponent
        name="testInput"
        value={2}
        onChange={handleChange}
        onBlur={handleBlur}
        min={1}
        defaultValue={1}
        precision={1}
        step={0.5}
      />
    );

    const inputElement = getByRole("spinbutton");

    fireEvent.change(inputElement, { target: { value: "2.5" } });
    expect(handleChange).toHaveBeenCalledWith("testInput", 2.5);

    fireEvent.blur(inputElement);
    expect(handleBlur).toHaveBeenCalled();
  });
});
