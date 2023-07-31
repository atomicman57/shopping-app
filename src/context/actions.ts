import { AppState } from '../types'
import { dollarsToCents } from '../utils/helpers'
import { Product, PricingRule, CartItem } from '../types'

function updateProductList(state: AppState, product: Product) {
  const updatedProducts = {
    ...state.products,
    [product.sku]: {
      ...product,
      unitPrice: parseFloat(dollarsToCents(product.unitPrice)),
    },
  }
  return { ...state, products: updatedProducts }
}

export function addProduct(state: AppState, product: Product) {
  return updateProductList(state, product)
}

export function updateProduct(state: AppState, product: Product) {
  return updateProductList(state, product)
}

export function deleteProduct(state: AppState, sku: string) {
  const { [sku]: _, ...newProducts } = state.products
  return { ...state, products: newProducts }
}

export function updateRuleList(state: AppState, rule: PricingRule) {
  const updatedRules = {
    ...state.rules,
    [rule.productSku]: {
      ...rule,
      ...(rule.specialPrice && {
        specialPrice: parseFloat(dollarsToCents(rule.specialPrice)),
      }),
    },
  }
  return { ...state, rules: updatedRules }
}

export function addRule(state: AppState, rule: PricingRule) {
  if (!state.rules[rule.productSku]) {
    return updateRuleList(state, { ...rule })
  }
  return state
}

export function updateRule(state: AppState, rule: PricingRule) {
  return updateRuleList(state, rule)
}

export function deleteRule(state: AppState, ruleId: string) {
  const { [ruleId]: _, ...newRules } = state.rules
  return { ...state, rules: newRules }
}

export function addToCart(state: AppState, cartItem: CartItem) {
  const existingCartItem = state.cart[cartItem.sku] || {
    sku: cartItem.sku,
    quantity: 0,
  }
  const updatedCart = {
    ...state.cart,
    [cartItem.sku]: {
      ...existingCartItem,
      quantity: existingCartItem.quantity + cartItem.quantity,
    },
  }
  return { ...state, cart: updatedCart }
}

export function removeFromCart(state: AppState, sku: string) {
  const currentItem = state.cart[sku]
  if (currentItem) {
    const updatedCart =
      currentItem.quantity > 1
        ? {
            ...state.cart,
            [sku]: {
              ...currentItem,
              quantity: currentItem.quantity - 1,
            },
          }
        : (() => {
            const { [sku]: _, ...newCart } = state.cart
            return newCart
          })()
    return { ...state, cart: updatedCart }
  }
  return state
}
