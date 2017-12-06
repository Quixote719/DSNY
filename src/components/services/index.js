import React, { Component } from 'react';
import _ from "lodash";
import Banner from '../shared/banner';
import SearchBoxCollection from '../shared/searchBoxCollection';
import SearchCards from '../home/Search_Cards/index';
import * as actions from '../../actions/actions_home';
import ContentCardRow from '../shared/content_card_row'
import Header from '../shared/Breadcrumb/breadcrumb_container'
import SubSectionHeader from '../shared/sub_section_header';
import SubSectionButton from '../shared/sub_section_button';
import { Link } from 'react-router-dom';
import styles from '../../content/styles/services.css';
import { connect } from 'react-redux';

class Services extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.Services();
    this.props.getRidOffKeywords();
  }

  render() {
    const {ServicesData} = this.props;

    return (
      <div>
        {this.renderPage(ServicesData)}
      </div>
    )
  }

  renderPage(ServicesData) {
    let banner;
    let sections;

        if(ServicesData!==undefined){
          banner = (
            <div key={ServicesData.id}>
              <Header title={ServicesData.title} breadCrumbList={ServicesData.breadcrumb} body={ServicesData.header_content}/>
            </div>
          )

          sections = _.map(ServicesData.sections.sections, sec => {
            let bcgStyle = sec.background_color == "gray"?{backgroundColor:"#F2F2F2"}:{backgroundColor:"#FFFFFF"}
            if(sec.name == 'collection-under-widget'){
              return(
                <div key={sec.id}>
                  <SearchCards ridOffKeywords={this.props.ridOffKeywords} pushHistory={this.props}/>
                  <div style={bcgStyle}>
                    <div className='SContainer'>
                      <SubSectionHeader title={sec.header}/>
                      <ContentCardRow dataObject = {sec}/>
                    </div>
                  </div>
                </div>

              )
            }
            else if(sec.name == 'cleaning'){
              return(
                <div className='SContainer' key={sec.id}>
                  <SubSectionHeader title={sec.header}/>
                  <ContentCardRow dataObject = {sec}/>
                  <Link to={process.env.REACT_APP_SITE_RELATIVE_URL + "/services/cleaning"}>
                    <SubSectionButton title='VIEW ALL'/>
                  </Link>
                </div>
              )
            }
            else if(sec.name == 'snow-response'){
              return(
                <div style={bcgStyle}>
                  <div className='SContainer bottomSection' key={sec.id}>
                    <SubSectionHeader title={sec.header}/>
                    <ContentCardRow dataObject = {sec}/>
                  </div>
                </div>
              )
            }
          })
        }
        return (
          <div className='ServicePage'>
            <div>{banner}</div>
            <div>{sections}</div>
          </div>
        )
  }
}




function mapStateToProps(state) {
  return {
    ServicesData: state.ServicesDataReducer.ServicesData,
    ridOffKeywords: state.carouselDataReducer.ridOffKeywords
  }
}

let actionList = {
  Services: actions.Services,
  getRidOffKeywords: actions.getRidOffKeywords,
};

Services = connect(mapStateToProps, actionList)(Services);

export default Services;
