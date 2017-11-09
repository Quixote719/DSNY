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
      console.log('yeshu');
    console.log(formObject);
    const p = {
  "AddressAsEntered": "520 E 21st St Brooklyn",
  "Id": 1,
  "SRNumberId": 32,
  "SRNo": "2017CR0100001",
  "CreatedDate": "2017-10-20T15:29:02",
  "FirstName":"dfdfdf" ,
  "LastName": "Hazeley",
  "FullName":"fdsf",
  "FullNameLastFirst": "Hazeley, Kenyatta",
  "Email": "khazeley@gmail.com",

  "HouseNumber": "520",
  "Street": "E 21st St",
  "Apartment": "1-O",
  "Borough": "Brooklyn",
  "City": "Brooklyn",
  "State": "NY",
  "Zip": "11226",
  "AddressText": "520 E 21st St #1-O\r\nBrooklyn, NY 11226",
  "AddressTextOneLine": "520 E 21st St #1-O Brooklyn, NY 11226",
  "WillPostCompostRecipientSignage": true,
  "WillPostSignageWithinTwoWeeks": true,
  "WillSubmitThreePhotos": true,
  "ConsentToDsnyUseOfPhotos": true,
  "OrganizationName": "CompostUp",
  "OrganizationTaxIdNumber": "TAXESSUCK1981",
  "OrganizationWebsite": "http://www.compostup.com",
  "OrganizationFacebookPage": "http://www.facebook.com/compostup",
  "OrganizationTwitterHandle": "@CompostUp",
  "OrganizationInstagramHandle": "@CompostUp",
  "Title": "Chief Composting Officer",
  "IsCertifiedNycMasterComposter": true,
  "PrimaryPhone": "(845) 659-9505",
  "PrimaryPhoneTypes": [
    {
      "Id": 1,
      "Name": "Work",
      "DisplayName": "Work",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "Mobile",
      "DisplayName": "Mobile",
      "Selected": true
    },
    {
      "Id": 3,
      "Name": "Home",
      "DisplayName": "Home",
      "Selected": false
    }
  ],
  "PrimaryPhoneTypeId": 2,
  "PrimarySelectedPhoneType": {
    "Id": 2,
    "Name": "Mobile",
    "DisplayName": "Mobile",
    "Selected": true
  },
  "SecondaryPhone": null,
  "SecondaryPhoneTypes": [
    {
      "Id": 1,
      "Name": "Work",
      "DisplayName": "Work",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "Mobile",
      "DisplayName": "Mobile",
      "Selected": false
    },
    {
      "Id": 3,
      "Name": "Home",
      "DisplayName": "Home",
      "Selected": false
    }
  ],
  "SecondaryPhoneTypeId": null,
  "SecondarySelectedPhoneType": null,
  "CompostSiteTypes": [
    {
      "Id": 1,
      "Name": "CommunityCompostSite",
      "DisplayName": "Community Compost  Site",
      "Selected": true
    },
    {
      "Id": 2,
      "Name": "CommunityGarden",
      "DisplayName": "Community Garden",
      "Selected": false
    },
    {
      "Id": 3,
      "Name": "NYCHAProperty",
      "DisplayName": "New York Housing Authority (NYCHA) Property",
      "Selected": false
    },
    {
      "Id": 4,
      "Name": "Nonprofit",
      "DisplayName": "Nonprofit Organization or Institution",
      "Selected": false
    },
    {
      "Id": 5,
      "Name": "Park",
      "DisplayName": "NYC Park",
      "Selected": false
    },
    {
      "Id": 6,
      "Name": "School",
      "DisplayName": "NYC School (K-12)",
      "Selected": false
    },
    {
      "Id": 7,
      "Name": "UrbanFarm",
      "DisplayName": "Urban Farm",
      "Selected": false
    },
    {
      "Id": 8,
      "Name": "StreetTrees",
      "DisplayName": "Street Trees",
      "Selected": false
    },
    {
      "Id": 9,
      "Name": "Other",
      "DisplayName": "Other",
      "Selected": false
    }
  ],
  "CompostSiteTypeId": 1,
  "SelectedCompostSiteType": {
    "Id": 1,
    "Name": "CommunityCompostSite",
    "DisplayName": "Community Compost  Site",
    "Selected": true
  },
  "OtherCompostSiteType": null,
  "CompostSitePermittingOrganizations": [
    {
      "Id": 1,
      "Name": "GreenThumb",
      "DisplayName": "GreenThumb",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "NYCParksAndRec",
      "DisplayName": "NYC Department of Parks & Recreation",
      "Selected": true
    },
    {
      "Id": 3,
      "Name": "NYCDOE",
      "DisplayName": "NYC Department of Education",
      "Selected": false
    },
    {
      "Id": 4,
      "Name": "NYCHA",
      "DisplayName": "NYC Housing Authority",
      "Selected": false
    },
    {
      "Id": 5,
      "Name": "TreesNewYork",
      "DisplayName": "TreesNewYork (Certified Citizen Pruner)",
      "Selected": false
    },
    {
      "Id": 6,
      "Name": "Other",
      "DisplayName": "Other",
      "Selected": false
    }
  ],
  "CompostSitePermittingOrganizationId": 2,
  "SelectedCompostSitePermittingOrganization": {
    "Id": 2,
    "Name": "NYCParksAndRec",
    "DisplayName": "NYC Department of Parks & Recreation",
    "Selected": true
  },
  "OtherCompostSitePermittingOrganization": null,
  "SiteSize": 5000,
  "IsGreenThumbGarden": true,
  "HasReceivedDsnyCompostBefore": true,
  "CompostUseDescription": "The most bestest, tremendous use of compost NYC has ever seen. We're the most composting organization you'll ever meet.",
  "Pallets": 100,
  "DeliveryDeadline": "2017-12-23T00:00:00",
  "DeliveryDays": {
    "Values": [
      {
        "Id": 1,
        "Name": "Sunday",
        "DisplayName": "Sun",
        "Selected": false
      },
      {
        "Id": 2,
        "Name": "Monday",
        "DisplayName": "Mon",
        "Selected": false
      },
      {
        "Id": 3,
        "Name": "Tuesday",
        "DisplayName": "Tues",
        "Selected": true
      },
      {
        "Id": 4,
        "Name": "Wednesday",
        "DisplayName": "Wed",
        "Selected": true
      },
      {
        "Id": 5,
        "Name": "Thursday",
        "DisplayName": "Thurs",
        "Selected": true
      },
      {
        "Id": 6,
        "Name": "Friday",
        "DisplayName": "Fri",
        "Selected": false
      },
      {
        "Id": 7,
        "Name": "Saturday",
        "DisplayName": "Sat",
        "Selected": false
      }
    ],
    "SelectedValues": [
      {
        "Id": 3,
        "Name": "Tuesday",
        "DisplayName": "Tues",
        "Selected": true
      },
      {
        "Id": 4,
        "Name": "Wednesday",
        "DisplayName": "Wed",
        "Selected": true
      },
      {
        "Id": 5,
        "Name": "Thursday",
        "DisplayName": "Thurs",
        "Selected": true
      }
    ]
  },
  "DeliverOnMonday": false,
  "DeliverOnTuesday": true,
  "DeliverOnWednesday": true,
  "DeliverOnThursday": true,
  "DeliverOnFriday": false,
  "DeliverOnSaturday": false,
  "FromHoursOfDay": [
    {
      "Id": 1,
      "Name": "OneAm",
      "DisplayName": "01:00 AM",
      "Selected": false
    },
    {
      "Id": 13,
      "Name": "OnePm",
      "DisplayName": "01:00 PM",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "TwoAm",
      "DisplayName": "02:00 AM",
      "Selected": false
    },
    {
      "Id": 14,
      "Name": "TwoPm",
      "DisplayName": "02:00 PM",
      "Selected": false
    },
    {
      "Id": 3,
      "Name": "ThreeAm",
      "DisplayName": "03:00 AM",
      "Selected": false
    },
    {
      "Id": 15,
      "Name": "ThreePm",
      "DisplayName": "03:00 PM",
      "Selected": false
    },
    {
      "Id": 4,
      "Name": "FourAm",
      "DisplayName": "04:00 AM",
      "Selected": false
    },
    {
      "Id": 16,
      "Name": "FourPm",
      "DisplayName": "04:00 PM",
      "Selected": false
    },
    {
      "Id": 5,
      "Name": "FiveAm",
      "DisplayName": "05:00 AM",
      "Selected": false
    },
    {
      "Id": 17,
      "Name": "FivePm",
      "DisplayName": "05:00 PM",
      "Selected": false
    },
    {
      "Id": 6,
      "Name": "SixAm",
      "DisplayName": "06:00 AM",
      "Selected": false
    },
    {
      "Id": 18,
      "Name": "SixPm",
      "DisplayName": "06:00 PM",
      "Selected": false
    },
    {
      "Id": 7,
      "Name": "SevenAm",
      "DisplayName": "07:00 AM",
      "Selected": true
    },
    {
      "Id": 19,
      "Name": "SevenPm",
      "DisplayName": "07:00 PM",
      "Selected": false
    },
    {
      "Id": 8,
      "Name": "EightAm",
      "DisplayName": "08:00 AM",
      "Selected": false
    },
    {
      "Id": 20,
      "Name": "EightPm",
      "DisplayName": "08:00 PM",
      "Selected": false
    },
    {
      "Id": 9,
      "Name": "NineAm",
      "DisplayName": "09:00 AM",
      "Selected": false
    },
    {
      "Id": 21,
      "Name": "NinePm",
      "DisplayName": "09:00 PM",
      "Selected": false
    },
    {
      "Id": 10,
      "Name": "TenAm",
      "DisplayName": "10:00 AM",
      "Selected": false
    },
    {
      "Id": 22,
      "Name": "TenPm",
      "DisplayName": "10:00 PM",
      "Selected": false
    },
    {
      "Id": 11,
      "Name": "ElevenAm",
      "DisplayName": "11:00 AM",
      "Selected": false
    },
    {
      "Id": 23,
      "Name": "ElevenPm",
      "DisplayName": "11:00 PM",
      "Selected": false
    },
    {
      "Id": 0,
      "Name": "TwelveAm",
      "DisplayName": "12:00 AM",
      "Selected": false
    },
    {
      "Id": 12,
      "Name": "TwelvePm",
      "DisplayName": "12:00 PM",
      "Selected": false
    }
  ],
  "FromHourOfDayId": 7,
  "SelectedFromHourOfDay": {
    "Id": 7,
    "Name": "SevenAm",
    "DisplayName": "07:00 AM",
    "Selected": true
  },
  "ToHoursOfDay": [
    {
      "Id": 1,
      "Name": "OneAm",
      "DisplayName": "01:00 AM",
      "Selected": false
    },
    {
      "Id": 13,
      "Name": "OnePm",
      "DisplayName": "01:00 PM",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "TwoAm",
      "DisplayName": "02:00 AM",
      "Selected": false
    },
    {
      "Id": 14,
      "Name": "TwoPm",
      "DisplayName": "02:00 PM",
      "Selected": false
    },
    {
      "Id": 3,
      "Name": "ThreeAm",
      "DisplayName": "03:00 AM",
      "Selected": false
    },
    {
      "Id": 15,
      "Name": "ThreePm",
      "DisplayName": "03:00 PM",
      "Selected": true
    },
    {
      "Id": 4,
      "Name": "FourAm",
      "DisplayName": "04:00 AM",
      "Selected": false
    },
    {
      "Id": 16,
      "Name": "FourPm",
      "DisplayName": "04:00 PM",
      "Selected": false
    },
    {
      "Id": 5,
      "Name": "FiveAm",
      "DisplayName": "05:00 AM",
      "Selected": false
    },
    {
      "Id": 17,
      "Name": "FivePm",
      "DisplayName": "05:00 PM",
      "Selected": false
    },
    {
      "Id": 6,
      "Name": "SixAm",
      "DisplayName": "06:00 AM",
      "Selected": false
    },
    {
      "Id": 18,
      "Name": "SixPm",
      "DisplayName": "06:00 PM",
      "Selected": false
    },
    {
      "Id": 7,
      "Name": "SevenAm",
      "DisplayName": "07:00 AM",
      "Selected": false
    },
    {
      "Id": 19,
      "Name": "SevenPm",
      "DisplayName": "07:00 PM",
      "Selected": false
    },
    {
      "Id": 8,
      "Name": "EightAm",
      "DisplayName": "08:00 AM",
      "Selected": false
    },
    {
      "Id": 20,
      "Name": "EightPm",
      "DisplayName": "08:00 PM",
      "Selected": false
    },
    {
      "Id": 9,
      "Name": "NineAm",
      "DisplayName": "09:00 AM",
      "Selected": false
    },
    {
      "Id": 21,
      "Name": "NinePm",
      "DisplayName": "09:00 PM",
      "Selected": false
    },
    {
      "Id": 10,
      "Name": "TenAm",
      "DisplayName": "10:00 AM",
      "Selected": false
    },
    {
      "Id": 22,
      "Name": "TenPm",
      "DisplayName": "10:00 PM",
      "Selected": false
    },
    {
      "Id": 11,
      "Name": "ElevenAm",
      "DisplayName": "11:00 AM",
      "Selected": false
    },
    {
      "Id": 23,
      "Name": "ElevenPm",
      "DisplayName": "11:00 PM",
      "Selected": false
    },
    {
      "Id": 0,
      "Name": "TwelveAm",
      "DisplayName": "12:00 AM",
      "Selected": false
    },
    {
      "Id": 12,
      "Name": "TwelvePm",
      "DisplayName": "12:00 PM",
      "Selected": false
    }
  ],
  "ToHourOfDayId": 15,
  "SelectedToHourOfDay": {
    "Id": 15,
    "Name": "ThreePm",
    "DisplayName": "03:00 PM",
    "Selected": true
  },
  "DeliveryNotes": "Call when you get here and we'll send someone right away",
  "EntranceHeightWidth": "10' x 20'",
  "HasAlternateSideParking": true,
  "AlternateSideParkingDays": {
    "Values": [
      {
        "Id": 1,
        "Name": "Sunday",
        "DisplayName": "Sun",
        "Selected": false
      },
      {
        "Id": 2,
        "Name": "Monday",
        "DisplayName": "Mon",
        "Selected": false
      },
      {
        "Id": 3,
        "Name": "Tuesday",
        "DisplayName": "Tues",
        "Selected": true
      },
      {
        "Id": 4,
        "Name": "Wednesday",
        "DisplayName": "Wed",
        "Selected": false
      },
      {
        "Id": 5,
        "Name": "Thursday",
        "DisplayName": "Thurs",
        "Selected": true
      },
      {
        "Id": 6,
        "Name": "Friday",
        "DisplayName": "Fri",
        "Selected": false
      },
      {
        "Id": 7,
        "Name": "Saturday",
        "DisplayName": "Sat",
        "Selected": false
      }
    ],
    "SelectedValues": [
      {
        "Id": 3,
        "Name": "Tuesday",
        "DisplayName": "Tues",
        "Selected": true
      },
      {
        "Id": 5,
        "Name": "Thursday",
        "DisplayName": "Thurs",
        "Selected": true
      }
    ]
  },
  "AlternateSideParkingMonday": false,
  "AlternateSideParkingTuesday": true,
  "AlternateSideParkingWednesday": false,
  "AlternateSideParkingThursday": true,
  "AlternateSideParkingFriday": false,
  "AlternateSideParkingSaturday": false,
  "AlternateSideParkingTimes": "12PM - 2PM",
  "CompostSiteApplicantTypes": [
    {
      "Id": 1,
      "Name": "StreetTreeSteward",
      "DisplayName": "Street Tree Steward",
      "Selected": true
    },
    {
      "Id": 2,
      "Name": "Organization",
      "DisplayName": "Organization",
      "Selected": false
    }
  ],
  "CompostSiteApplicantTypeId": 1,
  "SelectedCompostSiteApplicantType": {
    "Id": 1,
    "Name": "StreetTreeSteward",
    "DisplayName": "Street Tree Steward",
    "Selected": true
  },
"editMode":true
}
      this.props.postFormObject(p);
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
