import {
  centsToDollars,
  dollarsToCents,
  getProductSKUs,
  getProductRules,
  getNumberOfItemsInCart,
} from '../../utils/helpers'

import { CartItem, PricingRule, Product } from '../../types'

jest.mock('@chakra-ui/react', () => ({
  createStandaloneToast: () => ({
    toast: jest.fn(),
  }),
}))

describe('Helper functions', () => {
  it('converts cents to dollars', () => {
    expect(centsToDollars(200)).toEqual('2.00')
    expect(centsToDollars(0)).toEqual('0.00')
    expect(centsToDollars(undefined)).toEqual('0.00')
  })

  it('converts dollars to cents', () => {
    expect(dollarsToCents(2)).toEqual('200.00')
    expect(dollarsToCents(0)).toEqual('0.00')
    expect(dollarsToCents(undefined)).toEqual('0.00')
  })

  it('gets product SKUs from cart', () => {
    const cart: Record<string, CartItem> = {
      A: { sku: 'A', quantity: 2 },
      B: { sku: 'B', quantity: 3 },
    }
    expect(getProductSKUs(cart)).toEqual('AABBB')
  })

  it('gets product rules', () => {
    const rules: Record<string, PricingRule> = {
      A: {
        productSku: 'A',
        unitPrice: 50,
        specialQuantity: 3,
        specialPrice: 130,
      },
      B: {
        productSku: 'B',
        unitPrice: 30,
        specialQuantity: 2,
        specialPrice: 45,
      },
    }
    const products: Record<string, Product> = {
      A: { sku: 'A', unitPrice: 50 },
      B: { sku: 'B', unitPrice: 30 },
      C: { sku: 'C', unitPrice: 20 },
    }
    expect(getProductRules(rules, products)).toEqual([
      { productSku: 'A', unitPrice: 50, specialQuantity: 3, specialPrice: 130 },
      { productSku: 'B', unitPrice: 30, specialQuantity: 2, specialPrice: 45 },
      { productSku: 'C', unitPrice: 20 },
    ])
  })

  it('gets number of items in cart', () => {
    const cart: Record<string, CartItem> = {
      A: { sku: 'A', quantity: 2 },
      B: { sku: 'B', quantity: 3 },
    }
    expect(getNumberOfItemsInCart(cart)).toEqual(5)
  })
})
