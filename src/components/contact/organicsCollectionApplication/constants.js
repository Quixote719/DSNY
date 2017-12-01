export const Titles = {
  sectionOne: "PLEASE TELL US A LITTLE ABOUT YOURSELF",
  sectionTwo: "BUILDING / SITE INFORMATION",
  SuccessMessage: "Success! Your response No. is: ",
  FailureMessage:"Please make sure your message is correct.",
  Identity: "WHO ARE YOU",
  Address: "ADDRESS",
  BuildingName: "NAME OF BUILDING, COMPLEX OR SITE (OPTIONAL)",
  Approximate: "APPROXIMATE # OF UNITS/APTS IN BUILDING",
  ClassifySite: "HOW WOULD YOU CLASSIFY THIS SITE?",
  FirstName: "FIRST NAME",
  LastName: "LAST NAME",
  Email: "E-MAIL",
  Phone: "PHONE",
  PhoneType: "PHONE TYPE",
}

export const formObject = {
  "SRNo": "",
  "RequestCode": "",
  "RequestCodeObject": {
    "DisplayName": "",
    "RequestCode": ""
  },
  "Id": 0,
  "URI": "",
  "Identity": null,
  "IdentityTypes": [
    {
      "Id": 1,
      "Name": "StreetTreeSteward",
      "DisplayName": "Resident, 1-9 Unit Building",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "Organization",
      "DisplayName": "Resident, 10+ Unit Building",
      "Selected": false
    },
    {
      "Id": 3,
      "Name": "Organization",
      "DisplayName": "Propety Manager",
      "Selected": false
    },
    {
      "Id": 4,
      "Name": "Organization",
      "DisplayName": "Superintendent",
      "Selected": false
    },
    {
      "Id": 5,
      "Name": "Organization",
      "DisplayName": "Co-op/Condo Board Member",
      "Selected": false
    },
    {
      "Id": 6,
      "Name": "Organization",
      "DisplayName": "Nonprofit",
      "Selected": false
    },
    {
      "Id": 7,
      "Name": "Organization",
      "DisplayName": "City Agency",
      "Selected": false
    },
    {
      "Id": 8,
      "Name": "Organization",
      "DisplayName": "Community Group",
      "Selected": false
    },
    {
      "Id": 8,
      "Name": "Organization",
      "DisplayName": "School (pre-K-12)",
      "Selected": false
    },
    {
      "Id": 8,
      "Name": "Organization",
      "DisplayName": "Business",
      "Selected": false
    },
    {
      "Id": 8,
      "Name": "Organization",
      "DisplayName": "Other",
      "Selected": false
    }
  ],
}

export const propertyManagementForm = {
  "AdditionalLocationInfo": null,
  "DebrisInsideLot": false,
  "DebrisInFrontOfLot": false,
  "VehiclesOnLot": false,
  "MediaFiles": [
    {
      "Id": 0,
      "DetailRecordId": 0,
      "FileName": null,
      "URI": null
    }
  ],
  "IsAnonymous": false,
  "Id": 0,
  "organicsCollectionRequestId": 0,
  "propertyName": null,
  "propertyUnitCount": 0,
  "siteClassifications": [
    {
      "Id": 0,
      "Name": "Select one",
      "DisplayName": "Select one",
      "Selected": false
    },
    {
      "Id": 1,
      "Name": "1-9 unit building on commercial block",
      "DisplayName": "1-9 unit building on commercial block",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "Condo",
      "DisplayName": "Condo",
      "Selected": false
    },
    {
      "Id": 3,
      "Name": "Coop",
      "DisplayName": "Coop",
      "Selected": false
    },
    {
      "Id": 4,
      "Name": "Rental",
      "DisplayName": "Rental",
      "Selected": false
    },
    {
      "Id": 5,
      "Name": "NYCHA",
      "DisplayName": "NYCHA",
      "Selected": false
    },
    {
      "Id": 6,
      "Name": "Student Housing",
      "DisplayName": "Student Housing",
      "Selected": false
    },
    {
      "Id": 7,
      "Name": "don't know",
      "DisplayName": "don't know",
      "Selected": false
    },
    {
      "Id": 8,
      "Name": "other",
      "DisplayName": "other",
      "Selected": false
    },
  ],
  "siteClassificationId": 0,
  "otherSiteClassification": null,
  "hasInformedStaffAboutProgram": null,
  "companyName": null,
  "title": null,
  "phoneTypes": [
    {
      "Id": 0,
      "Name": "Select one",
      "DisplayName": "Select one",
      "Selected": false
    },
    {
      "Id": 1,
      "Name": "Work",
      "DisplayName": "Work",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "Home",
      "DisplayName": "Home",
      "Selected": false
    },
    {
      "Id": 3,
      "Name": "Mobile",
      "DisplayName": "Mobile",
      "Selected": false
    },
  ],
  "phoneTypeId": 0,
  "firstName": null,
  "lastName": null,
  "phone": null,
  "email": null,
  "addressAsEntered": null,
  "street": null,
  "apartment": null,
  "borough": null,
  "city": null,
  "state": null,
  "zip": null,
  "createdDate": "0001-01-01T00:00:00",
}
