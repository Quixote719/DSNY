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
  }
  onInputChange(term) {}
  renderOptions(options) {
    return _.map(options, Item => {
      return (
        <div>
          <input type="checkbox" id={Item.id} name={Item.name} value={Item.name}/>
          <label for="coding">{Item.DisplayName}</label>
        </div>
      )
    });
  }

  renderList(List) {
    return _.map(List, Item => {
      return (
        <MenuItem key={Item.Id} className='SubSectionDropdownMenuItem' onSelect={event => this.onInputChange(event)} eventKey={Item.Name}>{Item.DisplayName}</MenuItem>
      );
    });
  }

  render() {
    return (
      <div>
        <Col xs={12} sm={6} md={6}>
          <fieldset>
            <div className='FormMultiSelectTitle'>{this.props.title}</div>

            <DropdownButton className='formDropDownButtonText' bsStyle="default" title={< div className = "dropDownTitle" > <div className="col-xs-10 dropDownSubTitle">
              yeshu
            </div> < div className = "col-xs-2 downArrow" > <i className="fa fa-chevron-down chevron-down-font-awesome"></i> < /div> < /div >} noCaret id="dropdown-no-caret">
              {this.renderList(this.props.options)}
            </DropdownButton>

          </fieldset>
        </Col>
      </div>
    );
  };
};

FormDropdown.propTypes = {
  options: PropTypes.array,
  title: PropTypes.string
};

export default FormDropdown;
