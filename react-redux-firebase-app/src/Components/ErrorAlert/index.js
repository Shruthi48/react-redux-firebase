import React from 'react';

const ErrorAlert = (props) => {
    return (
        <div className='error'> {props.children} </div> 
    )
}

export default ErrorAlert;