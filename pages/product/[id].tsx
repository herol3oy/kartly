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
      <div className="primary-border-color relative mx-auto mt-36 flex w-full flex-col items-start gap-5 border p-5 md:w-6/12 md:flex-col lg:flex-col xl:flex-col 2xl:flex-row">
        <div className="flex w-full flex-col justify-center gap-5">
          <Image
            className="mx-auto h-48 w-48 object-contain"
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
        <div className="flex w-full flex-col gap-5">
          <h1 className="primary-text-color font-ght w-full text-lg">
            {product.title}
          </h1>
          <p className="text-4xl font-bold">US$ {formatPrice(product.price)}</p>
          <div className="flex flex-col gap-2">
            <p
              className={`${
                !showFullProductDescription && 'line-clamp-2'
              } md:text-md text-sm tracking-wider text-slate-700`}
            >
              {product.description}
            </p>
            <small
              className="w-fit cursor-pointer text-slate-500 hover:underline hover:underline-offset-4"
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
