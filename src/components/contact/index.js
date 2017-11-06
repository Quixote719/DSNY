import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

//Actions
import {fetchFormObject} from "../../actions/contact_forms";
import Form from './contactForm'

import '../../content/styles/contactForm.css';


class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
FormObject:{},
      editMode:true
    }
  }

  componentDidMount() {
    this.props.fetchFormObject();
  }

  render() {

      const {FormObject} = this.props;
    if (FormObject && FormObject !== undefined) {
    return (<div className='container'><div className='contactForm'>
      <fieldset className='disabledContactForm' disabled={!this.state.editMode}><Form disabled={!this.state.editMode} customFormData={FormObject}/></fieldset>
    </div></div>);
  };
  return(<div>loading.....</div>)
};
};


function mapStateToProps(state) {
  return {FormObject: state.forms.formObject};
}

export default connect(mapStateToProps, {fetchFormObject})(ContactForm);
