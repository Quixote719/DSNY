import React, { Component } from 'react';
import RoundProfile from '../../shared/RoundProfile';
import SubSectionHeaderGreen from '../../shared/sub_section_header_green'
import Header from '../../shared/Breadcrumb/breadcrumb_container'
import _ from "lodash"
import {fetchCardDetails} from "../../../actions"
import {connect} from "react-redux"


class Biography extends Component {
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
    console.log('testforparams');
    console.log(this.props.match.params);
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
  renderPage(cardDetails){

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
        let sections = null;
        if (cItems.sections) {
          sections = _.map(cItems.sections.sections, sec => {

            return (
              <div className='SContainer' key ={sec.id}>
                    <RoundProfile ProfileUrl = {sec.featured_image.base_path + sec.featured_image.file}/>
                  <div className='LeadershipRight'>
                    <SubSectionHeaderGreen title = {sec.header}/>
                    <div dangerouslySetInnerHTML={{__html: sec.content}}></div>
                  </div>
              </div>
            );
          })
        }

        return (
          <div key ={cItems.id}>
            <div>{banner}</div>
            <div className='smallTopSpace'>{sections}</div>
          </div>
        )
      }
    });
  }

  render() {
    const {cardDetails} = this.props;

    return (
      <div className='biographyPage'>
          {this.renderPage(cardDetails)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {cardDetails: state.card};
}

export default connect(mapStateToProps, {fetchCardDetails})(Biography);
