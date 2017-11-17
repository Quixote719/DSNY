import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';

class FormTextarea extends Component {

  constructor(props) {
    super(props);
  }
  onInputChange(term) {}

  render() {
    return (<div>
      <Col xs={12}>
        <fieldset>
          <div className='FormMultiSelectTitle'>{this.props.title}</div>
          <textarea name={this.props.name} onChange={this.props.onChange} onBlur={this.props.onBlur} value={this.props.value ? this.props.value : ''} disabled={this.props.disabled} className='formTextarea'></textarea>
        </fieldset>
      </Col>
    </div>);
  };
};

FormTextarea.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string
};

const TextAreaInput = ({
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
      {<FormTextarea title={props.formTitles[name]} name={name} {...field}  {...props}  touch={touch} error={error}/>}
      
    </div>
  )
}


export default TextAreaInput;
