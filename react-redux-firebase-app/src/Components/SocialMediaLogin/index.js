import React from 'react';
import { Button } from 'antd';

const SocialMediaLogin = (props) => {
    const { googleLogin, facebookLogin } = props;
    return (
        <div>
            <Button  className='google-button' type="primary" icon="google" size='large' onClick={googleLogin}>Google </Button>
            <Button className='facebook-button' icon="facebook" size='large' onClick={facebookLogin}>Facebook </Button>
        </div>
    )
}

export default SocialMediaLogin;