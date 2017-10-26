import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import MaskedInput from 'react-text-mask';
import {Row, Col} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';

class FormField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }
  onInputChange(e) {
    console.log(e);
  }

  renderField(type) {

    if (type) {
      var name = 'input[' + type + ']';
      switch (type) {
        case "phone":
          return (
            <div>
              <MaskedInput mask={[
                '(',
                /[1-9]/,
                /\d/,
                /\d/,
                ')',
                ' ',
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                /\d/,
                /\d/
              ]} onClick={event => this.onInputChange(event)}/>
            </div>
          );
          break;
        default:
          return (
            <div>
              <input type={type} name={name} onClick={event => this.onInputChange(event)} placeholder=''/>
            </div>
          )
      }
    }
  }
  render() {
    return (
      <div className='FormField'>
        <Col xs={12} sm={6} md={6}>
          <fieldset>
            <div className='FormMultiSelectTitle'>{this.props.title}</div>
            <div>{this.renderField(this.props.type)}</div>
          </fieldset>
        </Col>

      </div>
    );
  };
};

FormField.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string
};

export default FormField;
