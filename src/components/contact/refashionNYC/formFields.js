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
    <FormHeaderSmallSize title='Online Service Request Form' information='All fields are required unless indicated as optional'/>
    <FormSectionHeader title={Titles.sectionOne}/>
    <FormAddressAutocomplete name="AddressAsEntered"  {...props}   value="" disabled={values.editMode}/>
    <Field component={TextInput} name="Apartment" {...props} maxlength={"50"}/>

    <FormSectionHeader title={Titles.sectionTwo}/>
    <Field component={TextInput} name="NameOfBuilding" {...props} />
    <Field component={TextInput} name="NoOfUnitInBuilding" {...props} />
    <Field component={DropdownInput} name="ClassifySiteTypeId" {...props} />
    <Field component={TextInput} name="ClassifySiteOther" {...props} />
    
  
    <FormSectionHeader title={Titles.sectionThree}/>
    <Field component={TextInput} name="FirstName" {...props} required maxlength={"25"}/>
    <Field component={TextInput} name="LastName" {...props} required maxlength={"25"}/>
    <Field component={DropdownInput} name="ContactRoleInTheBuildingTypesId" {...props} />
    <Field component={TextInput} name="ContactRoleInTheBuildingOther" {...props} />
    <Field component={TextInput} name="ContactEmail" {...props} />
    <Field component={TextInput} name="ContactPhone" {...props} />
    <Field component={DropdownInput} name="ContactPhoneTypeId" {...props} />

    <FormSectionHeader title={Titles.sectionFour} />
    <Field component={TextInput} name="BuildingManagementCompany" {...props} />
    <Field component={TextInput} name="BuildingManagementTitle" {...props} />
    <Field component={TextInput} name="BuildingManagementFirstName" {...props} />
    <Field component={TextInput} name="BuildingManagementLastName" {...props} />
    <Field component={AddressInput} name="BuildingAddressAsEntered" {...props} fullRow={true} onChange={setFieldValue}/>
    <Field component={TextInput} name="BuildingApartment" {...props} />
    <Field component={TextInput} name="BuildingManagementEmail" {...props} />
    <Field component={TextInput} name="BuildingManagementPhone" {...props} />
    <Field component={TextInput} name="BuildingManagementPhoneTypeId" {...props} />
    <FormTitleCheckBoxes title="HAVE YOU SPOKEN WITH YOUR BUILDING MANAGEMENT ABOUT THE PROGRAM ?" {...props}
               subHeading="Note: Enrollment may be faster if tenants and building staff notify the building management of their request"/>
    <Field component={DropdownInput} name="HaveYouSpokenWith" {...props} />
    
    <FormSectionHeader title={Titles.sectionFive} />
    <Field component={DropdownInput} name="HowDidYouHearTypeId" {...props} />
    <Field component={TextAreaInput} name="Describe" {...props} />
    <Field component={TextAreaInput} name="AdditionalComments" {...props} />  

   

  </fieldset>)
};

export default RefashionNYCFormElements;