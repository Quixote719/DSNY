import React, {Component} from "react";
import axios from 'axios';

export default class LazyImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      error: false,
      src: ''
    };
  }

  componentDidMount() {
    const img = new Image();
    img.onload = () => {
      this.setState({loaded: true});
    };
    img.onerror = () => {
      this.setState({error: true});
    };
    this.fetchmedia({this.props.id});
  }

  export function fetchmedia(id) {

    axios.get('http://dsnydev.staging.wpengine.com/wp-json/wp/v2/media/' + id).then((dataMedia) => {

      this.setState({src: dataMedia.data.source_url});

    })
  }

  render() {
    if (this.state.error) {
      return <img className={this.props.className} style={this.props.style} src={this.props.unloadedSrc} alt={this.props.alt}/>
    } else if (!this.state.loaded) {
      return <img className={this.props.className} style={this.props.style} src={this.props.unloadedSrc} alt={this.props.alt}/>
    }
    return <img className={this.props.className} style={this.props.style} src={this.props.src} alt={this.props.alt}/>
  }
}
