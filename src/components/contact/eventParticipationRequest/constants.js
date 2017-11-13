export const Titles = {
  sectionOne: 'SECTION 1: WHERE IS THE EVENT',
  sectionTwo: 'EVENT INFORMATION',
  sectionThree: 'PRIMARY CONTACT INFORMATION',
  sectionFour: 'SECONDARY CONTACT INFORMATION (OPTIONAL)',
  sectionFive: 'SECTION 5: SITE INFORMATION',
  sectionSix: 'SECTION 6: DELIVERY INFORMATION',
  AdditionalLocationInfo:'ADDITIONAL LOCATION INFORMATION (OPTION)',
  EventName: 'EVENT NAME',
  AlternateName: 'ALTERNATE NAME/SITE NAME',
  StartDate: 'START DATE',
  EndDate:'END DATE',
  StartTime:'START TIME', 
  EndTime:'END TIME',
  SelectedAttendeeCountRange:'EXPECTED # oF ATTENDEES',
  IsRecurrent:'IS THIS A RECURRING EVENT',
  ParticipatingOrganizationsDescription:'DESCRIBE PARTICIPATING ORGANIZATIONS(OPTIONAL)',
  AdditionalEventInfo:'ADDITIONAL EVENT INFO',
  ProvidedEquipmentDescription:'DESCRIBE EQUPMENT PROVIDED',
  RecyclableShippingInfo:'SHIPPING INFO FOR RECYCLING MATERIALS',
  ProvidedParkingDescription:'DESCRIBE PARKING PROVIDED',
  ZeroWasteCan:'Zero Waste Can (garbage can)',
  BlueBin: 'Blue Bin (metal,glass.plastics,cartons)',
  GreenBin: 'Green bin (paper & cardboard)',
  BrownBin: 'Brown bin (orgnics)',
  LeafBag: 'Leaf bag (yard waste)',
  PfirstName:'FIRST NAME',
  PLastName:'LAST NAME',
  PPhone: 'PHONE',
  PEmail:'E-MAIL',
  PFullName: 'FULL NAME',
  PFullNameLastFirst: null,
  PTitle: 'TITLE',
  POrganization: 'ORGANIZATION',
  PAddress: 'ADDRESS',
  PSuite:'FLOOR/SUITE/APT (OPTIONAL)',
  SelectedPhoneType:'PHONE TYPE',
  PEmailConfirm:'CONFIRM E-MAIL',
  SFirstName:'FIRST NAME (OPTIONAL)',
  SLastName: 'LAST NAME (OPTIONAL)',
  SPhone: 'PHONE (OPTIONAL)',
  SEmail: 'EMAIL (OPTIONAL)',
  STitle: 'TITLE (OPTIONAL)',
  SOrganization: 'ORGANIZATION (OPTIONAL)',
  SAddress: 'ADDRESS (OPTIONAL)',
  SSuite:'FLOOR/SUITE/APT (OPTIONAL)',
  SPHONE:'PHONE (OPTIONAL)',
  SSelectedPhoneType:'PHONE TYPE (OPTIONAL)',
  SEmailConfirm: 'CONFIRM E-MAIL (OPTIONAL)',
  TypeOfBins:'COSTUME CHARACTERS REQUESTED (SELECT ALL THAT APPLY)',
  

  ConsentToDsnyUseOfPhotos: 'Yes, photos submitted may be used for DSNY program promotion.',
  CompostSiteApplicantTypeId: 'APPLYING AS',
  OrganizationName: 'ORGANIZATION NAME',
  OrganizationTaxIdNumber: 'ORGANIZATION TAX IDENTIFICATION NUMBER NAME',
  OrganizationWebsite: 'ORGANIZATION OR PROJECT WEBSITE (optional)',
  OrganizationFacebookPage: 'ORGANIZATION OR PROJECT FACEBOOK PAGE (optional)',
  OrganizationTwitterHandle: 'ORGANIZATION OR PROJECT TWITTER HANDLE (Optional)',
  OrganizationInstagramHandle: 'ORGANIZATION OR PROJECT instagram ID (optional)',
  FirstName: 'FIRST NAME',
  LastName: 'LAST NAME',
  Title: 'YOUR TITLE OR AFFILIATION WITH ORGANIZATION (optional)',
  IsCertifiedNycMasterComposter: 'ARE YOU A CERTIFIED NYC MASTER COMPOSTER?',
  PrimaryPhone: 'PRIMARY PHONE NUMBER',
  PrimaryPhoneTypeId: 'Phone Type (optional)',
  SecondaryPhone: 'SECONDARY PHONE NUMBER (Optional)',
  SecondaryPhoneTypeId: 'Phone Type (optional)',
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
  FromHourOfDayId: 'PREFERRED DELIVERY TIMES From',
  ToHourOfDayId: 'To',
  DeliveryNotes: 'DELIVERY NOTES AND INSTRUCTIONS (Optional)',
  EntranceHeightWidth: 'HEIGHT AND WIDTH OF YOUR SITE’S ENTRANCE (Optional)',
  HasAlternateSideParking: 'ALTERNATE SIDE PARKING AT SITE?',
  Pallets: 'NUMBER OF PALLETS OF COMPOST',
  DeliveryDeadline: 'WHEN IS THE LATEST DATE YOUR COMPOST IS NEEDED BY?',
  DeliveryOn: 'THE SIGN WILL BE INSTALLED WITHIN TWO WEEKS OF RECEIVING THE MATERIAL.',
  AlternateSideParking: 'ALTERNATE SIDE PARKING DAYS? (Select ALL that apply)',
  AlternateSideParkingTimes: 'PREFERRED DELIVERY TIMES From',
  RequiredFieldMessage: 'This field is required',
  
}


