export const actionTypes = {
  ADD_PRODUCT: 'ADD_PRODUCT',
  UPDATE_PRODUCT: 'UPDATE_PRODUCT',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
  ADD_RULE: 'ADD_RULE',
  UPDATE_RULE: 'UPDATE_RULE',
  DELETE_RULE: 'DELETE_RULE',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
}

export const toastMessages = {
  RULE_ADDED: 'Rule added.',
  RULE_UPDATED: 'Rule updated.',
  RULE_DELETED: 'Rule deleted.',
  PRODUCT_ADDED: 'Product added to the basket.',
  PRODUCT_CREATED: 'Product created succesfully.',
  PRODUCT_REQUIRED: 'Product name is required.',
}

export const modalHeaders = {
  NEW_RULE: 'New Pricing Rule',
  EDIT_RULE: 'Edit Pricing Rule',
}

export const actionLabels = {
  EDIT_RULE: 'Edit Rule',
  DELETE_RULE: 'Delete Rule',
}

export const toastTypes = {
  SUCCESS: 'success',
  ERROR: 'error',
}

export const toastPositions = {
  TOP: 'top',
}

export const buttonLabels = {
  CREATE_RULE: 'Create Rule',
  UPDATE_RULE: 'Update Rule',
  CANCEL: 'Cancel',
}

export const TOAST_DURATION = 3000

export const themeColors = {
  darkBg: 'darkBg',
  darkContainer: 'darkContainer',
  darkText: 'darkText',
  darkHeader: 'darkHeader',
  lightShade: 'lightShade',
  darkDivider: 'darkDivider',
  blueFilter: 'blueFilter',
}

export const emptyMessages = {
  products: 'No products found.',
  pricingRule: 'No pricing rule found',
  cart: 'Your cart is empty.',
}

export const tabsHeadings = {
  products: 'Products',
  pricingRule: 'Pricing Rules',
  cart: 'My Cart',
}

export const tableHeaders = {
  pricingRule: ['Item', 'Unit Price', 'Special Price', 'Actions'],
  cart: ['Product', 'Quantity', 'Total', 'Action'],
}

export const formPlaceholders = {
  sku: 'Only an individual letter is allowed (A-Z)',
  productSelect: 'Select a Product',
}

export const STORAGE_KEY = 'REACT_SUPERMARKET_APP'

export const defaultProductImage = 'https://via.placeholder.com/300x200'

export const appTheme = {
  fonts: {
    heading: 'Josefin Sans, sans-serif',
    body: 'Josefin Sans, sans-serif',
  },
  colors: {
    darkBg: '#161722',
    darkContainer: '#25273c',
    darkText: '#cacde8',
    darkHeader: '#ffff',
    lightShade: '#777a92',
    darkDivider: '#393a4c',
    blueFilter: '#3a7bfd',
  },
  components: {
    Tabs: {
      variants: {
        'enclosed-colored': {
          tab: {
            _selected: {
              color: 'white',
              bg: 'darkContainer',
              boxShadow: 'none',
            },
            _hover: {
              bg: 'darkContainer',
              border: 'none',
              color: 'darkText',
            },
            fontWeight: 'bold',
            fontSize: '1.15em',
            borderColor: 'darkDivider',
            borderBottom: 'none',
            border: 'none',
            outline: '2px solid #393a4c',
          },
          tablist: {
            color: 'black',
            bg: 'darkContainer',
          },
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'darkBg',
        color: 'darkText',
      },
    },
  },
}
