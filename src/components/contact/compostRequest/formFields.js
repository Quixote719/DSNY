import React, {Component} from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import FormMultiSelect from '../multiselect_field'
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import FormDateTimePicker from '../dateTimepicker_field'
import Datetime from 'react-datetime';
import Yup from 'yup';

import FormTextarea from '../textarea_field';
import {withFormik, Formik, Field, Form} from 'formik'
import {compostFormObject, compostFormTitles as Titles} from './titles'
import { compose, withState, withHandlers } from 'recompose';
import isEmpty from 'lodash/isEmpty'
import '../../../content/styles/compostRequest.css';

// Our inner form component which receives our form's state and updater methods as props
const CompostRequestFormElements = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handledropDown,
    setFieldValue,
  } = props;
  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    <FormHeader title='Online Application'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <div>
      'search box validation of address comes up'
    </div>
    <FormSectionHeader title={Titles.sectionTwo}/>
    <Field name="WillPostCompostRecipientSignage" component={CheckBoxInput}/>
    <Field name="WillPostSignageWithinTwoWeeks" component={CheckBoxInput}/>
    <Field name="WillSubmitThreePhotos" component={CheckBoxInput}/>
    <Field name="ConsentToDsnyUseOfPhotos" component={CheckBoxInput}/>
    
    <FormSectionHeader title={Titles.sectionThree}/>
    <Field name="CompostSiteApplicantTypeId" component={DropdownInput} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.CompostSiteApplicantTypes} disabled={values.editMode} />
    {/*<Field name="OrganizationName" component={DropdownInput} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.CompostSiteApplicantTypes} disabled={values.editMode} />*/}
    {/*<FormField title={Titles.OrganizationName} isHidden={values.CompostSiteApplicantTypeId !== 2} type="text" disabledf={values.CompostSiteApplicantTypeId !== 2} name="OrganizationName" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationName} error={touched.OrganizationName && errors.OrganizationName}></FormField>*/}
    <Field name="OrganizationTaxIdNumber" required component={TextInput}/>
    <Field name="OrganizationWebsite" required component={TextInput}/>
    <Field name="OrganizationFacebookPage" component={TextInput}/>
    <Field name="OrganizationTwitterHandle" component={TextInput}/>
    <Field name="OrganizationInstagramHandle" component={TextInput}/>
    
    <FormSectionHeader title={Titles.sectionFour}/>
    <Field name="FirstName" component={TextInput}/>
    <Field name="LastName" component={TextInput}/>
    <Field name="Title" component={TextInput}/>
    <Field name="IsCertifiedNycMasterComposter" component={DropdownInput} ondropDownChange={handledropDown} onChange={setFieldValue} noOptions="true" disabled={values.editMode} />
    <Field name="PrimaryPhone" component={TextInput}/>
    <Field name="PrimaryPhoneTypeId" component={DropdownInput} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.PrimaryPhoneTypes} disabled={values.editMode}/>
    <Field name="SecondaryPhone" component={TextInput}/>
    <Field name="SecondaryPhoneTypeId" component={DropdownInput} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.SecondaryPhoneTypes} disabled={values.editMode}/>
    <Field name="Email" component={TextInput}/>
    <Field name="ConfirmEmail" component={TextInput}/>
    
    <FormSectionHeader title={Titles.sectionFive}/>
    <Field name="CompostSiteTypeId" component={DropdownInput} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.CompostSiteTypes} disabled={values.editMode}/>
    {/*<Field name="OtherCompostSiteType" component={TextInput}/>
    <FormField title={Titles.OtherCompostSiteType} isHidden={values.CompostSiteTypeId !== 9} type="text" disabledf={values.CompostSiteTypeId !== 9} name="OtherCompostSiteType" onChange={handleChange} onBlur={handleBlur} value={values.OtherCompostSiteType}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>*/}
    <Field name="CompostSitePermittingOrganizationId" component={DropdownInput} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.CompostSitePermittingOrganizations} disabled={values.editMode}/>
    {/*<Field name="OtherCompostSitePermittingOrganization" component={TextInput}/>
    <FormField title={Titles.OtherCompostSitePermittingOrganization} isHidden={values.CompostSitePermittingOrganizationId !== 6} type="text" disabledf={values.CompostSitePermittingOrganizationId !== 6} name="OtherCompostSitePermittingOrganization" onChange={handleChange} onBlur={handleBlur} value={values.OtherCompostSitePermittingOrganization}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>*/}
    <Field name="SiteSize" component={TextInput}/>
    
    <Field name="IsGreenThumbGarden" component={DropdownInput} ondropDownChange={handledropDown} onChange={setFieldValue} disabled={values.editMode}/>
    <Field name="HasReceivedDsnyCompostBefore" component={DropdownInput} ondropDownChange={handledropDown} onChange={setFieldValue} disabled={values.editMode}/>
    <FormTextarea title={Titles.CompostUseDescription} name="CompostUseDescription" onChange={handleChange} onBlur={handleBlur} value={values.CompostUseDescription}/>
    
    <FormSectionHeader title={Titles.sectionSix}/>
    <Field name="Pallets" component={TextInput}/>
    
    <FormDateTimePicker value={values.DeliveryDeadline} title={Titles.DeliveryDeadline} onChange={setFieldValue} name="DeliveryDeadline"/>
    <FormMultiSelect onMultiSelect={setFieldValue} title={Titles.DeliveryOn} name="DeliveryDays" options={values.DeliveryDays}/>
    
    <Field name="FromHourOfDayId" component={DropdownInput} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.FromHoursOfDay} disabled={values.editMode}/>
    <Field name="ToHourOfDayId" component={DropdownInput} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.ToHoursOfDay} disabled={values.editMode}/>
    
    <Field name="DeliveryNotes" component={TextInput}/>
    <Field name="EntranceHeightWidth" component={TextInput}/>
    <Field name="HasAlternateSideParking" component={DropdownInput} ondropDownChange={handledropDown} onChange={setFieldValue} disabled={values.editMode}/>
    <FormMultiSelect isHidden={values.HasAlternateSideParking !== true} onMultiSelect={setFieldValue} title={Titles.AlternateSideParking} name="AlternateSideParkingDays" options={values.AlternateSideParkingDays}/>
    {/*<Field name="AlternateSideParkingTimes" component={TextInput}/>
    <FormField isHidden={values.HasAlternateSideParking !== true} name="AlternateSideParkingTimes" title={Titles.AlternateSideParkingTimes} type="text" onChange={handleChange} onBlur={handleBlur} value={values.AlternateSideParkingTimes}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>*/}
  </fieldset>)
};

export default CompostRequestFormElements;