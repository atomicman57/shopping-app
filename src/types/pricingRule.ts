import { Product } from './product'

export interface PricingRule {
  productSku: string
  unitPrice: number
  specialQuantity?: number
  specialPrice?: number
}

export interface PricingStrategy {
  calculatePrice(product: Product, quantity: number): number
}

export interface PricingStrategyFactory {
  createPricingStrategy(
    product: Product,
    rule: PricingRule | undefined,
  ): PricingStrategy
}

export interface IPricingStrategy {
  calculatePrice(price: number, quantity: number): number
}

export interface PricingRuleListProps {
  products: Record<string, Product>
  rules: Record<string, PricingRule>
  handleDeleteRule: (ruleId: string) => void
}

export interface PricingRuleModalProps {
  rule?: PricingRule | null
  isOpen: boolean
  onClose: () => void
  onOpen?: () => void
}

export interface PricingRuleFormValues {
  productSku: string
  specialQuantity: number
  specialPrice: number
}
