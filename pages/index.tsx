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
      <section className="mb-10 max-w-2xl">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
          Browse the collection
        </p>
        <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-5xl">
          Find something you&apos;ll love.
        </h1>
      </section>

      <SearchProducts
        productSearchQuery={productSearchQuery}
        setProductSearchQuery={setProductSearchQuery}
      />

      <div className="mb-10 flex flex-wrap gap-2">
        <button
          onClick={() => setUserSelectCategory('')}
          className={`${
            userSelectCategory === '' && 'primary-bg-color text-white'
          } primary-border-color primary-text-color rounded-full border px-4 py-2 text-sm font-bold transition-colors hover:bg-slate-100`}
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
              className={`${categoryBackgrounds} primary-border-color rounded-full border px-4 py-2 text-sm font-bold transition-colors hover:bg-slate-100 ${
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
        {isLoading ? (
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
  let initialProducts: Product[] = []

  if (process.env.GITHUB_PAGES !== 'true') {
    try {
      initialProducts = await requestProducts()
    } catch (error) {
      console.warn('Could not load products during the static build:', error)
    }
  }

  return {
    props: {
      initialProducts,
    },
  }
}
export default Home
