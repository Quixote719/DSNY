import React, { Component } from 'react';
import Banner from '../shared/banner';
import SearchBoxCollection from '../shared/searchBoxCollection';
import * as actions from '../../actions/actions_services';
import { connect } from 'react-redux';

class Services extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.Services();
  }

  render() {
    return (
      <div>
        <SearchBoxCollection ridOffKeywords={this.props.ridOffKeywords} pushHistory ={this.props}/>
      </div>
    )
  }
}



function mapStateToProps(state) {
  return {
    ServicesData: state.ServicesDataReducer.ServicesData,
  }
}

let actionList = {
  Services: actions.Services,
};

Services = connect(mapStateToProps, actionList)(Services);

export default Services;
