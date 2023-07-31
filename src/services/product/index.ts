import { IPricingStrategy } from '../../types'
import Product from './product'

class ProductService {
  products: { [key: string]: Product } = {}

  updateProductPrice(sku: string, price: number) {
    if (this.products[sku]) {
      this.products[sku].price = price
    }
  }

  addProduct(sku: string, price: number, pricingStrategy: IPricingStrategy) {
    this.products[sku] = new Product(sku, price, pricingStrategy)
  }

  getProduct(sku: string): Product {
    return this.products[sku]
  }
}

export default ProductService
