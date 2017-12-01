import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import FormHeaderSmallSize from '../form_header_SmallSize';
import MultiSelectInput from '../multiselect_field'
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
import FormTitleCheckBoxes from '../form_Title_CheckBoxes';
import {Col} from 'react-bootstrap';

// Our inner form component which receives our form's state and updater methods as props
const CompostRequestFormElements = (props) => {
  const {
    values,
    setFieldValue,
  } = props;

  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    <FormHeaderSmallSize title='Online Rporting Form' information='All fields are required unless indicated as optional'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <Field component={TextInput} name="AgencyName" {...props} required maxlength={"100"} disabled={values.editMode}/>
    <Field component={TextInput} name="Title" {...props} required maxlength={"25"} disabled={values.editMode}/>
    <Field component={TextInput} name="FirstName" {...props} required maxlength={"25"} disabled={values.editMode}/>
    <Field component={TextInput} name="LastName" {...props} required maxlength={"25"} disabled={values.editMode}/>
    <Field component={TextInput} name="Phone" {...props} required maxlength={"21"} disabled={values.editMode}/>   
    <Field component={DropdownInput} name="PhoneTypeId" {...props}  onChange={setFieldValue} options={values.PhoneTypes} disabled={values.editMode} required/>
    <Field component={TextInput} name="Email" {...props} required maxlength={"50"} disabled={values.editMode}/>
    <Field component={TextInput} name="ConfirmEmail" {...props} required maxlength={"50"} disabled={values.editMode}/>
    <FormSectionHeader title={Titles.sectionTwo}/>
    <Field component={FileDropZone} name="files1" {...props} value={values.files1} header='FILE #1' note='You can upload up to 3 files, but the total size of all files uploaded cannot exceed 10 MB.' onChange={setFieldValue} disabled={values.editMode}/>
    <Field component={FileDropZone} name="files2" {...props} value={values.files2} header='FILE #2' onChange={setFieldValue} disabled={values.editMode}/>
    <Field component={FileDropZone} name="files3" {...props} value={values.files3} header='FILE #3' onChange={setFieldValue} disabled={values.editMode}/>
    <Field component={TextAreaInput} name="Message" {...props} disabled={values.editMode}/>
  </fieldset>)
};

export default CompostRequestFormElements;
