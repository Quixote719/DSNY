import React from "react";
import FormSectionHeader from '../form_section_header';
import FormHeader from '../form_header';
import CheckBoxInput from '../form_boolean';
import TextInput from '../form_field';
import DropdownInput from '../dropdown_field'
import DateTimePickerInput from '../dateTimepicker_field'
import FormAddressValidatorError from '../form_address_validator_error';
import Nstepper from './pickup_request_stepper'
import {Field} from 'formik'
import {Titles} from './constants'
import '../../../content/styles/compostRequest.css';
import FormAddressAutocomplete from '../formAddressAutocomplete'
import moment from 'moment';
import TextdisplayField from '../form_display_field';
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

const CFCRecoveryRequestFormElements = (props) => {
	const { values, setFieldValue, Dates,commercialAddress, geoCoderAddressResult } = props;


	if(!values.AddresAsEntered && isEmpty(values.AppointmentItems))
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

	if (Dates && geoCoderAddressResult){

     values.Dates = Dates;
		 values.AppointmentDate =  values.AppointmentDate === '' ? moment(Dates[0].StartDate).format('MM/DD/YYYY') : values.AppointmentDate;
		 values.SectionAndSubsection = geoCoderAddressResult.sanitationCollectionSchedulingSectionAndSubsection;
		 values.RecyclingPickupDay = geoCoderAddressResult.sanitationRecyclingCollectionSchedule;
		 values.xCoordinate = geoCoderAddressResult.xCoordinate;
		 values.yCoordinate = geoCoderAddressResult.yCoordinate;
		 values.gi5DigitStreetCode1 = geoCoderAddressResult.gi5DigitStreetCode1;
		 values.geosupportReturnCode = geoCoderAddressResult.geosupportReturnCode;
		 values.bblTaxBlock = geoCoderAddressResult.bblTaxBlock;
		 values.bblTaxLot = geoCoderAddressResult.bblTaxLot;
		 values.sanitationRegularCollectionSchedule = geoCoderAddressResult.sanitationRegularCollectionSchedule;
		 values.boroughCode1In = geoCoderAddressResult.boroughCode1In;
		  values.segmentIdentifier = geoCoderAddressResult.segmentIdentifier;
	}
	if(commercialAddress){
		let ca = commercialAddress.commercialFlag
		values.commercialAddress = ca === 1 ? true : false;
	}

	return (<fieldset className='disabledContactForm' disabled={values.editMode}>
		<FormHeader title='Online Service Request Form'/>
		<FormSectionHeader title={Titles.sectionOne}/>
		<div><FormAddressAutocomplete name="AddressAsEntered"  {...props}   value="" disabled={values.editMode}/></div>
			<div><FormAddressValidatorError>
				{values.commercialAddress ?
							 '<p><span style="font-weight: 400;">The address entered may be a commercial address. Please check again or select the checkbox to continue with the form.</span></p>'
							  :''}
					</FormAddressValidatorError></div>
		<div>{values.commercialAddress ? <Field component={CheckBoxInput} name="overideAddressValidation" {...props} onChange={setFieldValue} required/> : '' }</div>
		<Field component={TextdisplayField} title={Titles.crossStreet} body={geoCoderAddressResult ? geoCoderAddressResult.crossStreet :null}/>
		<FormSectionHeader title={Titles.sectionTwo}/>
		<Field component={DropdownInput} required name="RecyclingLocation" options={geoCoderAddressResult ? geoCoderAddressResult.pickupStreets? geoCoderAddressResult.pickupStreets:[]:[]} {...props} onChange={setFieldValue} disabled={values.editMode}/>
		<Field component={DateTimePickerInput} value={values.AppointmentDate ? values.AppointmentDate : ''} Dates={values.Dates} required name="AppointmentDate" {...props} disabled={ values.Dates === undefined ? true : values.editMode }  onChange={setFieldValue}/>
		<Field component={Nstepper}  AppointmentItems={values.AppointmentItems}  name="Appliances" header='APPLIANCES' tableHeader='Electronic Category' {...props} required categories={values.categories} disabled={values.editMode} onAppend={setFieldValue}/>
		<FormSectionHeader title={Titles.sectionThree}/>
		<Field component={TextInput} name="FirstName" {...props} required/>
		<Field component={TextInput} name="LastName" {...props} required/>
		<Field component={TextInput} name="Email" {...props} required/>
		<Field component={TextInput} name="ConfirmEmail" {...props} required/>
		<Field component={TextInput} name="Phone" {...props} required/>
	</fieldset>)
};

export default CFCRecoveryRequestFormElements;
