export interface Product {
  sku: string
  unitPrice: number
}

export interface ProductModalProps {
  product?: Product
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
}

export interface ProductCardProps {
  product: Product
  addToCart: (product: Product) => void
}
