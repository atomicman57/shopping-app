import { actionTypes, toastMessages } from '../utils/constants'
import { PricingRule, Product } from '../types'
import { showToast } from '../utils/helpers'
import useAppState from '../hooks/useAppState'

const useAppActions = () => {
  const { state, dispatch } = useAppState()
  const handleRemoveItem = (sku: string) => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: sku })
  }

  const handleDeleteRule = (id: string) => {
    dispatch({ type: actionTypes.DELETE_RULE, payload: id })
    showToast(toastMessages.RULE_DELETED, 'success')
  }

  const addToCart = (product: Product) => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: { sku: product.sku, quantity: 1 },
    })
    showToast(toastMessages.PRODUCT_ADDED, 'success')
  }

  const addNewProduct = (product: Product) => {
    dispatch({ type: actionTypes.ADD_PRODUCT, payload: product })
    showToast(toastMessages.PRODUCT_CREATED, 'success')
  }

  const updateProduct = (product: Product) => {
    dispatch({ type: actionTypes.UPDATE_PRODUCT, payload: product })
    showToast(toastMessages.PRODUCT_CREATED, 'success')
  }

  const addPricingRule = (rule: PricingRule) => {
    dispatch({ type: actionTypes.ADD_RULE, payload: rule })
    showToast(toastMessages.RULE_ADDED, 'success')
  }

  const updatePricingRule = (rule: PricingRule) => {
    dispatch({ type: actionTypes.UPDATE_RULE, payload: rule })
    showToast(toastMessages.RULE_UPDATED, 'success')
  }

  return {
    state,
    addToCart,
    addNewProduct,
    updateProduct,
    updatePricingRule,
    addPricingRule,
    handleRemoveItem,
    handleDeleteRule,
  }
}

export default useAppActions
