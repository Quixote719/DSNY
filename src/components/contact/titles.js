export const compostFormTitles = {
  sectionOne: "SECTION 1: APPLICANT AND ORGANIZATION LOCATION",
  sectionTwo: "SECTION 2: TERMS OF SERVICE (MUST AGREE TO ALL TERMS )",
  sectionThree: "SECTION 3: ORGANIZATION INFORMATION",
  sectionFour: "SECTION 4: APPLICANT CONTACT INFORMATION",
  sectionFive: "SECTION 5: SITE INFORMATION",
  sectionSix: "SECTION 6: DELIVERY INFORMATION",
  WillPostCompostRecipientSignage: "Yes, I will post a DSNY compost recIpient sign near where DSNY Compost will be used.",
  WillPostSignageWithinTwoWeeks: "Yes, the sign will be installed within two weeks of receiving the material.",
  WillSubmitThreePhotos: "Yes, I will subming three (3) photos of the compost in use to NYCCOMPOST@DSNY.NYC.GOV.",
  ConsentToDsnyUseOfPhotos: "Yes, photos submitted may be used for DSNY program promotion.",
  ApplyingAs: "APPLYING AS",
  OrganizationName: "ORGANIZATION NAME",
  OrganizationTaxIdNumber: "ORGANIZATION TAX IDENTIFICATION NUMBER NAME",
  OrganizationWebsite: "ORGANIZATION OR PROJECT WEBSITE (optional)",
  OrganizationFacebookPage: "ORGANIZATION OR PROJECT FACEBOOK PAGE (optional)",
  OrganizationTwitterHandle: "ORGANIZATION OR PROJECT TWITTER HANDLE (Optional)",
  OrganizationInstagramHandle: "ORGANIZATION OR PROJECT instagram ID (optional)",
  FirstName: "FIRST NAME",
  LastName: "LAST NAME",
  Title: "YOUR TITLE OR AFFILIATION WITH ORGANIZATION (optional)",
  IsCertifiedNycMasterComposter: "ARE YOU A CERTIFIED NYC MASTER COMPOSTER?",
  PrimaryPhone: "PRIMARY PHONE NUMBER",
  PrimaryPhoneTypeId: "Phone Type (optional)",
  SecondaryPhone: "SECONDARY PHONE NUMBER (Optional)",
  SecondaryPhoneTypeId: "Phone Type (optional)",
  Email: "E-MAIL",
  ConfirmEmail: "CONFIRM E-MAIL",
  CompostSiteTypeId: "WHAT TYPE OF SITE IS THIS?",
  OtherCompostSiteType: "OTHER SITE TYPE",
  CompostSitePermittingOrganizationId: "PERMISSION TO TEND THIS SITE WAS GRANTED BY",
  OtherCompostSitePermittingOrganization: "OTHER PERMITTING ORGANIZATION",
  SiteSize: "SITE SIZE (SQUARE FEET)",
  IsGreenThumbGarden: "IS THIS A GREENTHUMB GARDEN?",
  HasReceivedDsnyCompostBefore: "HAVE YOU RECEIVED DSNY COMPOST IN THE PAST?",
  CompostUseDescription: "DESCRIBE HOW WILL YOU USE DSNY COMPOST? (INCLUDE SPECIFIC DATES IF KNOWN)",
  FromHourOfDayId: "PREFERRED DELIVERY TIMES From",
  ToHourOfDayId: "To",
  DeliveryNotes: "DELIVERY NOTES AND INSTRUCTIONS (Optional)",
  EntranceHeightWidth: "HEIGHT AND WIDTH OF YOUR SITE’S ENTRANCE (Optional)",
  HasAlternateSideParking: "ALTERNATE SIDE PARKING AT SITE?",
  Pallets: "NUMBER OF PALLETS OF COMPOST",
  DeliveryDeadline: "WHEN IS THE LATEST DATE YOUR COMPOST IS NEEDED BY?",
  DeliveryOn: "THE SIGN WILL BE INSTALLED WITHIN TWO WEEKS OF RECEIVING THE MATERIAL.",
  AlternateSideParking: "ALTERNATE SIDE PARKING DAYS? (Select ALL that apply)",
  AlternateSideParkingTimes: "PREFERRED DELIVERY TIMES From"
}

