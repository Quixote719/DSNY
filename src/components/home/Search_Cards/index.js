import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../../../actions/actions_home';
import { connect } from 'react-redux';
import styles from '../../../content/styles/home.css';
import { Grid, Row, Col } from 'react-bootstrap';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import _ from "lodash";

class SearchCards extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {

        return (
            <div className="container searchContainerRidCollection">
                <Row className="searchRow">
                    <Col xs={12} md={6} className="searchRidParent">
                        <div id="TextureSquare">
                            <div id="innersquare">
                                <input className="ridOfSearch" type="text" placeholder="How to get rid of ..." >
                                </input>
                                <i className="fa fa-search ridSearch" id="ridSearch"></i>
                                <div className="exampleRidSearch"> Example: battery, mattress, TVs </div>
                            </div>
                        </div>
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

export default SearchCards;
