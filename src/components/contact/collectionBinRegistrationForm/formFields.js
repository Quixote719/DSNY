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

  // data={values.file} 

  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    <FormHeaderSmallSize title='Online Registration' information='All fields are required unless indicated as optional'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <div>
      <FormAddressAutocomplete/>
    </div>
    <Field component={TextInput} name="AdditionalLocationInfo" {...props} fullRow={true} maxlength={"100"}/>
    <FormSectionHeader title={Titles.sectionTwo}/> 
    <Field component={TextInput} name="BinOwnerCompanyName" {...props} required fullRow={true} maxlength={"25"}/>
    <Field component={AddressInput} name="BinOwnerAddressAsEntered" {...props} onChange={setFieldValue} required fullRow={true} disabled={values.editMode} maxlength={"100"}/>
    <Field component={TextInput} name="BinOwnerApartment" {...props} required maxlength={"25"}/>
    <Field component={TextInput} name="BinOwnerFirstName" {...props} required maxlength={"25"}/>
    <Field component={TextInput} name="BinOwnerLastName" {...props} required maxlength={"25"}/>
    <Field component={TextInput} name="BinOwnerTitle" {...props} required maxlength={"50"}/>
    <Field component={TextInput} name="BinOwnerPhone" {...props} required maxlength={"21"}/>  
    <Field component={TextInput} name="BinOwnerEmail" {...props} required maxlength={"50"}/> 
    <FormSectionHeader title={Titles.sectionThree}/> 
    <Field component={TextInput} name="PropertyOwnerCompanyName" {...props} required fullRow={true} maxlength={"25"}/>
    <Field component={AddressInput} name="PropertyOwnerCompanyAddressAsEntered" {...props} onChange={setFieldValue} required fullRow={true} disabled={values.editMode} maxlength={"100"}/>
    <Field component={TextInput} name="PropertyOwnerApartment" {...props} maxlength={"25"}/>
    <Field component={TextInput} name="PropertyOwnerFirstName" {...props} maxlength={"25"}/>
    <Field component={TextInput} name="PropertyOwnerLastName" {...props} maxlength={"25"}/>
    <Field component={TextInput} name="PropertyOwnerTitle" {...props} maxlength={"50"}/>
    <Field component={TextInput} name="PropertyOwnerPhone" {...props} maxlength={"21"}/>  
    <Field component={TextInput} name="PropertyOwnerEmail" {...props} maxlength={"50"}/>  
    <FormSectionHeader title={Titles.sectionFour}/>
    <Field component={TextAreaInput} name="DescribeBinAppearances" {...props}  maxlength={"2000"}/>   
    <FormTitleCheckBoxes title="BIN OWNER CONTACT INFO (NAME, ADDRESS, PHONE, NUMBER) DISPLAYED N THE FRONT AND AT LEAST ONE OTHER SIDE OF THE BIN?" />
    <Field component={DropdownInput} name="BinOwnerContactInfoDisplayed" {...props}  onChange={setFieldValue} disabled={values.editMode} />
    <FormTitleCheckBoxes title="TYPE(S) OF MATERIAL COLLECTED (CHECK ALL THAT APPLY)" />
    <Field component={CheckBoxInput} name="ClothingCollected" {...props} />
    <Field component={CheckBoxInput} name="ShoesCollected" {...props}/>
    <Field component={CheckBoxInput} name="AccessoriesCollected" {...props}/>
    <Field component={CheckBoxInput} name="BeddingCollected" {...props}/>
    <Field component={CheckBoxInput} name="TowelsCollected" {...props}/>
    <Field component={CheckBoxInput} name="CoatsCollected" {...props}/>
    <Field component={CheckBoxInput} name="RugsCollected" {...props}/>
    <Field component={CheckBoxInput} name="OtherCollected" {...props}/>
    <Field component={TextInput} name="OtherCollecdtedMaterialDescribe" {...props} fullRow={true} isHidden={!values.OtherCollected} maxlength={"100"}/>
    <FormTitleCheckBoxes title="IS THIS BIN MANAGED BY A NON-PROFIT AGENCY OR ORGNIZATION (OPTIONAL)"/>
    <Field component={DropdownInput} name="IsManagedByANonProfit" {...props}  onChange={setFieldValue} disabled={values.editMode} />
    <FormTitleCheckBoxes title="THE BIN OWNER RECEIVED WRITTEN PERMISSION FROM PROPERTY OWNER"/>
    <Field component={DropdownInput} name="ReceivedWrittenPermission" {...props}  onChange={setFieldValue} disabled={values.editMode} />
  </fieldset>)
};

export default CompostRequestFormElements;
