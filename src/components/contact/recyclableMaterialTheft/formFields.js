import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import MultiSelectInput from '../multiselect_field'
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import DateTimePickerInput from '../dateTimepicker_field'
import TextAreaInput from '../textarea_field';
import {Field} from 'formik'
import {Titles} from './constants'
import '../../../content/styles/compostRequest.css';
import '../../../content/styles/webForm.css';
import FormAddressAutocomplete from '../formAddressAutocomplete'


// Our inner form component which receives our form's state and updater methods as props
const formFields = (props) => {
  const {
    values,
    handledropDown,
    setFieldValue,
  } = props;

  return (<fieldset className='disabledContactForm' disabled={values.editMode}>

    <FormHeader title='Online Complaint Form'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <div>
      <FormAddressAutocomplete/>
    </div>
    <Field component={TextInput} name="Apartment" fullRow={true} maxlength={10} {...props} />
    <FormSectionHeader title={Titles.sectionTwo}/>
    <Field component={TextAreaInput} name="RemovedMaterialsDescription" {...props} maxlength={5000} />
    <Field component={DateTimePickerInput} name="IncidentDate" {...props} onChange={setFieldValue} defaultValue={values.IncidentDate} />
    <Field component={DropdownInput} name="FromHourOfDayId" {...props} timeField={true} onChange={setFieldValue} options={values.FromHoursOfDay} disabled={values.editMode}/>
    <Field component={TextInput} name="VehicleLicensePlateNumber" maxlength={20} {...props} />
    <Field component={TextInput} name="VehicleState" maxlength={20} {...props} />
    <Field component={CheckBoxInput} name="IsVehicleCommercial" {...props}/>
    <Field component={TextInput} name="VehicleMake" maxlength={20} {...props} />
    <Field component={TextInput} name="VehicleModel" maxlength={20} {...props} />
    <Field component={TextInput} name="VehicleColor" maxlength={20} {...props} />
    <Field component={TextInput} name="VehicleType" maxlength={20} {...props} />
    <Field component={TextAreaInput} name="AdditionalVehicleInfo" maxlength={5000} {...props} />
    <FormSectionHeader title={Titles.sectionThree}/>
    <Field component={CheckBoxInput} name="IsAnonymous" {...props}/>
    <Field component={TextInput} name="FirstName" maxlength={20} {...props} isHidden={values.IsAnonymous} required/>
    <Field component={TextInput} name="LastName" maxlength={20} {...props} isHidden={values.IsAnonymous} required/>
    <Field component={TextInput} name="Email" maxlength={20} {...props} isHidden={values.IsAnonymous} required/>
    <Field component={TextInput} name="ConfirmEmail" maxlength={20} {...props} isHidden={values.IsAnonymous} required/>
    <Field component={TextInput} name="Phone" maxlength={20} {...props} isHidden={values.IsAnonymous} required/>
  </fieldset>)
};

export default formFields;