export const formObject = {
  "Id": 0,
  "SRNumberId": 0,
  "SRNo": null,
  "CreatedDate": "0001-01-01T00:00:00",
  "EventName":null,
  "AlternateName":null,
  "StartDate":null,
  "EndDate":null,
  "StartTime":null,
  "EndTime":null,
  "AttendeeCountRanges": [
    {
       "Id": 3,
       "Name": "Between100And200",
       "DisplayName": "101-200",
       "Selected": false
    },
    {
       "Id": 4,
       "Name": "Between200And300",
       "DisplayName": "201-300",
       "Selected": false
    },
    {
      "Id": 5,
      "Name": "Between300And400",
      "DisplayName": "301-400",
      "Selected": false
    },
    {
      "Id": 6,
      "Name": "Between400And500",
      "DisplayName": "401-500",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "FiftyTo100",
      "DisplayName": "50-100",
      "Selected": false
    },
    {
      "Id": 7,
      "Name": "Over500",
      "DisplayName": "over 500",
      "Selected": false
    },
    {
      "Id": 1,
      "Name": "Under50",
      "DisplayName": "under 50",
      "Selected": false
    }
  ],
  "AttendeeCountRangeId": null,
  "SelectedAttendeeCountRange": null,
  "IsRecurrent":null,
  "ParticipatingOrganizationsDescription":null,
  "AdditionalEventInfo":null,
  "ProvidedEquipmentDescription":null,
  "RecyclableShippingInfo":null,
  "ProvidedParkingDescription":null,
  "ZeroWasteCan":false,
  "BlueBin": false,
  "GreenBin": false,
  "BrownBin": false,
  "LeafBag": false,
  "PfirstName":null,
  "PLastName":null,
  "PPhone": null,
  "PEmail":null,
  "PFullName": null,
  "PFullNameLastFirst": null,
  "PTitle": null,
  "POrganization": null,
  "PFullAddress": null,
  "SFirstName": null,
  "SLastName": null,
  "SPhone": null,
  "SEmail": null,
  "STitle": null,
  "SOrganization": null,
  "SAddress": null,
  "SSuite": null,
  "SPHONE": null,
  "SSelectedPhoneType": null,
  "TypeOfBins": {
    "Values": [
      {
        "Id": 1,
        "Name": "ZeroWasteCan",
        "DisplayName": "Zero Waste can (garbage can)",
        "Selected": false
      },
      {
        "Id": 2,
        "Name": "BlueBin",
        "DisplayName": "Blue Bin (metal,glass,plastics,cartons)",
        "Selected": false
      },
      {
        "Id": 3,
        "Name": "GreenBin",
        "DisplayName": "Green Bin (paper & cardboard)",
        "Selected": false
      },
      {
        "Id": 4,
        "Name": "BrownBin",
        "DisplayName": "Brown bin (organics)",
        "Selected": false
      },
      {
        "Id": 5,
        "Name": "LeafBag",
        "DisplayName": "Leaf Bag (yard waste)",
        "Selected": false
      },
    ],
    "SelectedValues": []
  },
  "AdditionalLocationInfo":null,


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
  "IsCertifiedNycMasterComposter": false,
  "PrimaryPhone": null,
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
  "IsGreenThumbGarden": false,
  "HasReceivedDsnyCompostBefore": false,
  "CompostUseDescription": null,
  "Pallets": 0,
  "DeliveryDeadline": "0001-01-01T00:00:00",
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
  "DailyTimes": [
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
  "FromHourOfDayId": 0,
  "SelectedFromHourOfDay": null,
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
  "ToHourOfDayId": 0,
  "SelectedToHourOfDay": null,
  "DeliveryNotes": null,
  "EntranceHeightWidth": null,
  "HasAlternateSideParking": false,
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