export const compostFormObject = {
  "Id": 0,
  "SRNumberId": 0,
  "SRNo": null,
  "CreatedDate": "0001-01-01T00:00:00",
  "FirstName": "yeswanth varma",
  "LastName": "kanumuri",
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
  "ApplyingAsStreetTreeSteward": false,
  "ApplyingAsOrganization": false,
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
    }, {
      "Id": 2,
      "Name": "Mobile",
      "DisplayName": "Mobile",
      "Selected": false
    }, {
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
    }, {
      "Id": 2,
      "Name": "Mobile",
      "DisplayName": "Mobile",
      "Selected": false
    }, {
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
      "DisplayName": "Community Compost Site",
      "Selected": false
    }, {
      "Id": 2,
      "Name": "CommunityGarden",
      "DisplayName": "Community Garden",
      "Selected": false
    }, {
      "Id": 3,
      "Name": "NYCHAProperty",
      "DisplayName": "New York Housing Authority (NYCHA) Property",
      "Selected": false
    }, {
      "Id": 4,
      "Name": "Nonprofit",
      "DisplayName": "Nonprofit Organization or Institution",
      "Selected": false
    }, {
      "Id": 5,
      "Name": "Park",
      "DisplayName": "NYC Park",
      "Selected": false
    }, {
      "Id": 6,
      "Name": "School",
      "DisplayName": "NYC School (K-12)",
      "Selected": false
    }, {
      "Id": 7,
      "Name": "UrbanFarm",
      "DisplayName": "Urban Farm",
      "Selected": false
    }, {
      "Id": 8,
      "Name": "StreetTrees",
      "DisplayName": "Street Trees",
      "Selected": false
    }, {
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
    }, {
      "Id": 2,
      "Name": "NYCParksAndRec",
      "DisplayName": "NYC Department of Parks & Recreation",
      "Selected": false
    }, {
      "Id": 3,
      "Name": "NYCDOE",
      "DisplayName": "NYC Department of Education",
      "Selected": false
    }, {
      "Id": 4,
      "Name": "NYCHA",
      "DisplayName": "NYC Housing Authority",
      "Selected": false
    }, {
      "Id": 5,
      "Name": "TreesNewYork",
      "DisplayName": "TreesNewYork (Certified Citizen Pruner)",
      "Selected": false
    }, {
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
  "DeliverOnMonday": false,
  "DeliverOnTuesday": false,
  "DeliverOnWednesday": false,
  "DeliverOnThursday": false,
  "DeliverOnFriday": false,
  "DeliverOnSaturday": false,
  "FromHoursOfDay": [
    {
      "Id": 0,
      "Name": "TwelveAm",
      "DisplayName": "12:00 AM",
      "Selected": false
    }, {
      "Id": 1,
      "Name": "OneAm",
      "DisplayName": "01:00 AM",
      "Selected": false
    }, {
      "Id": 2,
      "Name": "TwoAm",
      "DisplayName": "02:00 AM",
      "Selected": true
    }, {
      "Id": 3,
      "Name": "ThreeAm",
      "DisplayName": "03:00 AM",
      "Selected": false
    }, {
      "Id": 4,
      "Name": "FourAm",
      "DisplayName": "04:00 AM",
      "Selected": false
    }, {
      "Id": 5,
      "Name": "FiveAm",
      "DisplayName": "05:00 AM",
      "Selected": false
    }, {
      "Id": 6,
      "Name": "SixAm",
      "DisplayName": "06:00 AM",
      "Selected": false
    }, {
      "Id": 7,
      "Name": "SevenAm",
      "DisplayName": "07:00 AM",
      "Selected": false
    }, {
      "Id": 8,
      "Name": "EightAm",
      "DisplayName": "08:00 AM",
      "Selected": false
    }, {
      "Id": 9,
      "Name": "NineAm",
      "DisplayName": "09:00 AM",
      "Selected": false
    }, {
      "Id": 10,
      "Name": "TenAm",
      "DisplayName": "10:00 AM",
      "Selected": false
    }, {
      "Id": 11,
      "Name": "ElevenAm",
      "DisplayName": "11:00 AM",
      "Selected": false
    }, {
      "Id": 12,
      "Name": "TwelvePm",
      "DisplayName": "12:00 PM",
      "Selected": false
    }, {
      "Id": 13,
      "Name": "OnePm",
      "DisplayName": "01:00 PM",
      "Selected": false
    }, {
      "Id": 14,
      "Name": "TwoPm",
      "DisplayName": "02:00 PM",
      "Selected": false
    }, {
      "Id": 15,
      "Name": "ThreePm",
      "DisplayName": "03:00 PM",
      "Selected": false
    }, {
      "Id": 16,
      "Name": "FourPm",
      "DisplayName": "04:00 PM",
      "Selected": false
    }, {
      "Id": 17,
      "Name": "FivePm",
      "DisplayName": "05:00 PM",
      "Selected": false
    }, {
      "Id": 18,
      "Name": "SixPm",
      "DisplayName": "06:00 PM",
      "Selected": false
    }, {
      "Id": 19,
      "Name": "SevenPm",
      "DisplayName": "07:00 PM",
      "Selected": false
    }, {
      "Id": 20,
      "Name": "EightPm",
      "DisplayName": "08:00 PM",
      "Selected": false
    }, {
      "Id": 21,
      "Name": "NinePm",
      "DisplayName": "09:00 PM",
      "Selected": false
    }, {
      "Id": 22,
      "Name": "TenPm",
      "DisplayName": "10:00 PM",
      "Selected": false
    }, {
      "Id": 23,
      "Name": "ElevenPm",
      "DisplayName": "11:00 PM",
      "Selected": false
    }
  ],
  "FromHourOfDayId": 0,
  "SelectedFromHourOfDay": null,
  "ToHoursOfDay": [
    {
      "Id": 0,
      "Name": "TwelveAm",
      "DisplayName": "12:00 AM",
      "Selected": false
    }, {
      "Id": 1,
      "Name": "OneAm",
      "DisplayName": "01:00 AM",
      "Selected": false
    }, {
      "Id": 2,
      "Name": "TwoAm",
      "DisplayName": "02:00 AM",
      "Selected": false
    }, {
      "Id": 3,
      "Name": "ThreeAm",
      "DisplayName": "03:00 AM",
      "Selected": false
    }, {
      "Id": 4,
      "Name": "FourAm",
      "DisplayName": "04:00 AM",
      "Selected": false
    }, {
      "Id": 5,
      "Name": "FiveAm",
      "DisplayName": "05:00 AM",
      "Selected": false
    }, {
      "Id": 6,
      "Name": "SixAm",
      "DisplayName": "06:00 AM",
      "Selected": false
    }, {
      "Id": 7,
      "Name": "SevenAm",
      "DisplayName": "07:00 AM",
      "Selected": false
    }, {
      "Id": 8,
      "Name": "EightAm",
      "DisplayName": "08:00 AM",
      "Selected": false
    }, {
      "Id": 9,
      "Name": "NineAm",
      "DisplayName": "09:00 AM",
      "Selected": false
    }, {
      "Id": 10,
      "Name": "TenAm",
      "DisplayName": "10:00 AM",
      "Selected": false
    }, {
      "Id": 11,
      "Name": "ElevenAm",
      "DisplayName": "11:00 AM",
      "Selected": false
    }, {
      "Id": 12,
      "Name": "TwelvePm",
      "DisplayName": "12:00 PM",
      "Selected": false
    }, {
      "Id": 13,
      "Name": "OnePm",
      "DisplayName": "01:00 PM",
      "Selected": false
    }, {
      "Id": 14,
      "Name": "TwoPm",
      "DisplayName": "02:00 PM",
      "Selected": false
    }, {
      "Id": 15,
      "Name": "ThreePm",
      "DisplayName": "03:00 PM",
      "Selected": false
    }, {
      "Id": 16,
      "Name": "FourPm",
      "DisplayName": "04:00 PM",
      "Selected": false
    }, {
      "Id": 17,
      "Name": "FivePm",
      "DisplayName": "05:00 PM",
      "Selected": false
    }, {
      "Id": 18,
      "Name": "SixPm",
      "DisplayName": "06:00 PM",
      "Selected": false
    }, {
      "Id": 19,
      "Name": "SevenPm",
      "DisplayName": "07:00 PM",
      "Selected": false
    }, {
      "Id": 20,
      "Name": "EightPm",
      "DisplayName": "08:00 PM",
      "Selected": false
    }, {
      "Id": 21,
      "Name": "NinePm",
      "DisplayName": "09:00 PM",
      "Selected": false
    }, {
      "Id": 22,
      "Name": "TenPm",
      "DisplayName": "10:00 PM",
      "Selected": false
    }, {
      "Id": 23,
      "Name": "ElevenPm",
      "DisplayName": "11:00 PM",
      "Selected": false
    }
  ],
  "ToHourOfDayId": 0,
  "SelectedToHourOfDay": null,
  "DeliveryNotes": null,
  "EntranceHeightWidth": null,
  "HasAlternateSideParking": false,
  "AlternateSideParkingMonday": false,
  "AlternateSideParkingTuesday": false,
  "AlternateSideParkingWednesday": false,
  "AlternateSideParkingThursday": false,
  "AlternateSideParkingFriday": false,
  "AlternateSideParkingSaturday": false,
  "AlternateSideParkingTimes": null
}

