import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import DateTimePickerInput from '../dateTimepicker_field'
import Nstepper from './pickup_request_stepper'
import FormAddressValidatorError from '../form_address_validator_error';
import {Field} from 'formik'
import {Titles} from './constants'
import '../../../content/styles/compostRequest.css';
import FormAddressAutocomplete from '../formAddressAutocomplete'
import TextdisplayField from '../form_display_field';
import moment from 'moment';
import isEmpty from 'lodash/isEmpty';

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


const CRforLargeItemsFormElements = (props) => {
	const { values, setFieldValue, pickupLocations,commercialAddress, Dates,  geoCoderAddressResult } = props;

	if(!values.AddresAsEntered && isEmpty(values.PickupRequestItems))
	{
		values.categories.map((category, Item)=>{
			if (category.hasSubCategory) {
				category.hasSubCategory.map((subcategory, SubItem)=>{
					subcategory.RequestedQty = 0
				})
			}
			else
				category.RequestedQty = 0
		});
	}

	if (Dates && pickupLocations && geoCoderAddressResult){
     values.Dates = Dates;
		 values.PickupLocations = pickupLocations;
		 values.AppointmentDate =  values.AppointmentDate === '' ? moment(Dates[0].StartDate).format('MM/DD/YYYY') : values.AppointmentDate
		 values.SectionAndSubsection = geoCoderAddressResult.sanitationCollectionSchedulingSectionAndSubsection;
		 values.Frequency = geoCoderAddressResult.RegularCollectionSchedule
	}

	if(commercialAddress){
		let ca = commercialAddress.commercialFlag
		values.commercialAddress = ca === 1 ? true : false;
	}


	return (<fieldset className='disabledContactForm' disabled={values.editMode}>
		<FormHeader title='Online Service Request Form'/>
		<FormSectionHeader title={Titles.sectionOne}/>
		<div><FormAddressAutocomplete name="AddressAsEntered"  {...props}   onChange={setFieldValue} required disabled={values.editMode}/></div>
			<div><FormAddressValidatorError>
				{values.commercialAddress ?
							 '<p><span style="font-weight: 400;">The address entered may be a commercial address. Please check again or select the checkbox to continue with the form.</span></p>'
							  :''}
					</FormAddressValidatorError></div>
		<div>{values.commercialAddress ? <Field component={CheckBoxInput} name="overideAddressValidation" {...props} onChange={setFieldValue} required/> : '' }</div>
		<Field component={TextdisplayField} title={Titles.crossStreet} body={geoCoderAddressResult ? geoCoderAddressResult.crossStreet :null}/>
		<FormSectionHeader title={Titles.sectionTwo}/>
		<Field component={DropdownInput} required name="LocationId" {...props} options={values.PickupLocations ? values.PickupLocations ? values.PickupLocations : [] :[]} onChange={setFieldValue} disabled={values.editMode} />
		<Field component={DropdownInput} required name="PickUpLocation" {...props} options={geoCoderAddressResult ? geoCoderAddressResult.pickupStreets ? geoCoderAddressResult.pickupStreets :[] :[]} onChange={setFieldValue} disabled={values.editMode}/>
		<Field component={DateTimePickerInput} required value={values.AppointmentDate ? values.AppointmentDate : ''} Dates={values.Dates} disabled={ values.Dates === undefined ? true : values.editMode }  name="AppointmentDate" {...props} onChange={setFieldValue}/>
		<Field component={Nstepper}  PickupRequestItems={values.PickupRequestItems}  name="ElectronicCategory" header='BULK ITEM CATEGORY' tableHeader='Electronic Category' {...props} required="required" categories={values.categories} disabled={values.editMode}  onAppend={setFieldValue}/>
		<FormSectionHeader title={Titles.sectionThree}/>
		<Field component={TextInput} name="FirstName" {...props} required/>
		<Field component={TextInput} name="LastName" {...props} required/>
		<Field component={TextInput} name="Email" {...props} required/>
		<Field component={TextInput} name="ConfirmEmail" {...props} required/>
		<Field component={TextInput} type='Phone' name="Phone" {...props} required/>

	</fieldset>)
};

export default CRforLargeItemsFormElements;
