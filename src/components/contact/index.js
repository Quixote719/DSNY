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

import ReCAPTCHA from "react-google-recaptcha"


import '../../content/styles/contactForm.css';

var INPUT_TYPES = 'color|date|datetime|datetime-local|file|month|number|password|range|search|tel|text|time|url|week'.split('|')


function onChange(value) {
  alert("Captcha value:"+ value);
  console.log("Captcha value:", value);
}

class TestForm extends Component {


  render() {

    return (
      <div>
        <Row>
          <div><FormHeader title='Online Application'/></div>
          <div><FormSectionHeader title='SECTION 1: APPLICANT AND ORGANIZATION LOCATION'/></div>
          <div>'search box validation of address comes up'<br/></div>
          <div><FormSectionHeader title='SECTION 2: TERMS OF SERVICE (MUST AGREE TO ALL TERMS )'/></div>
          <div><FormMultiSelect title='THE SIGN WILL BE INSTALLED WITHIN TWO WEEKS OF RECEIVING THE MATERIAL.' options={[
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
          <div><FormBoolean title='PHOTOS SUBMITTED MAY BE USED FOR DSNY PROGRAM PROMOTION.'/></div>
          <div><FormBoolean onlyYes title='PHOTOS SUBMITTED MAY BE USED FOR DSNY PROGRAM PROMOTION.'/></div>
          <div><FormSectionHeader title='SECTION 3: ORGANIZATION INFORMATION'/></div>
          <div><FormField title='ORGANIZATION NAME' type='input'/></div>
          <div><FormField title='ORGANIZATION TAX IDENTIFICATION NUMBER' type='input'/></div>
          <div><FormField title='ORGANIZATION OR PROJECT WEBSITE (optional)' type='password'/></div>
          <div><FormField title='ORGANIZATION OR PROJECT FACEBOOK PAGE (optional)' type='date'/></div>
          <div><FormField title='ORGANIZATION OR PROJECT TWITTER HANDLE (Optional)' type='email'/></div>
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
          <div><FormDateTimePicker title='datepicker'/></div>

        </Row>
        {<ReCAPTCHA
          ref="recaptcha"
          sitekey="6Lej8jUUAAAAAPSVFK5_I1VPTsNlJ7Q0hTafQKCm"
          onChange={onChange}
        />}
      </div>
    );
  };

};

export default TestForm;
