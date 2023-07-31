import ProductService from '../product'
import Cart from '../cart'

class Checkout {
  private productService: ProductService
  private cart: Cart

  constructor(productService: ProductService, cart: Cart) {
    this.productService = productService
    this.cart = cart
  }

  scan(sku: string) {
    const product = this.productService.getProduct(sku)
    if (!product) {
      console.log(`Product with SKU ${sku} not found`)
      return
    }
    this.cart.addProduct(product)
  }

  total() {
    return this.cart.getTotalPrice()
  }
}

export default Checkout
