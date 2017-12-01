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
import {TenPlusTitles, TenPlusTitles} from './constants'
import '../../../content/styles/compostRequest.css';
import FormAddressAutocomplete from '../formAddressAutocomplete';
import FormTitleCheckBoxes from '../form_Title_CheckBoxes';

// Our inner form component which receives our form's state and updater methods as props
const CompostRequestFormElements = (props) => {
  const {
    values,
    setFieldValue,
  } = props;

  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    <FormSectionHeader title={TenPlusTitles.sectionTwo}/>
    <div>
      <FormAddressAutocomplete name="AddressAsEntered" title={TenPlusTitles.AddressAsEntered} {...props} value="" disabled={values.editMode}/>
    </div>
    <Field component={TextInput} name="PropertyName" {...props} maxlength={"100"} disabled={values.editMode}/>
    <Field component={TextInput} name="PropertyUnitCount" {...props} maxlength={"100"} disabled={values.editMode}/>
    <Field component={DropdownInput} name="SiteClassificationId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.SiteClassifications} disabled={values.editMode} required/>
    <FormSectionHeader title={TenPlusTitles.sectionThree}/>
    <Field component={TextInput} name="FirstName" {...props}  maxlength={"25"} disabled={values.editMode}/>
    <Field component={TextInput} name="LastName" {...props}  maxlength={"25"} disabled={values.editMode}/>
    <Field component={TextInput} name="Email" {...props}  maxlength={"50"} disabled={values.editMode}/>
    <Field component={TextInput} name="ConfirmEmail" {...props} maxlength={"50"} disabled={values.editMode}/>
    <Field component={TextInput} name="Phone" {...props} maxlength={"21"} disabled={values.editMode}/>  
    <Field component={DropdownInput} name="PhoneTypeId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.PhoneTypes} disabled={values.editMode} required/>
    <FormSectionHeader title={TenPlusTitles.sectionFour}/>
    <Field component={TextInput} title="MANAGEMENT COMPANY" name="CompanyName" {...props} maxlength={"50"} disabled={values.editMode}/>
    <Field component={TextInput} title="CONTACT PERSON TITLE" name="Title" {...props} maxlength={"25"} disabled={values.editMode}/>
    <Field component={TextInput} title="CONTACT PERSON FIRST NAME" name="FirstName2" {...props} maxlength={"25"} disabled={values.editMode}/>
    <Field component={TextInput} title="CONTACT PERSON LAST NAME" name="FirstName2" {...props} maxlength={"25"} disabled={values.editMode}/>
    <Field component={TextInput} title="ADDRESS" name="AddressAsEntered2" {...props} maxlength={"25"} disabled={values.editMode}/>  
  </fieldset>)
};

export default CompostRequestFormElements;
