import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../../../actions/actions_home';
import { connect } from 'react-redux';
import styles from '../../../content/styles/home.css';
import '../../../content/styles/howtogetridof.css';
import { Grid, Row, Col } from 'react-bootstrap';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import _ from "lodash";
import Autosuggest from 'react-autosuggest';
import About from '../../about/index';
import {Link} from "react-router-dom";
import SearchBoxHome from "./searchBoxHome";

class SearchCards extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: "",
            suggestions: [],
          };
    }
    render() {

        return (
            <div className="container searchContainerRidCollection">
                <Row className="searchRow">
                    <Col xs={12} md={6} className="searchRidParent">
                    <SearchBoxHome ridOffKeywords = {this.props.ridOffKeywords} test ={this.props}/>
                    </Col>
                    <Col xs={12} md={6} className="searchCollectionParent">
                        <div id="TextureSquare">
                            <div id="innersquare">
                                <input className="ridOfSearch" type="text" placeholder="When is Collection at ..." >
                                </input>
                                <i className="fa fa-search collectionSearch" id="collectionSearch"></i>
                                <div className="exampleRidSearch"> Example: 454 W 12th Ave, New York </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        ridOffKeywords: state.carouselDataReducer.ridOffKeywords,
    }
  }
  
let actionList = {
    getRidOfSearchResults: actions.getRidOfSearchResults,
  };

SearchCards = connect(mapStateToProps, actionList)(SearchCards);
export default SearchCards;
