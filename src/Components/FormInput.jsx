import React from 'react'
import './FormInput.css'

const FormInput = (props) => {
  return (
    <div className='Formal'>
        <label>
          {props.placeholder}
        </label>
        <input
          type={props.type} 
          name={props.name}
          onChange={props.handleChange}
          required={props.required}
          pattern={props.pattern}
        />
        <span>{props.errMsg}</span>
    </div>
    
  )
}

export default FormInput