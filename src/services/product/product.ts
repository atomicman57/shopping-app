import { IPricingStrategy } from '../../types'

class Product {
  sku: string
  price: number
  pricingStrategy: IPricingStrategy

  constructor(sku: string, price: number, pricingStrategy: IPricingStrategy) {
    this.sku = sku
    this.price = price
    this.pricingStrategy = pricingStrategy
  }

  getPrice(quantity: number): number {
    return this.pricingStrategy.calculatePrice(this.price, quantity)
  }
}

export default Product
