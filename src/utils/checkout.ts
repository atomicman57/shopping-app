import { PricingRule } from '../types'
import Checkout from '../services/checkout'
import ProductService from '../services/product'
import PricingRuleService from '../services/pricingRule'
import Cart from '../services/cart'
import PricingService from '../services/pricing'

export function checkout(goods: string, rules: PricingRule[]) {
  const productService = new ProductService()
  const pricingRuleService = new PricingRuleService()
  const pricingService = new PricingService()
  const cart = new Cart(pricingService)

  // Create products with their pricing strategies
  for (const rule of rules) {
    const pricingStrategy = pricingRuleService.createPricingStrategy(rule)
    productService.addProduct(rule.productSku, rule.unitPrice, pricingStrategy)
  }

  const checkoutService = new Checkout(productService, cart)
  for (const item of goods) {
    checkoutService.scan(item)
  }

  return checkoutService.total()
}
