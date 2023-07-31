import { IPricingStrategy, PricingRule } from '../../types'
import SpecialPricingStrategy from '../pricingStrategies/specialPricingStrategy'
import StandardPricingStrategy from '../pricingStrategies/standardPricingStrategy'

class PricingRuleService {
  createPricingStrategy(rule: PricingRule): IPricingStrategy {
    if (rule.specialQuantity && rule.specialPrice) {
      return new SpecialPricingStrategy(rule.specialQuantity, rule.specialPrice)
    } else {
      return new StandardPricingStrategy()
    }
  }
}

export default PricingRuleService
