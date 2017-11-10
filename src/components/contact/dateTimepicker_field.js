import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import { Col} from 'react-bootstrap';
import Datetime from 'react-datetime';
import '../../content/styles/subSectionHeader.css';
import '../../content/styles/react-datetime.css';

class FormDateTimePicker extends Component {


  constructor(props){
    super(props);
    this.onInputChange = this.onInputChange.bind(this); 
    //console.log(props);
  }

  onInputChange(item) {
    console.log(item);
    this.props.onChange(this.props.name, item._d)
  }

  render() {

    return (
      <div>
        <Col xs={12} sm={6} md={6}>
          <fieldset>
            <div className='FormMultiSelectTitle input-group'>{this.props.title}</div>
            <div className="form-group has-feedback">
            <Datetime  className="date-picker" timeFormat={false} dateFormat={true} closeOnSelect={true}  value={this.props.value == "0001-01-01T00:00:00" ? '': this.props.value} onChange={event => this.onInputChange(event)}/>
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

export default FormDateTimePicker;
