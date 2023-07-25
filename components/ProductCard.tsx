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
    <Link href={`product/${id}`}>
      <div className="card flex flex-col transition-all hover:-translate-y-2 hover:shadow-xl">
        <div className="primary-border-color relative flex h-88 flex-col justify-center overflow-hidden border border-b-transparent p-5">
          <figure>
            <Image
              className="mx-auto h-48 w-full object-scale-down"
              src={image}
              width={150}
              height={200}
              alt={title}
            />
            <CategoryBadge category={category} />
          </figure>
          <div className="flex flex-col gap-1">
            <h1 className="text-md primary-text-color hover:secondary-text-color my-2 line-clamp-2 h-12 w-full overflow-hidden font-light">
              {title}
            </h1>
            <div className="flex gap-2">
              {ratingDetails.map(({ value, icon }) => (
                <RatingProduct key={icon} value={value} icon={icon} />
              ))}
            </div>
          </div>
        </div>
        <div className="link primary-border-color flex border p-5 transition-all duration-150 ease-in-out">
          <span className="flex h-6 w-full justify-between align-baseline text-xl font-bold">
            US$ {formatPrice(price)}
          </span>
          <Image
            src="/icons/arrow-right.svg"
            width={25}
            height={25}
            alt="Arrow right"
          />
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
