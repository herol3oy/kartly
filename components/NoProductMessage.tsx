import { NoProductMessageProps } from '@/types/no-product-message-props'

const NoProductMessage = ({ message }: NoProductMessageProps) => (
  <h1 className="text-center my-10 font-bold text-slate-500 col-span-full">
    {message}
  </h1>
)

export default NoProductMessage
