import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../../../content/styles/home.css';
import { Grid, Row, Col } from 'react-bootstrap';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

class AddressAutocomplete extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                <PlacesAutocomplete inputProps={this.props.inputProps}
                    options={this.props.options}
                    onSelect={this.props.onSelect}
                    onEnterKeyDown={this.props.onEnterKeyDown}
                    classNames={this.props.classNames}
                />
            </div>

        )
    }
}

export default AddressAutocomplete;
