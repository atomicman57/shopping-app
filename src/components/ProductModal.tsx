import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  Input,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import Modal from "./Modal";
import NumberInput from "./NumberInput";
import { ProductModalProps } from "../types";
import useAppActions from "../hooks/useAppActions";
import { productSchema } from "../utils/validationSchemas";
import { themeColors } from "../utils/constants";

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose }) => {
  const { state, addNewProduct } = useAppActions();
  const { products } = state;

  const formik = useFormik({
    initialValues: {
      sku: "",
      unitPrice: 0.01,
    },
    validationSchema: productSchema(Object.values(products)),
    onSubmit: (values, { resetForm }) => {
      addNewProduct(values);
      onClose();
      resetForm();
    },
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create New Product"
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
            Create Product
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </>
      }
    >
      <VStack alignItems="stretch" spacing={4}>
        <FormControl
          isRequired
          isInvalid={formik.touched.sku && !!formik.errors.sku}
        >
          <FormLabel>SKU</FormLabel>
          <Input
            type="text"
            name="sku"
            value={formik.values.sku}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            maxLength={1}
            data-testid="sku-input"
          />
          <FormErrorMessage>{formik.errors.sku}</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={formik.touched.unitPrice && !!formik.errors.unitPrice}
        >
          <FormLabel>Price</FormLabel>
          <NumberInput
            name="unitPrice"
            value={formik.values.unitPrice}
            onChange={(_, valueAsNumber) =>
              formik.setFieldValue("unitPrice", valueAsNumber || 0)
            }
            onBlur={formik.handleBlur}
            min={0.01}
            precision={2}
            step={0.01}
            dataTestId="price-input"
          />
          <FormErrorMessage>{formik.errors.unitPrice}</FormErrorMessage>
        </FormControl>
      </VStack>
    </Modal>
  );
};

export default ProductModal;
