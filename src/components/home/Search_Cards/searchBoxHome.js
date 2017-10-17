import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../../../actions/actions_home';
import { connect } from 'react-redux';
import styles from '../../../content/styles/home.css';
import '../../../content/styles/howtogetridof.css';
import { Grid, Row, Col } from 'react-bootstrap';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import _ from "lodash";
import Autosuggest from 'react-autosuggest';
import About from '../../about/index';
import {Link} from "react-router-dom";

class SearchBoxHome extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: "",
            suggestions: [],
          };
    }
    getSuggestionValue = suggestion => suggestion;
    renderSuggestion = suggestion => (
        <Link to={"/howtogetridof/"+suggestion}>
        <div className ="ridOfSuggestions">
          {suggestion}
        </div>
        </Link>
      );
    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
      
        return inputLength === 0 ? [] : this.props.ridOffKeywords.filter(lang =>
          lang.toLowerCase().slice(0, inputLength) === inputValue
        );
      };
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
          suggestions: this.getSuggestions(value)
        });
      };
      onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
      };
      onChange = (event, { newValue }) => {
        this.setState({
          value: newValue
        });
      };
    render() {

        return (
            <div>
                <div id="TextureSquare">
                    <div id="innersquare">
                        <Autosuggest
                            suggestions={this.state.suggestions}
                            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                            getSuggestionValue={this.getSuggestionValue}
                            renderSuggestion={this.renderSuggestion}
                            onSuggestionSelected={this.searchResultPage}
                            inputProps={{
                                value: this.state.value,
                                onChange: this.onChange,
                                className: "ridOfSearch",
                                placeholder: "How to get rid of ..."
                            }}
                        />
                        <i className="fa fa-search ridSearch" id="ridSearch"></i>
                        <div className={this.state.suggestions != "" ? "noexampleRidSearch" : "exampleRidSearch"}> Example: battery, mattress, TVs </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBoxHome;
