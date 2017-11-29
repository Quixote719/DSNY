import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import FormHeaderSmallSize from '../form_header_SmallSize';
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import {Field} from 'formik'
import {Titles} from './constants'
import '../../../content/styles/compostRequest.css';
import FormAddressAutocomplete from '../formAddressAutocomplete';
import FormTitleCheckBoxes from '../form_Title_CheckBoxes';

// Our inner form component which receives our form's state and updater methods as props
const CompostRequestFormElements = (props) => {
  const {
    values,
    handledropDown,
    setFieldValue,
  } = props;
  
  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    <FormHeaderSmallSize title='Online Service Request Form' information='All fields are required unless indicated as optional'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <div>
      <FormTitleCheckBoxes title="NEAREST ADDRESS" />
      <FormAddressAutocomplete name="AddressAsEntered"  {...props}   value="" disabled={values.editMode}/>
    </div>
    <Field component={TextInput} name="AdditionalLocationInfo" {...props} fullRow={true} maxlength={"100"}/>
    <FormSectionHeader title={Titles.sectionTwo}/>
    <Field component={DropdownInput} name="LitterBasketReasonId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.Reasons} disabled={values.editMode} {...props} required/>
    <Field component={TextInput} name="OtherReason" {...props} isHidden={values.LitterBasketReasonId !== 6} required={values.IsAnonymous !== true} maxlength={"25"}/>
    <FormSectionHeader title={Titles.sectionThree}/>
    <Field component={CheckBoxInput} name={"IsAnonymous"} {...props}/>
    <Field component={TextInput} name="FirstName" {...props} isHidden={values.IsAnonymous == true}  required={values.IsAnonymous !== true} maxlength={"25"}/>
    <Field component={TextInput} name="LastName" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true} maxlength={"25"}/>
    <Field component={TextInput} name="Email" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true} maxlength={"50"}/>
    <Field component={TextInput} name="ConfirmEmail" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true} maxlength={"50"}/>
    <Field component={TextInput} name="Phone" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true} maxlength={"21"}/>   
  </fieldset>)
};

export default CompostRequestFormElements;