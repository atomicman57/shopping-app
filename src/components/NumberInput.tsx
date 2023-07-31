import React from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { NumberInputComponentProps } from "../types";

const NumberInputComponent: React.FC<NumberInputComponentProps> = ({
  name,
  value,
  onChange,
  onBlur,
  min,
  defaultValue,
  precision,
  step,
  dataTestId,
}) => (
  <NumberInput
    name={name}
    value={value}
    onChange={(_, valueAsNumber) => onChange(name, valueAsNumber)}
    min={min}
    defaultValue={defaultValue}
    precision={precision}
    step={step}
    onBlur={onBlur}
    data-testid={dataTestId}
  >
    <NumberInputField />
    <NumberInputStepper>
      <NumberIncrementStepper />
      <NumberDecrementStepper />
    </NumberInputStepper>
  </NumberInput>
);

export default NumberInputComponent;
