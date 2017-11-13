import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

//Actions
import {fetchOrganicsForm, postOrganicsForm} from "../../actions/contact_forms";
import Form from './organicsForm'
import FetchError from './fetchError'

import '../../content/styles/contactForm.css';


class OrganicsForm extends Component {
  constructor(props) {
    super(props);
    this.postForm = this.postForm.bind(this);
    this.state = {
    FormObject:{},
      editMode:true
    }
  }

  componentDidMount() {
    this.props.fetchOrganicsForm();
  }

  postForm(formObject){
      alert('postForm');
      this.props.postOrganicsForm(formObject);
  }

  render() {

      const {FormObject, error} = this.props;

    if (FormObject && FormObject !== undefined) {
    return (<div className='container'><div className='contactForm'>
      <fieldset className='disabledContactForm' disabled={!this.state.editMode}><Form disabled={!this.state.editMode} customFormData={FormObject} onSubmit={this.postForm}/></fieldset>
    </div></div>);
  };
if (error){
  return (<FetchError onRetry={ () => this.props.fetchOrganicsForm()}/>);
}
  return(<div className='loader container'></div>)
};
};


function mapStateToProps(state) {
  return {FormObject: state.forms.formObject, error:state.error.type};
}

export default connect(mapStateToProps, {fetchOrganicsForm, postOrganicsForm})(OrganicsForm);
