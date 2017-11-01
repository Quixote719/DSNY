import React, {Component} from "react";
import {Row, Col, Tooltip} from 'react-bootstrap';
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
import {compostFormObject, compostFormTitles as Titles} from './sample'

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
    <FormHeader title='Online Application'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <div>
      'search box validation of address comes up'
    </div>
    <FormSectionHeader title={Titles.sectionTwo}/>
    <FormBoolean title={Titles.WillPostCompostRecipientSignage} name="WillPostCompostRecipientSignage" onChange={handleChange} onBlur={handleBlur} value={values.WillPostCompostRecipientSignage}/>
    <FormBoolean title={Titles.WillPostSignageWithinTwoWeeks} name="WillPostSignageWithinTwoWeeks" onChange={handleChange} onBlur={handleBlur} value={values.WillPostSignageWithinTwoWeeks}/>
    <FormBoolean title={Titles.WillSubmitThreePhotos} name="WillSubmitThreePhotos" onChange={handleChange} onBlur={handleBlur} value={values.WillSubmitThreePhotos}/>
    <FormBoolean title={Titles.ConsentToDsnyUseOfPhotos} name="ConsentToDsnyUseOfPhotos" onChange={handleChange} onBlur={handleBlur} value={values.ConsentToDsnyUseOfPhotos}/>
    <FormSectionHeader title={Titles.sectionThree}/>
    <FormDropdown title='APPLYING AS' name="ApplyingAs" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={[
        {
          "Id": 1,
          "Name": "ApplyingAsStreetTreeSteward",
          "DisplayName": "Street Tree Steward",
          "Selected": false
        }, {
          "Id": 2,
          "Name": "ApplyingAsOrganization",
          "DisplayName": "Organization",
          "Selected": false
        }
      ]}/>
    <FormField title='ORGANIZATION NAME' type="text" disabledf={values.ApplyingAs !== 'Organization'} name="OrganizationName" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationName}>{touched.OrganizationName && errors.OrganizationName && <div>{errors.OrganizationName}</div>}</FormField>
    <FormField title='ORGANIZATION TAX IDENTIFICATION NUMBER NAME' type="text" name="OrganizationTaxIdNumber" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationTaxIdNumber}>{touched.OrganizationTaxIdNumber && errors.OrganizationTaxIdNumber && <Tooltip placement="bottom" className="in" id="tooltip-bottom">{errors.OrganizationTaxIdNumber}</Tooltip>}</FormField>
    <FormField title='ORGANIZATION OR PROJECT WEBSITE (optional)' type="text" name="OrganizationWebsite" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationWebsite}>{touched.OrganizationWebsite && errors.OrganizationWebsite && <Tooltip placement="bottom" className="in" id="tooltip-bottom">{errors.OrganizationWebsite}</Tooltip>}</FormField>
    <FormField title='ORGANIZATION OR PROJECT FACEBOOK PAGE (optional)' type="text" name="OrganizationFacebookPage" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationFacebookPage}>{touched.OrganizationWebsite && errors.OrganizationWebsite && <div>{errors.email}</div>}</FormField>
    <FormField title='ORGANIZATION OR PROJECT TWITTER HANDLE (Optional)' type="text" name="OrganizationTwitterHandle" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationTwitterHandle}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormField title='ORGANIZATION OR PROJECT instagram ID (optional)' type="text" name="OrganizationInstagramHandle" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationInstagramHandle}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormSectionHeader title={Titles.sectionFour}/>
    <FormField title='FIRST NAME' type="text" name="FirstName" onChange={handleChange} onBlur={handleBlur} value={values.FirstName}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormField title='LAST NAME' type="text" name="LastName" onChange={handleChange} onBlur={handleBlur} value={values.LastName}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormField title='YOUR TITLE OR AFFILIATION WITH ORGANIZATION (optional)' type="text" name="Title" onChange={handleChange} onBlur={handleBlur} value={values.Title}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormDropdown title='ARE YOU A CERTIFIED NYC MASTER COMPOSTER?' name="IsCertifiedNycMasterComposter" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} noOptions="true"/>
    <FormField title='PRIMARY PHONE NUMBER' type="text" name="PrimaryPhone" onChange={handleChange} onBlur={handleBlur} value={values.PrimaryPhone}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormDropdown title='Phone Type (optional)' name="PrimaryPhoneTypeId" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={values.PrimaryPhoneTypes}/>
    <FormField title='SECONDARY PHONE NUMBER (Optional)' type="text" name="SecondaryPhone" onChange={handleChange} onBlur={handleBlur} value={values.SecondaryPhone}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormDropdown title='Phone Type (optional)' name="SecondaryPhoneTypeId" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={values.SecondaryPhoneTypes}/>
    <FormField title='E-MAIL' type="text" name="Email" onChange={handleChange} onBlur={handleBlur} value={values.Email}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormField title='CONFIRM E-MAIL' type="text" name="ConfirmEmail" onChange={handleChange} onBlur={handleBlur} value={values.ConfirmEmail}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormSectionHeader title={Titles.sectionFive}/>
    <FormDropdown title='WHAT TYPE OF SITE IS THIS?' name="CompostSiteTypeId" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={values.CompostSiteTypes}/>
    <FormField title='OTHER SITE TYPE' type="text" disabledf={values.CompostSiteTypeId !== 'Other'} name="OtherCompostSiteType" onChange={handleChange} onBlur={handleBlur} value={values.OtherCompostSiteType}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormDropdown title='PERMISSION TO TEND THIS SITE WAS GRANTED BY' name="CompostSitePermittingOrganizationId" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={values.CompostSitePermittingOrganizations}/>
    <FormField title='OTHER PERMITTING ORGANIZATION' type="text" disabledf={values.CompostSitePermittingOrganizationId !== 'Other'} name="OtherCompostSitePermittingOrganization" onChange={handleChange} onBlur={handleBlur} value={values.OtherCompostSitePermittingOrganization}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormField title='SITE SIZE (SQUARE FEET)' type="text" name="SiteSize" onChange={handleChange} onBlur={handleBlur} value={values.SiteSize}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    <FormDropdown title='IS THIS A GREENTHUMB GARDEN?' name="IsGreenThumbGarden" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur}/>
    <FormDropdown title='HAVE YOU RECEIVED DSNY COMPOST IN THE PAST?' name="HasReceivedDsnyCompostBefore" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur}/>
    <FormTextarea title='DESCRIBE HOW WILL YOU USE DSNY COMPOST? (INCLUDE SPECIFIC DATES IF KNOWN)' name="CompostUseDescription" onChange={handleChange} onBlur={handleBlur} value={values.CompostUseDescription}/>
    <Col xs={12}>
      <button className="contactformButton" type="submit" disabled={isSubmitting}>NEXT</button>
    </Col>
    <DisplayFormikState {...props}/>
  </form>)
};

// Wrap our form with the using withFormik HoC
const MyForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => (props.customFormData),
  // Add a custom validation function (this can be async too!)
  validate: (values, props) => {
    let errors = {}
    if (!values.OrganizationTaxIdNumber) {
      errors.OrganizationTaxIdNumber = 'Please enter a valid Organization TaxId Number'
    } else if (!values.OrganizationWebsite) {
      errors.OrganizationWebsite = 'Please enter a valid Organization Website'
    }
    if (!values.WillPostCompostRecipientSignage) {

      errors.WillPostCompostRecipientSignage = 'please check this'
    }
    return errors
  },
  handleSubmit: (values, {setSubmitting}) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      console.log(values);
    }, 1000);
  },
  displayName: 'BasicForm'
})(InnerForm)

class TestForm extends Component {
  constructor(props, context) {
    super(props, context);
    console.log(compostFormObject);
  }
  render() {

    return (<div className='contactForm'>
      <div><MyForm customFormData={compostFormObject}/></div>
      <Row>
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
