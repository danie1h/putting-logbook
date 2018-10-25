import React from 'react'
import './button.css'

export const Button = (props) => {
  return (
  	<button className={props.className} onClick={props.onClick}>{props.content}</button>
  )
}
