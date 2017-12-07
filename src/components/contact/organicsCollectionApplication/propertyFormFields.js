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
import AddressInput from '../form_addressField';


// Our inner form component which receives our form's state and updater methods as props
const CompostRequestFormElements = (props) => {
  const {
    values,
    setFieldValue,
    handledropDown
  } = props;

  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    <FormSectionHeader title={Titles.sectionTwo}/>
    <div>
      <FormAddressAutocomplete name="AddressAsEntered" title="ADDRESS" {...props} value="" disabled={values.editMode}/>
    </div>
    <Field component={TextInput} name="PropertyName" {...props}  maxlength={"25"} disabled={values.editMode} />
    <Field component={TextInput} name="PropertyUnitCount" {...props}  maxlength={"25"} disabled={values.editMode} required/>
    <Field component={DropdownInput} name="SiteClassificationId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.SiteClassifications} disabled={values.editMode} required/>
    <Field component={TextInput} name="OtherSiteClassification" {...props}  maxlength={"25"} disabled={values.editMode} required isHidden={values.SiteClassificationId !== 8} required={values.SiteClassificationId ==8}/>
    <FormSectionHeader title={Titles.PropertySectionThree}/>
    <Field component={TextInput} name="FirstName" {...props}  maxlength={"25"} disabled={values.editMode} required/>
    <Field component={TextInput} name="LastName" {...props}  maxlength={"25"} disabled={values.editMode} required/>
    <Field component={TextInput} name="Email" {...props}  maxlength={"50"} disabled={values.editMode} required/>
    <Field component={TextInput} name="ConfirmEmail" {...props} maxlength={"50"} disabled={values.editMode} required/>
    <Field component={TextInput} name="Phone" {...props} maxlength={"21"} disabled={values.editMode} required/>
    <Field component={DropdownInput} name="PhoneTypeId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.PhoneTypes} disabled={values.editMode} required/>    
    <FormSectionHeader title={Titles.PropertySectionFour}/>
    <Field component={TextInput} name="CompanyName" {...props}  maxlength={"50"} disabled={values.editMode} required/>
    <Field component={TextInput} name="CompanyPersonTitle" {...props}  maxlength={"50"} disabled={values.editMode} required/>
    <Field component={TextInput} name="CompanyPersonFirstName" {...props}  maxlength={"25"} disabled={values.editMode} required/>
    <Field component={TextInput} name="CompanyPersonLastName" {...props}  maxlength={"25"} disabled={values.editMode} required/>
    <Field component={AddressInput} name="CompanyAddressAsEntered" {...props} fullRow={true} maxlength={"50"} onChange={setFieldValue} disabled={values.editMode} required/>
    <Field component={TextInput} name="CompanyApartment" {...props}  maxlength={"21"} disabled={values.editMode} />
    <Field component={TextInput} name="CompanyPersonEmail" {...props}  maxlength={"50"} disabled={values.editMode} required/>
    <Field component={TextInput} name="CompanyPersonPhone" {...props}  maxlength={"21"} disabled={values.editMode} required/>
    <Field component={DropdownInput} name="CompanyPhoneTypeId" title={Titles.PhoneType} {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.CompanyPhoneTypes} disabled={values.editMode} required/>
    <FormTitleCheckBoxes title="HAVE YOU SPOKEN WITH YOUR BUILDING MANAGEMENT ABOUT THE PROGRAM" />
    <Field component={DropdownInput} name="PropertyHasInformedStaffAboutProgram" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} disabled={values.editMode} required/>
    <FormSectionHeader title={Titles.sectionFive}/>
    <Field component={DropdownInput} name="AwarenessSourceId" title={Titles.AwarenessSources} {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.AwarenessSources} disabled={values.editMode} required/>
    <Field component={TextInput} name="OtherAwarenessSource" {...props} maxlength={"50"} disabled={values.editMode}/>
    <Field component={TextAreaInput} name="Comments" {...props} disabled={values.editMode}/>
  </fieldset>)
};

export default CompostRequestFormElements;
