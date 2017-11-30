import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import FormHeaderSmallSize from '../form_header_SmallSize';
import MultiSelectInput from '../multiselect_field';
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import DateTimePickerInput from '../dateTimepicker_field'
import TextAreaInput from '../textarea_field';
import FileDropZone from '../form_file_dropzone';
import {Field} from 'formik'
import {Titles} from './constants'
import FormAddressAutocomplete from '../formAddressAutocomplete'
 

// Our inner form component which receives our form's state and updater methods as props
const sanitationTruckSpillageFormElements = (props) => {
  const {
    values,
    handledropDown,
    setFieldValue,
  } = props;
  
  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    
    <FormHeaderSmallSize title='Online Service Request Form' information='All fields are required unless indicated as optional'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <FormAddressAutocomplete name="AddressAsEntered"  title={Titles.AddressAsEntered} {...props}   value="" disabled={values.editMode}/>
    <Field component={TextInput} name="AdditionalLocationInfo" fullRow={true} {...props} maxlength="100" disabled={values.editMode}/>

    <FormSectionHeader title={Titles.sectionTwo} />
    <Field component={TextAreaInput} name="Description" {...props} maxlength="1500" required disabled={values.editMode}/>
    <Field component={DateTimePickerInput} name="IncidentDate" {...props} required onChange={setFieldValue} disabled={values.editMode}/>
    <Field component={DropdownInput} name="IncidentTime" {...props} timeField={true} required ondropDownChange={handledropDown} 
    onChange={setFieldValue} options={values.IncidentTimes} disabled={values.editMode}/>
    <Field component={TextInput} name="LicensePlateNumber" {...props} maxlength="10" disabled={values.editMode}/>
    <Field component={TextInput} name="TruckNumber" {...props} maxlength="10" disabled={values.editMode}/>
    
    
    <FormSectionHeader title={Titles.sectionThree} />
    <Field component={TextInput}  name="FirstName" {...props} maxlength="25" disabled={values.editMode}/> 
    <Field component={TextInput}  name="LastName" {...props} maxlength="25" disabled={values.editMode}/> 
    <Field component={TextInput}  name="Email" {...props} maxlength="50" disabled={values.editMode}/>
    <Field component={TextInput} name="ConfirmEmail" {...props} maxlength="50" disabled={values.editMode}/>
    <Field component={TextInput} name="Phone" {...props} maxlength="21" disabled={values.editMode}/>
    
  
  </fieldset>)
};

export default sanitationTruckSpillageFormElements;