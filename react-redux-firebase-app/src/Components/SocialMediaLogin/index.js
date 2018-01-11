import React from 'react';

const SocialMediaLogin = (props) => {
    const { googleLogin, facebookLogin } = props;
    return (
        <div>
          <a href='#' onClick={googleLogin}>
            <span> Signin with google </span>
          </a>
          <a href='#' onClick={facebookLogin}>
            <span> Signin with facebook </span>
          </a>
        </div>
    )
}

export default SocialMediaLogin;