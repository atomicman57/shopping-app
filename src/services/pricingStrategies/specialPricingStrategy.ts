import { IPricingStrategy } from '../../types'

class SpecialPricingStrategy implements IPricingStrategy {
  specialQuantity: number
  specialPrice: number

  constructor(specialQuantity: number, specialPrice: number) {
    this.specialQuantity = specialQuantity
    this.specialPrice = specialPrice
  }

  calculatePrice(price: number, quantity: number): number {
    const quotient = Math.floor(quantity / this.specialQuantity)
    const remainder = quantity % this.specialQuantity
    return quotient * this.specialPrice + remainder * price
  }
}

export default SpecialPricingStrategy
