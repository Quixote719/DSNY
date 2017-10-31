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
import {withFormik, Formik, Field, Form} from 'formik'

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
      <strong>props</strong> ={' '}
      {JSON.stringify(props, null, 2)}
    </pre>
  </div>);

// Our inner form component which receives our form's state and updater methods as props
const InnerForm = (props) => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    handledropDown,
    setFieldValue,
    setFieldTouched
  } = props;
  return (<form onSubmit={handleSubmit}>
    <div><FormHeader title='Online Application'/></div>
    <div><FormSectionHeader title='SECTION 1: APPLICANT AND ORGANIZATION LOCATION'/></div>
    <div>
      'search box validation of address comes up'
    </div>
    <div><FormSectionHeader title='SECTION 2: TERMS OF SERVICE (MUST AGREE TO ALL TERMS )'/></div>
    <div><FormBoolean title='Yes, I will post a DSNY compost recIpient sign near where DSNY Compost will be used.' name="WillPostCompostRecipientSignage" onChange={handleChange} onBlur={handleBlur} value={values.WillPostCompostRecipientSignage}/></div>
    <div><FormBoolean title='Yes, the sign will be installed within two weeks of receiving the material.' name="WillPostSignageWithinTwoWeeks" onChange={handleChange} onBlur={handleBlur} value={values.WillPostSignageWithinTwoWeeks}/></div>
    <div><FormBoolean title='Yes, I will subming three (3) photos of the compost in use to NYCCOMPOST@DSNY.NYC.GOV.' name="WillSubmitThreePhotos" onChange={handleChange} onBlur={handleBlur} value={values.WillSubmitThreePhotos}/></div>
    <div><FormBoolean title='Yes, photos submitted may be used for DSNY program promotion.' name="ConsentToDsnyUseOfPhotos" onChange={handleChange} onBlur={handleBlur} value={values.ConsentToDsnyUseOfPhotos}/></div>
    <div><FormSectionHeader title='SECTION 3: ORGANIZATION INFORMATION'/></div>
    <div><FormDropdown title='APPLYING AS' name="dropdownt" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={[
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
    <div>
      <FormField title='ORGANIZATION NAME' type="text" name="OrganizationName" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationName}>{touched.OrganizationName && errors.OrganizationName && <div>{errors.OrganizationName}</div>}</FormField>
    </div>
    <div>
      <FormField title='ORGANIZATION TAX IDENTIFICATION NUMBER NAME' type="number" name="OrganizationTaxIdNumber" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationTaxIdNumber}>{touched.password && errors.password && <div>{errors.password}</div>}</FormField>
    </div>
    <div>
      <FormField title='ORGANIZATION OR PROJECT WEBSITE (optional)' type="text" name="OrganizationWebsite" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationWebsite}>{touched.email && errors.email && <div>{errors.OrganizationWebsite}</div>}</FormField>
    </div>
    <div>
      <FormField title='ORGANIZATION OR PROJECT FACEBOOK PAGE (optional)' type="text" name="OrganizationFacebookPage" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationFacebookPage}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    </div>
    <div>
      <FormField title='ORGANIZATION OR PROJECT TWITTER HANDLE (Optional)' type="text" name="OrganizationTwitterHandle" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationTwitterHandle}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    </div>
    <div>
      <FormField title='ORGANIZATION OR PROJECT instagram ID (optional)' type="text" name="OrganizationInstagramHandle" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationInstagramHandle}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    </div>
    <div><FormSectionHeader title='SECTION 4: TERMS OF SERVICE (MUST AGREE TO ALL TERMS )'/></div>
    <div>
      <Col xs={12}>
        <button className="contactformButton" type="submit" disabled={isSubmitting}>NEXT</button>
      </Col>
    </div>
    <div>
      <br/>
      <br/>
      <DisplayFormikState {...props}/>
    </div>

  </form>)
};

// Wrap our form with the using withFormik HoC
const MyForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({
    WillPostCompostRecipientSignage: false,
    WillPostSignageWithinTwoWeeks: false,
    WillSubmitThreePhotos: false,
    ConsentToDsnyUseOfPhotos: false,
    OrganizationName: props.customFormData.OrganizationName,
    OrganizationTaxIdNumber: props.customFormData.OrganizationTaxIdNumber,
    OrganizationWebsite: props.customFormData.OrganizationWebsite,
    OrganizationFacebookPage: props.customFormData.OrganizationFacebookPage,
    OrganizationTwitterHandle: 'www.twitter.com/dsny-nyc',
    OrganizationInstagramHandle: 'www.instagram.com/dsny-nyc'
  }),
  // Add a custom validation function (this can be async too!)
  validate: (values, props) => {
    let errors = {}
    if (!values.OrganizationName) {
      errors.OrganizationName = 'Please enter a valid OrganizationName'
    } else if (/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(values.OrganizationWebsite)) {
      errors.OrganizationWebsite = 'Invalid website'
    }
    return errors
  },

  handleChange: (values, props) => {
    console.log(values);
  },

  handleSubmit: (values, {
    props, setSubmitting, setErrors,
    /* setValues, setStatus, and other goodies */
  }) => {
    console.log(props);
    console.log(values);
  }
})(InnerForm)

const imaginaryformData = {
  WillPostCompostRecipientSignage: false,
  WillPostSignageWithinTwoWeeks: false,
  WillSubmitThreePhotos: false,
  ConsentToDsnyUseOfPhotos: false,
  OrganizationName: 'DSNY New York CIty',
  OrganizationTaxIdNumber: '212-291-1259',
  OrganizationWebsite: 'www.dsny.nyc.gov',
  OrganizationFacebookPage: 'www.facebook.com/dsny-nyc',
  OrganizationTwitterHandle: '',
  OrganizationInstagramHandle: ''
}

class TestForm extends Component {

  render() {

    return (<div>
      <div><MyForm customFormData={imaginaryformData}/></div>
      <Row>
        <div><FormHeader title='Online Application'/></div>
        <div><FormSectionHeader title='SECTION 1: APPLICANT AND ORGANIZATION LOCATION'/></div>

        <div><FormSectionHeader title='SECTION 2: TERMS OF SERVICE (MUST AGREE TO ALL TERMS )'/></div>
        <div><FormBoolean onlyYes="onlyYes" title='I WILL POST A DSNY COMPOST RECIPIENT SIGN NEAR WHERE DSNY COMPOST WILL BE USED.'/></div>
        <div><FormBoolean onlyYes="onlyYes" title='THE SIGN WILL BE INSTALLED WITHIN TWO WEEKS OF RECEIVING THE MATERIAL.'/></div>
        <div><FormBoolean onlyYes="onlyYes" title='I WILL SUBMIT THREE (3) PHOTOS OF THE COMPOST IN USE TO NYCCOMPOST@DSNY.NYC.GOV.'/></div>
        <div><FormBoolean onlyYes="onlyYes" title='PHOTOS SUBMITTED MAY BE USED FOR DSNY PROGRAM PROMOTION.'/></div>
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
    </div>);
  };
};

export default TestForm;
