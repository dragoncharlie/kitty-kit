import React from 'react'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Button from './Button'

describe('Running Test for Kitty Button', () => {
	test('Check Button Disabled', () => {
		const { getByRole } = render(<Button title='Meow' disabled />)
		expect(getByRole('button', { name: 'Meow' })).toBeDisabled()
	})
})
