import { SearchProductsProps } from '@/types/search-products-props'

const SearchProducts = ({
  productSearchQuery,
  setProductSearchQuery,
}: SearchProductsProps) => (
  <div className="my-10 flex h-16">
    <input
      className="primary-text-color primary-border-color w-full border border-slate-400 p-5 text-center text-xl outline-none transition-all focus:border-b-4 md:text-center md:text-3xl lg:text-start"
      type="text"
      name="search"
      placeholder="Search for products"
      value={productSearchQuery}
      onChange={(event) => setProductSearchQuery(event.target.value)}
    />
  </div>
)

export default SearchProducts
