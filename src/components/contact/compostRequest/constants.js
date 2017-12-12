export const Titles = {
  sectionOne: 'SECTION 1: APPLICANT AND ORGANIZATION LOCATION',
  sectionTwo: 'SECTION 2: TERMS OF SERVICE (MUST AGREE TO ALL TERMS )',
  sectionThree: 'SECTION 3: ORGANIZATION INFORMATION',
  sectionFour: 'SECTION 4: APPLICANT CONTACT INFORMATION',
  sectionFive: 'SECTION 5: SITE INFORMATION',
  sectionSix: 'SECTION 6: DELIVERY INFORMATION',
  WillPostCompostRecipientSignage: 'Yes, I will post a DSNY compost recIpient sign near where DSNY Compost will be used.',
  WillPostSignageWithinTwoWeeks: 'Yes, the sign will be installed within two weeks of receiving the material.',
  WillSubmitThreePhotos: 'Yes, I will subming three (3) photos of the compost in use to NYCCOMPOST@DSNY.NYC.GOV.',
  ConsentToDsnyUseOfPhotos: 'Yes, photos submitted may be used for DSNY program promotion.',
  CompostSiteApplicantTypeId: 'APPLYING AS',
  OrganizationName: 'ORGANIZATION NAME',
  OrganizationTaxIdNumber: 'ORGANIZATION TAX IDENTIFICATION NUMBER',
  OrganizationWebsite: 'ORGANIZATION OR PROJECT WEBSITE',
  OrganizationFacebookPage: 'ORGANIZATION OR PROJECT FACEBOOK PAGE',
  OrganizationTwitterHandle: 'ORGANIZATION OR PROJECT TWITTER HANDLE',
  OrganizationInstagramHandle: 'ORGANIZATION OR PROJECT INSTAGRAM ID',
  FirstName: 'FIRST NAME',
  LastName: 'LAST NAME',
  Title: 'YOUR TITLE OR AFFILIATION WITH ORGANIZATION',
  IsCertifiedNycMasterComposter: 'ARE YOU A CERTIFIED NYC MASTER COMPOSTER?',
  PrimaryPhone: 'PRIMARY PHONE NUMBER',
  PrimaryPhoneTypeId: 'PHONE TYPE',
  SecondaryPhone: 'SECONDARY PHONE NUMBER',
  SecondaryPhoneTypeId: 'PHONE TYPE',
  Email: 'E-MAIL',
  ConfirmEmail: 'CONFIRM E-MAIL',
  CompostSiteTypeId: 'WHAT TYPE OF SITE IS THIS?',
  OtherCompostSiteType: 'OTHER SITE TYPE',
  CompostSitePermittingOrganizationId: 'PERMISSION TO TEND THIS SITE WAS GRANTED BY',
  OtherCompostSitePermittingOrganization: 'OTHER PERMITTING ORGANIZATION',
  SiteSize: 'SITE SIZE (SQUARE FEET)',
  IsGreenThumbGarden: 'IS THIS A GREENTHUMB GARDEN?',
  HasReceivedDsnyCompostBefore: 'HAVE YOU RECEIVED DSNY COMPOST IN THE PAST?',
  CompostUseDescription: 'DESCRIBE HOW WILL YOU USE DSNY COMPOST? (INCLUDE SPECIFIC DATES IF KNOWN)',
  FromHourOfDayId: 'PREFERRED DELIVERY TIMES FROM',
  ToHourOfDayId: 'TO',
  DeliveryNotes: 'DELIVERY NOTES AND INSTRUCTIONS',
  EntranceHeightWidth: 'HEIGHT AND WIDTH OF YOUR SITE’S ENTRANCE',
  HasAlternateSideParking: 'ALTERNATE SIDE PARKING AT SITE?',
  Pallets: 'NUMBER OF PALLETS OF COMPOST',
  DeliveryDeadline: 'WHEN IS THE LATEST DATE YOUR COMPOST IS NEEDED BY?',
  DeliveryOn: 'THE SIGN WILL BE INSTALLED WITHIN TWO WEEKS OF RECEIVING THE MATERIAL.',
  AlternateSideParking: 'ALTERNATE SIDE PARKING DAYS? (Select ALL that apply)',
  AlternateSideParkingTimes: 'ALTERNATE SIDE PARKING TIMES',
  RequiredFieldMessage: 'This field is required',
  SuccessMessage: "Success! Your response No. is: ",
  FailureMessage:"Please make sure your message is correct.",
  DeliveryDays:'PREFERRED DELIVERY DAYS (SELECT ALL THAT APPLY)',
  AlternateSideParkingDays:'ALTERNATE SIDE PARKING DAYS (SELECT ALL THAT APPLY)',
}


