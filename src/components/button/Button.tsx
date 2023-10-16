import React from 'react'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	title: string
	className?: string
}

const Button: React.FC<ButtonProps> = ({ title, className = '', ...other }) => {
	return (
		<button className={`text-red-500 ${className}`} {...other}>
			{title}
		</button>
	)
}

export default Button
