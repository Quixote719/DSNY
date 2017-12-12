import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import FormHeaderSmallSize from '../form_header_SmallSize';
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field';
import AddressInput from '../form_addressField';
import TextAreaInput from '../textarea_field';
import FormTitleCheckBoxes from '../form_Title_CheckBoxes';
import {Field} from 'formik'
import {Titles} from './constants'
import '../../../content/styles/compostRequest.css';
import FormAddressAutocomplete from '../formAddressAutocomplete';
import {Col} from 'react-bootstrap';



// Our inner form component which receives our form's state and updater methods as props
const RefashionNYCFormElements = (props) => {
  const {
    values,
    handledropDown,
    setFieldValue,
  } = props;
  
  return (<fieldset className='disabledContactForm' disabled={values.editMode}>
    <FormHeaderSmallSize title='Online Service Request Form' information={`<span class="requiredAsterik"> * </span>Denotes required field`}/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <FormAddressAutocomplete title={Titles.AddressAsEntered} name="AddressAsEntered"  {...props}   onChange={setFieldValue} disabled={values.editMode} required/>
    <Field component={TextInput} name="Apartment" {...props} maxlength={"50"}/>

    <FormSectionHeader title={Titles.sectionTwo}/>
    <Field component={TextInput} name="NameOfBuilding" {...props} />
    <Field component={TextInput} name="NoOfUnitInBuilding" {...props} required/>
    <Field component={DropdownInput} name="ClassifySiteTypeId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.ClassifySiteType}  required disabled={values.editMode}/>
    <Field component={TextInput} name="ClassifySiteOther" {...props}  isHidden={values.ClassifySiteTypeId !== 9}/>
    
  
    <FormSectionHeader title={Titles.sectionThree}/>
    <Field component={TextInput} name="FirstName" {...props} required maxlength={"25"}/>
    <Field component={TextInput} name="LastName" {...props} required maxlength={"25"}/>
    <Field component={DropdownInput} name="ContactRoleInTheBuildingTypesId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.ContactRoleInTheBuildingType}  required disabled={values.editMode}/>
    <Field component={TextInput} name="ContactRoleInTheBuildingOther" {...props} isHidden={values.ContactRoleInTheBuildingTypesId !== 8}/>
    <Field component={TextInput} name="ContactEmail" {...props} required/>
    <Field component={TextInput} name="ContactPhone" {...props} required/>
    <Field component={DropdownInput} name="ContactPhoneTypeId" {...props}  ondropDownChange={handledropDown} onChange={setFieldValue} options={values.ContactPhoneType}  required disabled={values.editMode}/>

    <FormSectionHeader title={Titles.sectionFour} />
    <Field component={TextInput} name="BuildingManagementCompany" {...props} required/>
    <Field component={TextInput} name="BuildingManagementTitle" {...props} required/>
    <Field component={TextInput} name="BuildingManagementFirstName" {...props} required/>
    <Field component={TextInput} name="BuildingManagementLastName" {...props} required/>
    <Field component={AddressInput} name="BuildingAddressAsEntered" {...props} fullRow={true} onChange={setFieldValue}/>
    <Field component={TextInput} name="BuildingApartment" {...props} />
    <Field component={TextInput} name="BuildingManagementEmail" {...props} required/>
    <Field component={TextInput} name="BuildingManagementPhone" {...props} required/>
    <Field component={DropdownInput} name="BuildingManagementPhoneTypeId" {...props} ondropDownChange={handledropDown} onChange={setFieldValue} options={values.BuildingManagementPhoneType}  required disabled={values.editMode}/>
    <FormTitleCheckBoxes title="HAVE YOU SPOKEN WITH YOUR BUILDING MANAGEMENT ABOUT THE PROGRAM ?" redAstreix={true} {...props} 
               subHeading="Note: Enrollment may be faster if tenants and building staff notify the building management of their request"/>
    <Field component={DropdownInput} name="HaveYouSpokenWith" {...props} hideAsterix={true} ondropDownChange={handledropDown} onChange={setFieldValue} required disabled={values.editMode}/>
    
    <FormSectionHeader title={Titles.sectionFive} />
    <Field component={DropdownInput} name="HowDidYouHearTypeId" {...props} onChange={setFieldValue} options={values.HowDidYouHearType} required disabled={values.editMode}/>
    <Field component={TextAreaInput} name="Describe" {...props} />
    <Field component={TextAreaInput} name="AdditionalComments" {...props} />  

   

  </fieldset>)
};

export default RefashionNYCFormElements;