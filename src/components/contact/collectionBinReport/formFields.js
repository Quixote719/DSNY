import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import MultiSelectInput from '../multiselect_field'
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import DateTimePickerInput from '../dateTimepicker_field'
import TextAreaInput from '../textarea_field';
import {Field} from 'formik'
import {Titles} from './constants'
import {Row, Col, Tooltip} from 'react-bootstrap'
import '../../../content/styles/compostRequest.css';
import '../../../content/styles/webForm.css';
import FormAddressAutocomplete from '../formAddressAutocomplete'


// Our inner form component which receives our form's state and updater methods as props
const formFields = (props) => {
  const {
    values,
    handledropDown,
    setFieldValue,
  } = props;

  return (<fieldset className='disabledContactForm' disabled={values.editMode}>

    <FormHeader title='Online Reporting Form'/>
    <FormSectionHeader title={Titles.sectionOne}/>
      <Field component={TextInput} name="CompanyName" maxlength={50} {...props} />
      <Field component={TextInput} name="Title" maxlength={50} {...props} />
      <Field component={TextInput} name="FirstName" maxlength={50} {...props} />
      <Field component={TextInput} name="LastName" maxlength={50} {...props} />
      <Field component={TextInput} name="Email" maxlength={50} {...props} />
      <Field component={TextInput} name="Phone" maxlength={50} {...props} />
    <FormSectionHeader title={Titles.sectionTwo}/>

      <Field component={TextInput} name="CollectionBinAnnualReportId" maxlength={50} {...props} />
      <Field component={TextInput} name="WeightInPounds" maxlength={50} {...props} />
      <Field component={DropdownInput} name="Removed" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.GreaseInterceptorTypes} disabled={values.editMode} {...props} />
      <Field component={TextInput} name="WeightInPounds" maxlength={50} {...props} />
      <Col xs={12} md={12}>
        <div className="fa fa-plus-circle"></div>
      </Col>
  </fieldset>
)
};

export default formFields;
