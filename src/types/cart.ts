import { Product } from './product'
import { PricingRule } from './pricingRule'

export interface CartItem {
  sku: string
  quantity: number
  total?: number
}

export interface CartProps {
  products: Record<string, Product>
  rules: Record<string, PricingRule>
  cart: Record<string, CartItem>
  total: number
  handleRemoveItem: (sku: string) => void
}
