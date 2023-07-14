export const formatPrice = (price: string): string => {
  const priceNumber = Number(price)
  const formattedPrice = priceNumber.toFixed(2)

  return formattedPrice
}
