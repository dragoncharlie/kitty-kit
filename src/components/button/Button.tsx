import React from "react";
import "./button.css"

export type ButtonProps = {
  title: string;
}

const Button: React.FC<ButtonProps> = ({title}) => {
  return <button className='kitty-btn'>{title}</button>
}

export default Button;