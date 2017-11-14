import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import MultiSelectInput from '../multiselect_field'
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import LongTextInput from '../form_field_full';
import DropdownInput from '../dropdown_field'
import DateTimePickerInput from '../dateTimepicker_field'
import TextAreaInput from '../textarea_field';
import {Field} from 'formik'
import {Titles} from './constants'
import '../../../content/styles/compostRequest.css';
import '../../../content/styles/webForm.css';
import FormAddressAutocomplete from '../formAddressAutocomplete'


// Our inner form component which receives our form's state and updater methods as props
const CompostRequestFormElements = (props) => {
  const {
    values,
    handledropDown,
    setFieldValue,
  } = props;

  return (<fieldset className='disabledContactForm' disabled={values.editMode}>

    <FormHeader title='Online Registration'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <div>
      <FormAddressAutocomplete/>
    </div>
    <Field component={LongTextInput} name="Apartment" {...props} required/>
    <FormSectionHeader title={Titles.sectionTwo}/>
    <Field component={LongTextInput} name="RegistrantBusinessName" {...props} required/>
    <Field component={TextInput} name="RegistrantFirstName" {...props} required/>
    <Field component={TextInput} name="RegistrantLastName" {...props} required/>
    <Field component={TextInput} name="RegistrantTitle" {...props} required/>
    <Field component={TextInput} name="RegistrantEmail" {...props} required/>
    <Field component={TextInput} name="RegistrantPhone" {...props} required/>
    <Field component={DropdownInput} name="RegistrantPhoneTypeId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.RegistrantPhoneTypes} disabled={values.editMode}/>
    <FormSectionHeader title={Titles.sectionThree}/>

    <Field component={LongTextInput} name="AddressAsEntered" {...props} required/>
    <Field component={TextInput} name="MailingApartment" {...props} required/>

    <FormSectionHeader title={Titles.sectionFour}/>
    <Field component={MultiSelectInput} name="BusinessActivityTypes" {...props} onMultiSelect={setFieldValue} options={values.BusinessActivityTypes}/>
    <Field component={LongTextInput} name="OtherDescribe" {...props} isHidden={!values.BusinessActivityTypes.Values[5].Selected} required/>
    <FormSectionHeader title={Titles.sectionFive}/>
    <Field component={MultiSelectInput} name="OnSiteProcessingTypes" {...props} onMultiSelect={setFieldValue} options={values.OnSiteProcessingTypes}/>



    <FormSectionHeader title={Titles.sectionSix}/>
    <Field component={TextInput} name="EquipmentManufacturer" {...props} required/>
    <Field component={TextInput} name="EquipmentModelNo" {...props} required/>
    <Field component={TextInput} name="EquipmentDescribeSystem" {...props} required/>
    <Field component={TextInput} name="EquipmentMinimumCapacity" {...props} required/>
    <Field component={TextInput} name="EquipmentMaximumCapacity" {...props} required/>
    <Field component={TextInput} name="InstallationDate" {...props} required/>
    <FormSectionHeader title={Titles.sectionSeven}/>
    <Field component={DropdownInput} name="GreaseInterceptorTypeId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.GreaseInterceptorTypes} disabled={values.editMode} {...props} />
    <Field component={TextInput} name="GreaseInterceptorManufacturer" {...props} required/>
    <Field component={TextInput} name="GreaseInterceptorModelNo" {...props} required/>
    <Field component={TextInput} name="GreaseInterceptorCapacity" {...props} required/>
    <Field component={TextInput} name="GreaseInterceptorFlow" {...props} required/>
  </fieldset>)
};

export default CompostRequestFormElements;
