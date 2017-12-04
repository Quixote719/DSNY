export const Titles = {
  sectionOne: "PLEASE TELL US A LITTLE ABOUT YOURSELF",
  sectionTwo: "BUILDING / SITE INFORMATION",
  SuccessMessage: "Success! Your response No. is: ",
  FailureMessage:"Please make sure your message is correct.",
  Identity: "WHO ARE YOU",
  Address: "ADDRESS",
  PropertyName: "NAME OF BUILDING, COMPLEX OR SITE (OPTIONAL)",
  PropertyUnitCount: "APPROXIMATE # OF UNITS/APTS IN BUILDING",
  SiteClassificationId: "HOW WOULD YOU CLASSIFY THIS SITE?",
  FirstName: "FIRST NAME",
  LastName: "LAST NAME",
  Email: "E-MAIL",
  Phone: "PHONE",
  PhoneType: "PHONE TYPE",
  AwarenessSources: "HOW DID YOU HEAR ABOUT THE PROGRAM? (OPTIONAL)",
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
  SiteClassificationId: "HOW WOULD YOU CLASSIFY THIS SITE",
  CompanyName: "MANAGEMENT COMPANY",
  HasInformedStaffAboutProgram: "HAVE YOU SPOKEN WITH YOUR BUILDING MANAGEMENT ABOUT THE PROGRAM"

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
      "Name": "ResidentialUnder10Units",
      "DisplayName": "Resident, 1-9 Unit Building",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "ResidentialOver10Units",
      "DisplayName": "Resident, 10+ Unit Building",
      "Selected": false
    },
    {
      "Id": 3,
      "Name": "PropertyManager",
      "DisplayName": "Property Manager",
      "Selected": false
    },
    {
      "Id": 4,
      "Name": "Superintendent",
      "DisplayName": "Superintendent",
      "Selected": false
    },
    {
      "Id": 5,
      "Name": "Condo",
      "DisplayName": "Co-op/Condo Board Member",
      "Selected": false
    },
    {
      "Id": 6,
      "Name": "Nonprofit",
      "DisplayName": "Nonprofit",
      "Selected": false
    },
    {
      "Id": 7,
      "Name": "CityAgency",
      "DisplayName": "City Agency",
      "Selected": false
    },
    {
      "Id": 8,
      "Name": "CommunityGroup",
      "DisplayName": "Community Group",
      "Selected": false
    },
    {
      "Id": 9,
      "Name": "SchoolPreK12",
      "DisplayName": "School (pre-K-12)",
      "Selected": false
    },
    {
      "Id": 10,
      "Name": "Business",
      "DisplayName": "Business",
      "Selected": false
    },
    {
      "Id": 11,
      "Name": "Other",
      "DisplayName": "Other",
      "Selected": false
    }
  ],
    "AwarenessSources": [
      {
        "Id": 1,
        "Name": "311",
        "DisplayName": "311",
        "Selected": false
      },
      {
        "Id": 2,
        "Name": "Brochure",
        "DisplayName": "Brochure",
        "Selected": false
      },
      {
        "Id": 3,
        "Name": "CommunityBoard",
        "DisplayName": "Community Board/Elected Official",
        "Selected": false
      },
      {
        "Id": 4,
        "Name": "Mailer",
        "DisplayName": "Mailer",
        "Selected": false
      },
      {
        "Id": 5,
        "Name": "Meeting",
        "DisplayName": "Meeting",
        "Selected": false
      },
      {
        "Id": 6,
        "Name": "Newspaper",
        "DisplayName": "Newspaper",
        "Selected": false
      },
      {
        "Id": 7,
        "Name": "NYCZWWebsite",
        "DisplayName": "NYC Zero Waste Website",
        "Selected": false
      },
      {
        "Id": 8,
        "Name": "NYCZWNewsletter",
        "DisplayName": "NYC Zero Waste Newsletter",
        "Selected": false
      },
      {
        "Id": 9,
        "Name": "Online",
        "DisplayName": "Online: other website",
        "Selected": false
      },
      {
        "Id": 10,
        "Name": "PublicEvent",
        "DisplayName": "Public Event",
        "Selected": false
      },
      {
        "Id": 11,
        "Name": "Facebook",
        "DisplayName": "Social Media: Facebook",
        "Selected": false
      },
      {
        "Id": 12,
        "Name": "Instagram",
        "DisplayName": "Social Media: Instagram",
        "Selected": false
      },
      {
        "Id": 13,
        "Name": "Twitter",
        "DisplayName": "Social Media: Twitter",
        "Selected": false
      },
      {
        "Id": 14,
        "Name": "OtherSocialMedia",
        "DisplayName": "Social Media: Other",
        "Selected": false
      },
      {
        "Id": 15,
        "Name": "DSNYOutreach",
        "DisplayName": "Word of Mouth: DSNY Outreach",
        "Selected": false
      },
      {
        "Id": 16,
        "Name": "GrowNYC",
        "DisplayName": "Word of Mouth: GrowNYC",
        "Selected": false
      },
      {
        "Id": 17,
        "Name": "Friend",
        "DisplayName": "Word of Mouth: Friend/Colleague",
        "Selected": false
      },
      {
        "Id": 18,
        "Name": "Superintendent",
        "DisplayName": "Word of Mouth: Superintendent Referral",
        "Selected": false
      }
    ],
    "AwarenessSourceId": null,
    "SelectedAwarenessSource": null,
    "OtherAwarenessSource": null,
    "Comments": null,
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
  "HasInformedStaffAboutProgram": null,
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
