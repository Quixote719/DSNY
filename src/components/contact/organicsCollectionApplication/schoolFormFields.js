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
import {Col} from 'react-bootstrap';


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
      <FormAddressAutocomplete name="AddressAsEntered" title="ADDRESS" {...props} onChange={setFieldValue} disabled={values.editMode}/>
    </div>
    <Field component={TextInput} name="SchoolName" {...props}  maxlength={"25"} disabled={values.editMode} required fullRow={true}/>
    <FormSectionHeader title={Titles.SchoolsectionThree}/>
    <Field component={TextInput} name="FirstName" {...props}  maxlength={"25"} disabled={values.editMode} required/>
    <Field component={TextInput} name="LastName" {...props}  maxlength={"25"} disabled={values.editMode} required/>
    <Field component={TextInput} name="SchoolTitle1" {...props} maxlength={"50"} disabled={values.editMode} required/>
    <Field component={TextInput} name="Email" {...props}  maxlength={"50"} disabled={values.editMode} required/>
    <Field component={TextInput} name="Phone" {...props} maxlength={"21"} disabled={values.editMode} required/>
    <Field component={DropdownInput} name="PhoneTypeId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.PhoneTypes} disabled={values.editMode} required/>
    <FormSectionHeader title={Titles.SchoolsectionFour}/>
    <Field component={TextInput} name="SchoolPersonFirstName" {...props}  maxlength={"25"} disabled={values.editMode} required/>
    <Field component={TextInput} name="SchoolPersonLastName" {...props}  maxlength={"25"} disabled={values.editMode} required/>
    <Field component={TextInput} name="SchoolTitle2" {...props}  maxlength={"50"} disabled={values.editMode} required/>
    <Field component={TextInput} name="SchoolPersonEmail" {...props}  maxlength={"50"} disabled={values.editMode} required/>
    <Field component={TextInput} name="SchoolPersonPhone" {...props}  maxlength={"21"} disabled={values.editMode} required/>
    <Field component={DropdownInput} name="SchoolPhoneTypeId" title={Titles.PhoneType} {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.PhoneTypes} disabled={values.editMode} required/>
    <FormTitleCheckBoxes title="HAVE YOU SPOKEN WITH MEMBERS OF YOUR BUILDING'S FACILITIES/MAINTENANCE STAFF ABOUT THE PROGRAM" redAstreix={true}/>
    <Field component={DropdownInput} name="SchoolHasInformedStaffAboutProgram" {...props} hideAsterix={true} ondropDownChange={handledropDown} onChange={setFieldValue} disabled={values.editMode} required/>
    <FormSectionHeader title={Titles.sectionFive}/>
    <Field component={DropdownInput} name="IsNonprofitSchool" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} disabled={values.editMode} required/>

    <div className="row">
      <Col xs={12} sm={12} md={12}>
        <FormTitleCheckBoxes title="DOES YOUR SCHOOL CURRENTLY RECEIVE DEPARTMENT OF SANITATION COLLECTION?" redAstreix={true}/>
        <Field component={DropdownInput} name="ReceivesDsnyCollection" {...props} hideAsterix={true} ondropDownChange={handledropDown} onChange={setFieldValue} disabled={values.editMode} required/>
      </Col>
    </div>
    <div className="row">
      <Col xs={12} sm={12} md={12}>
        <Field component={DropdownInput} name="UsesPrivateFoodServiceVendor" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} disabled={values.editMode} required/>
      </Col>
    </div>
    <Field component={TextInput} name="PrivateFoodServiceVendorDescription" {...props} fullRow={true} maxlength={"50"} disabled={values.editMode} isHidden={values.UsesPrivateFoodServiceVendor == false || values.UsesPrivateFoodServiceVendor == null} required={values.UsesPrivateFoodServiceVendor == true} />
    <Field component={DropdownInput} name="AwarenessSourceId" title={Titles.AwarenessSources} {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.AwarenessSources} disabled={values.editMode}/>
    <Field component={TextInput} name="OtherAwarenessSource" {...props} maxlength={"50"} disabled={values.editMode}/>
    <Field component={TextAreaInput} name="Comments" {...props} disabled={values.editMode}/>
  </fieldset>)
};

export default CompostRequestFormElements;
