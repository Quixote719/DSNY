import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import MultiSelectInput from '../multiselect_field'
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import DateTimePickerInput from '../dateTimepicker_field'
import TextAreaInput from '../textarea_field';
import {Field} from 'formik'
import {Titles} from './constants'
import '../../../content/styles/compostRequest.css';
import FormAddressAutocomplete from '../formAddressAutocomplete'


// Our inner form component which receives our form's state and updater methods as props
const EwastePickUpRequestFormElements = (props) => {
  const {
    values,
    handledropDown,
    setFieldValue,
  } = props;

  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    <FormHeader title='Online Service Request Form'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <div><FormAddressAutocomplete/></div>
    <FormSectionHeader title={Titles.sectionFour}/>
    <Field component={TextInput} name="FirstName" {...props}/>
    <Field component={TextInput} name="LastName" {...props}/>
    <Field component={TextInput} name="PrimaryPhone" {...props}/>
    <Field component={TextInput} name="Email" {...props}/>
    <Field component={TextInput} name="ConfirmEmail" {...props}/>
    <Field component={TextInput} name="PrimaryPhone" {...props}/>
  </fieldset>)
};

export default EwastePickUpRequestFormElements;
