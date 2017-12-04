import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../../../content/styles/home.css';
import { Grid, Row, Col } from 'react-bootstrap';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import Autosuggest from 'react-autosuggest';

class SerialNoAutocomplete extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <div>
                {/* <Autosuggest
                suggestions={this.state.suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                onSuggestionSelected={this.searchResultPage}
                    inputProps={{
                    onBlur: this.resetPlaceHolder,
                    onFocus: this.setPlaceHolder,
                    value: this.state.value,
                    onChange: this.onChange,
                    className: "ridOfSearchResults",
                    placeholder: this.state.placeholder,
                    // onKeyPress: this.handleKeyPress,                         
                    onKeyDown: this.handleKeyPress,
                }}/> */}
            </div>

        )
    }
}

export default SerialNoAutocomplete;
