import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Col} from 'react-bootstrap';
import Datetime from 'react-datetime';
import '../../content/styles/subSectionHeader.css';
import '../../content/styles/react-datetime.css';

class FormDateTimePicker extends Component {


  onInputChange(item) {
    console.log(item._d);
    this.props.onChange(this.props.name, item._d)
  }

  render() {
    return (
      <div>
        <Col xs={12} sm={6} md={6}>
          <fieldset>
            <div className='FormMultiSelectTitle'>{this.props.title}</div>
            <Datetime timeFormat={false} closeOnSelect={true}  value={this.props.value == "0001-01-01T00:00:00" ? '': this.props.value} onChange={event => this.onInputChange(event)}/>
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
      {<FormDateTimePicker name={name} {...field}  {...props}  touch={touch} error={error}/>}
      
    </div>
  )
}

export default DateTimePickerInput;
