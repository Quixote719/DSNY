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
import '../../../content/styles/compostRequest.css';
import FormAddressAutocomplete from '../formAddressAutocomplete'
import FormTitleCheckBoxes from '../form_Title_CheckBoxes';
 

// Our inner form component which receives our form's state and updater methods as props
const siteVisitRequestFormElements = (props) => {
  const {
    values,
    handledropDown,
    setFieldValue,
  } = props;
  
  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    
    <FormHeaderSmallSize title='Online Service Request Form' information='All fields are required unless indicated as optional'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <FormAddressAutocomplete title={Titles.AddressAsEntered}  name="AddressAsEntered" {...props}   value="" disabled={values.editMode} />
    <Field component={TextInput} name="Apartment" fullRow= {true} {...props} maxlength="100"/>
    <FormSectionHeader title={Titles.sectionTwo} />
    <Field component={DropdownInput} name="CategorizeSiteTypeId" {...props}  required ondropDownChange={handledropDown} onChange={setFieldValue} options={values.CategorizeSiteTypes} disabled={values.editMode}/>
    <Field component={TextInput} name="SpecifyOther" {...props} maxlength="100" isHidden={values.CategorizeSiteTypeId !== 7} required/>
    <Field component={TextInput} name="NameOfSite" {...props} maxlength="100" required/>
    <Field component={TextInput} name="AlternateSiteName" {...props} maxlength="100" required/>
    <Field component={TextAreaInput} name="Notes" {...props}  required/>
    <Field component={TextAreaInput} name="CurrentRecyclingSetup" {...props}  required/>
    
    <FormSectionHeader title={Titles.sectionThree} />
    <Field component={DateTimePickerInput} name="Visit1PotentialDate" {...props} onChange={setFieldValue} defaultValue={'__/__/____'} />
    <Field component={DateTimePickerInput} name="Visit2PotentialDate" {...props} onChange={setFieldValue} defaultValue={'__/__/____'}/>

    <FormSectionHeader title={Titles.sectionFour} />
    <Field component={TextInput} name="PfirstName" {...props} maxlength="25" required/>
    <Field component={TextInput} name="PLastName" {...props} maxlength="25" required/>
    <Field component={TextInput} name="PTitle" {...props} maxlength="35" required/>
    <Field component={TextInput} name="PEmail" {...props} maxlength="50" required/>
    <Field component={TextInput} name="PPhone" {...props} maxlength="21" required/>
    <Field component={DropdownInput} name="PhoneTypeId" {...props}  ondropDownChange={handledropDown} onChange={setFieldValue} options={values.PrimarySelectedPhoneType} disabled={values.editMode}/>

    <FormSectionHeader title={Titles.sectionFive} />
    <Field component={TextInput} name="SfirstName" {...props} maxlength="25" required/>
    <Field component={TextInput} name="SLastName" {...props} maxlength="25" required/>
    <Field component={TextInput} name="STitle" {...props} maxlength="35" required/>
    <Field component={TextInput} name="SEmail" {...props} maxlength="50" required/>
    <Field component={TextInput} name="SPhone" {...props} maxlength="21" required/>
    <Field component={DropdownInput} name="SPhoneTypeId" {...props}  ondropDownChange={handledropDown} onChange={setFieldValue} options={values.PrimarySelectedPhoneType} disabled={values.editMode}/>

  </fieldset>)
};

export default siteVisitRequestFormElements;