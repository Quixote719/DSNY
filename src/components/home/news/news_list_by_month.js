import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {getNewsDataList} from "../../../actions/actions_home";
import {Grid, Row, Col, Pagination, Clearfix} from 'react-bootstrap';
import NewsPageList from './news_detail';
import NewsMonthList from './news_month_list';


let NewsListData = {
  year: 'October 2017',
  activePage: 1
}

class DSNYNews extends Component {

  componentDidMount() {
    const {id} = this.props
    const {year} = this.state
    this.props.getNewsDataList(year);
  }
  constructor(props) {
    super(props);

    this.state = NewsListData;
    this.getNewsData = this.getNewsData.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({activePage: eventKey});
  }

  componentWillUnmount() {
    NewsListData = this.state;
  }

  getNewsData(year) {
    this.setState({year: year});
    this.props.getNewsDataList(year);
  }

  render() {
    const {prl} = this.props;
    return (
      <div>{this.renderPage(prl)}</div>
    );
  };

  renderPage(cardDetails) {

    if (cardDetails) {

      return _.map(cardDetails, Items => {
        
        var newsSections;
        var cardsSections;
        var image;
        
        cardsSections = _.map(Items.slice(1, Items.length), sec => {
          let itemCounter = 0;
          image = sec.image.base_path + sec.image.file;
          return (<NewsPageList slug={sec.name} title={sec.title} cardImage={sec.image != null ? image : ''} key={sec.id} NewsExplaination={sec.excerpt} itemCounter = {itemCounter++}/>);           
        })
        
        newsSections = _.map(Items.slice(0, 1), sec => {
          let itemCounter = 99;
          image = sec.image.base_path + sec.image.file;
          return (<NewsPageList slug={sec.name} title={sec.title} cardImage={image} NewsExplaination={sec.excerpt} key={sec.id} itemCounter = {itemCounter}/>);           
        })
      
        return (
          <div key ={Items}>
            <div className="GBanner">
              <div>
                <div className="BreadcrumbList">
                  <div className="container">
                      <ol role="navigation" aria-label="breadcrumbs" className="breadcrumb">
                        <span className='fa fa-angle-left'></span>
                        <li className=""><Link to={process.env.REACT_APP_SITE_RELATIVE_URL + "/home"}>Home</Link></li>
                        <li className=""></li>
                      </ol>
                  </div>
                </div>
                <div><div className="BreadcrumbHeaderTitleSection"><div className="container">News</div></div></div>
                </div>
            </div>
            <div className='container'><NewsMonthList category='news-updates' selectedOption={this.state.year} ondropDownChange={this.getNewsData}/></div>
            <div className='container latestNews'>{newsSections}</div>
            <div className='container restNews'>{cardsSections}</div>
          </div>
        )
      });
    } else {
      return (
        <div className='loader container'></div>
      )
    }
  }
};

function mapStateToProps(state) {
  return {prl: state.carouselDataReducer.newsData.list};
}

export default connect(mapStateToProps, {getNewsDataList})(DSNYNews);

