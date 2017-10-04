import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-bootstrap';
import * as actions from '../../../actions/actions_home';
import { connect } from 'react-redux';
import month from 'month';
import styles from '../../../content/styles/home.css';
import { Grid, Row, Col } from 'react-bootstrap';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import _ from "lodash";

class CarouselData extends Component {
    constructor(props, context) {
        super(props, context);
        var date = new Date();
        var dateCarouselPanel = ("0" + date.getDate()).slice(-2);
        var monthCarouselPanel = month('MMM').toUpperCase();
        this.state = {
            dateCarouselPanel: dateCarouselPanel,
            monthCarouselPanel: monthCarouselPanel,
        };
    }
    componentWillMount() {
        this.props.carouselPanelDataTemporary();
        this.props.carouselData();
    }
    carouselDataItemList() {
        return _.map(this.props.carouselItemsBigData, item => {
            return (
                <Carousel.Item key={item.heroTitle}>
                    <img src={item.heroImage} />
                    <Carousel.Caption>
                        {item.heroTitle}
                    </Carousel.Caption>
                </Carousel.Item>
            );
        });
    }
    carouselPanelDataItemList() {
        return _.map(this.props.carouselPanelItems, items => {
            return items.map(function (item, index) {
                return (
                    <div className="panelData" key={index}>
                        <div className="border-top"></div>
                        <div className="programImage"><img src={item.panelItemIcon} /></div>
                        <div className="detailsProgram">{item.panelItemType}</div>
                        <div className="statusProgram">{item.panelItemStatus}</div>
                    </div>
                );
            })
        });
    }

    render() {
        console.log("Panel Values: ")
        console.log(this.props.carouselPanelItems)

        return (
            <div className="carouselContainerParent ">
                <div className="container carouselContainer">
                    <ul className="carouselLeftPanel">
                        <li className="statusTitle">
                            TODAY
                        </li>
                        <li className="dateMonthCarousel">
                            <div className="dateMonthCarousel">
                                <div className="dateCarouselPanel">
                                    {this.state.monthCarouselPanel}
                                </div>
                                <div className="monthCarouselPanel">
                                    {this.state.dateCarouselPanel}
                                </div>
                            </div>
                        </li>
                        <li className="programsList">
                            {this.carouselPanelDataItemList()}
                        </li>
                        <li>
                            <button className="panelButton">More</button>
                        </li>
                    </ul>
                    <Carousel className="newsEventsCarousel" prevIcon={<span className="newsEventsCarouselIcon">
                        <img src='http://www1.nyc.gov/assets/home/images/global/heroleft5.svg' alt="carouselleftArrow" />
                    </span>} nextIcon={<span className="newsEventsCarouselIcon">
                        <img src='http://www1.nyc.gov/assets/home/images/global/heroright5.svg' alt="carouselRightArrow" />
                    </span>}>
                        {this.carouselDataItemList()}
                    </Carousel>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        carouselItemsBigData: state.carouselDataReducer.carouselItems,
        carouselPanelItems: state.carouselDataReducer.carouselPanelItemsTemporary,
    }
}

let actionList = {
    carouselData: actions.carouselData,
    carouselPanelDataTemporary: actions.carouselPanelDataTemporary,
};

CarouselData = connect(mapStateToProps, actionList)(CarouselData);

export default CarouselData;