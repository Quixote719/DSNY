import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';
import { compose, withState, withHandlers } from 'recompose';
import FormField from './form_field';



const enhance = compose(
  withState('step', 'setStep', 1),
  withHandlers({
    nextStep: ({ setStep, step }) =>
      () => setStep(step + 1),
    previousStep: ({ setStep, step }) =>
      () => setStep(step - 1)
  }),
  withFormik({
    mapPropsToValues: ({ form: {
      phoneNumber,
      authCode,
      OrganizationName
    } }) => ({
      phoneNumber,
      authCode,
      OrganizationName
    }),
    handleSubmit(
      values,
      { props, setErrors, setSubmitting }
    ) {
      alert(JSON.stringify(values));
    }
  })
);

 const Step1 = ({ nextStep, handleChange, values }) => (
  <div>
    <input
      type="tel"
      name="phoneNumber"
      value={values.phoneNumber}
      onChange={handleChange} />

     <div>
      <FormField title='ORGANIZATION NAME' type="text"  name="OrganizationName" onChange={handleChange} value={values.OrganizationName} ></FormField>
    </div>

    <button onClick={nextStep}>Next</button>
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
      1: <Step1 nextStep={nextStep} {...props} />,
      2: <Step2 previousStep={previousStep} {...props} />,
      3: <Step2 {...props} />
    }[step] || <div />}
  </form>
)

export default enhance(StepForm);
