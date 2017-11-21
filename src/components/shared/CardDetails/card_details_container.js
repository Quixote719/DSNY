import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";

//Actions
import { fetchPageData } from "../../../actions";
import ImageSection from '../../shared/ImageSection'

//Sub Components
import Header from '../Breadcrumb/breadcrumb_container'
import CardSec from './card_sec'

class cardDetailContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reload: false
    };
    const { slug } = this.props.match.params;
    this.slug = slug;
  }

  componentWillMount() {
    const { slug } = this.props.match.params;
    this.props.fetchPageData(slug);
  }

  componentWillReceiveProps(nextProps, nextState) {
    const { slug } = nextProps.match.params;
    if (this.slug !== slug) {
      this.slug = slug;
      this.setState({ reload: true });
      this.props.fetchPageData(slug);
    }
  }

  render() {
    const { pageData } = this.props;
    return (<div>
      {this.renderPage(pageData)}
    </div>);
  };

  renderPage(pageData) {

    if (pageData) {

      return _.map(pageData, item => {

        let banner;
        if (item !== undefined) {
          if (item.name != '') {
            banner = (<div key={item.id}>
              <Header title={item.title} breadCrumbList={item.breadcrumb} body={item.header_content} />
            </div>)
          }

          let sections;
          if (item.sections) {
            sections = _.map(item.sections.sections, (pagesection, index) => {

              if (pagesection.featured_image) {
                let ImageProps = {};
                ImageProps = pagesection;
                return (
                  <div key={pagesection.id}>
                    <div>
                      <ImageSection ImageProps={ImageProps} />
                    </div>
                  </div>
                );
              }
              else {
                return (
                  <div key={pagesection.id}>
                    <div>
                      <CardSec dataObject={pagesection} finalSec={index == item.sections.sections.length - 1} />
                    </div>
                  </div>
                );
              }
            })
          }

          return (
            <div key={item.id}>
              <div>{banner}</div>
              <div>{sections}</div>
            </div> )
        }
      });
    } else {
      return (<div>loading.....</div>)
    }
  }
};

function mapStateToProps(state) {
  return { cardDetails: state.card };
}

export default connect(mapStateToProps, { fetchPageData })(cardDetailContainer);
