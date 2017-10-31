import React, {Component} from "react";
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';
import FormSectionHeader from './form_section_header';
import FormHeader from './form_header';
import FormMultiSelect from './multiselect_field'
import FormBoolean from './form_boolean';
import FormField from './form_field';
import FormDropdown from './dropdown_field'
import FormDateTimePicker from './dateTimepicker_field'
import Datetime from 'react-datetime';
import FormTextarea from './textarea_field';
import { withFormik,Formik, Field, Form  } from 'formik'

import '../../content/styles/contactForm.css';


// Our inner form component which receives our form's state and updater methods as props
const InnerForm = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, handledropDown,setFieldValue,
    setFieldTouched }) =>

  <form onSubmit={handleSubmit}>
      <div><FormHeader title='Online Application'/></div>
      <div><FormSectionHeader title='SECTION 1: APPLICANT AND ORGANIZATION LOCATION'/></div>
        <div>'search box validation of address comes up'<br/></div>
        <div><FormSectionHeader title='SECTION 2: TERMS OF SERVICE (MUST AGREE TO ALL TERMS )'/></div>
          <div><FormBoolean title='Yes, I will post a DSNY compost recIpient sign near where DSNY Compost will be used.' name="WillPostCompostRecipientSignage"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.testbool}/></div>
          <div><FormBoolean title='Yes, the sign will be installed within two weeks of receiving the material.' name="WillPostSignageWithinTwoWeeks"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.testbool}/></div>
          <div><FormBoolean title='Yes, I will subming three (3) photos of the compost in use to NYCCOMPOST@DSNY.NYC.GOV.' name="WillSubmitThreePhotos"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.testbool}/></div>
          <div><FormBoolean title='Yes, photos submitted may be used for DSNY program promotion.' name="ConsentToDsnyUseOfPhotos"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.testbool}/></div>
          <div><FormSectionHeader title='SECTION 3: ORGANIZATION INFORMATION'/></div>
            <div><FormDropdown title='APPLYING AS' name="dropdownt" ondropDownChange={handledropDown} onChange={setFieldValue}
            onBlur={handleBlur} options={[
            {
            "Id": 1,
            "Name": "ApplyingAsStreetTreeSteward",
            "DisplayName": "StreetTreeSteward",
            "Selected": false
            }, {
            "Id": 2,
            "Name": "ApplyingAsOrganization",
            "DisplayName": "Organization",
            "Selected": false
            }
            ]}/></div>
      <div><FormField title='ORGANIZATION NAME' type="email"
      name="OrganizationName"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.email}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField></div>
    <div><FormField title='ORGANIZATION TAX IDENTIFICATION NUMBER NAME' type="number"
    name="OrganizationTaxIdNumber"
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.password}>{touched.password && errors.password && <div>{errors.password}</div>}</FormField></div>
    <div><FormField title='ORGANIZATION OR PROJECT WEBSITE (optional)' type="email"
    name="OrganizationWebsite"
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.email}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField></div>
    <div><FormField title='ORGANIZATION OR PROJECT FACEBOOK PAGE (optional)' type="email"
    name="OrganizationFacebookPage"
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.email}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField></div>
    <div><FormField title='ORGANIZATION OR PROJECT TWITTER HANDLE (Optional)' type="email"
    name="OrganizationTwitterHandle"
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.email}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField></div>
    <div><FormField title='ORGANIZATION OR PROJECT instagram ID (optional)' type="email"
    name="OrganizationInstagramHandle"
    onChange={handleChange}
    onBlur={handleBlur}
    value={values.email}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField></div>
  <div><FormSectionHeader title='SECTION 4: TERMS OF SERVICE (MUST AGREE TO ALL TERMS )'/></div>
<div><FormMultiSelect title='THE SIGN WILL BE INSTALLED WITHIN TWO WEEKS OF RECEIVING THE MATERIAL.' name="multioption" onChange={handleChange}
onBlur={handleBlur} options={[
{
"Id": 1,
"Name": "Work",
"DisplayName": "Street Tree Steward",
"Selected": false
}, {
"Id": 2,
"Name": "Mobile",
"DisplayName": "Organization",
"Selected": false
}
]}/></div>
<div><FormDropdown title='WHAT TYPE OF SITE IS THIS?' name="dropdownt" ondropDownChange={handledropDown} onChange={setFieldValue}
onBlur={handleBlur} options={[
{
"Id": 1,
"Name": "Work",
"DisplayName": "Work",
"Selected": false
}, {
"Id": 2,
"Name": "Mobile",
"DisplayName": "Mobile",
"Selected": false
}, {
"Id": 3,
"Name": "Home",
"DisplayName": "Home",
"Selected": false
}
]}/></div>
<div><Col xs={12}><button type="submit" disabled={isSubmitting}>Submit</button></Col>  </div>
  </form>


