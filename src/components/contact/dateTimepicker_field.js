import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Col} from 'react-bootstrap';
import moment from 'moment';
import Datetime from 'react-datetime';
import '../../content/styles/subSectionHeader.css';
import '../../content/styles/react-datetime.css';

class FormDateTimePicker extends Component {


  constructor(props){
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state={
      defaultDateFormat:'MM/DD/YYYY'
    } 
  }

  onInputChange(item) {
    /* Code to modify the Selected Date in the Required Format, to be appended to JSON */
    item._d = moment(item._d).format(this.state.defaultDateFormat);
    this.props.onChange(this.props.name, item._d)
  }

  render() {
    return (
      <div>
        <Col xs={12} sm={6} md={6}>
          <fieldset>
            <div className='FormMultiSelectTitle input-group'>{this.props.title}</div>
            <div className="form-group has-feedback">
            <i className="fa fa-calendar-minus-o form-control-feedback calendar-padding"></i>
            </div>
          </fieldset>

        </Col>
      </div>
    );
  };
};

FormDateTimePicker.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string
};

const DateTimePickerInput = ({
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
      {<FormDateTimePicker name={name} title={props.formTitles[name]} {...field}  {...props}  touch={touch} error={error}/>}
      
    </div>
  )
}

export default DateTimePickerInput;
