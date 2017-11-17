import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Col} from 'react-bootstrap';
import moment from 'moment';
import TimePicker from 'react-bootstrap-time-picker';
import '../../content/styles/subSectionHeader.css';
import '../../content/styles/react-datetime.css';

class FormTimePicker extends Component {


  constructor(props){
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(item) {
    console.log('!')
    console.log(item);
    // this.props.onChange(this.props.name, item._d)
  }

  render() {
    // console.log(this.props.disabled);
    return (
      <div>
        <Col xs={12} sm={6} md={6}>
          <fieldset>
            <div className='FormMultiSelectTitle input-group'>{this.props.title}</div>
            <div className="form-group has-feedback">

            <TimePicker inputProps={{disabled: this.props.disabled }} defaultValue={this.props.defaultValue} value={this.props.value == "0001-01-01T00:00:00" ? '': this.props.value} start="9:00" end="21:00" step={30} onChange={event => this.onInputChange(event)}/>
            <i className="fa fa-calendar-minus-o form-control-feedback calendar-padding"></i>
            </div>
          </fieldset>

        </Col>
      </div>
    );
  };
};

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
