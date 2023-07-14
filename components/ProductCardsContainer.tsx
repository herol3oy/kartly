import { PropsWithChildren } from 'react'

const ProductCardsContainer = ({ children }: PropsWithChildren) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
    {children}
  </div>
)

export default ProductCardsContainer
