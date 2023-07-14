import { Category } from '@/types/category'

export const getCategoryName = (category: string): string => {
  switch (category) {
    case Category.MEN:
      return Object.keys(Category)[0]
    case Category.WOMEN:
      return Object.keys(Category)[1]
    case Category.ELECTRONICS:
      return Object.keys(Category)[2]
    case Category.JEWELERY:
      return Object.keys(Category)[3]
    default:
      return category
  }
}
