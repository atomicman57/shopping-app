import * as Yup from 'yup'
import { Product } from '../types'

Yup.addMethod(Yup.string, 'notOneOfArray', function (array, message) {
  return this.test('notOneOfArray', message, function (value) {
    const { path, createError } = this
    const isDuplicate = array.includes(value)
    return isDuplicate ? createError({ path, message }) : true
  })
})

export const productSchema = (products: Product[]) =>
  Yup.object().shape({
    sku: Yup.string()
      .matches(/^[A-Za-z]$/, 'Only an individual letter is allowed (A-Z)')
      .notOneOfArray(
        Object.values(products).map((product) => product.sku),
        'This SKU already exists',
      )
      .required('Sku is required'),
    unitPrice: Yup.number()
      .min(0.01, 'Price must be at least 0.01')
      .required('Required'),
  })

export const PricingRuleSchema = Yup.object().shape({
  productSku: Yup.string().required('Product SKU is required'),
  specialQuantity: Yup.number()
    .required('Quantity is required')
    .min(1, 'Quantity must be at least 1'),
  specialPrice: Yup.number()
    .required('Special Price is required')
    .min(0.01, 'Special Price must be at least 0.01'),
})
