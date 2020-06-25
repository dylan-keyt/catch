import { setSortMethod } from './'
import { SET_SORT_METHOD } from '../../constants/sort'

describe('sort actions', () => {
	describe('setSortMethod', () => {
		test('should dispatch SET_SORT_METHOD with the selected sortMethod', () => {
			const dispatch = jest.fn()
			setSortMethod({ dispatch, sortMethod: 'hello' })
			expect(dispatch).toBeCalledWith({
				type: SET_SORT_METHOD,
				sortMethod: 'hello'
			})
		})
	})
})
