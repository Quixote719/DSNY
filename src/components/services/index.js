import React, { Component } from 'react';
import _ from "lodash";
import Banner from '../shared/banner';
import SearchBoxCollection from '../shared/searchBoxCollection';
import * as actions from '../../actions/actions_services';
import ContentCardRow from '../shared/content_card_row'
import Header from '../shared/Breadcrumb/breadcrumb_container'
import SubSectionHeader from '../shared/sub_section_header';
import styles from '../../content/styles/services.css';
import { connect } from 'react-redux';

class Services extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.Services();
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
            if(sec.name == 'collection-under-widget'){
              return(
                <div key={sec.id}>
                  <div className='sectionHeader SContainer'>{sec.header}</div>
                  <SearchBoxCollection ridOffKeywords={this.props.ridOffKeywords} pushHistory ={this.props}/>
                  <div className='SContainer'>
                    <ContentCardRow dataObject = {sec}/>
                  </div>
                </div>

              )
            }
            else{
              return(
                <div className='SContainer' key={sec.id}>
                  <SubSectionHeader title={sec.header}/>
                  <ContentCardRow dataObject = {sec}/>
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
  }
}

let actionList = {
  Services: actions.Services,
};

Services = connect(mapStateToProps, actionList)(Services);

export default Services;
