import React from 'react'
import SortBy from '../sort-by'
import { SORT_METHODS } from '../../constants/sortMethods'

const Header = () => {
  return (
    <header>
      <img src='https://s.catch.com.au/static/catch/images/logo-8b0ef96c7b.svg' alt='Catch'/>
      <SortBy options={SORT_METHODS} />
    </header>
  )
}

export default Header;
