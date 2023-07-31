import { Product, PricingRule } from '../types'

export const products: Record<string, Product> = {
  A: { sku: 'A', unitPrice: 50 },
  B: { sku: 'B', unitPrice: 30 },
  C: { sku: 'C', unitPrice: 20 },
  D: { sku: 'D', unitPrice: 15 },
}

export const pricingRules: PricingRule[] = [
  {
    productSku: products.A.sku,
    unitPrice: products.A.unitPrice,
    specialQuantity: 3,
    specialPrice: 130,
  },
  {
    productSku: products.B.sku,
    unitPrice: products.B.unitPrice,
    specialQuantity: 2,
    specialPrice: 45,
  },
]

export const productList = Object.values(products)
