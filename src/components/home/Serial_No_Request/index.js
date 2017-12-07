import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../../../actions/actions_home';
import { connect } from 'react-redux';
import styles from '../../../content/styles/home.css';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from "lodash";
import Banner from '../../shared/banner';
import Autosuggest from 'react-autosuggest';
import {Link} from "react-router-dom";
import SerialNoPage from "./serialNoPage";
import Header from '../../shared/Breadcrumb/breadcrumb_container.js';

class SerialNoRequest extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        // const BannerText = {
        //     title: 'How to Get Rid of ...'
        //   }
        return (
            <div className = "howToGetRidOfParent">
            <Header title='Service Request Status' breadCrumbList= "" />
            <SerialNoPage  pushHistory = {this.props} keyword={this.props.match.params.keyword?this.props.match.params.keyword:""}/>
            </div>
        )
    }
}
export default SerialNoRequest;
