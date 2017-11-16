import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
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
import FormAddressAutocomplete from '../formAddressAutocomplete'


// Our inner form component which receives our form's state and updater methods as props
const CompostRequestFormElements = (props) => {
  const {
    values,
    setFieldValue,
  } = props;

  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    <div>
      <FormHeader title='Collection Bin on Public Property Removal Request '/>
      <div className="container">
        <p>Use this form to submit your request OR call the NYC Citizen Service Center at 3-1-1. Online requests may not be reviewed until the next business day. Call 311 for urgent situations. (Javascript must be enabled in order to submit a valid request)</p>
        <p>It is illegal to place collection bins on NYC property or on any public sidewalk or roadway. Use this form to request removal of collection bins located on public streets or areas</p>
      </div>    
    </div>
    <div className='patternLineGreen'></div>
    <FormHeader title='Online Application'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <div>
      <FormAddressAutocomplete/>
    </div>
    <Field component={TextInput} name="BinLocationAdditionalLocationInfo" {...props} fullRow={true} maxlength={"100"}/>
    <FormSectionHeader title={Titles.sectionTwo}/>
    <Field component={TextInput} name="BinColor" {...props} required maxlength={"20"}/>
    <Field component={DateTimePickerInput} name="ObservationDate" {...props} onChange={setFieldValue} required/>
    <Field component={DropdownInput} name="BinTypeId" {...props} onChange={setFieldValue} options={values.BinTypeList} disabled={values.editMode} {...props} />
    <Field component={TextInput} name="OtherCollectionDescribe" {...props} isHidden={values.BinTypeId !== 3} maxlength={"25"}/>
    <FormSectionHeader title={Titles.sectionThree}/>
    <Field component={TextInput} name="OrganizationName" {...props} fullRow={true} maxlength={"25"} required/>
    <Field component={TextInput} name="OrganizationAddressAsEntered" {...props} fullRow={true} maxlength={"50"} required/>
    <Field component={TextInput} name="OrganizationApartment" {...props} required maxlength={"10"}/>
    <Field component={TextInput} name="OrganizationPhone" {...props} required maxlength={"21"}/>
    <FormSectionHeader title={Titles.sectionFour}/>
    <Field component={TextInput} name="FirstName" {...props} required maxlength={"25"}/>
    <Field component={TextInput} name="LastName" {...props} required maxlength={"25"}/>
    <Field component={TextInput} name="Email" {...props} required maxlength={"50"}/>
    <Field component={TextInput} name="ConfirmEmail" {...props} required maxlength={"50"}/>
    <Field component={TextInput} name="Phone" {...props} required maxlength={"25"}/>
  </fieldset>)
};

export default CompostRequestFormElements;
