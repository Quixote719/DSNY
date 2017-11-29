export const Titles = {
  sectionOne: 'BUILDING/SITE INFORMATION',
  AddressAsEntered:'ADDRESS',
  Apartment:'FLOOR/SUITE/APT(OPTIONAL)',
  sectionTwo:'MORE INFORMATION ABOUT YOUR SITE',
  NameOfBuilding:'NAME OF BUILDING,COMPLEX OR SITE(OPTIONAL)',
  NoOfUnitInBuilding:'APPROXIMATE # OF UNITS/APTS IN BUILDING',
  ClassifySiteTypeId:'HOW WOULD YOU CLASSIFY THIS SITE ?',
  ClassifySiteOther:'SPECIFY OTHER',
  sectionThree: 'CONTACT INFORMATION',
  FirstName: 'FIRST NAME',
  LastName: 'LAST NAME',
  ContactRoleInTheBuildingTypesId:'WHAT US YOUR ROLE IN THE BUILDING ?',
  ContactRoleInTheBuildingOther:'SPECIFY OTHER ROLE',
  ContactEmail: 'E-MAIL',
  ContactPhone: 'PHONE',
  ContactPhoneTypeId:'PHONE TYPE',
  sectionFour:'BUILDING MANAGEMENT INFORMATION',
  BuildingManagementCompany:'MANAGEMENT COMPANY',
  BuildingManagementTitle:'TITLE',
  BuildingManagementFirstName:'CONTACT PERSON FIRST NAME',
  BuildingManagementLastName:'CONTACT PERSON LAST NAME',
  BuildingAddressAsEntered:'ADDRESS (OPTIONAL)',
  BuildingHouseNumber:'FLOOR/SUITE/APT(OPTIONAL)',
  BuildingManagementEmail: 'E-MAIL',
  BuildingManagementPhone: 'PHONE',
  BuildingManagementPhoneTypeId: 'PHONE TYPE',
  BuildingApartment:'FLOOR/SUITE/APT (OPTIONAL)',
  sectionFive:'ADDITIONAL COMMENTS OR QUESTIONS',
  HowDidYouHearTypeId:'HOW DID YOU HEAR ABOUT THE PROGRAM (OPTIONAL)',
  Describe:'PLEASE DESCRIBE (OPTIONAL)',
  AdditionalComments:'PLEASE INDICATE ANY ADDITIONAL COMMENTS OR QUESTIONS YOU HAVE ABOUT THE PROGRAM(S). (OPTIONAL)',
  HaveYouSpokenWith:'',

  SuccessMessage: "Success! Your response No. is: ",
  FailureMessage:"Please make sure your message is correct.",
  RequiredFieldMessage: 'This field is required',
}

export const formObject = {
  "Id": 0,
  "SRNumberId": 0,
  "SRNo": "string",
  "AddressAsEntered": null,
  "Apartment": null,
  "NameOfBuilding": null,
  "NoOfUnitInBuilding":null,
  "ClassifySiteType": [
    {
      "Id": 0,
      "Name": "string",
      "DisplayName": "string",
      "Selected": true
    }
  ],
  "ClassifySiteTypeId": 0,
  "SelectedClassifySiteType": {
    "Id": 0,
    "Name": "string",
    "DisplayName": "string",
    "Selected": true
  },
  "ClassifySiteOther": null,
  "ContactFirstName": null,
  "ContactLastName": null,
  "ContactEmail": null,
  "ContactPhone": null,
  "ContactRoleInTheBuildingType": [
    {
      "Id": 0,
      "Name": "string",
      "DisplayName": "string",
      "Selected": true
    }
  ],
  "ContactRoleInTheBuildingTypesId": 0,
  "SelectedContactRoleInTheBuilding": {
    "Id": 0,
    "Name": "string",
    "DisplayName": "string",
    "Selected": true
  },
  "ContactRoleInTheBuildingOther": null,
  
  "ContactPhoneType": [
    {
      "Id": 0,
      "Name": "string",
      "DisplayName": "string",
      "Selected": true
    }
  ],
  "ContactPhoneTypeId": 0,
  "SelectedContactPhoneType": {
    "Id": 0,
    "Name": "string",
    "DisplayName": "string",
    "Selected": true
  },
  "BuildingManagementCompany": null,
  "BuildingManagementTitle": null,
  "BuildingManagementFirstName": null,
  "BuildingManagementLastName": null,
  "BuildingAddressAsEntered": null,
  "BuildingHouseNumber": null,
  "BuildingStreet": "string",
  "BuildingApartment": null,
  "BuildingBorough": "string",
  "BuildingCity": "string",
  "BuildingState": "string",
  "BuildingZip": "string",
  "BuildingManagementEmail": null,
  "BuildingManagementPhone": null,
  "BuildingManagementPhoneType": [
    {
      "Id": 0,
      "Name": "string",
      "DisplayName": "string",
      "Selected": true
    }
  ],
  "BuildingManagementPhoneTypeId": 0,
  "SelectedBuildingManagementPhoneType": {
    "Id": 0,
    "Name": "string",
    "DisplayName": "string",
    "Selected": true
  },
  "HaveYouSpokenWith": true,
  "HowDidYouHearType": [
    {
      "Id": 0,
      "Name": "string",
      "DisplayName": "string",
      "Selected": true
    }
  ],
  "HowDidYouHearTypeId": 0,
  "SelectedHowDidYouHearTypes": {
    "Id": 0,
    "Name": "string",
    "DisplayName": "string",
    "Selected": true
  },
  "Describe": null,
  "AdditionalComments": null,
  "CreatedDate": "2017-11-28T21:16:24.079Z",
  "Source": "string",
  "HouseNumber": "string",
  "Street": "string",
  
  "Borough": "string",
  "City": "string",
  "State": "string",
  "Zip": "string",
  "District": "string",
  "Section": "string",
  "BBL": "string",
  "Latitude": 0,
  "Longitude": 0,
  "AddressText": "string",
  "AddressTextOneLine": "string"
}