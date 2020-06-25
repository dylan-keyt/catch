import React from 'react'

const DropDown = ({ name, options, handleOnChange }) => (
	<>
		<div>{name}</div>
		<select onChange={(e) => handleOnChange(e.target.value)}>
			{ Object.entries(options)
				.map(([value, displayName]) => <option value={value}>{displayName}</option>)}
		</select>
	</>
)

export default DropDown
