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
      <FormAddressAutocomplete name="AddressAsEntered" title={Titles.AddressAsEntered} {...props} onChange={setFieldValue} disabled={values.editMode} redAstreix={true}/>
    </div>
    <Field component={TextInput} name="OrganizationName" {...props}  maxlength={"50"} disabled={values.editMode} required fullRow={true}/>
    <Field component={DropdownInput} name="OrganizationTypeId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.OrganizationTypes} disabled={values.editMode} required/>
    <Field component={TextInput} name="OtherOrganizationType" {...props}  maxlength={"25"} disabled={values.editMode} required isHidden={values.OrganizationTypeId !== 8} required={values.OrganizationTypeId ==8}/>
    <FormSectionHeader title={Titles.NonProfitsectionThree}/>    
    <Field component={TextInput} name="FirstName" {...props}  maxlength={"25"} disabled={values.editMode} required/>
    <Field component={TextInput} name="LastName" {...props}  maxlength={"25"} disabled={values.editMode} required/>
    <Field component={TextInput} name="OrganizationTitle2" {...props}  maxlength={"50"} disabled={values.editMode} required/>
    <Field component={TextInput} name="Email" {...props}  maxlength={"50"} disabled={values.editMode} required/>
    <Field component={TextInput} name="Phone" {...props} maxlength={"21"} disabled={values.editMode} required/>
    <Field component={DropdownInput} name="PhoneTypeId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.PhoneTypes} disabled={values.editMode} required/> 
    <FormTitleCheckBoxes title="HAVE YOU SPOKEN WITH MEMBERS OF YOUR BUILDING'S FACILITIES/MAINTENANCE STAFF ABOUT THE PROGRAM" redAstreix={true}/>
    <Field component={DropdownInput} name="NonProfitHasInformedStaffAboutProgram" {...props} hideAsterix={true} ondropDownChange={handledropDown} onChange={setFieldValue} disabled={values.editMode} required/>    
    <FormSectionHeader title={Titles.NonProfitsectionFour}/>
    <Field component={TextInput} name="OrganizationPersonFirstName" {...props}  maxlength={"25"} disabled={values.editMode} required/>
    <Field component={TextInput} name="OrganizationPersonLastName" {...props}  maxlength={"25"} disabled={values.editMode} required/>
    <Field component={TextInput} name="OrganizationTitle1" {...props}  maxlength={"50"} disabled={values.editMode} required/>
    <Field component={TextInput} name="OrganizationPersonEmail" {...props}  maxlength={"50"} disabled={values.editMode} required/>
    <Field component={TextInput} name="OrganizationPersonPhone" {...props}  maxlength={"21"} disabled={values.editMode} required/>    
    <Field component={DropdownInput} name="OrganizationPhoneTypeId" title={Titles.PhoneType} {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.OrganizationPhoneTypes} disabled={values.editMode} required/>
    <FormSectionHeader title={Titles.sectionFive}/>
    <Field component={DropdownInput} name="AwarenessSourceId" title={Titles.AwarenessSources} {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.AwarenessSources} disabled={values.editMode}/>
    <Field component={TextInput} name="OtherAwarenessSource" {...props} maxlength={"50"} disabled={values.editMode}/>
    <Field component={TextAreaInput} name="Comments" {...props} disabled={values.editMode}/>
  </fieldset>)
};

export default CompostRequestFormElements;
