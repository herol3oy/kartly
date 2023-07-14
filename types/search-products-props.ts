import { Dispatch, SetStateAction } from 'react'

export type SearchProductsProps = {
  productSearchQuery: string
  setProductSearchQuery: Dispatch<SetStateAction<string>>
}
