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
const PrivateReceptableComplaintFormElements = (props) => {
  const {
    values,
    handledropDown,
    setFieldValue,
  } = props;
  
  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    
    <FormHeaderSmallSize title='Online Service Request Form' information='All fields are required unless indicated as optional'/>

    <FormSectionHeader title={Titles.sectionOne}/>
    <FormAddressAutocomplete name="AddressAsEntered"  {...props}   value="" disabled={values.editMode}/>
    <Field component={TextInput} name="AdditionalLocationInfo" fullRow={true} {...props} maxlength="100" />
    <Field component={TextInput} name="ViolatorName" fullRow={true} {...props} maxlength="100" />

    <FormSectionHeader title={Titles.sectionTwo} />
    <Field component={CheckBoxInput} name="IsAnonymous" {...props}/>
    <Field component={TextInput}  name="FirstName" {...props} maxlength="100" required={!props.values['IsAnonymous']}/> 
    <Field component={TextInput}  name="LastName" {...props} maxlength="100" required={!props.values['IsAnonymous']}/> 
    <Field component={TextInput}  name="Email" {...props} maxlength="100" required={!props.values['IsAnonymous']}/>
    <Field component={TextInput} name="ConfirmEmail" {...props} maxlength="100" required={!props.values['IsAnonymous']}/>
    <Field component={TextInput} name="Phone" {...props} maxlength="100" required={!props.values['IsAnonymous']}/>

  </fieldset>)
};

export default PrivateReceptableComplaintFormElements;