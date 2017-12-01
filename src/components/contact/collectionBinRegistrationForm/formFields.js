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
import AddressInput from '../form_addressField';

// Our inner form component which receives our form's state and updater methods as props
const CompostRequestFormElements = (props) => {
  const {
    values,
    setFieldValue,
  } = props;

  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    <FormHeaderSmallSize title='Online Registration' information='All fields are required unless indicated as optional'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <div>
      <FormAddressAutocomplete name="AddressAsEntered" title={Titles.AddressAsEntered} {...props} value="" disabled={values.editMode}/>
    </div>
    <Field component={TextInput} name="AdditionalLocationInfo" {...props} fullRow={true} maxlength={"100"} disabled={values.editMode}/>
    <FormSectionHeader title={Titles.sectionTwo}/> 
    <Field component={TextInput} name="BinOwnerCompanyName" {...props} required fullRow={true} maxlength={"25"} disabled={values.editMode}/>
    <Field component={AddressInput} name="BinOwnerCompanyAddress" {...props} onChange={setFieldValue} required disabled={values.editMode} maxlength={"100"}/>
    <Field component={TextInput} name="BinOwnerApartment" {...props} required maxlength={"25"} disabled={values.editMode}/>
    <Field component={TextInput} name="BinOwnerFirstName" {...props} required maxlength={"25"} disabled={values.editMode}/>
    <Field component={TextInput} name="BinOwnerLastName" {...props} required maxlength={"25"} disabled={values.editMode}/>
    <Field component={TextInput} name="BinOwnerTitle" {...props} required maxlength={"50"} disabled={values.editMode}/>
    <Field component={TextInput} name="BinOwnerPhone" {...props} required maxlength={"21"} disabled={values.editMode}/>  
    <Field component={TextInput} name="BinOwnerEmail" {...props} required maxlength={"50"} disabled={values.editMode}/> 
    <FormSectionHeader title={Titles.sectionThree}/> 
    <Field component={TextInput} name="PropertyOwnerName" {...props} required fullRow={true} maxlength={"25"} disabled={values.editMode}/>
    <Field component={AddressInput} name="PropertyOwnerAddress" {...props} onChange={setFieldValue} required disabled={values.editMode} maxlength={"100"}/>
    <Field component={TextInput} name="PropertyOwnerApartment" {...props} required maxlength={"25"} disabled={values.editMode}/>
    <Field component={TextInput} name="PropertyOwnerFirstName" {...props} required maxlength={"25"} disabled={values.editMode}/>
    <Field component={TextInput} name="PropertyOwnerLastName" {...props} required maxlength={"25"} disabled={values.editMode}/>
    <Field component={TextInput} name="PropertyOwnerTitle" {...props} required maxlength={"50"} disabled={values.editMode}/>
    <Field component={TextInput} name="PropertyOwnerPhone" {...props} required maxlength={"21"} disabled={values.editMode}/>  
    <Field component={TextInput} name="PropertyOwnerEmail" {...props} required maxlength={"50"} disabled={values.editMode}/>  
    <FormSectionHeader title={Titles.sectionFour}/>
    <Field component={TextAreaInput} name="DescribeBinAppearances" {...props}  disabled={values.editMode}/>   
    <FormTitleCheckBoxes title="BIN OWNER CONTACT INFO (NAME, ADDRESS, PHONE, NUMBER) DISPLAYED ON THE FRONT AND AT LEAST ONE OTHER SIDE OF THE BIN?" />
    <Field component={DropdownInput} name="BinOwnerContactInfoDisplayed" {...props}  onChange={setFieldValue} disabled={values.editMode} required />
    <FormTitleCheckBoxes title="TYPE(S) OF MATERIAL COLLECTED (CHECK ALL THAT APPLY)" />
    <Field component={CheckBoxInput} name="ClothingCollected" {...props} disabled={values.editMode} />
    <Field component={CheckBoxInput} name="ShoesCollected" {...props} disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="AccessoriesCollected" {...props} disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="BeddingCollected" {...props} disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="TowelsCollected" {...props} disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="CoatsCollected" {...props} disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="RugsCollected" {...props} disabled={values.editMode}/>
    <Field component={CheckBoxInput} name="OtherCollected" {...props} disabled={values.editMode}/>
    <Field component={TextInput} name="OtherCollecdtedMaterialDescribe" {...props} fullRow={true} isHidden={!values.OtherCollected} required={values.OtherCollected} maxlength={"100"} disabled={values.editMode}/>
    <FormTitleCheckBoxes title="IS THIS BIN MANAGED BY A NON-PROFIT AGENCY OR ORGNIZATION (OPTIONAL)"/>
    <Field component={DropdownInput} name="IsManagedByANonProfit" {...props}  onChange={setFieldValue} disabled={values.editMode} />
    <FormTitleCheckBoxes title="THE BIN OWNER RECEIVED WRITTEN PERMISSION FROM PROPERTY OWNER"/>
    <Field component={DropdownInput} name="ReceivedWrittenPermission" {...props}  onChange={setFieldValue} disabled={values.editMode} required/>
  </fieldset>)
};

export default CompostRequestFormElements;
