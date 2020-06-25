import React from 'react'
import PropTypes from 'prop-types'

const DropDown = ({ id, name, options, handleOnChange }) => (
	<>
		<label htmlFor={id}>{name}</label>
		<select id={id} aria-labelledby={id} onChange={(e) => handleOnChange(e.target.value)}>
			{ Object.entries(options)
				.map(([value, displayName]) => <option key={value} value={value}>{displayName}</option>)}
		</select>
	</>
)

DropDown.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	options: PropTypes.object.isRequired,
	handleOnChange: PropTypes.func.isRequired,
}

export default DropDown
