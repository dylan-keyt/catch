import { fetchWithCORS } from "./proxy"
import { PRODUCTS_URL } from "../constants/url"

export const getProducts = async () => {
  try {
    const res = await fetchWithCORS(PRODUCTS_URL)
    const { results } = await res.json()
    return results
  }
  catch (err) {
    console.log(err)
  }
}
