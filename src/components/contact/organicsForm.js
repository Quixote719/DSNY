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
  <FormFieldFull title={Titles.BusinessName} type="text" name="RegistrantBusinessName" onChange={handleChange} onBlur={handleBlur} value={values.RegistrantBusinessName} error={touched.RegistrantBusinessName && errors.RegistrantBusinessName}></FormFieldFull>
  <FormField title={Titles.FirstName} type="text" name="RegistrantFirstName" onChange={handleChange} onBlur={handleBlur} value={values.RegistrantFirstName} error={touched.RegistrantFirstName && errors.RegistrantFirstName}></FormField>
  <FormField title={Titles.LastName} type="text" name="RegistrantLastName" onChange={handleChange} onBlur={handleBlur} value={values.RegistrantLastName} error={touched.OrganizationWebsite && errors.OrganizationWebsite}></FormField>
  <FormField title={Titles.Role} type="text" name="RegistrantTitle" onChange={handleChange} onBlur={handleBlur} value={values.RegistrantTitle}>{touched.OrganizationWebsite && errors.OrganizationWebsite && <div>{errors.email}</div>}</FormField>
  <FormField title={Titles.Email} type="text" name="RegistrantEmail" onChange={handleChange} onBlur={handleBlur} value={values.RegistrantEmail}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
  <FormField title={Titles.Phone} type="text" name="RegistrantPhone" onChange={handleChange} onBlur={handleBlur} value={values.RegistrantPhone}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
  <FormDropdown disabled={values.editMode} title={Titles.PhoneType} value={values.RegistrantPhoneTypeId} name="RegistrantPhoneTypeId" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={values.RegistrantPhoneTypes}/>

  <FormSectionHeader title={Titles.MailingAddress}/>
  <FormFieldFull title={Titles.AddressOpt} type="text" name="MailingStreet" onChange={handleChange} onBlur={handleBlur} value={values.MailingStreet} error={touched.OrganizationWebsite && errors.OrganizationWebsite}></FormFieldFull>
  <FormField title={Titles.FLoorSuiteApt} type="text" name="MailingApartment" onChange={handleChange} onBlur={handleBlur} value={values.MailingApartment} error={touched.OrganizationWebsite && errors.OrganizationWebsite}></FormField>
  <FormSectionHeader title={Titles.BusinessType}/>
  <FormMultiSelect isHidden={false} onMultiSelect={setFieldValue} title={Titles.BusinessSelectList} name="BusinessActivityTypes" options={values.BusinessActivityTypes}/>
  <FormFieldFull isHidden={!values.BusinessActivityTypes.Values[5].Selected} title={Titles.Describe} type="text" name="OtherDescribe" onChange={handleChange} onBlur={handleBlur} value={values.OtherDescribe} error={touched.OtherDescribe && errors.OtherDescribe}></FormFieldFull>
  <FormSectionHeader title={Titles.OnsiteMethod}/>
  <FormMultiSelect isHidden={false} onMultiSelect={setFieldValue} title={Titles.OnsitePMOptions} name="GreaseInterceptorTypes" options={values.OnSiteProcessingTypes}/>




  <FormSectionHeader title={Titles.EquipmentandCapacityInfo}/>
  <FormField title={Titles.Manufacturer} type="text" name="EquipmentManufacturer" onChange={handleChange} onBlur={handleBlur} value={values.EquipmentManufacturer}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
  <FormField title={Titles.Model} type="text" name="EquipmentModelNo" onChange={handleChange} onBlur={handleBlur} value={values.EquipmentModelNo}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
  <FormField title={Titles.DescribeSystem} type="text" name="EquipmentDescribeSystem" onChange={handleChange} onBlur={handleBlur} value={values.EquipmentDescribeSystem}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
  <FormField title={Titles.MinimumCapacity} type="text" name="EquipmentMinimumCapacity" onChange={handleChange} onBlur={handleBlur} value={values.EquipmentMinimumCapacity}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
  <FormField title={Titles.MaximumCapacity} type="text" name="EquipmentMaximumCapacity" onChange={handleChange} onBlur={handleBlur} value={values.EquipmentMaximumCapacity}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
  <FormDateTimePicker value={values.InstallationDate} title={Titles.InstallationDate} onChange={setFieldValue} name="InstallationDate"/>

  <FormSectionHeader title={Titles.GiInstall}/>
  <FormDropdown disabled={values.editMode} title={Titles.GiInstallOptional} value={values.IsCertifiedNycMasterComposter} name="IsCertifiedNycMasterComposter" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={values.RegistrantPhoneTypes}/>
  <FormField title={Titles.Manufacturer} type="text" name="GreaseInspectorManufacturer" onChange={handleChange} onBlur={handleBlur} value={values.GreaseInspectorManufacturer}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
  <FormField title={Titles.Model} type="text" name="GreaseInspectorModelNo" onChange={handleChange} onBlur={handleBlur} value={values.GreaseInspectorModelNo}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
  <FormField title={Titles.CapOptional} type="text" name="GreaseInspectorCapacity" onChange={handleChange} onBlur={handleBlur} value={values.GreaseInspectorCapacity}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
  <FormField title={Titles.Flow} type="text" name="GreaseInspectorFlow" onChange={handleChange} onBlur={handleBlur} value={values.GreaseInspectorFlow}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
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



// Wrap our form with the using withFormik HoC
const OrganicsFormModule = compose(
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


    if (!values.RegistrantBusinessName) {
      errors.RegistrantBusinessName = 'Please enter a valid Organization TaxId Number'
    }
    if (!values.RegistrantFirstName) {
      errors.RegistrantFirstName = 'Please enter a valid Organization Website'
    }

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

export default OrganicsFormModule;
