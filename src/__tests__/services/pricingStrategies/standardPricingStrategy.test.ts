import StandardPricingStrategy from '../../../services/pricingStrategies/standardPricingStrategy'

describe('StandardPricingStrategy', () => {
  test('calculatePrice should correctly calculate the price', () => {
    const strategy = new StandardPricingStrategy()
    const price = strategy.calculatePrice(50, 4)
    expect(price).toBe(200)
  })
})
