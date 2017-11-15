import React from "react";
import {Row, Col} from 'react-bootstrap';
import {withFormik, Formik, Field, Form} from 'formik'
import { compose, withState, withHandlers } from 'recompose';
import isEmpty from 'lodash/isEmpty'
import { compostFormTitles as Titles} from './titles'
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
let initialFormLoad = true;

// Captcha - site key
const sitekey = '6LdiUjgUAAAAALwAtRNxH962XysQsTtWsIYLEcS4';

// Captcha - onload callback function
const callback = () => {
  console.log('Done!!!!');
};

const verifyCallback = (response) => {
  console.log(response);
};

const expiredCallback = () => {
  console.log(`Recaptcha expired`);
};

 

function handleNextClick(errors, dirty, isSubmitting, nextStep)
{
  //  console.log("IsSubmitting" + isSubmitting);
  //  console.log("!isEmpty(errors)" + !isEmpty(errors));
  //  console.log("!dirty" + !dirty);
   
   if(initialFormLoad)
   {
      initialFormLoad = false;
      return;
   }
   else if(((isSubmitting  || !isEmpty(errors) || !dirty)) && !initialFormLoad) {
      //firsterror = true;
      return;
   } 
   else {
      return nextStep;
   }

}

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

    <Col xs={12}>
      <button className="formSubmitBtn" id="nextbtn" onClick={handleNextClick(errors, dirty, isSubmitting, nextStep)}>NEXT</button>
    </Col>
{/*<DisplayFormikState {...props}/>*/}
  </span>)
};

const Step2 = (props) => {
  const {
    previousStep
  } = props;
  return (<span>
    {props.values.editMode = true}
    <props.formFields {...props} />


    <div className="FormField col-md-12 col-sm-12 col-xs-12">
    <Recaptcha
          sitekey={sitekey}
          render="explicit"
          verifyCallback={verifyCallback}
          onloadCallback={callback}
          expiredCallback={expiredCallback}
        />

    </div>
    <Col xs={12}>
    <button className="formSubmitBtn" type="submit">SUBMIT</button>
    <button className="formEditBtn" onClick={previousStep}>EDIT</button>
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

  <form id="form" noValidate onSubmit={handleSubmit}>
    {{
      1: <Step1 nextStep={nextStep} {...props} />,
      2: <Step2 previousStep={previousStep} {...props} />,
      3: <Step2 {...props} />
    }[step] || <div />}
  </form>
)


// Wrap our form with the using withFormik HoC
const FormSteps = compose(
  withState('step', 'setStep', 1),
  withHandlers({
    nextStep: ({ setStep, step }) =>
      () => setStep(step + 1),
    previousStep: ({ setStep, step }) =>
      () => setStep(step - 1)
  }),
  withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({...props.customFormData, editMode:props.disabled, formFields: props.formFields, formTitles: props.formTitles}),
  // Add a custom validation function (this can be async too!)
  validate: (values, props) => {

    let errors = {}
    
    const inputs = document.querySelectorAll('#form input, #form .dropdown-toggle');


    inputs.forEach(input => {
      //input.classList.add('active');

      console.log(input.name);
      console.log(input.type);
      console.log(input.hasAttribute("required"));
      console.log(values[input.name]);

      //Text, Checkbox Input Validation
      if (input.required && (!values[input.name] ||  values[input.name] === 'Select one'))
      {
          errors[input.name] = Titles.RequiredFieldMessage
          if(firsterror)
          {
            input.focus();
            firsterror = false;
          }
      }
      //Dropdown List Validation
      else if (input.type === "button" && input.hasAttribute("required") && values[input.name] === null)
      {
          errors[input.name] = Titles.RequiredFieldMessage
          if(firsterror)
          {
            //input.focus();
            firsterror = false;
          }
      }


    });


    //Get the required fields from the const schema defined above
    // for (var value in schema.requiredFields) {
    //     if (!values[schema.requiredFields[value]] ||  values[schema.requiredFields[value]] === 'Select one')
    //     {
    //       errors[schema.requiredFields[value]] = Titles.RequiredFieldMessage
    //     }
    // }


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
    if(isEmpty(errors))
      props.validateForm(values,errors);

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

export default FormSteps;
