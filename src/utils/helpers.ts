import { CartItem, PricingRule, Product } from '../types'
import { createStandaloneToast } from '@chakra-ui/react'

const { toast } = createStandaloneToast()

export function centsToDollars(cents: number | undefined): string {
  if (!cents) return (0.0).toFixed(2)
  return (cents / 100).toFixed(2)
}

export function dollarsToCents(dollars: number | undefined): string {
  if (!dollars) return (0.0).toFixed(2)
  return (dollars * 100).toFixed(2)
}

export function setSessionStorage(key: string, value: any) {
  sessionStorage.setItem(key, JSON.stringify(value))
}

export function getSessionStorage(key: string) {
  const storedValue = sessionStorage.getItem(key)
  return storedValue ? JSON.parse(storedValue) : null
}

export function getProductSKUs(cart: Record<string, CartItem>) {
  return Object.values(cart)
    .map((item) => item.sku.repeat(item.quantity))
    .join('')
}

export function getProductRules(
  rules: Record<string, PricingRule>,
  products: Record<string, Product>,
) {
  return Object.values(products).map(
    (product) =>
      rules[product.sku] || {
        productSku: product.sku,
        unitPrice: product.unitPrice,
      },
  )
}

export function getNumberOfItemsInCart(cart: Record<string, CartItem>) {
  return Object.values(cart).reduce((total, item) => total + item.quantity, 0)
}

export const showToast = (
  title: string,
  status: 'info' | 'warning' | 'success' | 'error',
): void => {
  toast({
    title,
    status,
    duration: 5000,
    isClosable: true,
    position: 'top',
  })
}
