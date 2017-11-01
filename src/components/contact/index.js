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
    <div><FormDropdown title='APPLYING AS' name="ApplyingAs" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={[
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
    ]}/></div>
    <div>
      <FormField title='ORGANIZATION NAME' type="text" disabledf={values.ApplyingAs != 'Organization'} name="OrganizationName" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationName}>{touched.OrganizationName && errors.OrganizationName && <div>{errors.OrganizationName}</div>}</FormField>
    </div>
    <div>
      <FormField title='ORGANIZATION TAX IDENTIFICATION NUMBER NAME' type="text" name="OrganizationTaxIdNumber" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationTaxIdNumber}>{touched.OrganizationTaxIdNumber && errors.OrganizationTaxIdNumber && <Tooltip placement="bottom" className="in" id="tooltip-bottom">{errors.OrganizationTaxIdNumber}</Tooltip>}</FormField>
    </div>
    <div>
      <FormField title='ORGANIZATION OR PROJECT WEBSITE (optional)' type="text" name="OrganizationWebsite" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationWebsite}>{touched.OrganizationWebsite && errors.OrganizationWebsite && <Tooltip placement="bottom" className="in" id="tooltip-bottom">{errors.OrganizationWebsite}</Tooltip>}</FormField>
    </div>
    <div>
      <FormField title='ORGANIZATION OR PROJECT FACEBOOK PAGE (optional)' type="text" name="OrganizationFacebookPage" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationFacebookPage}>{touched.OrganizationWebsite && errors.OrganizationWebsite && <div>{errors.email}</div>}</FormField>
    </div>
    <div>
      <FormField title='ORGANIZATION OR PROJECT TWITTER HANDLE (Optional)' type="text" name="OrganizationTwitterHandle" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationTwitterHandle}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    </div>
    <div>
      <FormField title='ORGANIZATION OR PROJECT instagram ID (optional)' type="text" name="OrganizationInstagramHandle" onChange={handleChange} onBlur={handleBlur} value={values.OrganizationInstagramHandle}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    </div>
    <div><FormSectionHeader title='SECTION 4: APPLICANT CONTACT INFORMATION'/></div>
    <div>
      <FormField title='FIRST NAME' type="text" name="FirstName" onChange={handleChange} onBlur={handleBlur} value={values.FirstName}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    </div>
    <div>
      <FormField title='LAST NAME' type="text" name="LastName" onChange={handleChange} onBlur={handleBlur} value={values.LastName}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    </div>
    <div>
      <FormField title='YOUR TITLE OR AFFILIATION WITH ORGANIZATION (optional)' type="text" name="Title" onChange={handleChange} onBlur={handleBlur} value={values.Title}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    </div>
    <div><FormDropdown title='ARE YOU A CERTIFIED NYC MASTER COMPOSTER?' name="IsCertifiedNycMasterComposter" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={[
      {
        "Id": 1,
        "Name": "Yes",
        "DisplayName": "Yes",
        "Selected": false
      }, {
        "Id": 2,
        "Name": "No",
        "DisplayName": "No",
        "Selected": false
      }
    ]}/></div>
    <div>
      <FormField title='PRIMARY PHONE NUMBER' type="text" name="PrimaryPhone" onChange={handleChange} onBlur={handleBlur} value={values.PrimaryPhone}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    </div>
    <div><FormDropdown title='Phone Type (optional)' name="PrimaryPhoneTypeId" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={[
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
    <div>
      <FormField title='SECONDARY PHONE NUMBER (Optional)' type="text" name="SecondaryPhone" onChange={handleChange} onBlur={handleBlur} value={values.SecondaryPhone}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    </div>
    <div><FormDropdown title='Phone Type (optional)' name="SecondaryPhoneTypeId" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={[
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
    <div>
      <FormField title='E-MAIL' type="text" name="Email" onChange={handleChange} onBlur={handleBlur} value={values.Email}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    </div>
    <div>
      <FormField title='CONFIRM E-MAIL' type="text" name="ConfirmEmail" onChange={handleChange} onBlur={handleBlur} value={values.ConfirmEmail}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    </div>
    <div><FormSectionHeader title='SECTION 5: SITE INFORMATION'/></div>
    <div><FormDropdown title='WHAT TYPE OF SITE IS THIS?' name="CompostSiteTypeId" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={[
      {
        "Id": 1,
        "Name": "CommunityCompostSite",
        "DisplayName": "Community Compost Site",
        "Selected": false
      }, {
        "Id": 2,
        "Name": "CommunityGarden",
        "DisplayName": "Community Garden",
        "Selected": false
      }, {
        "Id": 3,
        "Name": "NYCHAProperty",
        "DisplayName": "New York Housing Authority (NYCHA) Property",
        "Selected": false
      }, {
        "Id": 4,
        "Name": "Nonprofit",
        "DisplayName": "Nonprofit Organization or Institution",
        "Selected": false
      }, {
        "Id": 5,
        "Name": "Park",
        "DisplayName": "NYC Park",
        "Selected": false
      }, {
        "Id": 6,
        "Name": "School",
        "DisplayName": "NYC School (K-12)",
        "Selected": false
      }, {
        "Id": 7,
        "Name": "UrbanFarm",
        "DisplayName": "Urban Farm",
        "Selected": false
      }, {
        "Id": 8,
        "Name": "StreetTrees",
        "DisplayName": "Street Trees",
        "Selected": false
      }, {
        "Id": 9,
        "Name": "Other",
        "DisplayName": "Other",
        "Selected": false
      }
    ]}/></div>
    <div>
      <FormField title='OTHER SITE TYPE' type="text" disabledf={values.CompostSiteTypeId != 'Other'} name="OtherCompostSiteType" onChange={handleChange} onBlur={handleBlur} value={values.OtherCompostSiteType}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    </div>
    <div><FormDropdown title='PERMISSION TO TEND THIS SITE WAS GRANTED BY' name="CompostSitePermittingOrganizationId" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={[
      {
        "Id": 1,
        "Name": "GreenThumb",
        "DisplayName": "GreenThumb",
        "Selected": false
      }, {
        "Id": 2,
        "Name": "NYCParksAndRec",
        "DisplayName": "NYC Department of Parks & Recreation",
        "Selected": false
      }, {
        "Id": 3,
        "Name": "NYCDOE",
        "DisplayName": "NYC Department of Education",
        "Selected": false
      }, {
        "Id": 4,
        "Name": "NYCHA",
        "DisplayName": "NYC Housing Authority",
        "Selected": false
      }, {
        "Id": 5,
        "Name": "TreesNewYork",
        "DisplayName": "TreesNewYork (Certified Citizen Pruner)",
        "Selected": false
      }, {
        "Id": 6,
        "Name": "Other",
        "DisplayName": "Other",
        "Selected": false
      }
    ]}/></div>
    <div>
      <FormField title='OTHER PERMITTING ORGANIZATION' type="text" disabledf={values.CompostSitePermittingOrganizationId != 'Other'} name="OtherCompostSitePermittingOrganization" onChange={handleChange} onBlur={handleBlur} value={values.OtherCompostSitePermittingOrganization}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    </div>
    <div>
      <FormField title='SITE SIZE (SQUARE FEET)' type="text" name="SiteSize" onChange={handleChange} onBlur={handleBlur} value={values.SiteSize}>{touched.email && errors.email && <div>{errors.email}</div>}</FormField>
    </div>
    <div><FormDropdown title='IS THIS A GREENTHUMB GARDEN?' name="IsGreenThumbGarden" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={[
      {
        "Id": 1,
        "Name": "Yes",
        "DisplayName": "Yes",
        "Selected": false
      }, {
        "Id": 2,
        "Name": "No",
        "DisplayName": "No",
        "Selected": false
      }
    ]}/></div>
    <div><FormDropdown title='HAVE YOU RECEIVED DSNY COMPOST IN THE PAST?' name="HasReceivedDsnyCompostBefore" ondropDownChange={handledropDown} onChange={setFieldValue} onBlur={handleBlur} options={[
      {
        "Id": 1,
        "Name": "Yes",
        "DisplayName": "Yes",
        "Selected": false
      }, {
        "Id": 2,
        "Name": "No",
        "DisplayName": "No",
        "Selected": false
      }
    ]}/></div>
    <div><FormTextarea title='DESCRIBE HOW WILL YOU USE DSNY COMPOST? (INCLUDE SPECIFIC DATES IF KNOWN)' name="CompostUseDescription" onChange={handleChange} onBlur={handleBlur} value={values.CompostUseDescription}/></div>
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
    ApplyingAs: props.customFormData.ApplyingAs,
    OrganizationName: props.customFormData.OrganizationName,
    OrganizationTaxIdNumber: props.customFormData.OrganizationTaxIdNumber,
    OrganizationWebsite: props.customFormData.OrganizationWebsite,
    OrganizationFacebookPage: props.customFormData.OrganizationFacebookPage,
    OrganizationTwitterHandle: props.customFormData.OrganizationTwitterHandle,
    OrganizationInstagramHandle: props.customFormData.OrganizationInstagramHandle,
    FirstName: props.customFormData.FirstName,
    LastName: props.customFormData.LastName,
    Title: props.customFormData.Title,
    IsCertifiedNycMasterComposter: props.customFormData.IsCertifiedNycMasterComposter,
    PrimaryPhone: props.customFormData.PrimaryPhone,
    PrimaryPhoneTypeId: props.customFormData.PrimaryPhoneTypeId,
    PrimarySelectedPhoneType: props.customFormData.PrimarySelectedPhoneType,
    SecondaryPhone: props.customFormData.SecondaryPhone,
    SecondaryPhoneTypeId: props.customFormData.SecondaryPhoneTypeId,
    SecondarySelectedPhoneType: props.customFormData.SecondarySelectedPhoneType,
    Email: props.customFormData.Email,
    ConfirmEmail: props.customFormData.ConfirmEmail,
    CompostSiteTypeId: props.customFormData.CompostSiteTypeId,
    OtherCompostSiteType: props.customFormData.OtherCompostSiteType,
    CompostSitePermittingOrganizationId: props.customFormData.CompostSitePermittingOrganizationId,
    OtherCompostSitePermittingOrganization: props.customFormData.OtherCompostSitePermittingOrganization,
    SiteSize: props.customFormData.SiteSize,
    IsGreenThumbGarden: props.customFormData.IsGreenThumbGarden,
    HasReceivedDsnyCompostBefore: props.customFormData.HasReceivedDsnyCompostBefore,
    CompostUseDescription: props.customFormData.CompostUseDescription
  }),
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

const imaginaryformData = {
  WillPostCompostRecipientSignage: false,
  WillPostSignageWithinTwoWeeks: false,
  WillSubmitThreePhotos: false,
  ConsentToDsnyUseOfPhotos: false,
  ApplyingAs: '',
  OrganizationName: '',
  OrganizationTaxIdNumber: '',
  OrganizationWebsite: '',
  OrganizationFacebookPage: '',
  OrganizationTwitterHandle: '',
  OrganizationInstagramHandle: '',
  FirstName: '',
  LastName: '',
  Title: '',
  IsCertifiedNycMasterComposter: false,
  PrimaryPhone: '',
  PrimaryPhoneTypeId: '',
  PrimarySelectedPhoneType: '',
  SecondaryPhone: '',
  SecondaryPhoneTypeId: '',
  SecondarySelectedPhoneType: '',
  Email: '',
  ConfirmEmail: '',
  CompostSiteTypeId: '',
  OtherCompostSiteType: '',
  CompostSitePermittingOrganizationId: '',
  OtherCompostSitePermittingOrganization: '',
  SiteSize: '',
  IsGreenThumbGarden: false,
  HasReceivedDsnyCompostBefore: false,
  CompostUseDescription: ''
}

class TestForm extends Component {

  render() {

    return (<div className='contactForm'>
      <div><MyForm customFormData={imaginaryformData}/></div>
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
