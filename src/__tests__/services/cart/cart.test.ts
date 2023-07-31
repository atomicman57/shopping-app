import Cart from '../../../services/cart'
import PricingService from '../../../services/pricing'
import Product from '../../../services/product/product'
import StandardPricingStrategy from '../../../services/pricingStrategies/standardPricingStrategy'

describe('Cart', () => {
  let cart: Cart
  let pricingService: PricingService

  beforeEach(() => {
    pricingService = new PricingService()
    cart = new Cart(pricingService)
  })

  test('addProduct should add a product to the cart', () => {
    const product = new Product('TestSKU', 100, new StandardPricingStrategy())
    cart.addProduct(product)
    expect(cart.getTotalPrice()).toBe(100)
  })
})
