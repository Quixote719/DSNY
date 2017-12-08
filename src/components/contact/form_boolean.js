import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Row, Col, Tooltip} from 'react-bootstrap';
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

    if(this.props.required)
    {
      this.props.onChange(this.props.name, e.target.checked);
      !isEmpty(this.props.value) || (e.target.checked) ? this.setState({hideToolTip: true}) : this.setState({hideToolTip: false});
    }

    this.setState({
      accepted: !e.target.checked,
      declined: e.target.checked
    });
  }

  /* Check If the CheckBoxes are adjacent to one another in two columns */
  renderAccordingToCheckBoxType(props){
    if(props.checkBoxType == 'semiwidth'){
       return (
                <div>
                <Col xs={12} md={6}>
                    <fieldset>
                        <div>{this.renderOptions()}</div>
                    </fieldset>
                </Col>
              </div>
              );
    }
       return (<div>
               <Col xs={12}>
                   <fieldset>
                        <div>{this.renderOptions()}</div>
                 </fieldset>
             </Col>
             </div>);
  }

  
  renderOptions() {
    return (<div>
      <label className="checkContainer">
      <input ref="checkboxinput" type="checkbox" disabled={this.props.disabled} onFocus={this.handleChange} onKeyUp={this.handleChange} name={this.props.name} aria-label={this.props.name} onChange={this.props.onChange} onBlur={this.handleFocusOut} value={this.props.value ? this.props.value : ''} checked={this.props.value} onClick={event => this.onInputChange(event)}
      className={this.props.error?"input error":'input'} required={this.props.required} error={this.props.error}/>

      <span className="checkmark"></span>
      <div className="checkBoxText">{this.props.title}</div>
      </label>
      {this.props.error && !this.state.hideToolTip?<Tooltip placement="top" id="tooltip-left" className={this.props.error && !this.state.hideToolTip?"in":''}>{this.props.error}</Tooltip>:null}
  
    </div>)
  }
  render() {
        return this.renderAccordingToCheckBoxType(this.props);
  };
};

FormBoolean.propTypes = {
  title: PropTypes.string,
  checkBoxType:PropTypes.any
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
      {<FormBoolean title={props.formTitles[name]} name={name} {...field}  {...props}  touch={touch} error={error}/>}

    </div>
  )
}


export default CheckboxInput;
