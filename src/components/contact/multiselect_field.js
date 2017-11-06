import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Col} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';
import FormBoolean from './form_boolean'

class FormMultiSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      object:props.options,
      options: props.options.Values
    }
  }

  toggleCheckbox(index) {
    const {options, object} = this.state;
    options[index].Selected = !options[index].Selected;

    this.setState({options});
    object.Values = options;
      this.props.onMultiSelect(this.props.name, object)
  }

  renderOptions(options) {
    return options.map((Item, index) => {
      return (<div key={_.random(0, 200, true)}>
        <input type="checkbox" id={Item.id} name={Item.Name} value={Item.Name} checked={Item.Selected} onChange={this.toggleCheckbox.bind(this, index)}/>
        <span>{Item.DisplayName}</span>
      </div>)
    });
  }

  render() {
    return (<div>{
        !this.props.isHidden
          ? <Col xs={12}>
              <fieldset>
                <div className='FormMultiSelectTitle'>{this.props.title}</div>
                <div>{this.renderOptions(this.state.options)}</div>
              </fieldset>
            </Col>
          : null
      }

    </div>);
  };
};

FormMultiSelect.propTypes = {
  options: PropTypes.array,
  title: PropTypes.string
};

export default FormMultiSelect;
