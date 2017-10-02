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

    this.state = {
      term: "2017"
    };

  }
  onInputChange(term) {
    this.setState({term});
    this.props.ondropDownChange(term);
  }

  render() {
    return (
      <div>
        <DropdownButton className='dropDownButtonText' bsStyle="default" title={< div className = "col-xs-12 dropDownTitle" > <div className="col-xs-10 dropDownSubTitle">
          {this.state.term}
        </div> < div className = "col-xs-2" > fa < /div> < /div >} noCaret id="dropdown-no-caret">
          <MenuItem className='SubSectionDropdownMenuItem' onSelect={event => this.onInputChange(event)} eventKey="2016">2016</MenuItem>
        </DropdownButton>
        <div className='hairlineGreen'></div>
      </div>
    );
  };
};

SubSectionDropdown.propTypes = {
  onClick: PropTypes.func
};

export default SubSectionDropdown;