// Wrap our form with the using withFormik HoC
const MyForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({ email: '', password: '' ,testbool:true, dropdownt:''}),
  // Add a custom validation function (this can be async too!)
  validate: (values, props) => {
    let errors = {}
    if (!values.email) {
     errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address'
    }
    return errors
  },

  // Submission handler
  handleSubmit: (values, { props, setSubmitting, setErrors, /* setValues, setStatus, and other goodies */ }) => {
console.log(values);
  },
  // Submission handler
  handleChange: (values, { props, setSubmitting, setErrors, /* setValues, setStatus, and other goodies */ }) => {
console.log(values);
  }
})(InnerForm)

class TestForm extends Component {



  render() {

    return (
      <div>
        <div><MyForm /></div>
        <Row>
          <div><FormHeader title='Online Application'/></div>
          <div><FormSectionHeader title='SECTION 1: APPLICANT AND ORGANIZATION LOCATION'/></div>
          <div>'search box validation of address comes up'<br/></div>
          <div><FormSectionHeader title='SECTION 2: TERMS OF SERVICE (MUST AGREE TO ALL TERMS )'/></div>
          <div><FormBoolean onlyYes title='I WILL POST A DSNY COMPOST RECIPIENT SIGN NEAR WHERE DSNY COMPOST WILL BE USED.'/></div>
          <div><FormBoolean onlyYes title='THE SIGN WILL BE INSTALLED WITHIN TWO WEEKS OF RECEIVING THE MATERIAL.'/></div>
          <div><FormBoolean onlyYes title='I WILL SUBMIT THREE (3) PHOTOS OF THE COMPOST IN USE TO NYCCOMPOST@DSNY.NYC.GOV.'/></div>
          <div><FormBoolean onlyYes title='PHOTOS SUBMITTED MAY BE USED FOR DSNY PROGRAM PROMOTION.'/></div>
          <div><FormSectionHeader title='SECTION 3: ORGANIZATION INFORMATION'/></div>
          <div><FormMultiSelect title='THE SIGN WILL BE INSTALLED WITHIN TWO WEEKS OF RECEIVING THE MATERIAL.' options={[
        {
          "Id": 1,
          "Name": "Work",
          "DisplayName": "Street Tree Steward",
          "Selected": false
        }, {
          "Id": 2,
          "Name": "Mobile",
          "DisplayName": "Organization",
          "Selected": false
        }
      ]}/></div>
          <div><FormField title='ORGANIZATION NAME' type='input'/></div>
          <div><FormField title='ORGANIZATION TAX IDENTIFICATION NUMBER' type='input'/></div>
          <div><FormField title='ORGANIZATION OR PROJECT WEBSITE (optional)' type='password'/></div>
          <div><FormField title='ORGANIZATION OR PROJECT FACEBOOK PAGE (optional)' type='date'/></div>
          <div><FormField title='ORGANIZATION OR PROJECT TWITTER HANDLE (Optional)' type='email'/></div>
          <div><FormField title='ORGANIZATION OR PROJECT instagram ID (optional)' type='phone'/></div>
          <div><FormSectionHeader title='SECTION 4: TERMS OF SERVICE (MUST AGREE TO ALL TERMS )'/></div>
          <div><FormField title='FIRST NAME' type='input'/></div>
          <div><FormField title='LAST NAME' type='input'/></div>
          <div><FormField title='YOUR TITLE OR AFFILIATION WITH ORGANIZATION (optional)' type='input'/></div>
          <div><FormBoolean title='ARE YOU A CERTIFIED NYC MASTER COMPOSTER?'/></div>
          <div><FormField title='ORGANIZATION OR PROJECT instagram ID (optional)' type='phone'/></div>
          <div><FormDropdown title='WHAT TYPE OF SITE IS THIS?' options={[
        {
          "Id": 1,
          "Name": "Work",
          "DisplayName": "Work",
          "Selected": false
        }, {
          "Id": 2,
          "Name": "Mobile",
          "DisplayName": "Mobile",
          "Selected": false
        }, {
          "Id": 3,
          "Name": "Home",
          "DisplayName": "Home",
          "Selected": false
        }
      ]}/></div>
          <div><FormField title='ORGANIZATION OR PROJECT instagram ID (optional)' type='phone'/></div>
          <div><FormDropdown title='WHAT TYPE OF SITE IS THIS?' options={[
        {
          "Id": 1,
          "Name": "Work",
          "DisplayName": "Work",
          "Selected": false
        }, {
          "Id": 2,
          "Name": "Mobile",
          "DisplayName": "Mobile",
          "Selected": false
        }, {
          "Id": 3,
          "Name": "Home",
          "DisplayName": "Home",
          "Selected": false
        }
      ]}/></div>
          <div><FormField title='ORGANIZATION OR PROJECT TWITTER HANDLE (Optional)' type='email'/></div>
          <div><FormSectionHeader title='SECTION 5: SITE INFORMATION'/></div>
          <div><FormDropdown title='WHAT TYPE OF SITE IS THIS?' options={[
        {
          "Id": 1,
          "Name": "Work",
          "DisplayName": "Work",
          "Selected": false
        }, {
          "Id": 2,
          "Name": "Mobile",
          "DisplayName": "Mobile",
          "Selected": false
        }, {
          "Id": 3,
          "Name": "Home",
          "DisplayName": "Home",
          "Selected": false
        }
      ]}/></div>
          <div><FormField title='Other Site Type' type='input'/></div>
          <div><FormDropdown title='WHAT TYPE OF SITE IS THIS?' options={[
        {
          "Id": 1,
          "Name": "Work",
          "DisplayName": "Work",
          "Selected": false
        }, {
          "Id": 2,
          "Name": "Mobile",
          "DisplayName": "Mobile",
          "Selected": false
        }, {
          "Id": 3,
          "Name": "Home",
          "DisplayName": "Home",
          "Selected": false
        }
      ]}/></div>
          <div><FormField title='OTHER PERMITTING ORGANIZATION' type='input'/></div>
          <div><FormField title='SITE SIZE (SQUARE FEET)' type='input'/></div>
          <div><FormBoolean title='IS THIS A GREENTHUMB GARDEN?'/></div>
          <div><FormBoolean title='HAVE YOU RECEIVED DSNY COMPOST IN THE PAST?'/></div>
          <div><FormTextarea title='DESCRIBE HOW WILL YOU USE DSNY COMPOST? (INCLUDE SPECIFIC DATES IF KNOWN)'/></div>
          <div><FormSectionHeader title='SECTION 6: DELIVERY INFORMATION'/></div>
          <div><FormField title='NUMBER OF PALLETS OF COMPOST (EACH PALLET CONTAINS 60 FORTY-POUND BAGS)' type='input'/></div>
          <div><FormDateTimePicker title='WHEN IS THE LATEST DATE YOUR COMPOST IS NEEDED BY?'/></div>
          <div><FormMultiSelect title='THE SIGN WILL BE INSTALLED WITHIN TWO WEEKS OF RECEIVING THE MATERIAL.' options={[
        {
          "Id": 1,
          "Name": "Work",
          "DisplayName": "Monday",
          "Selected": false
        }, {
          "Id": 2,
          "Name": "Mobile",
          "DisplayName": "Tuesday",
          "Selected": false
        }, {
          "Id": 1,
          "Name": "Work",
          "DisplayName": "Wednesday",
          "Selected": false
        }, {
          "Id": 2,
          "Name": "Mobile",
          "DisplayName": "Thursday",
          "Selected": false
        }, {
          "Id": 1,
          "Name": "Work",
          "DisplayName": "Friday",
          "Selected": false
        }, {
          "Id": 2,
          "Name": "Mobile",
          "DisplayName": "Saturday",
          "Selected": false
        }
      ]}/></div>
          <div><FormDropdown title='WHAT TYPE OF SITE IS THIS?' options={[
        {
          "Id": 1,
          "Name": "Work",
          "DisplayName": "Work",
          "Selected": false
        }, {
          "Id": 2,
          "Name": "Mobile",
          "DisplayName": "Mobile",
          "Selected": false
        }, {
          "Id": 3,
          "Name": "Home",
          "DisplayName": "Home",
          "Selected": false
        }
      ]}/></div>

          <div><FormDropdown title='WHAT TYPE OF SITE IS THIS?' options={[
        {
          "Id": 1,
          "Name": "Work",
          "DisplayName": "Work",
          "Selected": false
        }, {
          "Id": 2,
          "Name": "Mobile",
          "DisplayName": "Mobile",
          "Selected": false
        }, {
          "Id": 3,
          "Name": "Home",
          "DisplayName": "Home",
          "Selected": false
        }
      ]}/></div>
          <div><FormField title='DELIVERY NOTES AND INSTRUCTIONS (Optional)' type='input'/></div>
          <div><FormField title='HEIGHT AND WIDTH OF YOUR SITE’S ENTRANCE (Optional)' type='input'/></div>
          <div><FormBoolean title='ALTERNATE SIDE PARKING AT SITE?'/></div>
        </Row>
      </div>
    );
  };
};

export default TestForm;
