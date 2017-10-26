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

import '../../content/styles/contactForm.css';

var INPUT_TYPES = 'color|date|datetime|datetime-local|file|month|number|password|range|search|tel|text|time|url|week'.split('|')

class TestForm extends Component {

  render() {

    return (
      <div>
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
