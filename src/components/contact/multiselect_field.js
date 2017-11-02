import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Row, Col} from 'react-bootstrap';
import '../../content/styles/subSectionHeader.css';

class FormMultiSelect extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: props.name
        ? props.name
        : '',
      value: []
    }
  }

  onInputChange(item) {
    this.setState({option: item.DisplayName});
    this.props.onChange(this.props.name, item.Id)
  }


  renderOptions(options) {
    return _.map(options, Item => {
      return (<div key={_.random(0, 200, true)}>
        <input  type="checkbox" id={Item.id} name={Item.name} value={Item.name} onChange={this.handleChange}/>
        <span>{Item.DisplayName}</span>
      </div>)
    });
  }

  handleChange() {
    this.setState({
      value: !this.state.checked
    })
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
