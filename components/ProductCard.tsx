import CategoryBadge from '@/components/CategoryBadge'
import RatingProduct from '@/components/RatingBadge'
import { Product } from '@/types/product'
import { formatPrice } from '@/utils/format-price'
import { getRatingDetails } from '@/utils/get-rating-details'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({
  id,
  image,
  title,
  price,
  category,
  rating,
}: Product) => {
  const ratingDetails = getRatingDetails(rating)

  return (
    <div className="card flex flex-col transition-all hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-88 flex flex-col justify-center p-5 border border-b-transparent primary-border-color overflow-hidden">
        <figure>
          <Link href={`products/${id}`}>
            <Image
              className="h-48 w-full object-scale-down mx-auto"
              src={image}
              width={150}
              height={200}
              alt={title}
            />
          </Link>
          <CategoryBadge category={category} />
        </figure>
        <div className="flex flex-col gap-1">
          <Link href={`products/${id}`}>
            <h1 className="font-light text-md my-2 overflow-hidden line-clamp-2 w-full h-12 primary-text-color hover:secondary-text-color">
              {title}
            </h1>
          </Link>
          <div className="flex gap-2">
            {ratingDetails.map(({ value, icon }) => (
              <RatingProduct key={icon} value={value} icon={icon} />
            ))}
          </div>
        </div>
      </div>
      <Link
        className="link flex border primary-border-color transition-all ease-in-out duration-150 p-5"
        href={`products/${id}`}
      >
        <span className="h-6 flex align-baseline justify-between text-xl font-bold w-full">
          US$ {formatPrice(price)}
        </span>
        <Image
          src="/icons/arrow-right.svg"
          width={25}
          height={25}
          alt="Arrow right"
        />
      </Link>
    </div>
  )
}

export default ProductCard
