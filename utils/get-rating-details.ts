import { Rating } from '@/types/rating'
import { RatingDetail } from '@/types/rating-detail'

export const getRatingDetails = (rating: Rating): RatingDetail[] => [
  {
    value: rating.count,
    icon: '/icons/thumb-up.svg',
  },
  {
    value: rating.rate,
    icon: '/icons/heart.svg',
  },
]
