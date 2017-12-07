import _ from "lodash";
import React, {Component} from "react";
import Truncate from 'react-truncate';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import '../../content/styles/subSectionHeader.css';


const SubSectionHeaderGreen = props => {
      return (
         <div>
            <div className='greenSectionHeader'>
            {props.title}
            </div>
            <div className='patternLineGreen'></div>
         </div>
         );
};    

export default SubSectionHeaderGreen;