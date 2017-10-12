import _ from "lodash";
import React, {Component} from "react";
//import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchEventSubList} from "../../../actions/actions_home";
import SubSectionHeader from '../../shared/sub_section_header';
import SubSectionButton from '../../shared/sub_section_button';
import NewsListItem from './news_list_item';

class News extends Component {
  //componentDidMount() {
    //this.props.fetchEventSubList();
  //}

  constructor(props, context) {
    super(props, context);
  }
   

  renderNewsPosts() {
    let itemCounter = 0;  
    return _.map(this.props.carouselItems, item => {
      if(item.name == "news-and-updates-section"){
         return _.map(this.firstN(item.cards, 5), newsItem => {
            return (<NewsListItem description={newsItem.excerpt} title={newsItem.title} date={newsItem.date} image={newsItem.image != null? newsItem.image.file : ''} itemCounter = {itemCounter++} key={newsItem.date}/>);
        });
      }
    });
  }

  renderTopNewsContent() {
    let itemCounter = 99;
     return _.map(this.props.carouselItems, item => {
      if(item.name == "news-and-updates-section"){
         return _.map(this.firstN(item.cards, 1), newsItem => {
            return (<NewsListItem description={newsItem.excerpt} title={newsItem.title} date={newsItem.date} image={newsItem.image != null? newsItem.image.file : ''} itemCounter = {itemCounter} key={newsItem.date}/>);
        });
      }
    });
  }

  firstN(obj, n) {
    return _.chain(obj).keys().take(n).reduce(function(memo, current) {
      memo[current] = obj[current];
      return memo;
    }, {}).value();
  }

  ViewAllButton() {

    return _.map(this.props.carouselItems, item => {
      if(item.name == "news-and-updates-section"){
          if (item.cards.length >= 5) {
            return (<SubSectionButton title='MORE NEWS' onClick={this._reroute} key={item.id}/>);
        } else {
        return null;
        }
      }
    });
  }

  _reroute() {
    console.log('re routing this module to a sub module');
  }

  render() {

    return (
      <div>
        <SubSectionHeader title="News &amp; Updates"/>
        <div>{this.renderNewsPosts()}</div>
        <div>{this.renderTopNewsContent()}</div>

        {/*<div>{this.renderTopNewsContent(pr)}</div>*/}

        <div>{this.ViewAllButton()}</div>
      </div>
    );
  }
}

export default News;
