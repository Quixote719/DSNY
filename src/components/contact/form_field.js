import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import MaskedInput from 'react-text-mask';
import {Row, Col} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';
import { Formik, Field } from 'formik';
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
              ]} name={this.props.name}
              onChange={this.props.onChange}
              onBlur={this.props.onBlur}
              value={this.props.value}/>
            </div>
          );
          break;
        default:
          return (
            <div>
              <input type={type} name={this.props.name}
              onChange={this.props.onChange}
              onBlur={this.props.onBlur}
              value={this.props.value} />
            <div>{this.props.children}</div>
            </div>
          )
      }
    }
  }
  render() {
    return (
      <div >
        <Col className='FormField' xs={12} sm={6} md={6}>
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
