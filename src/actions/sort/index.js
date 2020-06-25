import { SET_SORT_METHOD } from '../../constants/sort'

export const setSortMethod = ({ dispatch, sortMethod }) => {
	dispatch({
		type: SET_SORT_METHOD,
		sortMethod,
	})
}
