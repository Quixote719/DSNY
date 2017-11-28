import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import FormHeaderSmallSize from '../form_header_SmallSize';
import MultiSelectInput from '../multiselect_field'
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import DateTimePickerInput from '../dateTimepicker_field'
import TextAreaInput from '../textarea_field';
import FileDropZone from '../form_file_dropzone';
import {Field} from 'formik'
import {Titles} from './constants'
import '../../../content/styles/compostRequest.css';
import FormAddressAutocomplete from '../formAddressAutocomplete';
import FormTitleCheckBoxes from '../form_Title_CheckBoxes';
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
    setFieldValue,
  } = props;

  // data={values.file} 

  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    <FormHeaderSmallSize title='Online Complaint Form' information='All fields are required unless indicated as optional'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <div>
      <FormAddressAutocomplete name="AddressAsEntered"  {...props}   value="" disabled={values.editMode}/>
    </div>
    <Field component={TextInput} name="AdditionalLocationInfo" {...props} fullRow={true} maxlength={"100"}/>
    <FormSectionHeader title={Titles.sectionTwo}/>
    <FormTitleCheckBoxes title="SELECT ALL THAT APPLY" />
    <Field component={CheckBoxInput} name="DebrisInsideLot" {...props} />
    <Field component={CheckBoxInput} name="DebrisInFrontOfLot" {...props}/>
    <Field component={CheckBoxInput} name="VehiclesOnLot" {...props}/>
    <Field component={FileDropZone} name="files1" {...props} value={values.files1} isHidden={!values.DebrisInsideLot} header='VIDEO AND PICTURE UPLOAD' note='You can upload a total of 3 files, but the total size of all files uploaded cannot exceed 10 MB. By uploading images to 311 you agree that the City may use the images for whatever purposes it sees fit. The City cannot return or delete images that you did not intend to submit.'  onChange={setFieldValue}/>   
    <Field component={FileDropZone} name="files2" {...props} value={values.files2}  isHidden={!values.DebrisInsideLot} onChange={setFieldValue}/>   
    <Field component={FileDropZone} name="files3" {...props} value={values.files3}  isHidden={!values.DebrisInsideLot} onChange={setFieldValue}/>   
    <FormSectionHeader title={Titles.sectionThree}/>
    <Field component={CheckBoxInput} name={"IsAnonymous"} {...props}/>
    <Field component={TextInput} name="FirstName" {...props} isHidden={values.IsAnonymous == true}  required={values.IsAnonymous !== true} maxlength={"25"}/>
    <Field component={TextInput} name="LastName" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true} maxlength={"25"}/>
    <Field component={TextInput} name="Email" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true} maxlength={"50"}/>
    <Field component={TextInput} name="ConfirmEmail" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true} maxlength={"50"}/>
    <Field component={TextInput} name="Phone" {...props} isHidden={values.IsAnonymous == true} required={values.IsAnonymous !== true} maxlength={"21"}/>   
    <Col xs={12}><DisplayFormikState {...props} /> </Col>
  </fieldset>)
};

export default CompostRequestFormElements;
