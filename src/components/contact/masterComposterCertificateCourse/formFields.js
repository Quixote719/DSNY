import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import FormHeaderSmallSize from '../form_header_SmallSize';
import MultiSelectInput from '../multiselect_field';
import * as action from '../../../actions/actions_home';
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import DateTimePickerInput from '../dateTimepicker_field'
import TextAreaInput from '../textarea_field';
import FileDropZone from '../form_file_dropzone';
import {Field} from 'formik'
import {Titles} from './constants'
import '../../../content/styles/compostRequest.css';
import FormAddressAutocomplete from '../formAddressAutocomplete';
 

// Our inner form component which receives our form's state and updater methods as props
const masterComposerCertificateCourseElements = (props) => {
  
  this.state = {
    AddressValue : "",
  }

  
  const getAdressValue= () =>{
         console.log('abcd');                     
  }


  const {
    values,
    handledropDown,
    setFieldValue,
  } = props;
  
  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    
    <FormHeaderSmallSize title='Online Application' information='All fields are required unless indicated as optional'/>
    
    <FormSectionHeader title={Titles.sectionOne}/>
    <FormAddressAutocomplete name="Address" />
    <Field component={TextInput} name="Apartment" {...props} maxlength="100"/>
    
    <FormSectionHeader title={Titles.SectionTwo} />
    <Field component={DropdownInput} name="PrefferedLocation" {...props} ondropDownChange={handledropDown} onChange={setFieldValue}  options={values.PrefferedLocationType} disabled={values.editMode}/>
    
    <FormSectionHeader title={Titles.SectionThree} />
    <Field component={DropdownInput} name="AppliedToProgramBefore" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} disabled={values.editMode}/> 
    <Field component={TextAreaInput} name="DescribeExperience" maxlength="1500" {...props}/>
    <Field component={TextAreaInput} name="WhyYouWantToBecome" maxlength="1500" {...props} />
    <Field component={TextAreaInput} name="HowWouldYouUse" maxlength="1500" {...props} />
    <Field component={TextAreaInput} name="CommunityAffiliations" maxlength="1500" {...props} />

    <FormSectionHeader title={Titles.SectionFour} />
    <Field component={TextInput} name="FirstName" {...props} maxlength="100"/>
    <Field component={TextInput} name="LastName" {...props} maxlength="100"/>
    <Field component={TextInput} name="Email" {...props} maxlength="100"/>
    <Field component={TextInput} name="ConfirmEmail" {...props} maxlength="100"/>
    <Field component={TextInput} name="Phone" {...props} maxlength="100" />

  </fieldset>)
};

export default masterComposerCertificateCourseElements;