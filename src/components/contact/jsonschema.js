import React, {Component} from "react";
import Form from "react-jsonschema-form";
import GeoPosition from './customfield';
import FormSectionHeader from './form_section_header'

var INPUT_TYPES = 'color|date|datetime|datetime-local|file|month|number|password|range|search|tel|text|time|url|week'.split('|')

const CustomTitleField = ({title, required}) => {
  const legend = required
    ? title + '*'
    : title;
  return <div id="custom">{legend}</div>;
};

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
    "ctitle": {
      type: "object",
      "title": "yeswanth varma",
      properties: {}
    },
    "latlong": {
      type: "object",
      required: [
        "lat", "lon"
      ],
      properties: {
        lat: {
          type: "number"
        },
        lon: {
          type: "number"
        },
        title: {
          "type": "string",
          "title": "varma"
        }
      }
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

const fields = {
  geo: GeoPosition,
  ct: CustomTitleField
}

const UISchema = {
  title: {
    classNames: "formSectionHeader"
  },
  "secondtitle": {
    title: {
      classNames: "formSectionHeader"
    }
  },

  "firstName": {
    "ui:autofocus": true,
    "ui:emptyValue": "",
    classNames: "red"
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
  "latlong": {
    "ui:field": "geo"
  },
  "ctitle": {
    "ui:field": "ct"
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

class TestFormjson extends Component {

  render() {

    return (<Form schema={schema} uiSchema={UISchema} fields={fields} onChange={log("changed")} onSubmit={log("submitted")} onError={log("errors")}/>);
  };
};

export default TestFormjson;
