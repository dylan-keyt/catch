import React from 'react'
import { useSortDispatch } from '../../context/sort'
import { SET_SORT_METHOD } from '../../constants/sortMethods'

const SortBy = ({ options }) => {
  const dispatch = useSortDispatch()

  const handleOnChange = sortMethod => {
    dispatch({
      type: SET_SORT_METHOD,
      sortMethod
    })
  }

  return (
    <React.Fragment>
      <select onChange={e => handleOnChange(e.target.value)}>
        { Object.entries(options)
          .map(([value, displayName]) =>
            <option value={value}>{displayName}</option>
          )
        }
      </select>
    </React.Fragment>
  )
}

export default SortBy
