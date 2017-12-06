import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Col, Tooltip} from 'react-bootstrap';
import moment from 'moment';
import Datetime from 'react-datetime';
import DatePicker from 'react-datepicker';
import '../../content/styles/subSectionHeader.css';
import '../../content/styles/react-datetime.css';
import isEmpty from 'lodash/isEmpty'
import 'react-datepicker/dist/react-datepicker.css';
import  {InputGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';

class InputWithButton extends Component {


  constructor(props){
    super(props);
    //this.onInputChange = this.onInputChange.bind(this);
    this.inputFocus = this.inputFocus.bind(this);
    this.handleFocusOut = this.handleFocusOut.bind(this);

    this.state={
      defaultDateFormat:'MM/DD/YYYY',
      hideToolTip: true,
      open:false,
      value:''
    }
  }

  inputFocus() {

     (isEmpty(this.props.value) || this.props.value === "") ? this.setState({hideToolTip: false, open:true, value:this.props.value}) : this.setState({hideToolTip: true, open:true, value:this.props.value});
     console.log(this.state);
   }

  handleFocusOut(){
    console.log(this.state);
    if(this.props.value !== null){
      console.log('zxzx',this.props.value);
        this.setState({open:false})
    }

    this.setState({hideToolTip: true });
  }

render() {
  return(
    <div>
    <InputGroup>
      <FormControl  error={this.props.error} onFocus={this.inputFocus} onBlur={this.handleFocusOut} className={`react-datepicker-ignore-onclickoutside ${this.props.className}`} name={this.props.name} required={this.props.required} readOnly={true} placeholder={this.props.placeholder} onClick={this.props.onClick} value={this.props.value} onChange={this.props.onChange} disabled={this.props.disabled} />
      {!this.props.disabled?<span  class="input-group-addon" onClick={this.props.onClick}><span class="glyphicon glyphicon-calendar"></span></span>:null}
										

    </InputGroup>
       {this.props.error && !this.state.hideToolTip?<Tooltip placement="bottom" id="tooltip-bottom" className="in">{this.props.error}</Tooltip>:null}
      </div>
  );
};

}

class FormDateTimePicker extends Component {


  constructor(props){
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    // this.inputFocus = this.inputFocus.bind(this);
    // this.handleFocusOut = this.handleFocusOut.bind(this);

    this.state={
      defaultDateFormat:'MM/DD/YYYY',
      //hideToolTip: true,
      open:false,
      value:''
    }
  }



  onInputChange(item) {

    /* Code to modify the Selected Date in the Required Format, to be appended to JSON */

    if(item._d !== undefined){

       item._d = moment(item._d).format(this.state.defaultDateFormat);
      this.props.onChange(this.props.name, item._d);
      this.setState({open:false, value:item._d});
      console.log(this.state);
      isEmpty(this.props.value)  ? this.setState({hideToolTip: false}) : this.setState({hideToolTip: true});
    }
  }

   
  open(){
    console.log('sdsdsdsdsd');
  }

  isWeekday (date) {
    const day = date.day()
    return day !== 0 && day !== 6
  }

  render() {
    const{Dates} = this.props;

   //  function contains(a, obj) {
   //     var i = a.length;
   //     while (i--) {
   //        if (moment(a[i]).isSame(moment(obj))) {
   //            return true;
   //        }
   //     }
   //     return false;
   // }

    if(Dates){
      var dd = _.map(Dates,function(o) { return moment(o.UnavailableDate)._d });
      var d = Dates[0] ? Dates[0] : null;
      // if (d){
      //   var valid = function( current ){
      //    return (!contains(dd, current._d) ) && (current.isBetween(moment(d.StartDate).subtract(1, 'day'),  moment(d.EndDate).add(1, 'day')) && current.day() !== 0 && current.day() !== 6 ) ;
      //  }
      //}
};

    return (
      <div>
        <Col xs={12} sm={6} md={6}>
          <fieldset>

            <div className='FormMultiSelectTitle input-group'>{this.props.title}</div>
            <div className="form-group has-feedback">
              <DatePicker minDate = {d ? moment(d.StartDate) : null}  filterDate={d ? this.isWeekday : null} excludeDates={dd} maxDate = { d ? moment(d.EndDate): null} placeholderText="MM/DD/YYYY" error={this.props.error} className={(isEmpty(this.props.value) || this.props.value === "") && this.props.error?"input error":'input'} required={this.props.required} name={this.props.name}   disabled={this.props.disabled} onChange={event => this.onInputChange(event)} value={this.props.value === "0001-01-01T00:00:00" ? '': this.props.value} customInput={<InputWithButton {...this.props}/>}/>
            {/*}<Datetime  inputProps={{disabled: this.props.disabled, readOnly :true, onFocus: this.inputFocus,  onBlur:this.handleFocusOut,  error:this.props.error, required: this.props.required, className:(isEmpty(this.props.value) || this.props.value === "") && this.props.error?"input error":'input'}}
              defaultValue={this.props.defaultValue}  isValidDate={ valid } open={this.state.open}   timeFormat={false} dateFormat={true} closeOnSelect={true} value={this.props.value == "0001-01-01T00:00:00" ? '': this.props.value} onChange={event => this.onInputChange(this,event)}
              className="date-picker"/ >*/}
            {/*<Datetime  inputProps={{disabled: this.props.disabled, readOnly :true }} onChange={event => this.onInputChange(event)}  isValidDate={ valid } className="date-picker" timeFormat={false} dateFormat={true} closeOnSelect={true}  value={this.props.value === "0001-01-01T00:00:00" ? '' : this.props.value } />*/}

            </div>
           
          </fieldset>

        </Col>
      </div>
    );
  };
};

FormDateTimePicker.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string
};

const DateTimePickerInput = ({
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
      {<FormDateTimePicker name={name} title={props.formTitles[name]} {...field}  {...props}  touch={touch} error={error} />}

    </div>
  )
}

export default DateTimePickerInput;
