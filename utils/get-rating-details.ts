import { Rating } from '@/types/rating'
import { RatingDetail } from '@/types/rating-detail'

export const getRatingDetails = (rating: Rating): RatingDetail[] => [
  {
    value: rating.count,
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/icons/thumb-up.svg`,
  },
  {
    value: rating.rate,
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/icons/heart.svg`,
  },
]
