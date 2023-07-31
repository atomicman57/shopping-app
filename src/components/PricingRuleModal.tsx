import React, { useMemo } from "react";
import { useFormik } from "formik";
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  Select,
} from "@chakra-ui/react";
import { PricingRuleModalProps, PricingRuleFormValues } from "../types";
import useAppActions from "../hooks/useAppActions";
import { PricingRuleSchema } from "../utils/validationSchemas";
import Modal from "./Modal";
import NumberInput from "./NumberInput";
import { themeColors } from "../utils/constants";
import { centsToDollars } from "../utils/helpers";

const PricingRuleModal: React.FC<PricingRuleModalProps> = ({
  rule,
  isOpen,
  onClose,
}) => {
  const { state, addPricingRule, updatePricingRule } = useAppActions();

  const productHasRule = useMemo(
    () => (sku: string) => {
      return Object.values(state.rules).some((rule) => rule.productSku === sku);
    },
    [state.rules]
  );

  const initialValues: PricingRuleFormValues = {
    productSku: rule?.productSku || "",
    specialQuantity: rule?.specialQuantity || 1,
    specialPrice: parseFloat(centsToDollars(rule?.specialPrice)) || 0.01,
  };

  const formik = useFormik({
    initialValues,
    validationSchema: PricingRuleSchema,
    onSubmit: (values, { resetForm }) => {
      if (rule) {
        updatePricingRule({
          ...values,
          unitPrice: state.products[values.productSku].unitPrice,
        });
      } else {
        addPricingRule({
          ...values,
          unitPrice: state.products[values.productSku].unitPrice,
        });
      }
      resetForm();
      onClose();
    },
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={rule ? "Edit Pricing Rule" : "New Pricing Rule"}
      footer={
        <>
          <Button
            bg="lightShade"
            color="white"
            _hover={{ bg: themeColors.darkDivider }}
            _active={{ bg: themeColors.darkDivider }}
            size="md"
            mr={3}
            onClick={formik.submitForm}
            disabled={!formik.isValid}
          >
            {rule ? "Update Rule" : "Create Rule"}
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </>
      }
    >
      <VStack alignItems="stretch" spacing={4}>
        <FormControl
          isRequired
          isInvalid={formik.touched.productSku && !!formik.errors.productSku}
        >
          <FormLabel>Product Name</FormLabel>
          <Select
            placeholder="Select a Product"
            name="productSku"
            value={formik.values.productSku}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isDisabled={!!rule}
          >
            {Object.values(state.products).map((product) => (
              <option
                key={product.sku}
                value={product.sku}
                disabled={productHasRule(product.sku)}
              >
                {product.sku}{" "}
                {productHasRule(product.sku) &&
                  !rule &&
                  "(Pricing rule already exists for this product)"}
              </option>
            ))}
          </Select>
          <FormErrorMessage>{formik.errors.productSku}</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={
            formik.touched.specialQuantity && !!formik.errors.specialQuantity
          }
        >
          <FormLabel>Quantity</FormLabel>
          <NumberInput
            name="specialQuantity"
            value={formik.values.specialQuantity}
            onChange={(_, valueAsNumber) =>
              formik.setFieldValue("specialQuantity", valueAsNumber || 1)
            }
            onBlur={formik.handleBlur}
            min={1}
            step={1}
          />
          <FormErrorMessage>{formik.errors.specialQuantity}</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={
            formik.touched.specialPrice && !!formik.errors.specialPrice
          }
        >
          <FormLabel>Special Price ($)</FormLabel>
          <NumberInput
            name="specialPrice"
            value={formik.values.specialPrice}
            onChange={(_, valueAsNumber) =>
              formik.setFieldValue("specialPrice", valueAsNumber || 0.01)
            }
            onBlur={formik.handleBlur}
            min={0.01}
            precision={2}
            step={0.01}
          />
          <FormErrorMessage>{formik.errors.specialPrice}</FormErrorMessage>
        </FormControl>
      </VStack>
    </Modal>
  );
};

export default PricingRuleModal;
