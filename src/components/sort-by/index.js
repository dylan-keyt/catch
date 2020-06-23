import React from 'react'
import SortContext from '../../context/sortContext'

const SortBy = ({ options }) => {
  const handleOnChange = React.useContext(SortContext)
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
