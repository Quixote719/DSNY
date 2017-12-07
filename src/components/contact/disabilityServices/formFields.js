import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import FormHeaderSmallSize from '../form_header_SmallSize';
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
    <FormHeaderSmallSize title='Online Contact Form' information={`<span class="requiredAsterik"> * </span>Denotes required field`}/>
    <Field component={TextInput} name="Name" {...props} required maxlength={"50"} disabled={values.editMode}/>
    <Field component={TextInput} name="Email" {...props} required maxlength={"50"} disabled={values.editMode}/>
    <Field component={TextInput} name="Subject" {...props} required fullRow={true} maxlength={"200"} disabled={values.editMode}/>
    <Field component={TextAreaInput} name="Message" {...props} required disabled={values.editMode} />
  </fieldset>)
};

export default CompostRequestFormElements;