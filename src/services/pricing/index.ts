import Product from '../product/product'

class PricingService {
  calculateTotal(products: Product[]): number {
    const groupedProducts: { [key: string]: Product[] } = {}

    // Group products by SKU
    for (const product of products) {
      if (!groupedProducts[product.sku]) {
        groupedProducts[product.sku] = []
      }
      groupedProducts[product.sku].push(product)
    }

    let total = 0
    // Calculate total price for each SKU
    for (const sku in groupedProducts) {
      const productGroup = groupedProducts[sku]
      if (productGroup.length > 0) {
        const representativeProduct = productGroup[0]
        total += representativeProduct.getPrice(productGroup.length)
      }
    }

    return total
  }
}

export default PricingService
