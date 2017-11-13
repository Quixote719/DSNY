import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Col} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';
import {MenuItem, DropdownButton} from 'react-bootstrap';

const booleanOptions = [
  {
    "Id": true,
    "Name": "Yes",
    "DisplayName": "Yes",
    "Selected": false
  }, {
    "Id": false,
    "Name": "No",
    "DisplayName": "No",
    "Selected": false
  }
]
class FormDropdown extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      option: typeof props.value === "boolean" ? this.searchKey(props.value,booleanOptions) : props.value ? this.searchKey(props.value,props.options) : props.disabled ? "":"Select one",
    }
  }

   searchKey(Key, myArray){
      for (var i=0; i < myArray.length; i++) {
          if (myArray[i].Id === Key) {
              return myArray[i].DisplayName;
          }
      }
  }
  onInputChange(item) {
    this.setState({option: item.DisplayName});
    this.props.onChange(this.props.name, item.Id)
  }

  renderList(List) {
    return _.map(List, Item => {
      return (<MenuItem key={Item.Id} className='SubSectionDropdownMenuItem' onChange={event => this.onInputChange(event)} onSelect={event => this.onInputChange(event)} eventKey={Item}>{Item.DisplayName}</MenuItem>);
    });
  }

  render() {
    return (<div >
      <Col className='FormField' xs={12} sm={6} md={6}>
        <fieldset>
          <div className='FormMultiSelectTitle'>{this.props.title}</div>
          <DropdownButton required={this.props.required} disabled={this.props.disabled ? this.props.disabled : false}  className={this.props.error?"formDropDownButtonText error":'formDropDownButtonText'} bsStyle="default" name={this.props.name} onChange={this.props.onChange} title={<div className = "dropDownTitle" > <div className="col-xs-10 dropDownSubTitle">
              {this.state.option }
            </div> < div className = "col-xs-2 downArrow" > <i className="fa fa-caret-down "></i> </div> </div >} noCaret id="dropdown-no-caret">
            {
              this.renderList(
                this.props.options
                ? this.props.options
                : booleanOptions)
            }
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


const InputDropdown = ({
  field: { name, ...field }, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  className,
  label,
  ...props
})  => {
  const error = errors[name]
  const touch = touched[name]
  return (
    <div >
      {<FormDropdown name={name} {...field}  {...props}  touch={touch} error={error}/>}
      
    </div>
  )
}

export default InputDropdown;

