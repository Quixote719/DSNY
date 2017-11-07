import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Col} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';

class FormBoolean extends Component {

  constructor(props) {
    super(props);
    this.state = {
      accepted: false,
      declined: false
    }
  }
  onInputChange(e) {
    this.setState({
      accepted: !e.target.checked,
      declined: e.target.checked
    });
  }

  renderOptions() {
    return (<div>
      <input type="checkbox" name={this.props.name} onChange={this.props.onChange} onBlur={this.props.onBlur} value={this.props.value} checked={this.props.value} onClick={event => this.onInputChange(event)}/>
      <label >{this.props.title}</label>
    </div>)
  }
  render() {
    return (<div>
      <Col xs={12}>
        <fieldset>
          <div>{this.renderOptions()}</div>
        </fieldset>
      </Col>

    </div>);
  };
};

FormBoolean.propTypes = {
  title: PropTypes.string
};

export default FormBoolean;
