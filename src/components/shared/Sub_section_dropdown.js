import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import styles from '../../content/styles/SubSectionDropdown.css';
import {Dropdown, MenuItem, Button, DropdownButton} from 'react-bootstrap';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

class SubSectionDropdown extends Component {

  constructor(props) {
    super(props);
  }
  onInputChange(term) {
    this.setState({term});
    this.props.ondropDownChange(term);
  }

  render() {
    return (
      <div>
        <div className='SubSectionDropdown'>
          <DropdownButton className='dropDownButtonText' bsStyle="default" title={< div className = "dropDownTitle" > <div className="col-xs-10 dropDownSubTitle">
            {this.props.selectedOption}
          </div> < div className = "col-xs-2 downArrow" > <i className="fa fa-chevron-down chevron-down-font-awesome"></i> < /div> < /div >} noCaret id="dropdown-no-caret">
            <MenuItem className='SubSectionDropdownMenuItem' onSelect={event => this.onInputChange(event)} eventKey="2017">2017</MenuItem>
            <MenuItem className='SubSectionDropdownMenuItem' onSelect={event => this.onInputChange(event)} eventKey="2016">2016</MenuItem>
          </DropdownButton>
          <div className='hairlineGreen'></div>
        </div>
      </div>
    );
  };
};

SubSectionDropdown.propTypes = {
  onClick: PropTypes.func,
  selectedOption: PropTypes.string
};

export default SubSectionDropdown;
