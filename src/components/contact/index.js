import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

//Actions
import {fetchFormObject, postFormObject} from "../../actions/contact_forms";
import Form from './contactForm'
import FetchError from './fetchError'

import '../../content/styles/contactForm.css';


class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.postForm = this.postForm.bind(this);
    this.state = {
FormObject:{},
      editMode:true
    }
  }

  componentDidMount() {
    this.props.fetchFormObject();
  }

  postForm(formObject){
      this.props.postFormObject(formObject);
  }

  render() {

      const {FormObject, error} = this.props;

    if (FormObject && FormObject !== undefined) {
    return (<div className='container'><div className='contactForm'>

      <Form disabled={!this.state.editMode} customFormData={FormObject} onSubmit={this.postForm}/>
    </div></div>);
  };
if (error){
  return (<FetchError onRetry={ () => this.props.fetchFormObject()}/>);
}
  return(<div className='loader container'></div>)
};
};


function mapStateToProps(state) {
  return {FormObject: state.forms.formObject, error:state.error.type};
}

export default connect(mapStateToProps, {fetchFormObject, postFormObject})(ContactForm);
