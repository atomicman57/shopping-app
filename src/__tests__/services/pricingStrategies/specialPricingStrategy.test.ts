import SpecialPricingStrategy from '../../../services/pricingStrategies/specialPricingStrategy'

describe('SpecialPricingStrategy', () => {
  test('calculatePrice should correctly calculate the price', () => {
    const strategy = new SpecialPricingStrategy(3, 100)
    const price = strategy.calculatePrice(50, 4)
    expect(price).toBe(150)
  })
})
