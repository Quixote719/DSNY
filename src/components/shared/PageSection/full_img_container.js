import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Header from '../Breadcrumb/breadcrumb_container'
//Actions
import {fetchCardDetails} from "../../../actions";

//Sub Components
import Banner from '../banner';
import CardSec from '../CardDetails/card_sec';
import FullImageSec from './full_img_sec';

class  fullImageContainer extends Component{
 constructor(props) {
    super(props);
    this.state = {
      reload: false
    };
    const {slug} = this.props.match.params;
    this.slug = slug;

  }

  componentWillMount() {
    const {slug} = this.props.match.params;
    this.props.fetchCardDetails(slug);
  }

  componentWillReceiveProps(nextProps, nextState) {
    const {slug} = nextProps.match.params;
    if (this.slug != slug) {
      this.slug = slug;
      this.setState({reload: true});
      this.props.fetchCardDetails(slug);
    }
  }

  render() {
    const {cardDetails} = this.props;
    return (
      <div>
        {this.renderPage(cardDetails)}
      </div>
    );
  };


   /* Return card details, corresponding to an Empty Card Section */ 
   getCard(sec){
         return (
             <div key ={sec.id}>
                 <div><CardSec dataObject={sec}/></div>
             </div>
        );
   } 


   /* Return content with Background image */ 
   getBackGroundImageContent(sec){
        return(
           <div key ={sec.id}>
              <div><FullImageSec dataObject={sec}/></div>
            </div>
        );
   }


  renderPage(cardDetails) {

    if (cardDetails) {

      return _.map(cardDetails, cItems => {

        let banner;
        if(cItems!==undefined){
          if (cItems.name != '') {
            banner = (
              <div key={cItems.id}>
                <Header title={cItems.title} breadCrumbList={cItems.breadcrumb} body={cItems.header_content}/>
              </div>
            )
          }
  
  
  
          var sections;
          if (cItems.sections) {
            sections = _.map(cItems.sections.sections, sec => {
             if(sec.featured_image != ''){
                  return this.getBackGroundImageContent(sec);
             }else{
                  return this.getCard(sec);
             }   
   
            })
          }
  
          return (
              <div key ={cItems.id}>
                <div>{banner}</div>
                <div >{sections}</div>
              </div>
          )
        }

      });
    } else {
      return (
        <div>loading.....</div>
      )
    }
  }
};

function mapStateToProps(state) {
  return {cardDetails: state.card};
}

export default connect(mapStateToProps, {fetchCardDetails})(fullImageContainer);
