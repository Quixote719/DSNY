import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import FormHeaderSmallSize from '../form_header_SmallSize';
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import {Field} from 'formik'
import {Titles} from './constants'
import '../../../content/styles/compostRequest.css';
import FormAddressAutocomplete from '../formAddressAutocomplete'
import TextAreaInput from '../textarea_field';
import {Col} from 'react-bootstrap';

const DisplayFormikState = props => <div style={{
  margin: '1rem 0'
}}>
<h3 style={{
    fontFamily: 'monospace'
  }}/>
<pre
    style={{
      background: '#f6f8fa',
      fontSize: '2rem',
      padding: '.5rem',
    }}
  >
    <strong>values</strong> ={' '}

    {JSON.stringify(props.values, null, 2)}
  </pre>
</div>;

// Our inner form component which receives our form's state and updater methods as props
const CompostRequestFormElements = (props) => {
  const {
    values,
    handledropDown,
    setFieldValue,
  } = props;
  
  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    <FormHeaderSmallSize title='Online Complaint Form' information='All fields are required unless indicated as optional'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <div>
      <FormAddressAutocomplete/>
    </div>
    <Field component={TextInput} name="AdditionalLocationInfo" {...props} fullRow={true} maxlength={"100"}/>
    <FormSectionHeader title={Titles.sectionTwo}/>
    <Field component={CheckBoxInput} name={"IsAnonymous"} {...props}/>
    <Field component={TextInput} name="FirstName" {...props} isHidden={values.IsAnonymous == true}  required={values.IsAnonymous !== true} maxlength={"25"}/>
    <Field component={TextInput} name="LastName" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true} maxlength={"25"}/>
    <Field component={TextInput} name="Email" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true} maxlength={"50"}/>
    <Field component={TextInput} name="ConfirmEmail" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true} maxlength={"50"}/>
    <Field component={TextInput} name="Phone" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true} maxlength={"21"}/>   
    <Col xs={12}><DisplayFormikState {...props} /></Col>
  </fieldset>)
};

export default CompostRequestFormElements;