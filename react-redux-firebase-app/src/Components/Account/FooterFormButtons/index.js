import React from 'react';
import { Button } from 'antd';


const FooterFormButton = (props) => {
    const { submitLabel, otherLabel, gotoLink , history} = props;
    return (
        <div className='footer-form-button-container'>
          <Button type="primary" size='large' htmlType="submit" className='first-button'>{submitLabel || 'Submit'}</Button>
          <Button type="button" size='large'  className='second-button' onClick={(event) => {
              history.push(gotoLink || "/")
          }} >{otherLabel || 'Go back'}</Button>
          
        </div>
    )
}

export default FooterFormButton;