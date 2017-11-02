import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';

class FormTextarea extends Component {

  constructor(props) {
    super(props);
  }
  onInputChange(term) {}

  render() {
    return (<div>
      <Col xs={12}>
        <fieldset>
          <div className='FormMultiSelectTitle'>{this.props.title}</div>
          <textarea name={this.props.name} onChange={this.props.onChange} onBlur={this.props.onBlur} value={this.props.value} disabled={this.props.disabledf} className='formTextarea'></textarea>
        </fieldset>
      </Col>
    </div>);
  };
};

FormTextarea.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string
};

export default FormTextarea;
