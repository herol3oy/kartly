import { Product } from '@/types/product'

export type UseProducts = {
  data: Product[] | undefined
  isLoading: boolean
  error: unknown
}
