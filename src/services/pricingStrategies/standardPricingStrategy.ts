import { IPricingStrategy } from '../../types'

class StandardPricingStrategy implements IPricingStrategy {
  calculatePrice(price: number, quantity: number): number {
    return price * quantity
  }
}

export default StandardPricingStrategy
