import React from 'react'

export default function Widget(props) {
  return (
    <div className="buttons">
		{props.children}
        <button onClick={props.onCounterChange}>Save</button>
	</div>
  )
}
