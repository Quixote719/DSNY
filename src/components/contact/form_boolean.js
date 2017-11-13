import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Col, Tooltip} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';
import isEmpty from 'lodash/isEmpty'

class FormBoolean extends Component {

  constructor(props) {
    super(props);
    this.state = {
      accepted: false,
      declined: false,
      hideToolTip: true
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleFocusOut = this.handleFocusOut.bind(this);
  }

  handleChange(event){
    !isEmpty(this.refs.checkboxinput.value) ? this.setState({hideToolTip: true}) : this.setState({hideToolTip: false});
  }

  handleFocusOut(event){
    this.setState({hideToolTip: true});
  }

  onInputChange(e) {
    this.setState({
      accepted: !e.target.checked,
      declined: e.target.checked
    });
  }

  renderOptions() {
    return (<div>
      <input ref="checkboxinput" type="checkbox" onFocus={this.handleChange} onKeyUp={this.handleChange} name={this.props.name} onChange={this.props.onChange} onBlur={this.handleFocusOut} value={this.props.value ? this.props.value : ''} checked={this.props.value} onClick={event => this.onInputChange(event)} 
      className={this.props.error?"input error":'input'} required={this.props.required} error={this.props.error}/>
      <Tooltip placement="bottom" id="tooltip-bottom" className={this.props.error && !this.state.hideToolTip?"in":''}>{this.props.error}</Tooltip>
      <label >{this.props.title}</label>
    </div>)
  }
  render() {
    return (<div>
      <Col xs={12}>
        <fieldset>
          <div>{this.renderOptions()}</div>
        </fieldset>
      </Col>

    </div>);
  };
};

FormBoolean.propTypes = {
  title: PropTypes.string
};

const CheckboxInput = ({
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
      {<FormBoolean name={name} {...field}  {...props}  touch={touch} error={error}/>}
      
    </div>
  )
}


export default CheckboxInput;
