import React , { Component } from 'react';

export default class SimpleBox extends Component {
    render() {
        const { title, body, footer } = this.props;
        return (
            <div className='simple-box-container'>
              <div className='simple-box-body'>
               {body}
              </div>
              <div className='simple-box- footer'>
               {footer}
              </div>
            </div>
        )
    }
}