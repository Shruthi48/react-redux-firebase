import React  from 'react';

const InputField = (props) => {
    return (
        <div className='input-field-container'>
          <label htmlFor={props.id} > {props.label} </label>
          <div>
              <input 
                onChange={props.inputAction} 
                type={props.type}
                id={props.id}
                name={props.label}
                placeholder={`Please Enter ${props.label}`}
                style={props.style}
               />
          </div>

        </div>
    )
}
export default InputField;