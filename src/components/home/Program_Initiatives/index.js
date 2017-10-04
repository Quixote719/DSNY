import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../../../actions/actions_home';
import { connect } from 'react-redux';
import styles from '../../../content/styles/home.css';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from "lodash";

class ProgramInitiatives extends Component {
    constructor(props, context) {
        super(props, context);
    }
    componentWillMount() {
        this.props.programInitiatives();
    }
    initiativesList() {
        return _.map(this.props.programInitiativesData, item => {
            return (
                <Col xs={12} lg={3} id={item.initiativeRank == "4" ? 'initiativesColLast' : 'initiativesCol'} key={item.initiativesTitle}>
                    <div className="initiativesParentDiv">
                        <div className={item.initiativesHeader == "" ? "initiativesNoHeaderDiv" : "initiativesHeaderDiv"}>
                            {item.initiativesHeader}
                        </div>
                        <div className="initiativesTitleDiv">
                            {item.initiativesTitle}
                        </div>
                        <div className="initiativesContentDiv" dangerouslySetInnerHTML={{
                            __html: item.initiativesContent
                        }} />
                    </div>
                </Col>
            );
        });
    }
    initiativesListMobile() {
        return _.map(this.props.programInitiativesData, item => {
            return (
                <Row>
                <Col xs={12} lg={3} id={item.initiativeRank == "4" ? 'initiativesColLast' : 'initiativesCol'} key={item.initiativesTitle}>
                    <div className="initiativesParentDiv">
                        <div className={item.initiativesHeader == "" ? "initiativesNoHeaderDiv" : "initiativesHeaderDiv"}>
                            {item.initiativesHeader}
                        </div>
                        <div className="initiativesTitleDiv">
                            {item.initiativesTitle}
                        </div>
                        <div className="initiativesContentDiv" dangerouslySetInnerHTML={{
                            __html: item.initiativesContent
                        }} />
                    </div>
                </Col>
                </Row>
            );
        });
    }
    render() {
        return (
            <div className="initiativesContainerParent">
                <div className="programInitiativesContainer">
                    <Row className="initiativesProject">
                        {this.initiativesList()}
                    </Row>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        programInitiativesData: state.carouselDataReducer.programInitiativesData,
    }
}

let actionList = {
    programInitiatives: actions.programInitiatives,
};

ProgramInitiatives = connect(mapStateToProps, actionList)(ProgramInitiatives);

export default ProgramInitiatives;
