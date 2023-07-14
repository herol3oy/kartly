import { Product } from '@/types/product'

export type UseProduct = {
  isSuccess: boolean
  data: Product | undefined
  isLoading: boolean
  isError: boolean
}
