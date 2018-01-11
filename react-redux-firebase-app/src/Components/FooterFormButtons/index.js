import React from 'react';

const FooterFormButton = (props) => {
    const { submitLabel, otherLabel, gotoLink , history} = props;
    return (
        <div>
          <button type='submit'> {submitLabel || 'Submit'} </button>
          <button type='button' onClick={(event) => {
              history.push(gotoLink || "/")
          }}> {otherLabel || 'Go back'} </button>
        </div>
    )
}

export default FooterFormButton;