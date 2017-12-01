import React from "react";
import {Row, Col, Tooltip} from 'react-bootstrap';
import {withFormik, Formik, Field, Form} from 'formik'
import { compose, withState, withHandlers } from 'recompose';
import isEmpty from 'lodash/isEmpty'
// import { compostFormTitles as Titles} from './titles'
import Recaptcha from 'react-recaptcha';


// import '../../content/styles/contactForm.css';

// const DisplayFormikState = props => (<div style={{
//     margin: '4rem 0'
//   }}>
//   <h3 style={{
//       fontFamily: 'monospace'
//     }}/>
//   <pre
//       style={{
//         background: '#f6f8fa',
//         fontSize: '1.5rem',
//         padding: '.5rem',
//       }}
//     >
//       <strong>Values</strong> ={' '}
//       {JSON.stringify(props.values, null, 2)}
//     </pre>
//   </div>);
let firsterror = true;
let initialPageLoad = true;
let nextbuttonClicked = false;
let captchaVerified = false;
let captchaMessage;
export let addressValidationMessage = "";

// Captcha - site key
const sitekey = '6LdiUjgUAAAAALwAtRNxH962XysQsTtWsIYLEcS4';

// Captcha - onload callback function
const callback = () => {
  console.log('Done!!!!');
};

const verifyCallback = (response) => {
  console.log("Captcha Verified");
  captchaVerified = true;
  captchaMessage = null;
  document.getElementById(`recaptchaTooltip`).classList.remove('in');
};

const expiredCallback = () => {
  console.log(`Recaptcha expired`);
};



function assignGeoCoderAddressValues(values, geoCoderAddressResult){
	if (values && geoCoderAddressResult){

    values.BinLocationAddressAsEntered = geoCoderAddressResult.BinLocationAddressAsEntered

    values.AddressAsEntered = geoCoderAddressResult.addressAsEntered

    values.CrossStreet = geoCoderAddressResult.crossStreet
    values.PickupStreets = geoCoderAddressResult.pickupStreets
    values.Latitude = geoCoderAddressResult.latitude
		values.Longitude = geoCoderAddressResult.longitude
    values.address = geoCoderAddressResult.address
    values.HouseNumber = geoCoderAddressResult.houseNumber
    values.BuildingNumber = geoCoderAddressResult.houseNumber

    values.Street = geoCoderAddressResult.street
    values.Borough = geoCoderAddressResult.borough
    values.City = geoCoderAddressResult.city
    values.Zip = geoCoderAddressResult.zipCode
    values.Section = geoCoderAddressResult.sanitationCollectionSchedulingSectionAndSubsection
    values.BBL = geoCoderAddressResult.bbl
    values.District = geoCoderAddressResult.sanitationDistrict
    values.Source = 'DSNY'
    values.State = 'NY'
	}
}


function handleNextClick(errors, dirty, isSubmitting, nextStep)
{
  //debugger;
  //  console.log("IsSubmitting" + isSubmitting);
  //  console.log("!isEmpty(errors)" + !isEmpty(errors));
  //  console.log("!dirty" + !dirty);
  initialPageLoad = false;
  nextbuttonClicked = true;
  console.log(isSubmitting);

  if(((isSubmitting  || !isEmpty(errors) || !dirty))) {
      firsterror = true;
      return;
   }
   else {
      return nextStep;
   }

}

const Step1 = (props) => {
  console.log('Next clicked');
  const {
    errors,
    dirty,
    isSubmitting,
    nextStep,
  } = props;
  return (<span>
    {props.values.editMode = false}
    {assignGeoCoderAddressValues(props.values, props.geoCoderAddressResult)}
    <props.formFields {...props} />
  </span>)
};


const Steps = ({
  handleSubmit,
  step,
  nextStep,
  previousStep,
  ...props
}) => (

  <form id="form" noValidate onSubmit={handleSubmit}>
    {{
      1: <Step1 nextStep={nextStep} {...props} />,
    }[step] || <div />}
  </form>
)


// Wrap our form with the using withFormik HoC
const IDBox = compose(
  withState('step', 'setStep', 1),
  withHandlers({
    nextStep: ({ setStep, step }) =>
      () => setStep(step + 1),
    previousStep: ({ setStep, step }) =>
      () => setStep(step - 1)
  }),
  withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({...props.customFormData, editMode:props.disabled, formFields: props.formFields, formTitles: props.formTitles, geoCoderAddressResult:props.geoCoderAddressResult, isAddressValidated:props.isAddressValidated}),
  // Add a custom validation function (this can be async too!)
  validate: (values, props) => {

    let errors = {}

      const inputs = Array.from(document.querySelectorAll('#form input, #form .dropdown-toggle'));

      if(!initialPageLoad)
      {
          inputs.forEach(input => {

            //Text, Checkbox Input Validation
            //if (input.type === "text" && input.name==="AddressAsEntered" && ((props.geoCoderAddressResult === null || props.geoCoderAddressResult === undefined) || (props.isAddressValidated === undefined || props.isAddressValidated === 0)))

            if (input.required && input.type === "text"  && (!values[input.name] ||  values[input.name].trim() === "" ||  values[input.name] === 0))
            {
                if(nextbuttonClicked)
                {
                  input.focus();
                  nextbuttonClicked = false;
                }
            }
            else if (input.required && input.type === "text"  && (input.name ==="Email" && !(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values[input.name]))))
            {
                errors[input.name] = "Please enter valid Email Address"
                if(nextbuttonClicked)
                {
                  input.focus();
                  nextbuttonClicked = false;
                }
            }

            //Dropdown List Validation
            else if (input.type === "button" && input.hasAttribute("required") && (values[input.name] === 0 || values[input.name] === ""))
            {
                errors[input.name] = "Please select from the list"
                if(nextbuttonClicked)
                {
                  input.focus();
                  nextbuttonClicked = false;
                }
            }


          });


          if(isEmpty(errors))
            props.validateForm(values,errors);
      }
    return errors
  },
  handleSubmit: (values, {props,setSubmitting, resetForm}) => {
    if(props.stepFunc){
          props.stepFunc();
    }

    if(props.step > 1){
        if(captchaVerified)
        {
          //setTimeout(() => {
          //console.log(this.props);
          //alert(JSON.stringify(values, null, 2));
          props.onSubmit(values);
          setSubmitting(false);
          resetForm(values);
          initialPageLoad = true;
          //console.log(values);

        //}, 1000);
        }
      else
      {
        captchaMessage = "Please select the Recaptcha";
        document.getElementById(`recpatcha`).focus();
        //alert("Please validate captcha");
      }
    }
    else if(nextbuttonClicked){
      captchaVerified = false;
      props.nextStep();
    }
  },
  validateOnChange: true,
  validateOnBlur: true,
  displayName: 'BasicForm'
})
)(Steps);

export default IDBox;
