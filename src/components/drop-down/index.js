import React from 'react'

const DropDown = ({ id, name, options, handleOnChange }) => (
	<>
		<label htmlFor={id}>{name}</label>
		<select id={id} aria-labelledby={id} onChange={(e) => handleOnChange(e.target.value)}>
			{ Object.entries(options)
				.map(([value, displayName]) => <option key={value} value={value}>{displayName}</option>)}
		</select>
	</>
)

export default DropDown
