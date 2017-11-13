import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import FormHeaderSmallSize from '../form_header_SmallSize'
import MultiSelectInput from '../multiselect_field'
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import DateTimePickerInput from '../dateTimepicker_field'
import TextAreaInput from '../textarea_field';
import {Field} from 'formik'
import {Titles} from './constants'
import '../../../content/styles/compostRequest.css';
import FormAddressAutocomplete from '../formAddressAutocomplete'
 

// Our inner form component which receives our form's state and updater methods as props FullRow= {true
const eventParticipationRequestFormElements = (props) => {
  const {
    values,
    handledropDown,
    setFieldValue,
  } = props;
  
  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    
    <FormHeaderSmallSize title='Online Service Request Form' information='All fields are required unless indicated as optional'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <div>
      <FormAddressAutocomplete />
    </div>
    <Field component={TextInput} name="AdditionalLocationInfo"  {...props} maxlength="4"/>
    <FormSectionHeader title={Titles.sectionTwo}/>
    <Field component={TextInput} name="EventName" {...props} maxlength="4"/>
    <Field component={TextInput} name="AlternateName" {...props} maxlength="4"/>
    <Field component={DateTimePickerInput} name="StartDate" {...props}/>
    <Field component={DateTimePickerInput} name="EndDate" {...props} />
    <Field component={DropdownInput}  name="StartTime" timeField={true} {...props} ondropDownChange={handledropDown} onChange={setFieldValue}  options={values.DailyTimes} disabled={values.editMode}/>
    <Field component={DropdownInput} name="EndTime" timeField={true} {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.DailyTimes} disabled={values.editMode} />
    <Field component={DropdownInput} name="SelectedAttendeeCountRange" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.AttendeeCountRanges} disabled={values.editMode} {...props} />
    
    <Field component={DropdownInput} name="IsRecurrent" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} disabled={values.editMode} />
    <Field component={TextAreaInput} name="ParticipatingOrganizationsDescription" {...props} />
    <Field component={TextAreaInput} name="AdditionalEventInfo" {...props} />
    <Field component={TextAreaInput} name="ProvidedEquipmentDescription" {...props}/>
    <Field component={TextAreaInput} name="RecyclableShippingInfo" {...props}/>
    <Field component={TextAreaInput} name="ProvidedParkingDescription" {...props}/>
    <Field component={MultiSelectInput} name="TypeOfBins" {...props} onMultiSelect={setFieldValue} options={values.TypeOfBins}/>
    
    <FormSectionHeader title={Titles.sectionThree}/>
    <Field component={TextInput} name="PfirstName" {...props} maxlength="4"/>
    <Field component={TextInput} name="PLastName" {...props} maxlength="4"/>
    <Field component={TextInput} name="PTitle" {...props} maxlength="4"/>
    <Field component={TextInput} name="POrganization" {...props} maxlength="4"/>
    <Field component={TextInput} name="PAddress" {...props} maxlength="4"/>
    <Field component={TextInput} name="PSuite" {...props} maxlength="4"/>
    <Field component={TextInput} name="PPhone" {...props} maxlength="4"/>
    <Field component={DropdownInput} name="SelectedPhoneType" {...props}  ondropDownChange={handledropDown} onChange={setFieldValue} options={values.PrimaryPhoneTypes} disabled={values.editMode}/>
    <Field component={TextInput}   name="PEmail" {...props} maxlength="4"/>
    <Field component={TextInput}   name="PEmailConfirm" {...props} maxlength="4"/>

    <FormSectionHeader title={Titles.sectionFour}/>
    <Field component={TextInput} name="SFirstName" {...props} maxlength="4" />
    <Field component={TextInput} name="SLastName" {...props} maxlength="4"/>
    <Field component={TextInput} name="STitle" {...props} maxlength="4"/>
    <Field component={TextInput} name="SOrganization" {...props} maxlength="4"/>
    <Field component={TextInput} name="SAddress"{...props} maxlength="4"/>
    <Field component={TextInput} name="SSuite" {...props} maxlength="4"/>
    <Field component={TextInput} name="SPhone" {...props} maxlength="4"/>
    <Field component={DropdownInput} name="SSelectedPhoneType" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.PrimaryPhoneTypes}  disabled={values.editMode}/>
    <Field component={TextInput} name="SEmail" {...props} maxlength="4"/>
    <Field component={TextInput} name="SEmailConfirm" {...props} maxlength="4"/>
    
  </fieldset>)
};

export default eventParticipationRequestFormElements;