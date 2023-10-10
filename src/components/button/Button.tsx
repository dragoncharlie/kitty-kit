import React from "react";
import "./button.css"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
}

const Button: React.FC<ButtonProps> = ({title, ...other}) => {
  return <button className='kitty-btn' {...other}>{title}</button>
}

export default Button;