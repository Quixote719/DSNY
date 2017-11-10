import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Row, Col, Tooltip} from 'react-bootstrap';
import FormSectionHeader from './form_section_header';
import FormHeader from './form_header';
import FormMultiSelect from './multiselect_field'
import FormBoolean from './form_boolean';
import TextInput from './form_field';
import FormDropdown from './dropdown_field'
import FormDateTimePicker from './dateTimepicker_field'
import Datetime from 'react-datetime';
import Yup from 'yup';

import FormTextarea from './textarea_field';
import {withFormik, Formik, Field, Form} from 'formik'
import {compostFormObject, compostFormTitles as Titles} from './titles'
import { compose, withState, withHandlers } from 'recompose';
import isEmpty from 'lodash/isEmpty'
import {postFormObject} from "../../actions/contact_forms";

import '../../content/styles/contactForm.css';

const DisplayFormikState = props => (<div style={{
    margin: '4rem 0'
  }}>
  <h3 style={{
      fontFamily: 'monospace'
    }}/>
  <pre
      style={{
        background: '#f6f8fa',
        fontSize: '1.5rem',
        padding: '.5rem',
      }}
    >
      <strong>Values</strong> ={' '}
      {JSON.stringify(props.values, null, 2)}
    </pre>
  </div>);

// Our inner form component which receives our form's state and updater methods as props
const CommonStep = (props) => {
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
    {/*<FormSectionHeader title={Titles.sectionTwo}/>
    <FormBoolean title={Titles.WillPostCompostRecipientSignage} name="WillPostCompostRecipientSignage" get alonChange={handleChange} onBlur={handleBlur} value={values.WillPostCompostRecipientSignage} error={touched.WillPostCompostRecipientSignage && errors.WillPostCompostRecipientSignage}/>
    <FormBoolean title={Titles.WillPostSignageWithinTwoWeeks} name="WillPostSignageWithinTwoWeeks" onChange={handleChange} onBlur={handleBlur} value={values.WillPostSignageWithinTwoWeeks}/>
    <FormBoolean title={Titles.WillSubmitThreePhotos} name="WillSubmitThreePhotos" onChange={handleChange} onBlur={handleBlur} value={values.WillSubmitThreePhotos}/>
    <FormBoolean title={Titles.ConsentToDsnyUseOfPhotos} name="ConsentToDsnyUseOfPhotos" onChange={handleChange} onBlur={handleBlur} value={values.ConsentToDsnyUseOfPhotos}/>
    <FormSectionHeader title={Titles.sectionThree}/>
    <FormDropdown disabled={values.editMode} title='APPLYING AS' name="CompostSiteApplicantTypeId" value={values.CompostSiteApplicantTypeId} ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={values.CompostSiteApplicantTypes}  error={touched.CompostSiteApplicantTypeId && errors.CompostSiteApplicantTypeId}/>
    <FormField title={Titles.OrganizationName} isHidden={values.CompostSiteApplicantTypeId !== 2} type="text" disabledf={values.CompostSiteApplicantTypeId !== 2} name="OrganizationName" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationName} error={touched.OrganizationName && errors.OrganizationName}></FormField>*/}
    <Field name="OrganizationTaxIdNumber" component={TextInput}/>
    <Field name="OrganizationWebsite" component={TextInput}/>
    <Field name="FirstName" component={TextInput}/>
    <Field name="LastName" component={TextInput}/>
    <Field name="SecondaryPhoneTypeId" component={FormDropdown}/>
    
    {/*<FormField type="text" title={Titles.OrganizationTaxIdNumber} name="OrganizationTaxIdNumber" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationTaxIdNumber} error={touched.OrganizationTaxIdNumber && errors.OrganizationTaxIdNumber}></FormField>
    <FormField title={Titles.OrganizationWebsite} type="text" name="OrganizationWebsite" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationWebsite} error={touched.OrganizationWebsite && errors.OrganizationWebsite}></FormField>*/}
    {/*<FormField title={Titles.OrganizationFacebookPage} type="text" name="OrganizationFacebookPage" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationFacebookPage} error={touched.OrganizationFacebookPage && errors.OrganizationFacebookPage}></FormField>
    <FormField title={Titles.OrganizationTwitterHandle} type="text" name="OrganizationTwitterHandle" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationTwitterHandle} error={touched.OrganizationTwitterHandle && errors.OrganizationTwitterHandle}></FormField>
    <FormField title={Titles.OrganizationInstagramHandle} type="text" name="OrganizationInstagramHandle" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationInstagramHandle} error={touched.OrganizationTwitterHandle && errors.OrganizationTwitterHandle}></FormField>
    <FormSectionHeader title={Titles.sectionFour}/>
    
    <FormField title={Titles.FirstName} type="text" name="FirstName" onChange={handleChange} onBlur={handleBlur} value={values.FirstName}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormField title={Titles.LastName} type="text" name="LastName" onChange={handleChange} onBlur={handleBlur} value={values.LastName}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormField title={Titles.Title} type="text" name="Title" onChange={handleChange} onBlur={handleBlur} value={values.Title}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormDropdown disabled={values.editMode} title={Titles.IsCertifiedNycMasterComposter} value={values.IsCertifiedNycMasterComposter} name="IsCertifiedNycMasterComposter" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} noOptions="true"/>
    <FormField title={Titles.PrimaryPhone} type="text" name="PrimaryPhone" onChange={handleChange} onBlur={handleBlur} value={values.PrimaryPhone}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormDropdown disabled={values.editMode} title={Titles.PrimaryPhoneTypeId} value={values.PrimaryPhoneTypeId} name="PrimaryPhoneTypeId" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={values.PrimaryPhoneTypes}/>
    <FormField title={Titles.SecondaryPhone} type="text" name="SecondaryPhone" onChange={handleChange} onBlur={handleBlur} value={values.SecondaryPhone}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormDropdown disabled={values.editMode} title={Titles.SecondaryPhoneTypeId} value={values.SecondaryPhoneTypeId} name="SecondaryPhoneTypeId" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={values.SecondaryPhoneTypes}/>
    <FormField title={Titles.Email} type="text" name="Email" onChange={handleChange} onBlur={handleBlur} value={values.Email}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormField title={Titles.ConfirmEmail} type="text" name="ConfirmEmail" onChange={handleChange} onBlur={handleBlur} value={values.ConfirmEmail}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormSectionHeader title={Titles.sectionFive}/>
    <FormDropdown disabled={values.editMode}  value={values.CompostSiteTypeId}  title={Titles.CompostSiteTypeId} name="CompostSiteTypeId" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={values.CompostSiteTypes}/>
    <FormField title={Titles.OtherCompostSiteType} isHidden={values.CompostSiteTypeId !== 9} type="text" disabledf={values.CompostSiteTypeId !== 9} name="OtherCompostSiteType" onChange={handleChange} onBlur={handleBlur} value={values.OtherCompostSiteType}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormDropdown disabled={values.editMode} value={values.CompostSitePermittingOrganizationId}  title={Titles.CompostSitePermittingOrganizationId} name="CompostSitePermittingOrganizationId" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={values.CompostSitePermittingOrganizations}/>
    <FormField title={Titles.OtherCompostSitePermittingOrganization} isHidden={values.CompostSitePermittingOrganizationId !== 6} type="text" disabledf={values.CompostSitePermittingOrganizationId !== 6} name="OtherCompostSitePermittingOrganization" onChange={handleChange} onBlur={handleBlur} value={values.OtherCompostSitePermittingOrganization}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormField title={Titles.SiteSize} type="text" name="SiteSize" onChange={handleChange} onBlur={handleBlur} value={values.SiteSize}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormDropdown disabled={values.editMode} value={values.IsGreenThumbGarden}  title={Titles.IsGreenThumbGarden} name="IsGreenThumbGarden" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur}/>
    <FormDropdown disabled={values.editMode} value={values.HasReceivedDsnyCompostBefore}  title={Titles.HasReceivedDsnyCompostBefore} name="HasReceivedDsnyCompostBefore" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur}/>
    <FormTextarea title={Titles.CompostUseDescription} name="CompostUseDescription" onChange={handleChange} onBlur={handleBlur} value={values.CompostUseDescription}/>
    <FormSectionHeader title={Titles.sectionSix}/>
    <FormField title={Titles.Pallets} type="text" name="Pallets" onChange={handleChange} onBlur={handleBlur} value={values.Pallets}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormDateTimePicker value={values.DeliveryDeadline} title={Titles.DeliveryDeadline} onChange={setFieldValue} name="DeliveryDeadline"/>
    <FormMultiSelect onMultiSelect={setFieldValue} title={Titles.DeliveryOn} name="DeliveryDays" options={values.DeliveryDays}/>
    <FormDropdown disabled={values.editMode} value={values.FromHourOfDayId} title={Titles.FromHourOfDayId} name="FromHourOfDayId" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={values.FromHoursOfDay}/>
    <FormDropdown disabled={values.editMode} value={values.ToHourOfDayId} title={Titles.ToHourOfDayId} name="ToHourOfDayId" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={values.ToHoursOfDay}/>
    <FormField title={Titles.DeliveryNotes} type="text" name="DeliveryNotes" onChange={handleChange} onBlur={handleBlur} value={values.DeliveryNotes}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormField title={Titles.EntranceHeightWidth} type="text" name="EntranceHeightWidth" onChange={handleChange} onBlur={handleBlur} value={values.EntranceHeightWidth}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormDropdown disabled={values.editMode} value={values.HasAlternateSideParking} title={Titles.HasAlternateSideParking} name="HasAlternateSideParking" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur}/>
    <FormMultiSelect isHidden={values.HasAlternateSideParking !== true} onMultiSelect={setFieldValue} title={Titles.AlternateSideParking} name="AlternateSideParkingDays" options={values.AlternateSideParkingDays}/>
    <FormField isHidden={values.HasAlternateSideParking !== true} name="AlternateSideParkingTimes" title={Titles.AlternateSideParkingTimes} type="text" onChange={handleChange} onBlur={handleBlur} value={values.AlternateSideParkingTimes}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>*/}
  </fieldset>)
};

