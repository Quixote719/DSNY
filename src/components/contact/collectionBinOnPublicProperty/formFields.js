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
import AddressInput from '../form_addressField';
import FormTitleCheckBoxes from '../form_Title_CheckBoxes';


// Our inner form component which receives our form's state and updater methods as props
const CompostRequestFormElements = (props) => {
  const {
    values,
    setFieldValue,
  } = props;

  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    <FormHeaderSmallSize title='Online Application' information='All fields are required unless indicated as optional'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <div>
      <FormAddressAutocomplete name="AddressAsEntered" title={Titles.AddressAsEntered} {...props}   value="" disabled={values.editMode}/>
    </div>
    <Field component={TextInput} name="BinLocationAdditionalLocationInfo" {...props} fullRow={true} maxlength={"100"} disabled={values.editMode}/>
    <FormSectionHeader title={Titles.sectionTwo}/>
    <Field component={TextInput} name="BinColor" {...props} maxlength={"20"} required disabled={values.editMode}/>
    <Field component={DateTimePickerInput} name="ObservationDate" {...props} onChange={setFieldValue} required disabled={values.editMode}/>
    <Field component={DropdownInput} name="BinTypeId" {...props} onChange={setFieldValue} options={values.BinTypeList} disabled={values.editMode} {...props} required/>
    <Field component={TextInput} name="OtherCollectionDescribe" {...props} isHidden={values.BinTypeId !== 3} required={values.BinTypeId !== 3} maxlength={"25"} disabled={values.editMode}/>
    <FormSectionHeader title={Titles.sectionThree}/>
    <Field component={TextInput} name="OrganizationName" {...props} fullRow={true} maxlength={"25"} required disabled={values.editMode}/>
    <Field component={AddressInput} name="OrganizationAddressAsEntered" {...props} fullRow={true} maxlength={"50"} onChange={setFieldValue} disabled={values.editMode} required/>
    <Field component={TextInput} name="OrganizationApartment" {...props} maxlength={"10"} disabled={values.editMode}/>
    <Field component={TextInput} name="OrganizationPhone" {...props} required maxlength={"21"} disabled={values.editMode}/>
    <FormSectionHeader title={Titles.sectionFour}/>
    <Field component={TextInput} name="FirstName" {...props} required maxlength={"25"} disabled={values.editMode}/>
    <Field component={TextInput} name="LastName" {...props} required maxlength={"25"} disabled={values.editMode}/>
    <Field component={TextInput} name="Email" {...props} required maxlength={"50"} disabled={values.editMode}/>
    <Field component={TextInput} name="ConfirmEmail" {...props} required maxlength={"50"} disabled={values.editMode}/>
    <Field component={TextInput} name="Phone" {...props} required maxlength={"25"} disabled={values.editMode}/>
  </fieldset>)
};

export default CompostRequestFormElements;
