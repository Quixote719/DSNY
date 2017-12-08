import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Col} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';
import {MenuItem, DropdownButton, Tooltip} from 'react-bootstrap';
import isEmpty from 'lodash/isEmpty'

const booleanOptions = [
  {
    "Id": false,
    "Name": "Select one",
    "DisplayName": "Select one",
    "Selected": false
  },
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
    this.handleChange = this.handleChange.bind(this);
    this.handleFocusOut = this.handleFocusOut.bind(this);

    this.state = {
      option: typeof props.value === "boolean" ? this.searchKey(props.value,booleanOptions) : props.value ? this.searchKey(props.value,props.options) : props.disabled ? "":"Select one",
      hideToolTip: true,
    }
  }

   searchKey(Key, myArray){
    if(myArray === undefined  && Key !== undefined){
          return Key.DisplayName ? Key.DisplayName : Key
    }
        for (var i=0; i < myArray.length; i++) {
            if (myArray[i].Id === Key) {
                return myArray[i].DisplayName;
            }else if (myArray[i] === Key){
              return myArray[i]
            }
     }
  }
  onInputChange(item) {
    this.setState({option: item.DisplayName ?  item.DisplayName : item});
    this.props.onChange(this.props.name, item.DisplayName ?  item.Id : item);
  }

  handleChange(event){
     this.props.value === 0 ? this.setState({hideToolTip: false}) : this.setState({hideToolTip: true});
  }

  handleFocusOut(event){
    this.setState({hideToolTip: true});
  }

  renderList(List) {
    return _.map(List, Item => {
      return (<MenuItem key={Item.DisplayName ? Item.DisplayName : Item} value={this.props.value} className='SubSectionDropdownMenuItem' onChange={event => this.onInputChange(event)} onSelect={event => this.onInputChange(event)} eventKey={Item}>{Item.DisplayName ? Item.DisplayName : Item}</MenuItem>);
    });
  }

  /* Check if the field is a time field or a drop down */
  checkIfTimeField(){
          const props = this.props;
          let timeField = (props.timeField != undefined) ? ( (props.timeField == true) ? true : false) : false;
          let iconName = (timeField == true) ? 'fa fa-clock-o':'fa fa-caret-down';
          return iconName;
  }

  render() {

    return (
    <div>
      <Col className='FormField' xs={12} sm={6} md={6}>
        <fieldset>
          <div className='FormMultiSelectTitle'>{this.props.title}{this.props.required ? this.props.hideAsterix ? <span></span>  : <span class="requiredAsterik"> *</span>:<span></span>}</div>
          <DropdownButton required={this.props.required} onFocus={this.handleChange} onClick={this.handleFocusOut} onBlur={this.handleFocusOut} disabled={this.props.disabled ? this.props.disabled : false}  className={this.props.error?"formDropDownButtonText error":'formDropDownButtonText'} bsStyle="default" name={this.props.name} onChange={this.props.onChange} title={<div className = "dropDownTitle" > <div className="col-xs-10 dropDownSubTitle">
              {this.state.option }
            </div> < div className = "col-xs-2 downArrow" > <i className={this.checkIfTimeField()} ></i> < /div> </div>} noCaret id="dropdown-no-caret">
            {
              this.renderList(
                this.props.options
                ? this.props.options
                : booleanOptions)
            }
          </DropdownButton>
          <Tooltip placement="bottom" id="tooltip-bottom" className={this.props.error && !this.state.hideToolTip?"in":''}>{this.props.error}</Tooltip>
        </fieldset>
      </Col>
    </div>);
  };
};

FormDropdown.propTypes = {
  options: PropTypes.array,
  title: PropTypes.string,
  timeField:PropTypes.any,
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
      {<FormDropdown title={props.formTitles[name]} name={name} {...field}  {...props}  touch={touch} error={error}/>}

    </div>
  )
}

export default InputDropdown;
