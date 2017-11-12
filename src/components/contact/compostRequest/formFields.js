import React, {Component} from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import MultiSelectInput from '../multiselect_field'
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import DateTimePickerInput from '../dateTimepicker_field'
import Datetime from 'react-datetime';
import Yup from 'yup';

import TextAreaInput from '../textarea_field';
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

    <Field component={CheckBoxInput} name={"WillPostCompostRecipientSignage"} title={Titles.WillPostCompostRecipientSignage}/>
    <Field component={CheckBoxInput} name="WillPostSignageWithinTwoWeeks" title={Titles.WillPostSignageWithinTwoWeeks}/>
    <Field component={CheckBoxInput} name="WillSubmitThreePhotos" title={Titles.WillSubmitThreePhotos}/>
    <Field component={CheckBoxInput} name="ConsentToDsnyUseOfPhotos" title={Titles.ConsentToDsnyUseOfPhotos}/>
    
    <FormSectionHeader title={Titles.sectionThree}/>
    <Field component={DropdownInput} name="CompostSiteApplicantTypeId" title={Titles.CompostSiteApplicantTypeId} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.CompostSiteApplicantTypes} disabled={values.editMode} />
    {/*<Field name="OrganizationName" component={DropdownInput} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.CompostSiteApplicantTypes} disabled={values.editMode} />*/}
    {/*<FormField title={Titles.OrganizationName} isHidden={values.CompostSiteApplicantTypeId !== 2} type="text" disabledf={values.CompostSiteApplicantTypeId !== 2} name="OrganizationName" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationName} error={touched.OrganizationName && errors.OrganizationName}></FormField>*/}
    <Field component={TextInput} name="OrganizationTaxIdNumber" title={Titles.OrganizationTaxIdNumber} required/>
    <Field component={TextInput} name="OrganizationWebsite" title={Titles.OrganizationWebsite} required/>
    <Field component={TextInput} name="OrganizationFacebookPage" title={Titles.OrganizationFacebookPage}/>
    <Field component={TextInput} name="OrganizationTwitterHandle" title={Titles.OrganizationTwitterHandle}/>
    <Field component={TextInput} name="OrganizationInstagramHandle" title={Titles.OrganizationInstagramHandle}/>
    
    <FormSectionHeader title={Titles.sectionFour}/>
    <Field component={TextInput} name="FirstName" title={Titles.FirstName}/>
    <Field component={TextInput} name="LastName" title={Titles.LastName}/>
    <Field component={TextInput} name="Title" title={Titles.Title}/>
    <Field component={DropdownInput} name="IsCertifiedNycMasterComposter" title={Titles.IsCertifiedNycMasterComposter} ondropDownChange={handledropDown} onChange={setFieldValue} noOptions="true" disabled={values.editMode} />
    <Field component={TextInput} name="PrimaryPhone" title={Titles.PrimaryPhone}/>
    <Field component={DropdownInput} name="PrimaryPhoneTypeId" title={Titles.PrimaryPhoneTypeId} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.PrimaryPhoneTypes} disabled={values.editMode}/>
    <Field component={TextInput} name="SecondaryPhone" title={Titles.SecondaryPhone}/>
    <Field component={DropdownInput} name="SecondaryPhoneTypeId" title={Titles.SecondaryPhoneTypeId} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.SecondaryPhoneTypes} disabled={values.editMode}/>
    <Field component={TextInput} name="Email" title={Titles.Email}/>
    <Field component={TextInput} name="ConfirmEmail" title={Titles.ConfirmEmail}/>
    
    <FormSectionHeader title={Titles.sectionFive}/>
    <Field component={DropdownInput} name="CompostSiteTypeId" title={Titles.CompostSiteTypeId} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.CompostSiteTypes} disabled={values.editMode}/>
    {/*<Field name="OtherCompostSiteType" component={TextInput}/>
    <FormField title={Titles.OtherCompostSiteType} isHidden={values.CompostSiteTypeId !== 9} type="text" disabledf={values.CompostSiteTypeId !== 9} name="OtherCompostSiteType" onChange={handleChange} onBlur={handleBlur} value={values.OtherCompostSiteType}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>*/}
    <Field component={DropdownInput} name="CompostSitePermittingOrganizationId" title={Titles.CompostSitePermittingOrganizationId} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.CompostSitePermittingOrganizations} disabled={values.editMode}/>
    {/*<Field name="OtherCompostSitePermittingOrganization" component={TextInput}/>
    <FormField title={Titles.OtherCompostSitePermittingOrganization} isHidden={values.CompostSitePermittingOrganizationId !== 6} type="text" disabledf={values.CompostSitePermittingOrganizationId !== 6} name="OtherCompostSitePermittingOrganization" onChange={handleChange} onBlur={handleBlur} value={values.OtherCompostSitePermittingOrganization}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>*/}
    <Field component={TextInput} name="SiteSize" title={Titles.SiteSize}/>
    <Field component={DropdownInput} name="IsGreenThumbGarden" title={Titles.IsGreenThumbGarden} ondropDownChange={handledropDown} onChange={setFieldValue} disabled={values.editMode}/>
    <Field component={DropdownInput} name="HasReceivedDsnyCompostBefore" title={Titles.HasReceivedDsnyCompostBefore} ondropDownChange={handledropDown} onChange={setFieldValue} disabled={values.editMode}/>
    <Field component={TextInput} name="CompostUseDescription" title={Titles.CompostUseDescription}/>
    
    <FormSectionHeader title={Titles.sectionSix}/>
    <Field component={TextInput} name="Pallets" title={Titles.Pallets}/>
    <Field component={DateTimePickerInput} name="DeliveryDeadline" title={Titles.DeliveryDeadline} onChange={setFieldValue}/>
    <Field component={MultiSelectInput} name="DeliveryDays" title={Titles.DeliveryDays} onMultiSelect={setFieldValue} options={values.DeliveryDays}/>
    <Field component={DropdownInput} name="FromHourOfDayId" title={Titles.FromHourOfDayId} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.FromHoursOfDay} disabled={values.editMode}/>
    <Field component={DropdownInput} name="ToHourOfDayId" title={Titles.ToHourOfDayId} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.ToHoursOfDay} disabled={values.editMode}/>
    <Field component={TextInput} name="DeliveryNotes" title={Titles.DeliveryNotes}/>
    <Field component={TextInput} name="EntranceHeightWidth" title={Titles.EntranceHeightWidth}/>
    <Field component={DropdownInput} name="HasAlternateSideParking" title={Titles.HasAlternateSideParking} ondropDownChange={handledropDown} onChange={setFieldValue} disabled={values.editMode}/>
    {/*<Field component={MultiSelectInput} name="DeliveryDays" title={Titles.DeliveryDays} onMultiSelect={setFieldValue} options={values.DeliveryDays}/>
    <FormMultiSelect isHidden={values.HasAlternateSideParking !== true} onMultiSelect={setFieldValue} title={Titles.AlternateSideParking} name="AlternateSideParkingDays" options={values.AlternateSideParkingDays}/>*/}
    {/*<Field name="AlternateSideParkingTimes" component={TextInput}/>
    <FormField isHidden={values.HasAlternateSideParking !== true} name="AlternateSideParkingTimes" title={Titles.AlternateSideParkingTimes} type="text" onChange={handleChange} onBlur={handleBlur} value={values.AlternateSideParkingTimes}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>*/}
  </fieldset>)
};

export default CompostRequestFormElements;