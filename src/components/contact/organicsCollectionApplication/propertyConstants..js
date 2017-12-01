export const Titles = {
  sectionOne: "PLEASE TELL US A LITTLE ABOUT YOURSELF",
  sectionTwo: "BUILDING / SITE INFORMATION",
  sectionThree: "CONTACT INFORMATION",
  SuccessMessage: "Success! Your response No. is: ",
  FailureMessage:"Please make sure your message is correct.",
  Identity: "WHO ARE YOU",
  firstName: "FIRST NAME",
  lastName: "LAST NAME",
  email: "E-MAIL",
  phone: "PHONE",
  ConfirmEmail: "CONFIRM E-MAIL",
  phoneTypeId: "PHONE TYPE",
  addressAsEntered: "ADDRESS",
  propertyName: "NAME OF BUILDING, COMPLEX OR SITE (OPTIONAL)",
  propertyUnitCount: "APPROXIMATE # OF UNITS/APTS IN BUILDING",
  siteClassificationId: "HOW WOULD YOU CLASSIFY THIS SITE",


}

export const formObject = {
  "Id": 0,
  "OrganicsCollectionRequestId": 0,
  "PropertyName": null,
  "PropertyUnitCount": 0,
  "SiteClassifications": [
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
  "SiteClassificationId": 0,
  "SelectedSiteClassification": null,  
  "OtherSiteClassification": null,
  "HasInformedStaffAboutProgram": null,
  "CreatedDate": "0001-01-01T00:00:00"  
}

export const ManagementContact = {
  "CompanyName": null,
  "Title": null,
  "PhoneTypes": [
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
  "State": null,
  "Zip": null,
  "AddressText": null,
  "AddressTextOneLine": null
}
