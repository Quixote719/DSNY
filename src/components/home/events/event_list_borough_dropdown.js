import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import styles from '../../../content/styles/SubSectionDropdown.css';
import {Dropdown, MenuItem, Button, DropdownButton} from 'react-bootstrap';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';

class EventListBoroughDropdown extends Component {

  constructor(props) {
    super(props);
  }
  onInputChange(term) {
    this.setState({term});
    this.props.ondropDownChange(term);
  }


  render() {
    const {List} = this.props;
    console.log(List);
    return (
      <div>
        <div className='SubSectionDropdown'>
          <DropdownButton className='dropDownButtonText' bsStyle="default" title={< div className = "dropDownTitle" > <div className="col-xs-10 dropDownSubTitle">
            {this.props.selectedOption}
          </div> < div className = "col-xs-2 downArrow" > <i className="fa fa-chevron-down chevron-down-font-awesome"></i> </div> </div>} noCaret id="dropdown-no-caret">
            <MenuItem className='SubSectionDropdownMenuItem' onSelect={event => this.onInputChange(event)} eventKey="All boroughs">All boroughs</MenuItem>
            <MenuItem className='SubSectionDropdownMenuItem' onSelect={event => this.onInputChange(event)} eventKey="Brooklyn">Brooklyn</MenuItem>
            <MenuItem className='SubSectionDropdownMenuItem' onSelect={event => this.onInputChange(event)} eventKey="Bronx">Bronx</MenuItem>
            <MenuItem className='SubSectionDropdownMenuItem' onSelect={event => this.onInputChange(event)} eventKey="Manhattan">Manhattan</MenuItem>
            <MenuItem className='SubSectionDropdownMenuItem' onSelect={event => this.onInputChange(event)} eventKey="Staten Island">Staten Island</MenuItem>
            <MenuItem className='SubSectionDropdownMenuItem' onSelect={event => this.onInputChange(event)} eventKey="Queens">Queens</MenuItem>
          </DropdownButton>
          <div className='hairlineGreen'></div>
        </div>
      </div>
    );
  };
};

EventListBoroughDropdown.propTypes = {
  onClick: PropTypes.func,
  selectedOption: PropTypes.string
};



export default EventListBoroughDropdown;
