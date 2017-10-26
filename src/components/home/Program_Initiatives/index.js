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

    initiativesList() {
        return _.map(this.props.carouselItems, item => {
            if(item.name == "home-initiatives-section"){
                return _.map(item.cards.slice(0,4), (item,index) =>{
                    return (
                        <Col xs={12} lg={3} id={item.rank == "4" ? 'initiativesColLast' : 'initiativesCol'} key={index}>
                            <div className="initiativesParentDiv">
                                <div className={item.header == "" ? "initiativesNoHeaderDiv" : "initiativesHeaderDiv"}>
                                    {item.header}
                                </div>
                                <div className="initiativesTitleDiv">
                                    {item.title}
                                </div>
                                <div className="initiativesContentDiv" dangerouslySetInnerHTML={{
                                    __html: item.content
                                }} />
                            </div>
                        </Col>
                    );
                })  
            }
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

export default ProgramInitiatives;
