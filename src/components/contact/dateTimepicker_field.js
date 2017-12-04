import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Col, Tooltip} from 'react-bootstrap';
import moment from 'moment';
import Datetime from 'react-datetime';
import '../../content/styles/subSectionHeader.css';
import '../../content/styles/react-datetime.css';
import isEmpty from 'lodash/isEmpty'

class FormDateTimePicker extends Component {


  constructor(props){
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.inputFocus = this.inputFocus.bind(this);
    this.handleFocusOut = this.handleFocusOut.bind(this);

    this.state={
      defaultDateFormat:'MM/DD/YYYY',
      hideToolTip: true,
    }
  }

  onInputChange(a,item) {
   // console.log(a);
    /* Code to modify the Selected Date in the Required Format, to be appended to JSON */
    isEmpty(this.props.value) || this.props.value.trim() === "" ? this.setState({hideToolTip: false}) : this.setState({hideToolTip: true});
    if(item._d !== undefined){
       item._d = moment(item._d).format(this.state.defaultDateFormat);
      this.props.onChange(this.props.name, item._d);
    }
  }

   inputFocus() {
     (isEmpty(this.props.value) || this.props.value.trim() === "") ? this.setState({hideToolTip: false}) : this.setState({hideToolTip: true});
   }

  handleFocusOut(){
    this.setState({hideToolTip: true});
  }

  render() {

    const{Dates} = this.props;

    function contains(a, obj) {
       var i = a.length;
       while (i--) {
          if (moment(a[i]).isSame(moment(obj))) {
              return true;
          }
       }
       return false;
   }

    if(Dates){
      var dd = _.map(Dates,function(o) { return moment(o.UnavailableDate)._d });
      var d = Dates[0];
      if (d)
     var valid = function( current ){
      return (!contains(dd, current._d) ) && (current.isBetween(moment(d.StartDate).subtract(1, 'day'),  moment(d.EndDate).add(1, 'day')) && current.day() !== 0 && current.day() !== 6 ) ;
    }
};

    return (
      <div>
        <Col xs={12} sm={6} md={6}>
          <fieldset>
            <div className='FormMultiSelectTitle input-group'>{this.props.title}</div>
            <div className="form-group has-feedback">
            <Datetime  inputProps={{disabled: this.props.disabled, readOnly :true, onFocus: this.inputFocus,  onBlur:this.handleFocusOut, name: this.props.name,  error:this.props.error, required: this.props.required, className:(isEmpty(this.props.value) || this.props.value.trim() === "") && this.props.error?"input error":'input'}} 
              defaultValue={this.props.defaultValue}  isValidDate={ valid } timeFormat={false} dateFormat={true} closeOnSelect={true}  value={this.props.value == "0001-01-01T00:00:00" ? '': this.props.value} onChange={event => this.onInputChange(this,event)}
              className="date-picker"/>
            <i className="fa fa-calendar-minus-o form-control-feedback calendar-padding"></i>
            </div>
            {this.props.error && !this.state.hideToolTip?<Tooltip placement="bottom" id="tooltip-bottom" className="in">{this.props.error}</Tooltip>:null}
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
