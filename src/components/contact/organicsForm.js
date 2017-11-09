import React, {Component} from "react";
import {Row, Col, Tooltip} from 'react-bootstrap';
import FormSectionHeader from './form_section_header';
import FormHeader from './form_header';
import FormMultiSelect from './multiselect_field'
import FormBoolean from './form_boolean';
import FormField from './form_field';
import FormFieldFull from './form_field_full';
import FormDropdown from './dropdown_field'
import FormDateTimePicker from './dateTimepicker_field'
import Datetime from 'react-datetime';

import FormTextarea from './textarea_field';
import {withFormik, Formik, Field, Form} from 'formik'
import {sharedFormTitles as Titles} from './titles'
import { compose, withState, withHandlers } from 'recompose';
import isEmpty from 'lodash/isEmpty'

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
  <FormHeader title='Online Registration'/>
  <FormSectionHeader title={Titles.sectionOne}/>
  <div>
    'search box validation of address comes up'
  </div>
  <FormSectionHeader title={Titles.ResidentInfo}/>
  <FormFieldFull title={Titles.BusinessName} type="text" name="OrganizationWebsite" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationWebsite} error={touched.OrganizationWebsite && errors.OrganizationWebsite}></FormFieldFull>
  <FormField type="text" title={Titles.FirstName} name="OrganizationTaxIdNumber" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationTaxIdNumber} error={touched.OrganizationTaxIdNumber && errors.OrganizationTaxIdNumber}></FormField>
  <FormField title={Titles.LastName} type="text" name="OrganizationWebsite" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationWebsite} error={touched.OrganizationWebsite && errors.OrganizationWebsite}></FormField>
  <FormField title={Titles.Role} type="text" name="OrganizationFacebookPage" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationFacebookPage}>{touched.OrganizationWebsite && errors.OrganizationWebsite && <div>{errors.email}</div>}</FormField>
  <FormField title={Titles.Email} type="text" name="OrganizationTwitterHandle" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationTwitterHandle}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
  <FormField title={Titles.Phone} type="text" name="OrganizationInstagramHandle" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationInstagramHandle}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
  <FormDropdown disabled={values.editMode} title={Titles.PhoneType} value={values.IsCertifiedNycMasterComposter} name="IsCertifiedNycMasterComposter" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} noOptions="true"/>
  <FormSectionHeader title={Titles.MailingAddress}/>
  <FormFieldFull title={Titles.AddressOpt} type="text" name="OrganizationWebsite" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationWebsite} error={touched.OrganizationWebsite && errors.OrganizationWebsite}></FormFieldFull>
  <FormField title={Titles.FLoorSuiteApt} type="text" name="OrganizationWebsite" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationWebsite} error={touched.OrganizationWebsite && errors.OrganizationWebsite}></FormField>
  <FormSectionHeader title={Titles.BusinessType}/>

  <FormSectionHeader title={Titles.OnsiteMethod}/>




  <FormSectionHeader title={Titles.EquipmentandCapacityInfo}/>
  <FormField title={Titles.Manufacturer} type="text" name="FirstName" onChange={handleChange} onBlur={handleBlur} value={values.FirstName}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
  <FormField title={Titles.Model} type="text" name="FirstName" onChange={handleChange} onBlur={handleBlur} value={values.FirstName}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
  <FormField title={Titles.MinimumCapacity} type="text" name="FirstName" onChange={handleChange} onBlur={handleBlur} value={values.FirstName}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
  <FormField title={Titles.MaximumCapacity} type="text" name="FirstName" onChange={handleChange} onBlur={handleBlur} value={values.FirstName}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
  <FormField title={Titles.InstallationDate} type="text" name="FirstName" onChange={handleChange} onBlur={handleBlur} value={values.FirstName}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>


  <FormSectionHeader title={Titles.GiInstall}/>
  <FormDropdown disabled={values.editMode} title={Titles.GiInstallOptional} value={values.IsCertifiedNycMasterComposter} name="IsCertifiedNycMasterComposter" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} noOptions="true"/>
  <FormField title={Titles.Manufacturer} type="text" name="FirstName" onChange={handleChange} onBlur={handleBlur} value={values.FirstName}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
  <FormField title={Titles.Model} type="text" name="FirstName" onChange={handleChange} onBlur={handleBlur} value={values.FirstName}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
  <FormField title={Titles.CapOptional} type="text" name="FirstName" onChange={handleChange} onBlur={handleBlur} value={values.FirstName}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
  <FormField title={Titles.Flow} type="text" name="FirstName" onChange={handleChange} onBlur={handleBlur} value={values.FirstName}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
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
      <button onClick={ isSubmitting || !isEmpty(errors) || !dirty? '':nextStep}>Next</button>
    </Col>
  <DisplayFormikState {...props} />
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


// Wrap our form with the using withFormik HoC
const OrganicsForm = compose(
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
  validate: (values, props) => {
    let errors = {}
    if (!values.OrganizationTaxIdNumber) {
      errors.OrganizationTaxIdNumber = 'Please enter a valid Organization TaxId Number'
    }
    if (!values.OrganizationWebsite) {
      errors.OrganizationWebsite = 'Please enter a valid Organization Website'
    }
    // if (!values.WillPostCompostRecipientSignage) {

    //   errors.WillPostCompostRecipientSignage = 'please check this'
    // }

    return errors
  },
  handleSubmit: (values, {setSubmitting}) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      console.log(values);
    }, 1000);
  },
  validateOnChange: true,
  validateOnBlur: true,
  displayName: 'BasicForm'
})
)(Steps);

export default OrganicsForm;
