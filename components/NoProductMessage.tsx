import { NoProductMessageProps } from '@/types/no-product-message-props'

const NoProductMessage = ({ message }: NoProductMessageProps) => (
  <h1 className="col-span-full my-10 text-center font-bold text-slate-500">
    {message}
  </h1>
)

export default NoProductMessage
