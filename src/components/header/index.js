import React from 'react'
import './styles.css'
import logo from '../../logo.svg'
import DropDown from '../drop-down'
import { SORT_METHODS } from '../../constants/sort'
import { useSortDispatch } from '../../context/sort'
import { setSortMethod } from '../../actions/sort'

const Header = () => {
	const dispatch = useSortDispatch()

	const handleOnChange = (sortMethod) => {
		setSortMethod({ dispatch, sortMethod })
	}

	return (
		<header>
			<img src={logo} alt='Catch' />
			<DropDown
				id='sort-by'
				name='Sort By'
				options={SORT_METHODS}
				handleOnChange={handleOnChange}
			/>
		</header>
	)
}

export default Header
