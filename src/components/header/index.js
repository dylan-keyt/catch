import React from 'react'
import DropDown from '../drop-down'
import { SORT_METHODS } from '../../constants/sort'
import { useProductState } from '../../context/product'
import { useSortDispatch } from '../../context/sort'
import { CATCH_LOGO_URL } from '../../constants/url'
import { setSortMethod } from '../../actions/sort'

const Header = () => {
	const { query, total, page, pages } = useProductState().metadata
	const dispatch = useSortDispatch()

	const handleOnChange = (sortMethod) => {
		setSortMethod({ dispatch, sortMethod })
	}

	return (
		<header>
			<img src={CATCH_LOGO_URL} alt='Catch' />
			<div>Showing {query}</div>
			<div>{total} results</div>
			<div>
				Page {page} of {pages}
			</div>
			<DropDown
				name='Sort By'
				options={SORT_METHODS}
				handleOnChange={handleOnChange}
			/>
		</header>
	)
}

export default Header
