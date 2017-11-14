import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import MultiSelectInput from '../multiselect_field'
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import DateTimePickerInput from '../dateTimepicker_field'
import TextAreaInput from '../textarea_field';
import Nstepper from './pickup_request_stepper'
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

  return (
    <fieldset className='disabledContactForm' disabled={values.editMode}>
    <FormHeader title='Online Service Request Form'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <div><FormAddressAutocomplete/></div>
    <FormSectionHeader title={Titles.sectionTwo}/>
    <Nstepper header='ELECTRONIC CATEGORY (Maximum of 20 items including no more than 5 TVs per request)' tableHeader='Electronic Category'/>
    <FormSectionHeader title={Titles.sectionThree}/>
    <Field component={TextInput} name="FirstName" {...props} required/>
    <Field component={TextInput} name="LastName" {...props} required/>
    <Field component={TextInput} name="Email" {...props} required/>
    <Field component={TextInput} name="ConfirmEmail" {...props} required/>
    <Field component={TextInput} name="Phone" {...props} required/>
  </fieldset>
)
};

export default EwastePickUpRequestFormElements;
