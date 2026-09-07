import { Product } from '@/types/product'
import { BASE_URL } from '@/utils/base-url'

export const requestProduct = async (id: string): Promise<Product> => {
  const res = await fetch(`${BASE_URL}/products/${id}`)

  if (!res.ok) {
    throw new Error(`Product request failed with status ${res.status}`)
  }

  const contentType = res.headers.get('content-type') ?? ''
  if (!contentType.includes('application/json')) {
    throw new Error('Product API returned a non-JSON response')
  }

  const json: Product = await res.json()

  return json
}
