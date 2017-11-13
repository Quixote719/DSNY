import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import MaskedInput from 'react-text-mask';
import {Row, Col, Tooltip} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';
import {Formik, Field} from 'formik';
import isEmpty from 'lodash/isEmpty'

class FormField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      hideToolTip: true
    }

    
    this.handleChange = this.handleChange.bind(this);
    this.handleFocusOut = this.handleFocusOut.bind(this);
    
  }

  onInputChange(e) {
    console.log(e);
  }

  handleChange(event){
    //console.log("DINESH" + this.refs.myinput.value )
    (isEmpty(this.props.error)) ? this.setState({hideToolTip: true}) : this.setState({hideToolTip: false});
  }

  handleFocusOut(event){
    this.setState({hideToolTip: true});
  }

  renderField() {

    // if (type) {
    //   var name = 'input[' + type + ']';
    //   switch (type) {
    //     case "phone":
    //       return (<div>
    //         <MaskedInput mask={[
    //             '(',
    //             /[1-9]/,
    //             /\d/,
    //             /\d/,
    //             ')',
    //             ' ',
    //             /\d/,
    //             /\d/,
    //             /\d/,
    //             '-',
    //             /\d/,
    //             /\d/,
    //             /\d/,
    //             /\d/
    //           ]} name={this.props.name} onChange={this.props.onChange} onBlur={this.props.onBlur} value={this.props.value}/>
    //       </div>);

    //     default:
          
           return (<div>
            <input ref={this.props.name} onFocus={this.handleChange} onKeyUp={this.handleChange} type="text" name={this.props.name} onChange={this.props.onChange} onBlur={this.handleFocusOut} value={this.props.value
                ? this.props.value
                : ''} disabled={this.props.disabledf} required={this.props.required} maxlength={this.props.maxlength} className={this.props.error?"input error":'input'} error={this.props.error}
                />
                  <Tooltip placement="bottom" id="tooltip-bottom" className={this.props.error && !this.state.hideToolTip?"in":''}>{this.props.error}</Tooltip>
            <div>{this.props.children}</div>
          </div>)
      }
  //  }
  //}
  render() {

    

    return (<div >{
        !this.props.isHidden
          ? <Col className='FormField' xs={12} sm={6} md={6}>
              <fieldset>
                <div className='FormMultiSelectTitle'>{this.props.title}</div>
                <div>{this.renderField()}</div>
              </fieldset>
            </Col>
          : null
      }

    </div>);
  };
};


const TextInput = ({
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
      {<FormField title={props.formTitles[name]} name={name} {...field}  {...props}  touch={touch} error={error}/>}
      
    </div>
  )
}


export default TextInput;
