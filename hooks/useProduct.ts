import { Product } from '@/types/product'
import { UseProduct } from '@/types/use-product'
import { requestProduct } from '@/utils/request-product'
import { useQuery } from '@tanstack/react-query'

export const useProduct = (id: string): UseProduct => {
  const { isSuccess, data, isLoading, isError } = useQuery<Product>(
    ['product', id],
    () => requestProduct(id),
    {
      enabled: id.length > 0,
    },
  )

  return { isSuccess, data, isLoading, isError }
}
