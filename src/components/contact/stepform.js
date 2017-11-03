import React, {Component} from "react";
import {Row, Col, Tooltip} from 'react-bootstrap';
import FormSectionHeader from './form_section_header';
import FormHeader from './form_header';
import FormMultiSelect from './multiselect_field'
import FormBoolean from './form_boolean';
import FormField from './form_field';
import FormDropdown from './dropdown_field'
import FormDateTimePicker from './dateTimepicker_field'
import Datetime from 'react-datetime';

import FormTextarea from './textarea_field';
import {withFormik, Formik, Field, Form} from 'formik'
import {compostFormObject, compostFormTitles as Titles} from './titles'
import { compose, withState, withHandlers } from 'recompose';



const enhance = compose(
  withState('step', 'setStep', 1),
  withHandlers({
    nextStep: ({ setStep, step }) => 
      () => setStep(step + 1),
    previousStep: ({ setStep, step }) => 
      () => setStep(step - 1)
  }),
  withFormik({
   mapPropsToValues: props => (props.customFormData),
  // Add a custom validation function (this can be async too!)
  validate: (values, props) => {
    let errors = {}
    if (!values.OrganizationTaxIdNumber) {
      errors.OrganizationTaxIdNumber = 'Please enter a valid Organization TaxId Number'
    } else if (!values.OrganizationWebsite) {
      errors.OrganizationWebsite = 'Please enter a valid Organization Website'
    }
    if (!values.WillPostCompostRecipientSignage) {

      errors.WillPostCompostRecipientSignage = 'please check this'
    }
    return errors
  },
    handleSubmit(
      values, 
      { props, setErrors, setSubmitting }
    ) {
      alert(JSON.stringify(values));
    }
  })
);

 const Step1 = ({ nextStep, handleChange, values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleBlur,
    handleSubmit,
    handleReset,
    handledropDown,
    setFieldValue,
    setFieldTouched }) => (
  <div>
      <FormHeader title='Online Application'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <div>
      'search box validation of address comes up'
    </div>
    <FormSectionHeader title={Titles.sectionTwo}/>
    <FormBoolean title={Titles.WillPostCompostRecipientSignage} name="WillPostCompostRecipientSignage" onChange={handleChange} onBlur={handleBlur} value={values.WillPostCompostRecipientSignage}/>
    <FormBoolean title={Titles.WillPostSignageWithinTwoWeeks} name="WillPostSignageWithinTwoWeeks" onChange={handleChange} onBlur={handleBlur} value={values.WillPostSignageWithinTwoWeeks}/>
    <FormBoolean title={Titles.WillSubmitThreePhotos} name="WillSubmitThreePhotos" onChange={handleChange} onBlur={handleBlur} value={values.WillSubmitThreePhotos}/>
    <FormBoolean title={Titles.ConsentToDsnyUseOfPhotos} name="ConsentToDsnyUseOfPhotos" onChange={handleChange} onBlur={handleBlur} value={values.ConsentToDsnyUseOfPhotos}/>
    <FormSectionHeader title={Titles.sectionThree}/>
    <FormDropdown title='APPLYING AS' name="ApplyingAs" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={[
        {
          "Id": 1,
          "Name": "ApplyingAsStreetTreeSteward",
          "DisplayName": "Street Tree Steward",
          "Selected": false
        }, {
          "Id": 2,
          "Name": "ApplyingAsOrganization",
          "DisplayName": "Organization",
          "Selected": false
        }
      ]}/>
    <FormField title={Titles.OrganizationName} isHidden={values.ApplyingAs !== 2} type="text" disabledf={values.ApplyingAs !== 2} name="OrganizationName" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationName}>{touched.OrganizationName && errors.OrganizationName && <div>{errors.OrganizationName}</div>}</FormField>
    <FormField type="text" title={Titles.OrganizationTaxIdNumber} name="OrganizationTaxIdNumber" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationTaxIdNumber}>{touched.OrganizationTaxIdNumber && errors.OrganizationTaxIdNumber && <Tooltip placement="bottom" className="in" id="tooltip-bottom">{errors.OrganizationTaxIdNumber}</Tooltip>}</FormField>
    <FormField title={Titles.OrganizationWebsite} type="text" name="OrganizationWebsite" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationWebsite}>{touched.OrganizationWebsite && errors.OrganizationWebsite && <Tooltip placement="bottom" className="in" id="tooltip-bottom">{errors.OrganizationWebsite}</Tooltip>}</FormField>
    <FormField title={Titles.OrganizationFacebookPage} type="text" name="OrganizationFacebookPage" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationFacebookPage}>{touched.OrganizationWebsite && errors.OrganizationWebsite && <div>{errors.email}</div>}</FormField>
    <FormField title={Titles.OrganizationTwitterHandle} type="text" name="OrganizationTwitterHandle" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationTwitterHandle}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormField title={Titles.OrganizationInstagramHandle} type="text" name="OrganizationInstagramHandle" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationInstagramHandle}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormSectionHeader title={Titles.sectionFour}/>
    <FormField title={Titles.FirstName} type="text" name="FirstName" onChange={handleChange} onBlur={handleBlur} value={values.FirstName}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormField title={Titles.LastName} type="text" name="LastName" onChange={handleChange} onBlur={handleBlur} value={values.LastName}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormField title={Titles.Title} type="text" name="Title" onChange={handleChange} onBlur={handleBlur} value={values.Title}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormDropdown title={Titles.IsCertifiedNycMasterComposter} name="IsCertifiedNycMasterComposter" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} noOptions="true"/>
    <FormField title={Titles.PrimaryPhone} type="text" name="PrimaryPhone" onChange={handleChange} onBlur={handleBlur} value={values.PrimaryPhone}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormDropdown title={Titles.PrimaryPhoneTypeId} name="PrimaryPhoneTypeId" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={values.PrimaryPhoneTypes}/>
    <FormField title={Titles.SecondaryPhone} type="text" name="SecondaryPhone" onChange={handleChange} onBlur={handleBlur} value={values.SecondaryPhone}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormDropdown title={Titles.SecondaryPhoneTypeId} name="SecondaryPhoneTypeId" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={values.SecondaryPhoneTypes}/>
    <FormField title={Titles.Email} type="text" name="Email" onChange={handleChange} onBlur={handleBlur} value={values.Email}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormField title={Titles.ConfirmEmail} type="text" name="ConfirmEmail" onChange={handleChange} onBlur={handleBlur} value={values.ConfirmEmail}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormSectionHeader title={Titles.sectionFive}/>
    <FormDropdown title={Titles.CompostSiteTypeId} name="CompostSiteTypeId" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={values.CompostSiteTypes}/>
    <FormField title={Titles.OtherCompostSiteType} isHidden={values.CompostSiteTypeId !== 9} type="text" disabledf={values.CompostSiteTypeId !== 9} name="OtherCompostSiteType" onChange={handleChange} onBlur={handleBlur} value={values.OtherCompostSiteType}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormDropdown title={Titles.CompostSitePermittingOrganizationId} name="CompostSitePermittingOrganizationId" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={values.CompostSitePermittingOrganizations}/>
    <FormField title={Titles.OtherCompostSitePermittingOrganization} isHidden={values.CompostSitePermittingOrganizationId !== 6} type="text" disabledf={values.CompostSitePermittingOrganizationId !== 6} name="OtherCompostSitePermittingOrganization" onChange={handleChange} onBlur={handleBlur} value={values.OtherCompostSitePermittingOrganization}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormField title={Titles.SiteSize} type="text" name="SiteSize" onChange={handleChange} onBlur={handleBlur} value={values.SiteSize}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormDropdown title={Titles.IsGreenThumbGarden} name="IsGreenThumbGarden" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur}/>
    <FormDropdown title={Titles.HasReceivedDsnyCompostBefore} name="HasReceivedDsnyCompostBefore" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur}/>
    <FormTextarea title={Titles.CompostUseDescription} name="CompostUseDescription" onChange={handleChange} onBlur={handleBlur} value={values.CompostUseDescription}/>
    <FormSectionHeader title={Titles.sectionSix}/>
    <FormField title={Titles.Pallets} type="text" name="Pallets" onChange={handleChange} onBlur={handleBlur} value={values.Pallets}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormDateTimePicker title={Titles.DeliveryDeadline} name="DeliveryDeadline"/>
    <FormMultiSelect onMultiSelect={setFieldValue} title={Titles.DeliveryOn} name="DeliveryOn" options={[
        {
          "Id": 1,
          "Name": "DeliverOnMonday",
          "DisplayName": "Monday",
          "Selected": false
        }, {
          "Id": 2,
          "Name": "DeliverOnTuesday",
          "DisplayName": "Tuesday",
          "Selected": false
        }, {
          "Id": 1,
          "Name": "DeliverOnWednesday",
          "DisplayName": "Wednesday",
          "Selected": false
        }, {
          "Id": 2,
          "Name": "DeliverOnThursday",
          "DisplayName": "Thursday",
          "Selected": false
        }, {
          "Id": 1,
          "Name": "DeliverOnFriday",
          "DisplayName": "Friday",
          "Selected": false
        }, {
          "Id": 2,
          "Name": "DeliverOnSaturday",
          "DisplayName": "Saturday",
          "Selected": false
        }
      ]}/>
    <FormDropdown title={Titles.FromHourOfDayId} name="FromHourOfDayId" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={values.FromHoursOfDay}/>
    <FormDropdown title={Titles.ToHourOfDayId} name="ToHourOfDayId" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={values.ToHoursOfDay}/>
    <FormField title={Titles.DeliveryNotes} type="text" name="DeliveryNotes" onChange={handleChange} onBlur={handleBlur} value={values.DeliveryNotes}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormField title={Titles.EntranceHeightWidth} type="text" name="EntranceHeightWidth" onChange={handleChange} onBlur={handleBlur} value={values.EntranceHeightWidth}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormDropdown title={Titles.HasAlternateSideParking} name="HasAlternateSideParking" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur}/>
    <FormMultiSelect isHidden={values.HasAlternateSideParking !== 1} onMultiSelect={setFieldValue} title={Titles.AlternateSideParking} name="AlternateSideParking" options={[
        {
          "Id": 1,
          "Name": "AlternateSideParkingMonday",
          "DisplayName": "Monday",
          "Selected": false
        }, {
          "Id": 2,
          "Name": "AlternateSideParkingTuesday",
          "DisplayName": "Tuesday",
          "Selected": false
        }, {
          "Id": 1,
          "Name": "AlternateSideParkingWednesday",
          "DisplayName": "Wednesday",
          "Selected": false
        }, {
          "Id": 2,
          "Name": "AlternateSideParkingThursday",
          "DisplayName": "Thursday",
          "Selected": false
        }, {
          "Id": 1,
          "Name": "AlternateSideParkingFriday",
          "DisplayName": "Friday",
          "Selected": false
        }, {
          "Id": 2,
          "Name": "AlternateSideParkingSaturday",
          "DisplayName": "Saturday",
          "Selected": false
        }
      ]}/>
    <FormField isHidden={values.HasAlternateSideParking !== 1} name="AlternateSideParkingTimes" title={Titles.AlternateSideParkingTimes} type="text" onChange={handleChange} onBlur={handleBlur} value={values.AlternateSideParkingTimes}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
     <Col xs={12}>
      <button onClick={nextStep}>Next</button>
    </Col>
  </div>
);

const Step2 = ({ previousStep,handleChange, values }) => (
  <div>
    <FormField title='ORGANIZATION NAME' type="text"  name="OrganizationName" onChange={handleChange} value={values.OrganizationName}></FormField>
    
    <input 
      type="text"
      name="authCode"
      value={values.authCode}
      maxLength={5}
      onChange={handleChange} />
    <button onClick={previousStep}>Previous</button>
    <button type="submit">Submit</button>
  </div>
)

const StepForm = ({
  handleSubmit,
  step,
  nextStep,
  previousStep,
  ...props
}) => (
  <form onSubmit={handleSubmit}>
    {{
      1: <Step1 nextStep={handleSubmit} {...props} />,
      2: <Step1 nextStep={nextStep} {...props} />,
      3: <Step2 previousStep={previousStep} {...props} />,
      4: <Step2 {...props} />
    }[step] || <div />}
  </form>
)

export default enhance(StepForm);
