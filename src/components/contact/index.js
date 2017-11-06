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
import {compostFormObject, compostFormTitles as Titles} from './titles'
import ContactForm from './contactForm'

import '../../content/styles/contactForm.css';


class TestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FormObject: props.FormObject,
      editMode:true
    }
  }
  render() {
    return (<div className='contactForm'>
      <fieldset className='disabledContactForm' disabled={!this.state.editMode}><ContactForm disabled={!this.state.editMode} customFormData={this.state.FormObject}/></fieldset>
    </div>);
  };
};

export default TestForm;
