export const formatPriceToAUD = price => {
	return (price / 100).toLocaleString('en-AU', {
		style: 'currency',
		currency: 'AUD',
	})
}
