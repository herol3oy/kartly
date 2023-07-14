import { SearchProductsProps } from '@/types/search-products-props'

const SearchProducts = ({
  productSearchQuery,
  setProductSearchQuery,
}: SearchProductsProps) => (
  <div className="flex my-10 h-16">
    <input
      className="w-full text-center md:text-center lg:text-start text-xl md:text-3xl border border-slate-400 focus:border-b-4 outline-none primary-text-color primary-border-color transition-all p-5"
      type="text"
      name="search"
      placeholder="Search for products"
      value={productSearchQuery}
      onChange={(event) => setProductSearchQuery(event.target.value)}
    />
  </div>
)

export default SearchProducts
