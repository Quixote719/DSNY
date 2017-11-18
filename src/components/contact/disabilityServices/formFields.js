import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import {Field} from 'formik'
import {Titles} from './constants'
import '../../../content/styles/compostRequest.css';
import TextAreaInput from '../textarea_field';
import FormAddressAutocomplete from '../formAddressAutocomplete'

// Our inner form component which receives our form's state and updater methods as props
const CompostRequestFormElements = (props) => {
  const {
    values,
    handledropDown,
    setFieldValue,
  } = props;
  
  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    <div>
      <FormHeader title='Disability Services'/>
      <div className="container">
        <p>Use this form to submit your request OR call the NYC Citizen Service Center at 3-1-1. Online requests may not be reviewed until the next business day. Call 311 for urgent situations. (Javascript must be enabled in order to submit a valid request)</p>
        <p>It is illegal to place collection bins on NYC property or on any public sidewalk or roadway. Use this form to request removal of collection bins located on public streets or areas</p>
      </div>    
    </div>
    <div className='patternLineGreen'></div>
    <FormHeader title='Online Contact Form'/>
    <Field component={TextInput} name="Name" {...props} required maxlength={"50"}/>
    <Field component={TextInput} name="Email" {...props} required maxlength={"50"}/>
    <Field component={TextInput} name="Subject" {...props} required fullRow={true} maxlength={"200"}/>
    <Field component={TextAreaInput} name="Message" {...props} required maxlength={"5000"}/>
  </fieldset>)
};

export default CompostRequestFormElements;