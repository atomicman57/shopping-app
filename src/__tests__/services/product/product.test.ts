import ProductService from '../../../services/product'
import StandardPricingStrategy from '../../../services/pricingStrategies/standardPricingStrategy'

describe('ProductService', () => {
  let productService: ProductService

  beforeEach(() => {
    productService = new ProductService()
  })

  test('addProduct should add a product to the products list', () => {
    productService.addProduct('TestSKU', 100, new StandardPricingStrategy())
    expect(productService.getProduct('TestSKU')).toBeTruthy()
  })

  test('getProduct should return the correct product', () => {
    productService.addProduct('TestSKU', 100, new StandardPricingStrategy())
    const product = productService.getProduct('TestSKU')
    expect(product).toBeTruthy()
    expect(product.sku).toBe('TestSKU')
    expect(product.price).toBe(100)
  })

  test('updateProductPrice should update the price of a product', () => {
    productService.addProduct('TestSKU', 100, new StandardPricingStrategy())
    productService.updateProductPrice('TestSKU', 200)
    expect(productService.getProduct('TestSKU').price).toBe(200)
  })
})
