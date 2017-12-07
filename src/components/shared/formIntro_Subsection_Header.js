import _ from "lodash";
import React, {Component} from "react";
import Truncate from 'react-truncate';
import {connect} from "react-redux";
import Dotdotdot from 'react-dotdotdot'
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import '../../content/styles/subSectionHeader.css';


const FormIntroSubSectionHeaderGreen = props => {
      return (
         <div>
            <div className='PressReleaseHeadertitle'>
            <div className='greenSectionHeaderForm'>
            {props.title}
            </div>
            </div>
         </div>
         );
};    

export default FormIntroSubSectionHeaderGreen;