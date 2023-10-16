import React from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	title: string
}

const Button: React.FC<ButtonProps> = ({ title, ...other }) => {
	return (
		<button className='text-red-500' {...other}>
			{title}
		</button>
	)
}

export default Button
