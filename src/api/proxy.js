import { CORS_ANYWHERE_URL } from "../constants/url"

export const fetchWithCORS = url => {
  return fetch(`${CORS_ANYWHERE_URL}${url}`)
}
