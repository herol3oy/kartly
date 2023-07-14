import { FilterProductsProps } from '@/types/filter-product-props'
import { Product } from '@/types/product'

export const filterProducts = ({
  products,
  productSearchQuery,
  userSelectCategory,
}: FilterProductsProps): Product[] => {
  const titleFilter = (product: Product): boolean => {
    const title = product.title.toLowerCase()
    const searchQuery = productSearchQuery.toLowerCase()
    const category = product.category.toLowerCase()
    const selectedCategory = userSelectCategory.toLowerCase()
    const noCategorySelected = !selectedCategory.length

    if (noCategorySelected) {
      return title.includes(searchQuery)
    } else {
      return title.includes(searchQuery) && category === selectedCategory
    }
  }

  const filteredProducts: Product[] = products.filter(titleFilter)

  return filteredProducts
}
