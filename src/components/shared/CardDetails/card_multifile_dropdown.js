import _ from "lodash";
import React, {Component} from "react";
import PropTypes from 'prop-types';

import {Dropdown, MenuItem, DropdownButton} from 'react-bootstrap';

class MultifileDropdown extends Component {
  constructor(props) {
    super(props);

    const defaultOption = props.options
      ? props.options[0].option
      : ''
    this.state = {
      option: defaultOption,
      link: ''
    }
  }
  onInputChange(item) {
    this.setState({option: item.option});
    this.props.ondropDownChange(item.link);
  }

  renderList(List) {
    return _.map(List, Item => {
      return (
        <MenuItem key={Item.Id} className='SubSectionDropdownMenuItem' onSelect={event => this.onInputChange(event)} eventKey={Item}>{Item.option}</MenuItem>
      );
    });
  }

  render() {
    const {options} = this.props;

    return (
      <div >
        <DropdownButton className='formDropDownButtonText' bsStyle="default" title={< div className = "dropDownTitle" > <div className="col-xs-10 dropDownSubTitle">
          {this.state.option}
        </div> < div className = "col-xs-2 downArrow" > <i className="fa fa-caret-down "></i> < /div> < /div >} noCaret id="dropdown-no-caret">
          {this.renderList(this.props.options)}
        </DropdownButton>
      </div>
    );
  };
};

MultifileDropdown.propTypes = {
  ondropDownChange: PropTypes.func,
  options: PropTypes.array,
  title: PropTypes.string
};

export default MultifileDropdown;
