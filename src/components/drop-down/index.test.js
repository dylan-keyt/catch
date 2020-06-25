import React from 'react'
import DropDown from './'
import { render, fireEvent } from '@testing-library/react'

describe('DropDown', () => {
	const options = {
		value1: 'displayName1',
		value2: 'displayName2'
	}
	const handleOnChange = jest.fn()
	test('should render with name and options from props', () => {
		const { getByText } = render(
			<DropDown
				id='an-id'
				name='Title'
				options={options}
				handleOnChange={handleOnChange}
			/>
		)
		expect(getByText('Title')).toBeInTheDocument()
		expect(getByText('displayName1')).toBeInTheDocument()
		expect(getByText('displayName2')).toBeInTheDocument()
	})
	test('should invoke onChange function', () => {
		const { getByLabelText } = render(
			<DropDown
				id='an-id'
				name='Title'
				options={options}
				handleOnChange={handleOnChange}
			/>
		)
		fireEvent.change(getByLabelText('Title'), {
			target: {
				value: 'value2'
			}
		})
		expect(handleOnChange).toHaveBeenCalledWith('value2')
	})
})
