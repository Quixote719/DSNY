import React, {Component} from "react";
// Define a custom component for handling the root position object
class GeoPosition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.formData
    };
  }

  onChange(name) {
    return (event) => {
      this.setState({
        [name]: parseFloat(event.target.value)
      }, () => this.props.onChange(this.state));
    };
  }

  render() {
    const {lat, lon, title} = this.state;
    console.log(title);
    return (
      <div>
        <div>
          <div>{title}</div><input type="number" value={lat} onChange={this.onChange("lat")}/></div>
        <div>
          <div>{title}</div><input type="number" value={lon} onChange={this.onChange("lon")}/></div>
      </div>
    );
  }
}

export default GeoPosition;
