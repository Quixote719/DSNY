import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {fetchNewsDetails} from "../../../actions/actions_home";
import '../../../content/styles/subSectionHeaderImage.css';
import PressReleaseHeader from '../../PressReleases/pressReleaseHeader';
import PressReleaseBody from '../../PressReleases/pressReleaseBody';
import moment from 'moment';

class NewsDetails extends Component {

  componentDidMount() {
    const {slug} = this.props.match.params;
    this.props.fetchNewsDetails(slug);
  }

  renderimg(sec) {
    if (sec.featured_image) {
      return (<img alt={sec.featured_image.name} style={{
        width: '100%',
        margin: '5px 0px'
      }} src={`${sec.featured_image.base_path}${sec.featured_image.file} `} key={sec.featured_image.image_id}/>);
    }

  }
  rendertop(sec) {
    return (
      <div key={_.random(0, 200, true)}>
        <div><PressReleaseHeader title={sec.header} date={moment(sec.date).format('dddd, MMMM Do, YYYY')} status={sec.status_text}/></div>
        <div>{this.renderimg(sec)}</div>
      </div>

    )
  }

  render() {

    const {prd} = this.props;
    return (
      <div >
        {this.renderPage(prd)}
      </div>

    );
  };

  renderPage(cardDetails) {

    if (cardDetails) {

      return _.map(cardDetails, cItems => {

        var sections;
        if (cItems.sections) {
          sections = _.map(cItems.sections.sections, sec => {
            return (
                <div>
                    <div key={sec.name}>{this.rendertop(sec)}</div>
                    <div key={sec.name}><PressReleaseBody data={sec}/></div>
                </div>
            )
          })
        }

        return (
          <div key ={cItems.id}>
            <div className="GBanner">
              <div>
                <div className="BreadcrumbList">
                  <div className="container">
                    <ol role="navigation" aria-label="breadcrumbs" className="breadcrumb">
                      <span className='fa fa-angle-left'></span>
                      <li className=""><Link to={process.env.REACT_APP_SITE_RELATIVE_URL + "/home"}>Home</Link></li>
                      <li className=""><Link to={process.env.REACT_APP_SITE_RELATIVE_URL + "/dsnynews"}>News</Link></li>
                      <span className='breadcrumbSymbol'>/</span>
                    </ol>
                  </div>
                </div> 
              </div>
            </div>
            <div className='container'>{sections}</div>
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
  return {prd: state.carouselDataReducer.newsData.details};
}
export default connect(mapStateToProps, {fetchNewsDetails})(NewsDetails);;