export const formObject = {
  "Id": 0,
  "SRNumberId": 0,
  "SRNo": null,
  "CreatedDate": "0001-01-01T00:00:00",
  "FirstName": null,
  "LastName": null,
  "FullName": null,
  "FullNameLastFirst": null,
  "Email": null,
  "AddressAsEntered": null,
  "HouseNumber": null,
  "Street": null,
  "Apartment": null,
  "Borough": null,
  "City": null,
  "State": "NY",
  "Zip": null,
  "AddressText": ", NY",
  "AddressTextOneLine": ", NY",
  "WillPostCompostRecipientSignage": false,
  "WillPostSignageWithinTwoWeeks": false,
  "WillSubmitThreePhotos": false,
  "ConsentToDsnyUseOfPhotos": false,
  "OrganizationName": null,
  "OrganizationTaxIdNumber": null,
  "OrganizationWebsite": null,
  "OrganizationFacebookPage": null,
  "OrganizationTwitterHandle": null,
  "OrganizationInstagramHandle": null,
  "Title": null,
  "IsCertifiedNycMasterComposter": 0,
  "PrimaryPhone": null,
  "PrimaryPhoneTypes": [
    {
      "Id":0,
      "Name":"Select one",
      "DisplayName": "Select one",
      "Selected": true
    },
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
  "PrimaryPhoneTypeId": null,
  "PrimarySelectedPhoneType": null,
  "SecondaryPhone": null,
  "SecondaryPhoneTypes": [
    {
      "Id":0,
      "Name":"Select one",
      "DisplayName": "Select one",
      "Selected": true
    },
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
      "Id":0,
      "Name":"Select one",
      "DisplayName": "Select one",
      "Selected": true
    },
    {
      "Id": 1,
      "Name": "CommunityCompostSite",
      "DisplayName": "Community Compost  Site",
      "Selected": false
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
  "CompostSiteTypeId": 0,
  "SelectedCompostSiteType": null,
  "OtherCompostSiteType": null,
  "CompostSitePermittingOrganizations": [
    {
      "Id":0,
      "Name":"Select one",
      "DisplayName":"Select one",
      "Selected":true
    },
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
      "Selected": false
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
  "CompostSitePermittingOrganizationId": 0,
  "SelectedCompostSitePermittingOrganization": null,
  "OtherCompostSitePermittingOrganization": null,
  "SiteSize": 0,
  "IsGreenThumbGarden": 0,
  "HasReceivedDsnyCompostBefore": 0,
  "CompostUseDescription": null,
  "Pallets": 0,
  "DeliveryDeadline": null,
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
        "Selected": false
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
        "Selected": false
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
    "SelectedValues": []
  },
  "DeliverOnMonday": false,
  "DeliverOnTuesday": false,
  "DeliverOnWednesday": false,
  "DeliverOnThursday": false,
  "DeliverOnFriday": false,
  "DeliverOnSaturday": false,
  "FromHoursOfDay": [
    {
      "Id": 0,
      "Name": "Select one",
      "DisplayName": "Select one",
      "Selected": true
    },
    {
      "Id": 1,
      "Name": "SevenAm",
      "DisplayName": "07:00 AM",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "EightAm",
      "DisplayName": "08:00 AM",
      "Selected": false
    },
    {
      "Id": 3,
      "Name": "NineAm",
      "DisplayName": "09:00 AM",
      "Selected": false
    },
    {
      "Id": 4,
      "Name": "TenAm",
      "DisplayName": "10:00 AM",
      "Selected": false
    },
    {
      "Id": 5,
      "Name": "ElevenAm",
      "DisplayName": "11:00 AM",
      "Selected": false
    },
    {
      "Id": 6,
      "Name": "TwelvePm",
      "DisplayName": "12:00 PM",
      "Selected": false
    },
    {
      "Id": 7,
      "Name": "OnePm",
      "DisplayName": "01:00 PM",
      "Selected": false
    },
    {
      "Id": 8,
      "Name": "TwoPm",
      "DisplayName": "02:00 PM",
      "Selected": false
    },
    {
      "Id": 9,
      "Name": "ThreePm",
      "DisplayName": "03:00 PM",
      "Selected": false
    },
  ],
  "FromHourOfDayId": 0,
  "SelectedFromHourOfDay": null,
  "ToHoursOfDay": [
    {
      "Id": 0,
      "Name": "Select one",
      "DisplayName": "Select one",
      "Selected": true
    },
    {
      "Id": 1,
      "Name": "SevenAm",
      "DisplayName": "07:00 AM",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "EightAm",
      "DisplayName": "08:00 AM",
      "Selected": false
    },
    {
      "Id": 3,
      "Name": "NineAm",
      "DisplayName": "09:00 AM",
      "Selected": false
    },
    {
      "Id": 4,
      "Name": "TenAm",
      "DisplayName": "10:00 AM",
      "Selected": false
    },
    {
      "Id": 5,
      "Name": "ElevenAm",
      "DisplayName": "11:00 AM",
      "Selected": false
    },
    {
      "Id": 6,
      "Name": "TwelvePm",
      "DisplayName": "12:00 PM",
      "Selected": false
    },
    {
      "Id": 7,
      "Name": "OnePm",
      "DisplayName": "01:00 PM",
      "Selected": false
    },
    {
      "Id": 8,
      "Name": "TwoPm",
      "DisplayName": "02:00 PM",
      "Selected": false
    },
    {
      "Id": 9,
      "Name": "ThreePm",
      "DisplayName": "03:00 PM",
      "Selected": false
    },
  ],
  "ToHourOfDayId": 0,
  "SelectedToHourOfDay": null,
  "DeliveryNotes": null,
  "EntranceHeightWidth": null,
  "HasAlternateSideParking": 0,
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
        "Selected": false
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
        "Selected": false
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
    "SelectedValues": []
  },
  "AlternateSideParkingMonday": false,
  "AlternateSideParkingTuesday": false,
  "AlternateSideParkingWednesday": false,
  "AlternateSideParkingThursday": false,
  "AlternateSideParkingFriday": false,
  "AlternateSideParkingSaturday": false,
  "AlternateSideParkingTimes": null,
  "CompostSiteApplicantTypes": [
    {
      "Id":0,
      "Name":"Select one",
      "DisplayName": "Select one",
      "Selected": true
    },
    {
      "Id": 1,
      "Name": "StreetTreeSteward",
      "DisplayName": "Street Tree Steward",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "Organization",
      "DisplayName": "Organization",
      "Selected": false
    }
  ],
  "CompostSiteApplicantTypeId": 0,
  "SelectedCompostSiteApplicantType": null
}