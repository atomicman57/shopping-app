import PricingService from '../../../services/pricing'
import Product from '../../../services/product/product'
import StandardPricingStrategy from '../../../services/pricingStrategies/standardPricingStrategy'

describe('PricingService', () => {
  let pricingService: PricingService

  beforeEach(() => {
    pricingService = new PricingService()
  })

  test('calculateTotal should correctly calculate the total price of products', () => {
    const product1 = new Product('TestSKU1', 100, new StandardPricingStrategy())
    const product2 = new Product('TestSKU2', 200, new StandardPricingStrategy())
    const total = pricingService.calculateTotal([product1, product2])
    expect(total).toBe(300)
  })
})
