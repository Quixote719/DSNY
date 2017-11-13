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

// Our inner form component which receives our form's state and updater methods as props
const CompostRequestFormElements = (props) => {
  const {
    values,
    handledropDown,
    setFieldValue,
  } = props;
  
  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    <FormHeader title='Online Application'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <div>
      'search box validation of address comes up'
    </div>
    <Field component={DropdownInput} name="ExactLocationId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.ExactLocation} disabled={values.editMode} {...props} required/>
    <Field component={TextInput} name="OtherLocation" {...props} isHidden={values.ExactLocationId !== 4}/>
    <Field component={TextInput} name="AdditionalLocation" {...props}/>

    <FormSectionHeader title={Titles.sectionTwo}/>
    <Field component={DropdownInput} name="AnimalId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.Animals} disabled={values.editMode} {...props} required/>
    <Field component={TextInput} name="OtherAnimal" {...props} isHidden={values.AnimalId !== 8}/>
        
    <FormSectionHeader title={Titles.sectionThree}/>
    <Field component={CheckBoxInput} name={"IsAnonymous"} {...props}/>
    <Field component={TextInput} name="FirstName" {...props} isHidden={values.IsAnonymous == true}  required={values.IsAnonymous !== true}/>
    <Field component={TextInput} name="LastName" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true}/>
    <Field component={TextInput} name="Email" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true}/>
    <Field component={TextInput} name="Email" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true}/>
    <Field component={TextInput} name="Phone" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true}/>
    
  </fieldset>)
};

export default CompostRequestFormElements;