import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import MaskedInput from 'react-text-mask';
import {Row, Col, Tooltip} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';
import {Formik, Field} from 'formik';
import isEmpty from 'lodash/isEmpty'
import AddressAutocomplete from '../home/CollectionSchedule/addressAutocomplete'

class FormField extends Component {

 constructor(props, context) {
        super(props, context);
        console.log(this.props);
            this.state = {
                address: this.props.value || '',
                hideToolTip: true,                        
            };
    }
    
    handleChange = (address) =>{
        this.setState({
            address,
        });

         isEmpty(address) || address.trim() === "" ? this.setState({hideToolTip: false}) : this.setState({hideToolTip: true});
         //this.props.onChange(address);
         this.props.onChange(this.props.name, address);
    }
  
    suggestedAddressSelected = (value) =>{
         this.setState(prevState => ({
            address: value,
        }));   
    }

     setPlaceHolder = () =>{
         (isEmpty(this.props.value) || this.props.value.trim() === "") ? this.setState({hideToolTip: false}) : this.setState({hideToolTip: true});
    }


    /* When Proper address is selected from the drop down list, the address state is modified & passed to parents method*/
    handleSelect = (address)=>{ 
        this.setState(prevState => ({
             address: address,
         }));
        this.props.onChange(this.props.name, address);
        //this.props.onChange(address);
    }

    /* If the address is entered and no value is selected from the drop down list, the address state is passed to the parents method */
    handleBlur = (event) => {
       //this.props.onChange(this.state.address);
       //this.props.onChange(this.props.name, this.state.address);
       this.setState({hideToolTip: true});
    }
    

    correctAddressList = () => {
        return _.map(this.props.suggestionAddress, (value,index)=> {
                return(
                <div className = "suggestedAddressListItem" key ={index} onClick = {()=>{this.suggestedAddressSelected(value)}}>
                    {value}
                </div>);
        } );
    }
    render() {
        const defaultBounds = new window.google.maps.LatLngBounds(
            new window.google.maps.LatLng(40.915568,-73.699215),
            new window.google.maps.LatLng(40.495992,-74.257159));
        const cssClasses = {
            root: "placesCollectionSchedule",
            googleLogoContainer: 'googleLogoContainer',
            googleLogoImage: 'googleLogoImage',
            autocompleteItem: 'collectionScheduleItem',
            autocompleteItemActive: 'collectionScheduleActiveItem',
            autocompleteContainer: 'collectionScheduleLanding-autocomplete-container',
            input: ((this.props.error && this.state.address.trim() === ""))?'error':'',
          }
          const cssClassesSelected = {
            root: "placesCollectionSchedule",            
            googleLogoContainer: 'googleLogoContainer',
            googleLogoImage: 'googleLogoImage',
            autocompleteItem: 'collectionScheduleItem',
            autocompleteItemActive: 'collectionScheduleActiveItem',
            autocompleteContainer: 'collectionScheduleLanding-autocomplete-container',
            input: ((this.props.error && this.state.address.trim() === ""))?'error':'',
          }
          const options = {
            strictBounds: true,
            bounds: defaultBounds,
            componentRestrictions: {country: 'us'}
          }
        const inputProps = {
            name:this.props.name,
            value: this.state.address,
            onChange: this.handleChange,
            onBlur:this.handleBlur,
            error: this.props.error,
            required: this.props.required,
            onFocus: this.setPlaceHolder,
        }

  
    return (<div >{
        !this.props.isHidden
          ? <Col className={!this.props.fullRow?'FormField col-xs-12 col-sm-6 col-md-6': 'FormField col-xs-12 col-sm-12 col-md-12'}>
              <fieldset>
                <div className='FormMultiSelectTitle'>{this.props.title}</div>
                <AddressAutocomplete inputProps = {inputProps}  options = {options} onSelect={event =>this.handleSelect(event)}  onEnterKeyDown={event => this.handleSelect} classNames = {this.state.address !== "" ?cssClassesSelected:cssClasses} />
                    <div style= {this.props.suggestionAddress == null || this.props.suggestionAddress.length <=0 ?{display:'none'}:{display: 'block'}} className = "errorUserAddressParent">
                        {this.correctAddressList()}
                    </div>
                    <Tooltip placement="bottom" id="tooltip-bottom" className={this.props.error && !this.state.hideToolTip?"in":''}>{this.props.error}</Tooltip>
              </fieldset>
            </Col>
          : null
      }

    </div>);
  };
};


const AdressInput = ({
  field: { name, ...field }, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  className,
  label,
  ...props
})  => {
  const error = errors[name]
  const touch = touched[name]
  return (
    <div >
      {<FormField disabled={props.editMode} title={props.formTitles[name]} name={name} {...field}  {...props}  touch={touch} error={error}/>}
      
    </div>
  )
}


export default AdressInput;