//Dnaiel"s module

export const sharedFormTitles = {
  "FirstName": "FIRST NAME",
  "LastName": "LAST NAME",
  "Role": "ROLE/TITLE",
  "Title": "YOUR TITLE OR AFFILIATION WITH ORGANIZATION (optional)",
  "Phone": "PHONE",
  "PhoneType": "PHONE TYPE",
  "PrimaryPhone": "PRIMARY PHONE NUMBER",
  "PrimaryPhoneTypeId": "Phone Type (optional)",
  "SecondaryPhone": "SECONDARY PHONE NUMBER (Optional)",
  "SecondaryPhoneTypeId": "Phone Type (optional)",
  "Email": "E-MAIL",
  "Address": "ADDRESS",
  "AddressOpt": "ADDRESS (OPTIONAL)",
  "FLoorSuiteApt": "FLOOR/SUITE/APT (OPTIONAL)",
  "BusinessName": "NAME OF BUSINESS",
  "ResidentInfo": "Registrant Information",
  "MailingAddress": "Mailing Address (if different than business location)",
  "BusinessType": "Business Type",
  "OnsiteMethod": "ON-SITE PROCESSING METHOD",
  "EquipmentandCapacityInfo": "EQUIPMENT AND CAPACITY INFORMATION",
  "Manufacturer": "MANUFACTURER (OTPIONAL)",
  "Model": "MODEL # (OTPIONAL)",
  "DescribeSysteml": "DESCRIBE YOUR SYSTEM (OTPIONAL)",
  "MinimumCapacity": "MINIMUM CAPACITY(LBS/DAY)",
  "MaximumCapacity": "MAXIMUM CAPACITY(LBS/DAY)",
  "InstallationDate": "INSTALLATION DATE (MM/DD/YYYY)",
  "GiInstall": "GREASE INTERCEPTOR INSTALLATION",
  "GiInstallOptional": "GREASE INTERCEPTOR INSTALLATION(OPTIONAL)",
  "Manufacturer": "MANUFACTURER (OPTIONAL)",
  "CapOptional": "CAPACITY (LBS)(OPTIONAL)",
  "Flow": "FLOW(UNITS PER MANUFATURER SPECS)(OPTIONAL)",
  "BusinessSelectList": "WHAT IS THE NATURE OF BUSINESS ACTIVITY AT THIS PREMISES? (SELECT ALL THAT APPLY)"
}
export const commercialOrganicsFormTitles = {
  "residentInfo": "Registrant Information",

}
