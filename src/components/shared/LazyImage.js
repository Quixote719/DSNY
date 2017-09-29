import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {fetchmedia} from "../../actions";
import _ from "lodash";

class LazyImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      error: false,
      src: ''
    };
  }

  componentDidMount() {
    const {id} = this.props;
    this.props.fetchmedia(id);
    const img = new Image();
    img.onload = () => {
      this.setState({loaded: true});
    };
    img.onerror = () => {
      this.setState({error: true});
    };

  }

  renderImg(img) {
    return _.map(img, Item => {
      return (<img className={this.props.className} style={{
        width: '100%',
        margin: '5px 0px'
      }} src={Item.source_url} alt={this.props.alt}/>);
    });
  }

  render() {
    const {imgSrc} = this.props;
    // if (this.state.error) {
    //   return <img className={this.props.className} style={this.props.style} src={this.props.unloadedSrc} alt={this.props.alt}/>
    // } else if (!this.state.loaded) {
    //   return <img className={this.props.className} style={this.props.style} src={this.props.unloadedSrc} alt={this.props.alt}/>
    // }
    return (

      <div >
        <div>{this.renderImg(imgSrc)}</div>

      </div>

    );

  }

}

LazyImage.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string
};

function mapStateToProps(state) {
  return {imgSrc: state.media};
}

export default connect(mapStateToProps, {fetchmedia})(LazyImage);;
