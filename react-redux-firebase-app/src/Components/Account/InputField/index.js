import React  from 'react';
import { Icon, Input } from 'antd';

const InputField = (props) => {
    return (
        <div className='input-field-container'>
        <Icon type={props.icon} className='form-icon'/>
          <label htmlFor={props.id} style={{ color: 'white' }}> {props.label} </label>
         
             <Input 
                onChange={props.inputAction} 
                type={props.type}
                id={props.id}
                name={props.label}
                className='user-input-field'
                placeholder={`Please Enter ${props.label}`}
                style={{ paddingBottom: 4, opacity: 60, width: 300 , textAlign: 'center'}}
               />
         

        </div>
    )
}
export default InputField;