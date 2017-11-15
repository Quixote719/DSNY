import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import styles from '../../content/styles/formButton.css';

class FormButton extends Component {
  render() {
    return (
      <button disabled ={this.props.disabled} onClick={this.props.onClick} className='formButton'>
        {this.props.title}
      </button>
    );
  };
};

FormButton.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func
};

export default FormButton;
