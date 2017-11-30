import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Col} from 'react-bootstrap';
import moment from 'moment';
import Datetime from 'react-datetime';
import '../../content/styles/subSectionHeader.css';
import '../../content/styles/react-datetime.css';

class FormDateTimePicker extends Component {


  constructor(props){
    super(props);
    this.onInputChange = this.onInputChange.bind(this);

    this.state={
      defaultDateFormat:'MM/DD/YYYY'
    }
  }

  onInputChange(a,item) {
   // console.log(a);
    /* Code to modify the Selected Date in the Required Format, to be appended to JSON */
    if(item._d !== undefined){
       item._d = moment(item._d).format(this.state.defaultDateFormat);
      this.props.onChange(this.props.name, item._d);
    }
  }


  render() {

    const{Dates} = this.props;
console.log(Dates);
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
    console.log(contains(dd, current._d));
      return (!contains(dd, current._d) ) && (current.isBetween(moment(d.StartDate).subtract(1, 'day'),  moment(d.EndDate).add(1, 'day')) && current.day() !== 0 && current.day() !== 6 ) ;
    }
};

    return (
      <div>
        <Col xs={12} sm={6} md={6}>
          <fieldset>
            <div className='FormMultiSelectTitle input-group'>{this.props.title}</div>
            <div className="form-group has-feedback">
            <Datetime  inputProps={{disabled: this.props.disabled, readOnly :true }} defaultValue={this.props.defaultValue} isValidDate={ valid } className="date-picker" timeFormat={false} dateFormat={true} closeOnSelect={true}  value={this.props.value == "0001-01-01T00:00:00" ? '': this.props.value} onChange={event => this.onInputChange(this,event)}/>
            <i className="fa fa-calendar-minus-o form-control-feedback calendar-padding"></i>
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
