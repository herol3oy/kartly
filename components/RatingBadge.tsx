import { RatingBadgeProps } from '@/types/rating-badge-props'
import Image from 'next/image'

const RatingBadge = ({ icon, value }: RatingBadgeProps) => (
  <small className="my-auto flex justify-start gap-1 rounded-full align-middle font-bold text-slate-500">
    <Image src={icon} width={20} height={20} alt={icon} />
    {value}
  </small>
)

export default RatingBadge
