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

export const TenPlusTitles = {
  sectionOne: "PLEASE TELL US A LITTLE ABOUT YOURSELF",
  sectionTwo: "BUILDING / SITE INFORMATION",
  sectionThree: "CONTACT INFORMATION",
  sectionFour: "BUILDING MANAGEMENT INFORMATION",
  SuccessMessage: "Success! Your response No. is: ",
  FailureMessage:"Please make sure your message is correct.",
  Identity: "WHO ARE YOU",
  FirstName: "FIRST NAME",
  LastName: "LAST NAME",
  Email: "E-MAIL",
  Phone: "PHONE",
  ConfirmEmail: "CONFIRM E-MAIL",
  PhoneTypeId: "PHONE TYPE",
  AddressAsEntered: "ADDRESS",
  PropertyName: "NAME OF BUILDING, COMPLEX OR SITE (OPTIONAL)",
  PropertyUnitCount: "APPROXIMATE # OF UNITS/APTS IN BUILDING",
  SiteClassificationId: "HOW WOULD YOU CLASSIFY THIS SITE",
  CompanyName: "MANAGEMENT COMPANY"

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

  "Id": 0,
  "OrganicsCollectionRequestId": 0,
  "PropertyName": null,
  "PropertyUnitCount": 0,
  "SiteClassifications": [
    {
      "Id": 1,
      "Name": "ResidentialUnder10Units",
      "DisplayName": "1-9 Unit Building on Commercial Block",
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
      "DisplayName": "Co-op",
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
      "Name": "StudentHousing",
      "DisplayName": "Student Housing",
      "Selected": false
    },
    {
      "Id": 7,
      "Name": "Unknown",
      "DisplayName": "I Don't Know",
      "Selected": false
    },
    {
      "Id": 8,
      "Name": "Other",
      "DisplayName": "Other",
      "Selected": false
    }
  ],
    "PhoneTypes": [
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
  "PhoneTypeId": 0,
  "SelectedPhoneType": null,
  "FirstName": null,
  "LastName": null,
  "Phone": null,
  "Email": null,
  "FullName": null,
  "FullNameLastFirst": null,
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
  "SiteClassificationId": 0,
  "SelectedSiteClassification": null,
  "OtherSiteClassification": null,
  "HasInformedStaffAboutProgram": false,
  "ManagementContact": [
  ],
  "CreatedDate": "0001-01-01T00:00:00" 
}

// "CompanyName": null,
// "Title": null,
// "PhoneTypes": [
//   {
//     "Id": 1,
//     "Name": "Work",
//     "DisplayName": "Work",
//     "Selected": false
//   },
//   {
//     "Id": 2,
//     "Name": "Mobile",
//     "DisplayName": "Mobile",
//     "Selected": false
//   },
//   {
//     "Id": 3,
//     "Name": "Home",
//     "DisplayName": "Home",
//     "Selected": false
//   }
// ],
// "PhoneTypeId": 0,
// "SelectedPhoneType": null,
// "FirstName": null,
// "LastName": null,
// "Phone": null,
// "Email": null,
// "FullName": null,
// "FullNameLastFirst": null,
// "AddressAsEntered": null,
// "HouseNumber": null,
// "Street": null,
// "Apartment": null,
// "Borough": null,
// "City": null,
// "State": "NY",
// "Zip": null,
// "AddressText": ", NY",
// "AddressTextOneLine": ", NY"
