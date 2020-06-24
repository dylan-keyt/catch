
export const sortPriceHighToLow = (a, b) => {
  return (b.salePrice > a.salePrice) ? 1 : -1
}

export const sortPriceLowToHigh = (a, b) => {
  return (a.salePrice > b.salePrice) ? 1 : -1
}
