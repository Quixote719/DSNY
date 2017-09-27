import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import styles from '../../content/styles/subSectionButton.css';

class SubSectionButton extends Component {
  render() {
    return (
      <button disabled ={this.props.disabled} onClick={this.props.onClick} className='subSectionButton'>
        {this.props.title}
      </button>
    );
  };
};

SubSectionButton.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func
};

export default SubSectionButton;
