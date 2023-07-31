import Product from '../product/product'
import PricingService from '../pricing'

class Cart {
  private items: Product[] = []
  private pricingService: PricingService

  constructor(pricingService: PricingService) {
    this.pricingService = pricingService
  }

  addProduct(product: Product) {
    if (product) this.items.push(product)
  }

  getTotalPrice() {
    return this.pricingService.calculateTotal(this.items)
  }
}

export default Cart
