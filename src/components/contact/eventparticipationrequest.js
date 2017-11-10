import React, {Component} from "react";
import {Row, Col, Tooltip} from 'react-bootstrap';
import FormSectionHeader from './form_section_header';
import FormHeader from './form_header';
import FormMultiSelect from './multiselect_field'
import FormBoolean from './form_boolean';
import FormField from './form_field';
import FormHeaderSmallSize from './form_header_SmallSize';
import FormDropdown from './dropdown_field'
import FormDateTimePicker from './dateTimepicker_field'
import Datetime from 'react-datetime';
import SubSectionButton from '../shared/sub_section_button';
import FormTextarea from './textarea_field';
import {withFormik, Formik, Field, Form} from 'formik';
import {compostFormObject, eventParticipationTitle as Titles} from './titles';
import {eventParticipationfieldNames as fieldNames} from './fieldNames';
import {eventParticipationJSON as JSON} from './fieldNames';
import { compose, withState, withHandlers } from 'recompose';
import FormButton from './form_button';
import isEmpty from 'lodash/isEmpty'


import '../../content/styles/eventParticipantReqst.css';

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
console.log(props);
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handledropDown,
    setFieldValue,
  } = props;
   // props.values = JSON;

  return (
    <div className="eventParticipantReqstForm"> 
    <fieldset className='disabledContactForm' disabled={values.editMode}>
    <FormHeaderSmallSize title='Online Service Request Form' information='All fields are required unless indicated as optional'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    {/* Adress Full Width Text Box */}
    {/* Additional Location Information (OPTIONAL) */}
    
    <FormSectionHeader title={Titles.SectionTwo} />
    <FormField title={Titles.EventName} type="text" onChange={handleChange} onBlur={handleBlur} name={fieldNames.EventName}/>
    <FormField title={Titles.AlternateName} type="text" onChange={handleChange} onBlur={handleBlur} name={fieldNames.AlternateName} />
    <FormDateTimePicker title={Titles.StartDate} onChange={setFieldValue}  name={fieldNames.StartDate} />
    
    <FormDateTimePicker title={Titles.EndDate} onChange={setFieldValue}  name={fieldNames.EndDate}  />
    <FormDropdown title={Titles.StartTime} onChange={setFieldValue}  ondropDownChange={handledropDown}  name={fieldNames.DailyTime} options={values.DailyTime} timeField={true} />
    <FormDropdown title={Titles.EndTime} onChange={setFieldValue}  ondropDownChange={handledropDown}  name={fieldNames.DailyTime} options={values.DailyTime} timeField={true} />
    {/*Event Theme*/}
    {/*Target Audience*/}
    <FormDropdown title={Titles.AttendeeCountRanges} name={fieldNames.AttendeeCountRanges} onChange={setFieldValue}  ondropDownChange={handledropDown} onBlur={handleBlur} options={values.AttendeeCountRanges}/>
    <FormDropdown title={Titles.IsRecurrent} name={fieldNames.IsRecurrent} onChange={setFieldValue} />
    <FormTextarea title={Titles.ParticipatingOrganizationsDescription}  name={fieldNames.ParticipatingOrganizationsDescription}/>
    <FormTextarea title={Titles.AdditionalEventInfo}  name={fieldNames.AdditionalEventInfo}/>
    <FormTextarea title={Titles.ProvidedEquipmentDescription}  name={fieldNames.ProvidedEquipmentDescription}/>
    <FormTextarea title={Titles.RecyclableShippingInfo}  name={fieldNames.RecyclableShippingInfo}/>
    <FormTextarea title={Titles.ProvidedParkingDescription}  name={fieldNames.ProvidedParkingDescription}/>
    
    <FormField title={Titles.CostumeCharacterReqst} />
    <FormBoolean title={Titles.ZeroWasteCan} />
    <FormBoolean title={Titles.BlueBin} />
    <FormBoolean title={Titles.BrownBin} />
    <FormBoolean title={Titles.LeafBag} />

    <FormSectionHeader title={Titles.PrimaryContact}/>
    <FormField title={Titles.FirstName} type="text" name={fieldNames.PfirstName}/>
    <FormField title={Titles.LastName} type="text" name={fieldNames.PLastName} />
    <FormField title={Titles.Title} type="text" name={fieldNames.PTitle} />
    <FormField title={Titles.Organization} type="text" name={fieldNames.POrganization} />
    <FormField title={Titles.Address} type="text" name={fieldNames.PFullAddress}/>
    <FormField title={Titles.Floor} type="text" name={fieldNames.Zip} />
    <FormField title={Titles.Phone} type="text" />
    <FormDropdown title={Titles.PhoneType} onChange={setFieldValue} options={values.PPhoneTypes} onBlur={handleBlur} ondropDownChange={handledropDown}/>
    <FormField title={Titles.Email} type="text" />
    <FormField title={Titles.ConfirmEmail} type="text" />
    <FormSectionHeader title={Titles.SecondaryContactInfo} />
    <FormField title={Titles.firstNameOptional} type="text" />
    <FormField title={Titles.lastNameOptional} type="text"/>
    <FormField title={Titles.titleOptional} type="text" />
    <FormField title={Titles.OrganizationOptional} type="text" />
    <FormField title={Titles.AddressOptional} type="text"/>
    <FormField title={Titles.FloorOptional} type="text" />
    <FormField title={Titles.PhoneOPtional} type="text"/>
    <FormDropdown title={Titles.PhoneTypeOptional} name={fieldNames.PPhone} onChange={setFieldValue} options={values.SPhoneTypes} onBlur={handleBlur}  ondropDownChange={handledropDown} />
    <FormField title={Titles.EmailOptional} type="text" />
    <FormField title={Titles.ConfirmEmailOptional} type="text"/>
    
    </fieldset>
    </div>
    )
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
    <div className="container">
    <CommonStep {...props} />
    <Col xs={12}>
      <FormButton title='NEXT' onClick={ isSubmitting || !isEmpty(errors) || !dirty? '':nextStep}></FormButton>
    </Col>
    </div>
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
const EventForm = compose(
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
  mapPropsToValues: props => (JSON),
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

export default EventForm;