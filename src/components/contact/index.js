import React, {Component} from "react";
import Form from "react-jsonschema-form";

const schema = {
  "title": "SECTION 1: APPLICANT AND ORGANIZATION LOCATION",
  "type": "object",
  "required": [
    "firstName", "lastName"
  ],
  "properties": {
    "firstName": {
      "type": "string",
      "title": "First name"
    },
    "lastName": {
      "type": "string",
      "title": "Last name"
    },
    "secondtitle": {
      "title": "SECTION 2: APPLICANT AND ORGANIZATION LOCATION",
      "type": "object",
      "properties": {
        "test": {
          "type": "string",
          "title": "full name"
        }
      }
    },
    "multipleChoicesList": {
      "type": "array",
      "title": "A multiple choices list",
      "items": {
        "type": "string",
        "enum": ["foo", "bar", "fuzz", "qux"]
      },
      "uniqueItems": true
    },
    "GREENTHUMB": {
      "type": "boolean",
      "title": "IS THIS A GREENTHUMB GARDEN?"
    },
    "COMPOST": {
      "type": "boolean",
      "title": "HAVE YOU RECEIVED DSNY COMPOST IN THE PAST?"
    },
    "age": {
      "type": "integer",
      "title": "Age"
    },
    "bio": {
      "type": "string",
      "title": "Bio"
    },
    "password": {
      "type": "string",
      "title": "Password",
      "minLength": 3
    },
    "telephone": {
      "type": "string",
      "title": "Telephone",
      "minLength": 10
    }
  }
}

const usc = {
  "type": "object",
  "properties": {
    "listOfbools": {
      "type": "object",
      "title": "SECTION 2: TERMS OF SERVICE (MUST AGREE TO ALL TERMS )",
      "items": {
        // "COMPOST": {
        //   "type": "boolean",
        //   "title": "I WILL POST A DSNY COMPOST RECIPIENT SIGN NEAR WHERE DSNY COMPOST WILL BE USED."
        // },
        // "INSTALLED": {
        //   "type": "boolean",
        //   "title": "THE SIGN WILL BE INSTALLED WITHIN TWO WEEKS OF RECEIVING THE MATERIAL."
        // },
        // "PHOTOS": {
        //   "type": "boolean",
        //   "title": "I WILL SUBMIT THREE (3) PHOTOS OF THE COMPOST IN USE TO NYCCOMPOST@DSNY.NYC.GOV."
        // },
        // "PROMOTION": {
        //   "type": "boolean",
        //   "title": "PHOTOS SUBMITTED MAY BE USED FOR DSNY PROGRAM PROMOTION."
        // }
      },
      "uniqueItems": true
    },
    "organiztion": {
      "type": "object",
      "title": "SECTION 3: ORGANIZATION INFORMATION",
      "items": {
        // "age": {
        //   "type": "integer",
        //   "title": "Age"
        // },
        // "bio": {
        //   "type": "string",
        //   "title": "Bio"
        // },
        // "password": {
        //   "type": "string",
        //   "title": "Password",
        //   "minLength": 3
        // },
        // "telephone": {
        //   "type": "string",
        //   "title": "Telephone",
        //   "minLength": 10
        // }
      },
      "uniqueItems": true
    }
  }
}

const UISchema = {
  "firstName": {
    "ui:autofocus": true,
    "ui:emptyValue": ""
  },
  "GREENTHUMB": {
    "ui:widget": "radio"
  },
  "COMPOST": {
    "ui:widget": "radio"
  },
  "multipleChoicesList": {
    "ui:widget": "checkboxes"
  },

  "age": {
    "ui:widget": "updown",
    "ui:title": "Age of person",
    "ui:description": "(earthian year)"
  },
  "bio": {

    "ui:widget": "textarea"
  },
  "password": {

    "ui:widget": "password",
    "ui:help": "Hint: Make it strong!"
  },
  "date": {
    "ui:widget": "alt-datetime"
  },
  "telephone": {
    "ui:options": {
      "inputType": "tel"
    }
  }
}

const log = (type) => console.log.bind(console, type);

class TestForm extends Component {

  render() {

    return (<Form schema={schema} uiSchema={UISchema} onChange={log("changed")} onSubmit={log("submitted")} onError={log("errors")}/>);
  };
};

export default TestForm;
