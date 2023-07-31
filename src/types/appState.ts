import { actionTypes } from '../utils/constants'
import { Product } from './product'
import { PricingRule } from './pricingRule'
import { CartItem } from './cart'

export interface AppState {
  products: Record<string, Product>
  rules: Record<string, PricingRule>
  cart: Record<string, CartItem>
}

export type AppAction =
  | { type: typeof actionTypes.ADD_PRODUCT; payload: Product }
  | { type: typeof actionTypes.UPDATE_PRODUCT; payload: Product }
  | { type: typeof actionTypes.DELETE_PRODUCT; payload: string }
  | { type: typeof actionTypes.ADD_RULE; payload: PricingRule }
  | { type: typeof actionTypes.UPDATE_RULE; payload: PricingRule }
  | { type: typeof actionTypes.DELETE_RULE; payload: string }
  | {
      type: typeof actionTypes.ADD_TO_CART
      payload: CartItem
    }
  | { type: typeof actionTypes.REMOVE_FROM_CART; payload: string }

export interface AppStateProviderProps {
  children: React.ReactNode
}
