import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import MaskedInput from 'react-text-mask';
import {Row, Col, Tooltip} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';
import {Formik, Field} from 'formik';
import isEmpty from 'lodash/isEmpty'

let previousErrorMessage = "";

class FormField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      hideToolTip: true
    }


    this.handleChange = this.handleChange.bind(this);
    this.handleFocusOut = this.handleFocusOut.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);

  }

  onInputChange(e) {
    console.log(e);
  }

  handleChange(event){

    console.log(this.props.name + " , " + previousErrorMessage  + " , " + this.props.error);
    (isEmpty(this.props.value) || this.props.value.trim() === "" || (previousErrorMessage !== this.props.error)) ? this.setState({hideToolTip: false}) : this.setState({hideToolTip: true});
    previousErrorMessage = this.props.error;
  }

  handleFocusOut(event){
    this.setState({hideToolTip: true});
  }

  handleOnFocus(event){
    previousErrorMessage ="";
    this.setState({hideToolTip: false});
  }

  renderField(name) {

    if(name.toUpperCase().indexOf('PHONE') >  -1 )
      name = "phone"
    else if(name.toUpperCase().indexOf('ZIP') >  -1 )
      name = "zip"


    if (name) {
      //var name = 'input[' + type + ']';
      switch (name) {
        case "phone":
          return (<div>
            <MaskedInput mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} ref={this.props.name}  maxLength = {this.props.maxlength} onFocus={this.handleOnFocus} onKeyUp={this.handleChange} type="text" name={this.props.name}  aria-label={this.props.name} onChange={this.props.onChange} onBlur={this.handleFocusOut} value={this.props.value
                  ? this.props.value
                  : ''} disabled={this.props.disabled} autoComplete={this.props.autocomplete?"off":""} required={this.props.required} className={((isEmpty(this.props.value) || this.props.value.trim() === "" || (this.props.error && this.props.error.toUpperCase().indexOf("EMAIL")> -1)) && this.props.error)?"input error":'input'} error={this.props.error}
                  />
                  {this.props.error && !this.state.hideToolTip?<Tooltip placement="bottom" id="tooltip-bottom" className="in">{this.props.error}</Tooltip>:null}
              <div>{this.props.children}</div>
            </div>);
        case "zip":
          return (<div>
            <MaskedInput mask={[/\d/, /\d/, /\d/, /\d/, /\d/]} ref={this.props.name}  maxLength = {this.props.maxlength} onFocus={this.handleOnFocus} onKeyUp={this.handleChange} type="text" name={this.props.name}  aria-label={this.props.name} onChange={this.props.onChange} onBlur={this.handleFocusOut} value={this.props.value
                  ? this.props.value
                  : ''} disabled={this.props.disabled} autoComplete={this.props.autocomplete?"off":""} required={this.props.required} className={((isEmpty(this.props.value) || this.props.value.trim() === "" || (this.props.error && this.props.error.toUpperCase().indexOf("EMAIL")> -1)) && this.props.error)?"input error":'input'} error={this.props.error}
                  />
                  {this.props.error && !this.state.hideToolTip?<Tooltip placement="bottom" id="tooltip-bottom" className="in">{this.props.error}</Tooltip>:null}
              <div>{this.props.children}</div>
            </div>);

        default:
           return (<div>
            <input ref={this.props.name}  maxLength = {this.props.maxlength} onFocus={this.handleOnFocus} onKeyUp={this.handleChange} type="text" name={this.props.name}  aria-label={this.props.name} onChange={this.props.onChange} onBlur={this.handleFocusOut} value={this.props.value
                ? this.props.value
                : ''} disabled={this.props.disabled} autoComplete={this.props.autocomplete?"off":""} required={this.props.required} className={((isEmpty(this.props.value) || this.props.value.trim() === "" || (this.props.error && this.props.error.toUpperCase().indexOf("EMAIL")> -1)) && this.props.error)?"input error":'input'} error={this.props.error}
                />
                {this.props.error && !this.state.hideToolTip?<Tooltip placement="bottom" id="tooltip-bottom" className="in">{this.props.error}</Tooltip>:null}
            <div>{this.props.children}</div>
          </div>)
      }
    }

    return (<div>
     <input ref={this.props.name}  maxLength = {this.props.maxlength} onFocus={this.handleOnFocus} onKeyUp={this.handleChange} type="text" name={this.props.name} aria-label={this.props.name}  onChange={this.props.onChange} onBlur={this.handleFocusOut} value={this.props.value
         ? this.props.value
         : ''} disabled={this.props.disabled} autocomplete={this.props.autocomplete?"off":""} required={this.props.required} className={((isEmpty(this.props.value) || this.props.value.trim() === "" || (this.props.error && this.props.error.toUpperCase().indexOf("EMAIL")> -1)) && this.props.error)?"input error":'input'} error={this.props.error}
         />
         {this.props.error && !this.state.hideToolTip?<Tooltip placement="bottom" id="tooltip-bottom" className="in">{this.props.error}</Tooltip>:null}
     <div>{this.props.children}</div>
    </div>)

  }

  render() {



    return (<div >{
        !this.props.isHidden
          ? <Col className={!this.props.fullRow?'FormField col-xs-12 col-sm-6 col-md-6': 'FormField col-xs-12 col-sm-12 col-md-12'}>
              <fieldset>
                <div className='FormMultiSelectTitle'>{this.props.title}{this.props.required?<span className="requiredAsterik"> *</span>:<span></span>}</div>
                <div>{this.renderField(this.props.name)}</div>
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
      {<FormField disabled={props.editMode} title={props.formTitles[name]} name={name} {...field}  {...props}  touch={touch} error={error}/>}

    </div>
  )
}


export default TextInput;
