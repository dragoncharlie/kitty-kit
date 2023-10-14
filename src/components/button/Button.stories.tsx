import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Button, { ButtonProps } from './Button'

const meta: Meta<typeof Button> = {
	component: Button,
	title: 'Kitty/Button',
	argTypes: {},
}
export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = (args: ButtonProps) => (
	<Button data-testId='InputField-id' {...args} />
)
Primary.args = {
	title: 'Primary',
}

export const Secondary: Story = (args: ButtonProps) => (
	<Button data-testId='InputField-id' {...args} />
)
Secondary.args = {
	title: 'Secondary',
}
