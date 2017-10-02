import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import styles from '../../content/styles/SubSectionDropdown.css';
import {Dropdown, MenuItem} from 'react-bootstrap';

class SubSectionDropdown extends Component {
  render() {
    return (
      <Dropdown id="SubSectionDropdown">
        <Button bsStyle="dropDownButtonText">
          2017
        </Button>
        <Dropdown.Toggle/>
        <Dropdown.Menu className="SubSectionDropdownMenu">
          <MenuItem eventKey="1" className="SubSectionDropdownMenuItem">Action</MenuItem>
          <MenuItem eventKey="2">Another action</MenuItem>
          <MenuItem eventKey="3">Active Item</MenuItem>
        </Dropdown.Menu>
      </Dropdown>
    );
  };
};

SubSectionDropdown.propTypes = {
  onClick: PropTypes.func
};

export default SubSectionDropdown;
