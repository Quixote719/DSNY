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

// Our inner form component which receives our form's state and updater methods as props
const CompostRequestFormElements = (props) => {
  const {
    values,
    setFieldValue,
  } = props;

  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    <FormHeaderSmallSize title='Online Service Request Form' information={`<span class="requiredAsterik"> * </span>Denotes required field`}/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <div>
      <FormAddressAutocomplete name="AddressAsEntered" title={Titles.AddressAsEntered} {...props}   value="" disabled={values.editMode}/>
    </div>
    <FormSectionHeader title={Titles.sectionTwo}/>
    <Field component={FileDropZone} name="files1" {...props} disabled={values.editMode} value={values.files1} header='A COPY OF THE CERTIFICATE OF OCCUPANCY' note='temporary one is acceptable; not required for nonprofit organizations that lease or rent their space'  onChange={setFieldValue}/>   
    <Field component={FileDropZone} name="files2" {...props} disabled={values.editMode} value={values.files2} header='FOR NONPROFIT ORGNIZATIONS ONLY' note='A copy of the Notice of Assessment Statement from the Department of Finance, or a letter from another City Agency stating that the organization receives funding from and operates as an agent or contractor of the Agency to operate at the address for which they are requesting collection services.' onChange={setFieldValue}/>    
    <FormSectionHeader title={Titles.sectionThree}/>
    <Field component={TextInput} name="FirstName" {...props} required maxlength={"25"} disabled={values.editMode}/>
    <Field component={TextInput} name="LastName" {...props} required maxlength={"25"} disabled={values.editMode}/>
    <Field component={TextInput} name="Email" {...props} required maxlength={"50"} disabled={values.editMode}/>
    <Field component={TextInput} name="ConfirmEmail" {...props} required maxlength={"50"} disabled={values.editMode}/>
    <Field component={TextInput} name="Phone" {...props} required maxlength={"21"} disabled={values.editMode}/>   
  </fieldset>)
};

export default CompostRequestFormElements;
