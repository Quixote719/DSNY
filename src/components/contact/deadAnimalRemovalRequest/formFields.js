import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import {Field} from 'formik'
import {Titles} from './constants'
import '../../../content/styles/compostRequest.css';
import FormAddressAutocomplete from '../formAddressAutocomplete'

// Our inner form component which receives our form's state and updater methods as props
const CompostRequestFormElements = (props) => {
  const {
    values,
    handledropDown,
    setFieldValue,
  } = props;
  
  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    <FormHeader title='Online Complaint Form'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <div>
      <FormAddressAutocomplete/>
    </div>
    <Field component={DropdownInput} name="ExactLocationId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.ExactLocation} disabled={values.editMode} {...props} required/>
    <Field component={TextInput} name="OtherLocation" {...props} isHidden={values.ExactLocationId !== 4} maxlength={"25"}/>
    <Field component={TextInput} name="AdditionalLocation" {...props} fullRow={true} maxlength={"100"}/>

    <FormSectionHeader title={Titles.sectionTwo}/>
    <Field component={DropdownInput} name="AnimalId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.Animals} disabled={values.editMode} {...props} required/>
    <Field component={TextInput} name="OtherAnimal" {...props} isHidden={values.AnimalId !== 8} maxlength={"25"}/>
        
    <FormSectionHeader title={Titles.sectionThree}/>
    <Field component={CheckBoxInput} name={"IsAnonymous"} {...props}/>
    <Field component={TextInput} name="FirstName" {...props} isHidden={values.IsAnonymous == true}  required={values.IsAnonymous !== true} maxlength={"25"}/>
    <Field component={TextInput} name="LastName" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true} maxlength={"25"}/>
    <Field component={TextInput} name="Email" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true} maxlength={"50"}/>
    <Field component={TextInput} name="ConfirmEmail" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true} maxlength={"50"}/>
    <Field component={TextInput} name="Phone" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true} maxlength={"21"}/>    
  </fieldset>)
};

export default CompostRequestFormElements;