import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../../content/styles/home.css';

class TextSizeModal extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        
console.log(this.props.textSizePopUp)
        return (
            <div className="textSizeModalContainer">
              <div className = "textSizeModal">

              </div>
            </div>
        )
    }
}

export default TextSizeModal;
