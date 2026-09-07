import { SearchProductsProps } from '@/types/search-products-props'
import SearchIcon from './Icons/SearchIcon'
import DeleteIcon from './Icons/DeleteIcon'

const SearchProducts = ({
  productSearchQuery,
  setProductSearchQuery,
}: SearchProductsProps) => (
  <div className="relative my-8 flex h-14">
    <input
      className="primary-text-color primary-border-color w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3 text-center text-lg shadow-sm outline-none transition-all placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 md:text-xl lg:text-start"
      type="text"
      name="search"
      placeholder="Search for products"
      value={productSearchQuery}
      onChange={(event) => setProductSearchQuery(event.target.value)}
    />
    <div className="absolute bottom-0 right-0 top-0 mr-2 flex items-center">
      {!productSearchQuery.length ? (
        <SearchIcon />
      ) : (
        <DeleteIcon onClear={setProductSearchQuery} />
      )}
    </div>
  </div>
)

export default SearchProducts
