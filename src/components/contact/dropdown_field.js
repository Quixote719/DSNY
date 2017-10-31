import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';
import {Dropdown, MenuItem, Button, DropdownButton} from 'react-bootstrap';
class FormDropdown extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      option: "Select one"
    }
  }
  onInputChange(item) {
    this.setState({option: item});
    this.props.onChange(this.props.name, item)
  }

  renderList(List) {
    return _.map(List, Item => {
      return (<MenuItem key={Item.Id} className='SubSectionDropdownMenuItem' onChange={event => this.onInputChange(event)} onSelect={event => this.onInputChange(event)} eventKey={Item.DisplayName}>{Item.DisplayName}</MenuItem>);
    });
  }

  render() {
    return (<div >
      <Col className='FormField' xs={12} sm={6} md={6}>
        <fieldset>
          <div className='FormMultiSelectTitle'>{this.props.title}</div>

          <DropdownButton className='formDropDownButtonText' bsStyle="default" name={this.props.name} onChange={this.props.onChange} title={<div className = "dropDownTitle" > <div className="col-xs-10 dropDownSubTitle">
              {this.state.option}
            </div> < div className = "col-xs-2 downArrow" > <i className="fa fa-caret-down "></i> < /div> < /div >} noCaret="noCaret" id="dropdown-no-caret">
            {this.renderList(this.props.options)}
          </DropdownButton>
        </fieldset>
      </Col>
    </div>);
  };
};

FormDropdown.propTypes = {
  options: PropTypes.array,
  title: PropTypes.string
};

export default FormDropdown;
