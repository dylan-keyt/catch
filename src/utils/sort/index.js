export const sortPriceHighToLow = (a, b) => ((b.salePrice > a.salePrice) ? 1 : -1);

export const sortPriceLowToHigh = (a, b) => ((a.salePrice > b.salePrice) ? 1 : -1);
