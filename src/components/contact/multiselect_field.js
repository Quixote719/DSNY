import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import '../../content/styles/subSectionHeader.css';

class FormMultiSelect extends Component {

  renderOptions(options) {
    return _.map(options, Item => {
      return (
        <div>
          <input type="checkbox" id={Item.id} name={Item.name} value={Item.name}/>
          <label for="coding">{Item.DisplayName}</label>
        </div>
      )
    });
  }
  render() {
    return (
      <div>
        <fieldset>
          <div className='FormMultiSelectTitle'>{this.props.title}</div>
          <div>{this.renderOptions(this.props.options)}</div>
        </fieldset>
      </div>
    );
  };
};

FormMultiSelect.propTypes = {
  options: PropTypes.array,
  title: PropTypes.string
};

export default FormMultiSelect;
