import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as actions from '../../../actions/actions_home';
import {connect} from 'react-redux';
import styles from '../../../content/styles/home.css';
import '../../../content/styles/howtogetridof.css';
import {Grid, Row, Col} from 'react-bootstrap';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
import _ from "lodash";
import Autosuggest from 'react-autosuggest';
import About from '../../about/index';
import {Link} from "react-router-dom";
import $ from 'jquery';


class SearchBoxHome extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { showModal: false};
        this.handleKeyPress = this.handleKeyPress.bind(this);                
        this.state = {
            value: "",
            suggestions: [],
            placeholder: "Search"
          };
    }

    getSuggestionValue = suggestion => suggestion;
    renderSuggestion = suggestion => (

      <Link to={`${process.env.REACT_APP_SITE_RELATIVE_URL}/site-search/${suggestion}`}>
        <div className ="ridOfSuggestions" onClick = {this.props.showModal}>
          {suggestion}
        </div>
        </Link>
      );
    getSuggestions = value => {
      console.log("Props are")
      console.log(this.props);
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
    resetPlaceHolder = () =>{
      this.setState({
        placeholder: "Search"
      })
    }
    setPlaceHolder = () =>{
      this.setState({
        placeholder: " "
      })
    }
    handleKeyPress = (event) => {
      if(event.key == 'Enter'){ 
        window.staticUrl.history.push(process.env.REACT_APP_SITE_RELATIVE_URL+ "/site-search/"+this.state.value);
        // this.props.test.history.push(process.env.REACT_APP_SITE_RELATIVE_URL+ "/site-search/"+this.state.value)
        console.log('enter press here! ')
      }
    }
    render() {

        return (
            <div>
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
                                className: "siteSearch",
                                placeholder: this.state.placeholder,
                                onBlur: this.resetPlaceHolder,
                                onFocus: this.setPlaceHolder,
                                onKeyPress: this.handleKeyPress,                                
                            }}/>
                        <Link to = {process.env.REACT_APP_SITE_RELATIVE_URL+ "/site-search/"+this.state.value}>
                        <i className="fa fa-search searchMessagesInputIcon"></i>
                        </Link>
            </div>
    )
  } 
}

export default SearchBoxHome;
