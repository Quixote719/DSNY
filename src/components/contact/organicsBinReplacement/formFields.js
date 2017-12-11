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
import {Col} from 'react-bootstrap';

// Our inner form component which receives our form's state and updater methods as props
const CompostRequestFormElements = (props) => {
  const {
    values,
    handledropDown,
    setFieldValue,
  } = props;
  
  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    <FormHeaderSmallSize title='Online Service Request Form' information={`<span class="requiredAsterik"> * </span>Denotes required field`}/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <div>
      <FormAddressAutocomplete name="AddressAsEntered" required {...props} title={Titles.AddressAsEntered}  value="" disabled={values.editMode}/>
    </div>
    <FormSectionHeader title={Titles.sectionTwo}/>
    <Field component={DropdownInput} name="NumberOfOutdoorBinsId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.NumberOfOutdoorBins} disabled={values.editMode} required />
    <Field component={TextInput} name="BARCodeOrRFID" {...props} maxlength={"50"}/>
    <Field component={DropdownInput} name="ReasonForReplacementListId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.ReasonForReplacementList} disabled={values.editMode} required />
    <Field component={TextInput} name="Comments" {...props} maxlength={"200"} disabled={values.editMode}/>
        
    <FormSectionHeader title={Titles.sectionThree}/>
    <Field component={TextInput} name="FirstName" {...props} required maxlength={"25"} disabled={values.editMode}/>
    <Field component={TextInput} name="LastName" {...props} required maxlength={"25"} disabled={values.editMode}/>
    <Field component={TextInput} name="Email" {...props} required maxlength={"50"} disabled={values.editMode}/>
    <Field component={TextInput} name="ConfirmEmail" {...props} required maxlength={"50"} disabled={values.editMode}/>
    <Field component={TextInput} name="Phone" {...props} required maxlength={"21"} disabled={values.editMode}/>    
    
  </fieldset>)
};

export default CompostRequestFormElements;