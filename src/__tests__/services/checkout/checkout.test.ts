import { checkout } from '../../../utils/checkout'
import { PricingRule } from '../../../types'
import ProductService from '../../../services/product'
import PricingRuleService from '../../../services/pricingRule'

describe('checkout', () => {
  let rules: PricingRule[]
  let productService: ProductService
  let pricingRuleService: PricingRuleService

  beforeEach(() => {
    productService = new ProductService()
    pricingRuleService = new PricingRuleService()

    // Setup pricing rules
    rules = [
      {
        productSku: 'A',
        unitPrice: 50,
        specialQuantity: 3,
        specialPrice: 130,
      },
      {
        productSku: 'B',
        unitPrice: 30,
        specialQuantity: 2,
        specialPrice: 45,
      },
      { productSku: 'C', unitPrice: 20 },
      { productSku: 'D', unitPrice: 15 },
    ]

    // Setup products with their pricing strategies
    for (const rule of rules) {
      const pricingStrategy = pricingRuleService.createPricingStrategy(rule)
      productService.addProduct(
        rule.productSku,
        rule.unitPrice,
        pricingStrategy,
      )
    }
  })

  test('calculates the total price for a single product', () => {
    const total = checkout('A', rules)
    expect(total).toBe(50)
  })

  test('calculates the total price for multiple products', () => {
    const total = checkout('AB', rules)
    expect(total).toBe(80)
  })

  test('applies special pricing strategy when required', () => {
    const total = checkout('AAA', rules)
    expect(total).toBe(130)
  })

  test('applies special pricing strategy when required for multiple types of products', () => {
    const total = checkout('AAAB', rules)
    expect(total).toBe(160)
  })

  test('calculates the total price correctly for a complex case', () => {
    const total = checkout('DABABA', rules)
    expect(total).toBe(190)
  })

  test('returns zero when no products are provided', () => {
    const total = checkout('', rules)
    expect(total).toBe(0)
  })
})
