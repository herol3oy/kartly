import { Product } from '@/types/product'

export type FilterProductsProps = {
  products: Product[]
  productSearchQuery: string
  userSelectCategory: string
}
