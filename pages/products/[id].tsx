import CategoryBadge from '@/components/CategoryBadge'
import LoadingProductPage from '@/components/LoadingProductPage'
import RatingBadge from '@/components/RatingBadge'
import { useProduct } from '@/hooks/useProduct'
import { formatPrice } from '@/utils/format-price'
import { getRatingDetails } from '@/utils/get-rating-details'
import ErrorPage from 'next/error'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

const ProductPage = () => {
  const [showFullProductDescription, setShowFullProductDescription] =
    useState<boolean>(false)

  const router = useRouter()

  const productId = router.query.id
  const id = typeof productId === 'string' ? productId : ''

  const { isSuccess, data: product, isLoading, isError } = useProduct(id)

  function toggleFullProductDescription(): void {
    setShowFullProductDescription((show) => !show)
  }

  if (isLoading) {
    return <LoadingProductPage />
  }

  if (isError) {
    return (
      <ErrorPage
        title="This product could not be found."
        statusCode={404}
        withDarkMode={false}
      />
    )
  }

  if (isSuccess && product) {
    const ratingDetails = getRatingDetails(product.rating)

    return (
      <div className="relative flex flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-row gap-5 items-start w-full md:w-6/12 mx-auto mt-36 p-5 border primary-border-color">
        <div className="flex flex-col justify-center w-full gap-5">
          <Image
            className="h-48 w-48 mx-auto object-contain"
            src={product.image}
            width={150}
            height={200}
            alt={product.title}
          />
          <CategoryBadge category={product.category} />
          <div className="flex justify-center gap-2">
            {ratingDetails.map(({ value, icon }) => (
              <RatingBadge key={icon} value={value} icon={icon} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <h1 className="primary-text-color text-lg font-ght w-full">
            {product.title}
          </h1>
          <p className="text-4xl font-bold">US$ {formatPrice(product.price)}</p>
          <div className="flex flex-col gap-2">
            <p
              className={`${
                !showFullProductDescription && 'line-clamp-2'
              } text-sm md:text-md text-slate-700 tracking-wider`}
            >
              {product.description}
            </p>
            <small
              className="text-slate-500 hover:underline hover:underline-offset-4 cursor-pointer w-fit"
              onClick={toggleFullProductDescription}
            >
              {showFullProductDescription ? `< Less` : 'More >'}
            </small>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductPage
