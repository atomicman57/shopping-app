import { AppState, AppAction, PricingRule, Product, CartItem } from '../types'
import { actionTypes } from '../utils/constants'
import {
  products as initialProducts,
  pricingRules as initialRules,
} from '../data'
import {
  addProduct,
  updateProduct,
  deleteProduct,
  addRule,
  updateRule,
  deleteRule,
  addToCart,
  removeFromCart,
} from './actions'

export const initialState: AppState = {
  products: initialProducts,
  rules: initialRules.reduce((acc, rule) => {
    acc[rule.productSku] = rule
    return acc
  }, {} as Record<string, PricingRule>),
  cart: {},
}

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return addProduct(state, action.payload as Product)
    case actionTypes.UPDATE_PRODUCT:
      return updateProduct(state, action.payload as Product)
    case actionTypes.DELETE_PRODUCT:
      return deleteProduct(state, action.payload as string)
    case actionTypes.ADD_RULE:
      return addRule(state, action.payload as PricingRule)
    case actionTypes.UPDATE_RULE:
      return updateRule(state, action.payload as PricingRule)
    case actionTypes.DELETE_RULE:
      return deleteRule(state, action.payload as string)
    case actionTypes.ADD_TO_CART:
      return addToCart(state, action.payload as CartItem)
    case actionTypes.REMOVE_FROM_CART:
      return removeFromCart(state, action.payload as string)
    default:
      return state
  }
}