const Step1 = (props) => {
  const {
    errors,
    dirty,
    isSubmitting,
    nextStep
  } = props;
  return (<span>
    {props.values.editMode = false}
    <CommonStep {...props} />
    <Col xs={12}>
      <button onClick={ isSubmitting || !isEmpty(errors) ? '':nextStep}>Next</button>
    </Col>
<DisplayFormikState {...props}/>
  </span>)
};

const Step2 = (props) => {
  const {
    previousStep
  } = props;
  return (<span>
    {props.values.editMode = true}
    <CommonStep {...props} />
    <Col xs={12}>
    <button onClick={previousStep}>Previous</button>
    <button type="submit">Submit</button>
    </Col>
  </span>)
};

const Steps = ({
  handleSubmit,
  step,
  nextStep,
  previousStep,
  ...props
}) => (

  <form onSubmit={handleSubmit}>
    {{
      1: <Step1 nextStep={nextStep} {...props} />,
      2: <Step2 previousStep={previousStep} {...props} />,
      3: <Step2 {...props} />
    }[step] || <div />}
  </form>
)

const schema = {
  "requiredFields": [
    "OrganizationTaxIdNumber", "OrganizationWebsite", "SecondaryPhoneTypeId"
  ]
}

// Wrap our form with the using withFormik HoC
const TestForm = compose(
  withState('step', 'setStep', 1),
  withHandlers({
    validateStep: ({ stepValidated,validate,setStep, step }) =>
      () =>validate,
    nextStep: ({ setStep, step }) =>
      () => setStep(step + 1),
    previousStep: ({ setStep, step }) =>
      () => setStep(step - 1)
  }),
  withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({...props.customFormData, editMode:props.disabled}),
  // Add a custom validation function (this can be async too!)
  // validationSchema: Yup.object().shape({
  //   OrganizationTaxIdNumber: Yup.mixed().required(Titles.RequiredFieldMessage),
  //   OrganizationWebsite: Yup.mixed().required(Titles.RequiredFieldMessage),
  //   WillPostCompostRecipientSignage: Yup.bool().required(Titles.RequiredFieldMessage),
  //   CompostSiteApplicantTypeId: Yup.string().notOneOf(['Select one']),
  // }),
  validate: (values, props) => {

    let errors = {}
    
    //Get the required fields from the const schema defined above
    for (var value in schema.requiredFields) {
        if (!values[schema.requiredFields[value]] ||  values[schema.requiredFields[value]] === 'Select one')
        {
          errors[schema.requiredFields[value]] = Titles.RequiredFieldMessage
        }
    }


    // if (!values.OrganizationTaxIdNumber) {
    //   errors.OrganizationTaxIdNumber = 'Please enter a valid Organization TaxId Number'
    // }
    // if (!values.OrganizationWebsite) {
    //   errors.OrganizationWebsite = 'Please enter a valid Organization Website'
    // }
    // if (!values.CompostSiteApplicantTypeId || values.CompostSiteApplicantTypeId === 'Select one') {
    //   errors.CompostSiteApplicantTypeId = 'Please enter a valid Organization Website'
    // }
    // if (!values.WillPostCompostRecipientSignage) {

    //   errors.WillPostCompostRecipientSignage = 'please check this'
    // }

    return errors
  },

  handleSubmit: (values, {props,setSubmitting}) => {
    
    setTimeout(() => {
      console.log(this.props);
      alert(JSON.stringify(values, null, 2));
      props.onSubmit(values);
      setSubmitting(false);
      console.log(values);
    }, 1000);
  },
  validateOnChange: true,
  validateOnBlur: true,
  displayName: 'BasicForm'
})
)(Steps);

export default TestForm;
