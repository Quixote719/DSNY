import React, { Component } from 'react'
import ColorCard from '../../shared/ColorCard'
import TitleBanner from '../../shared/TitleBanner'
import * as actions from '../../../actions/actions_about';
import _ from "lodash";
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

class Bureaus extends Component {
  constructor(props, context) {
    super(props, context);
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  componentWillMount() {
    this.props.Bureaus();
  }
  render() {
        let path = this.props.location.pathname;
        console.log('this.props.BureausData.data');
        console.log(this.props.BureausData);
        if(this.props.BureausData !== undefined){
          _.map(this.props.BureausData.data.sections.sections, item =>{
            console.log('item.id');
            console.log(item.id);
          })
        }
    return (
      <div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    BureausData: state.AboutDataReducer.BureausData,
  }
}

let actionList = {
  Bureaus: actions.Bureaus,
};

Bureaus = connect(mapStateToProps, actionList)(Bureaus);


export default Bureaus;
