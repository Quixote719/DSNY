import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import styles from '../../../content/styles/SubSectionDropdown.css';
import {Dropdown, MenuItem, Button, DropdownButton} from 'react-bootstrap';
import {dropDownList} from "../../../actions";
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';

class NewsMonthList extends Component {

  constructor(props) {
    super(props);
  }
  onInputChange(term) {
    this.setState({term});
    this.props.ondropDownChange(term);
  }

  componentDidMount() {
    const {category} = this.props;
    this.props.dropDownList(category);
  }

  renderList(List) {
    return _.map(List, Item => {
      return (
        <MenuItem key={Item} className='SubSectionDropdownMenuItem' onSelect={event => this.onInputChange(event)} eventKey={Item}>{Item}</MenuItem>
      );
    });
  }

  render() {
    const {List} = this.props;
    return (
      <div>
        <div className='SubSectionDropdown'>
          <DropdownButton className='dropDownButtonText' bsStyle="default" title={< div className = "dropDownTitle" > <div className="col-xs-10 dropDownSubTitle">
            {this.props.selectedOption}
          </div> < div className = "col-xs-2 downArrow" > <i className="fa fa-chevron-down chevron-down-font-awesome"></i> </div> </div >} noCaret id="dropdown-no-caret">
            {this.renderList(List)}
          </DropdownButton>
          <div className='hairlineGreen'></div>
        </div>
      </div>
    );
  };
};

NewsMonthList.propTypes = {
  onClick: PropTypes.func,
  selectedOption: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  category: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {List: state.dropdownList};
}

export default connect(mapStateToProps, {dropDownList})(NewsMonthList);
