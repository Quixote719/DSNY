import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Col} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';
import FormBoolean from './form_boolean'

class FormMultiSelect extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
   this.updateObject = this.updateObject.bind(this);
    this.state = {
      "DeliverOnMonday": false,
      "DeliverOnTuesday": false,
      "DeliverOnWednesday": false,
      "DeliverOnThursday": false,
      "DeliverOnFriday": false,
      "DeliverOnSaturday": false
    }
  }

  onInputChange(item) {
    this.setState({option: item.DisplayName});
    this.props.onChange(this.props.name, item.Id)
  }


  renderOptions(options) {

    return _.map(options, Item => {
      return (<div key={_.random(0, 200, true)}>
        <input  type="checkbox"  id={Item.id}  name={Item.Name} onClick={event => this.handleChange(event)}/>
        <span>{Item.DisplayName}</span>
      </div>)
    });
  }

  handleChange(Item) {

console.log(Item.target.name, Item.target.checked);

  }

  updateObject(Item){
    this.props.onMultiSelect(Item.target.name , Item.target.checked)
    var day = Item.target.name
    this.setState({day : Item.target.checked})
    console.log(this.state);
  }

  render() {
    return (<div>
      <Col xs={12}>
        <fieldset>
          <div className='FormMultiSelectTitle'>{this.props.title}</div>
          <div>{this.renderOptions(this.props.options)}</div>
        </fieldset>
      </Col>
    </div>);
  };
};

FormMultiSelect.propTypes = {
  options: PropTypes.array,
  title: PropTypes.string
};

export default FormMultiSelect;
