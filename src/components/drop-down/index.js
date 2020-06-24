import React from 'react'

const DropDown = ({ name, options, handleOnChange }) => {
  return (
    <React.Fragment>
      <div>{name}</div>
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

export default DropDown
