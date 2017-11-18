import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Col} from 'react-bootstrap';
import moment from 'moment';
import TimePicker from 'react-bootstrap-time-picker';
import '../../content/styles/subSectionHeader.css';
import '../../content/styles/react-datetime.css';

class FormTimePicker extends Component {
    constructor() {
      super();

      this.handleTimeChange = this.handleTimeChange.bind(this);

      this.state = { time: 0 };
    }

    handleTimeChange(time) {
      console.log(time);     // <- prints "3600" if "01:00" is picked
      this.setState({ time });
    }

    render() {
      return <TimePicker onChange={this.handleTimeChange} value={this.state.time}/>;
    }
  }

FormTimePicker.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string
};

const TimePickerInput = ({
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
      {<FormTimePicker name={name} title={props.formTitles[name]} {...field}  {...props}  touch={touch} error={error}/>}
    </div>
  )
}

export default TimePickerInput;
