import LoadingProductCard from '@/components/LoadingProductCard'
import NoProductMessage from '@/components/NoProductMessage'
import ProductCard from '@/components/ProductCard'
import ProductCardsContainer from '@/components/ProductCardsContainer'
import SearchProducts from '@/components/SearchProducts'
import { useProducts } from '@/hooks/useProducts'
import { Category } from '@/types/category'
import { Product } from '@/types/product'
import { filterProducts } from '@/utils/filter-products'
import { formatCategory } from '@/utils/format-category'
import { getCategoryName } from '@/utils/get-category-name'
import { requestProducts } from '@/utils/request-products'
import { useState } from 'react'

export type HomeProps = { initialProducts: Product[] }

const Home = ({ initialProducts }: HomeProps) => {
  const [productSearchQuery, setProductSearchQuery] = useState<string>('')
  const [userSelectCategory, setUserSelectCategory] = useState<string>('')

  const { data: products, isLoading } = useProducts(initialProducts)

  const handleCategoryClick = (category: Category) => {
    setUserSelectCategory(category)
  }

  const filteredProducts = filterProducts({
    products: products ?? [],
    productSearchQuery,
    userSelectCategory,
  })

  return (
    <>
      <SearchProducts
        productSearchQuery={productSearchQuery}
        setProductSearchQuery={setProductSearchQuery}
      />

      <div className="my-10 flex flex-col justify-center gap-2 md:flex-row">
        <button
          onClick={() => setUserSelectCategory('')}
          className={`${
            userSelectCategory === '' && 'primary-bg-color text-white'
          } primary-border-color primary-text-color font-boldx border p-2`}
        >
          All
        </button>
        {Object.values(Category).map((category) => {
          const categoryBackgrounds =
            {
              [Category.MEN]: 'text-cyan-300',
              [Category.WOMEN]: 'text-pink-300',
              [Category.ELECTRONICS]: 'text-slate-300',
              [Category.JEWELERY]: 'text-yellow-300',
            }[category] || ''
          return (
            <button
              key={category}
              className={`${categoryBackgrounds} primary-border-color border p-2 font-bold ${
                userSelectCategory === category && 'primary-bg-color'
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {formatCategory(getCategoryName(category))}
            </button>
          )
        })}
      </div>

      <ProductCardsContainer>
        {isLoading && !filteredProducts ? (
          Array.from({ length: 10 }).map((_, index) => (
            <LoadingProductCard key={index} />
          ))
        ) : filteredProducts.length ? (
          filteredProducts.map((product: Product) => (
            <ProductCard key={product.id} {...product} />
          ))
        ) : (
          <NoProductMessage message="No product found!" />
        )}
      </ProductCardsContainer>
    </>
  )
}

export async function getStaticProps() {
  const initialProducts = await requestProducts()
  return {
    props: {
      initialProducts,
    },
  }
}
export default Home
