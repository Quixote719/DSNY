import _ from "lodash";
import React, {Component} from "react";
import {connect} from "react-redux";

//Actions
import {fetchCardDetails} from "../../../actions";
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
    const {slug} = this.props.match.params;
    this.slug = slug;

  }

  componentWillMount() {
    const {slug} = this.props.match.params;
    this.props.fetchCardDetails(slug);
  }

  componentWillReceiveProps(nextProps, nextState) {
    const {slug} = nextProps.match.params;
    if (this.slug !== slug) {
      this.slug = slug;
      this.setState({reload: true});
      this.props.fetchCardDetails(slug);
    }
  }

  render() {
    const {cardDetails} = this.props;
    return (<div>
      {this.renderPage(cardDetails)}
    </div>);
  };

  renderPage(cardDetails) {

    if (cardDetails) {

      return _.map(cardDetails, cItems => {

        let banner;
        if (cItems !== undefined) {
          if (cItems.name != '') {
            banner = (<div key={cItems.id}>
              <Header title={cItems.title} breadCrumbList={cItems.breadcrumb} body={cItems.header_content}/>
            </div>)
          }

          let sections;
          if (cItems.sections) {
            sections = _.map(cItems.sections.sections, sec => {
              if(sec.featured_image){
                let ImageProps = {};
                ImageProps.image = sec.featured_image.base_path + sec.featured_image.file;
                ImageProps.content = sec.content;
                return (
                  <div key={sec.id}>
                    <div>
                      <ImageSection ImageProps = {ImageProps}/>
                    </div>
                  </div>
                );
              }
              else{
                return (
                  <div key={sec.id}>
                    <div>
                      <CardSec dataObject={sec}/>
                    </div>
                  </div>
                );
              }
            })
          }

          return (<div key={cItems.id}>

            <div>{banner}</div>
            <div >{sections}</div>
          </div>)
        }
      });
    } else {
      return (<div>loading.....</div>)
    }
  }
};

function mapStateToProps(state) {
  return {cardDetails: state.card};
}

export default connect(mapStateToProps, {fetchCardDetails})(cardDetailContainer);
