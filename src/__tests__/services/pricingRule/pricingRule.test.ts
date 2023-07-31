import PricingRuleService from '../../../services/pricingRule'
import { PricingRule } from '../../../types'
import SpecialPricingStrategy from '../../../services/pricingStrategies/specialPricingStrategy'
import StandardPricingStrategy from '../../../services/pricingStrategies/standardPricingStrategy'

describe('PricingRuleService', () => {
  let pricingRuleService: PricingRuleService

  beforeEach(() => {
    pricingRuleService = new PricingRuleService()
  })

  test('createPricingStrategy should create a StandardPricingStrategy when no special price or quantity are provided', () => {
    const rule: PricingRule = {
      productSku: 'A',
      unitPrice: 50,
    }
    const strategy = pricingRuleService.createPricingStrategy(rule)
    expect(strategy).toBeInstanceOf(StandardPricingStrategy)
  })

  test('createPricingStrategy should create a SpecialPricingStrategy when a special price and quantity are provided', () => {
    const rule: PricingRule = {
      productSku: 'A',
      unitPrice: 50,
      specialQuantity: 3,
      specialPrice: 130,
    }
    const strategy = pricingRuleService.createPricingStrategy(rule)
    expect(strategy).toBeInstanceOf(SpecialPricingStrategy)
  })
})
