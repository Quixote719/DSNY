import React from "react";
import {Row, Col, Tooltip} from 'react-bootstrap';
import {withFormik, Formik, Field, Form} from 'formik'
import { compose, withState, withHandlers } from 'recompose';
import isEmpty from 'lodash/isEmpty'

let firsterror = true;
let initialPageLoad = true;
let nextbuttonClicked = false;

const Step1 = (props) => {
  const {
    errors,
    dirty,
    isSubmitting,
    nextStep,
  } = props;
  return (<span>
    {props.values.editMode = false}
    <props.formFields {...props} />
  </span>)
};

const Steps = ({
  step,
  nextStep,
  previousStep,
  ...props
}) => (

  <form id="form" noValidate>
    {{
      1: <Step1 nextStep={nextStep} {...props} />,
    }[step] || <div />}
  </form>
)

const IDBox = compose(
  withState('step', 'setStep', 1),
  withHandlers({
    nextStep: ({ setStep, step }) =>
      () => setStep(step + 1),
    previousStep: ({ setStep, step }) =>
      () => setStep(step - 1)
  }),
  withFormik({
  mapPropsToValues: props => ({...props.customFormData, editMode:props.disabled, formFields: props.formFields, formTitles: props.formTitles, geoCoderAddressResult:props.geoCoderAddressResult, isAddressValidated:props.isAddressValidated}),

  validateOnChange: true,
  validateOnBlur: true,
  displayName: 'BasicForm'
})
)(Steps);

export default IDBox;
