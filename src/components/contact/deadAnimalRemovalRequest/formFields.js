import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import CheckBoxInput from '../form_boolean';
import FormHeaderSmallSize from '../form_header_SmallSize';
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
    <FormHeaderSmallSize title='Online Complaint Form' information='All fields are required unless indicated as optional'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <div>
      <FormAddressAutocomplete name="AddressAsEntered" title={Titles.AddressAsEntered} {...props}   value="" disabled={values.editMode}/>
    </div>
    <Field component={DropdownInput} name="DeadAnimalLocationId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.DeadAnimalLocations} disabled={values.editMode} {...props} required/>
    <Field component={TextInput} name="OtherDeadAnimalLocation" {...props} isHidden={values.DeadAnimalLocationId !== 4} required={values.DeadAnimalLocationId == 4} maxlength={"25"} disabled={values.editMode}/>
    <Field component={TextInput} name="AdditionalLocation" {...props} fullRow={true} maxlength={"100"}/>

    <FormSectionHeader title={Titles.sectionTwo}/>
    <Field component={DropdownInput} name="AnimalId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.Animals} disabled={values.editMode} {...props} required/>
    <Field component={TextInput} name="OtherAnimal" {...props} isHidden={values.AnimalId !== 8} required={values.AnimalId == 8} maxlength={"25"} disabled={values.editMode}/>
        
    <FormSectionHeader title={Titles.sectionThree}/>
    <Field component={CheckBoxInput} name={"IsAnonymous"} {...props}/>
    <Field component={TextInput} name="FirstName" {...props} isHidden={values.IsAnonymous == true}  required={values.IsAnonymous !== true} maxlength={"25"} disabled={values.editMode}/>
    <Field component={TextInput} name="LastName" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true} maxlength={"25"} disabled={values.editMode}/>
    <Field component={TextInput} name="Email" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true} maxlength={"50"} disabled={values.editMode}/>
    <Field component={TextInput} name="ConfirmEmail" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true} maxlength={"50"} disabled={values.editMode}/>
    <Field component={TextInput} name="Phone" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true} maxlength={"21"} disabled={values.editMode}/>    
  </fieldset>)
};

export default CompostRequestFormElements;