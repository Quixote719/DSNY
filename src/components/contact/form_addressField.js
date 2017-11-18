import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import MaskedInput from 'react-text-mask';
import {Row, Col, Tooltip} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';
import {Formik, Field} from 'formik';
import isEmpty from 'lodash/isEmpty'
import FormAddressAutocompleteNoValidation from '../../components/contact/formAdressAutoCmpleteNoValidation';

class FormField extends Component {

  constructor(props) {
    super(props);
    console.log(props);
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
    (isEmpty(this.props.value)) ? this.setState({hideToolTip: false}) : this.setState({hideToolTip: true});
  }

  handleFocusOut(event){
    this.setState({hideToolTip: true});
  }

  renderField() {          
           return (<div>
            <FormAddressAutocompleteNoValidation ref={this.props.name}  maxLength = {this.props.maxlength} onFocus={this.handleChange} onKeyUp={this.handleChange} type="text" name={this.props.name} onChange={this.props.onChange} onBlur={this.handleFocusOut} 
               disabled={this.props.disabled} required={this.props.required} maxLength={this.props.maxlength} className={(isEmpty(this.props.value) && this.props.error)?"input error":'input'} error={this.props.error}
                />
                  <Tooltip placement="bottom" id="tooltip-bottom" className={this.props.error && !this.state.hideToolTip?"in":''}>{this.props.error}</Tooltip>
            <div>{this.props.children}</div>
                  </div>)
      }
  
  render() {

    

    return (<div >{
        !this.props.isHidden
          ? <Col className={!this.props.fullRow?'FormField col-xs-12 col-sm-6 col-md-6': 'FormField col-xs-12 col-sm-12 col-md-12'}>
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


const AdressInput = ({
  field: { name,value,...field }, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  className,
  label,
  ...props
})  => {
  const error = errors[name]
  const touch = touched[name]
  return (
    <div >
      {<FormField disabled={props.editMode} title={props.formTitles[name]} value={props.value} name={name} {...field}  {...props}  touch={touch} error={error}/>}
      
    </div>
  )
}


export default AdressInput;