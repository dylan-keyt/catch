import { fetchWithCORS } from './'
import { CORS_ANYWHERE_URL } from '../../constants/url'
import { enableFetchMocks } from 'jest-fetch-mock';
enableFetchMocks();

describe('proxy utils', () => {
  describe('fetchWithCORS', () => {
    beforeEach(() => {
      fetch.resetMocks();
    })
    test('should prepend CORS url to given url', () => {
      fetchWithCORS("https://dylankeyt.com");
      expect(fetch).toBeCalledWith(`${CORS_ANYWHERE_URL}https://dylankeyt.com`)
    })
  })
})
