import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
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

    if (e.target.name == 'Yes') {
      this.setState({
        accepted: e.target.checked,
        declined: !e.target.checked
      });
    } else {
      this.setState({
        accepted: !e.target.checked,
        declined: e.target.checked
      });
    }
  }

  renderOptions(options) {

    if (options) {
      return (
        <div>
          <input type="checkbox" onClick={event => this.onInputChange(event)} id='1' name='Yes' checked={this.state.accepted} value={this.state.accepted}/>
          <label for="coding">Yes</label>
        </div>
      )
    }
    return (
      <div>
        <div>
          <input type="checkbox" onClick={event => this.onInputChange(event)} id='1' name='Yes' checked={this.state.accepted} value={this.state.accepted}/>
          <label for="coding">Yes</label>
        </div>
        <div>
          <input type="checkbox" onClick={event => this.onInputChange(event)} id='1' name='No' checked={this.state.declined} value={this.state.declined}/>
          <label for="coding">No</label>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div>
        <fieldset>
          <div className='FormMultiSelectTitle'>{this.props.title}</div>
          <div>{this.renderOptions(this.props.onlyYes)}</div>
        </fieldset>
      </div>
    );
  };
};

FormBoolean.propTypes = {
  title: PropTypes.string,
  onlyYes: PropTypes.bool
};

export default FormBoolean;
