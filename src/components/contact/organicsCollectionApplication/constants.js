export const Titles = {
  sectionOne: "PLEASE TELL US A LITTLE ABOUT YOURSELF",
  sectionTwo: "BUILDING / SITE INFORMATION",
  PropertySectionThree: 'CONTACT INFORMATION',
  PropertySectionFour: 'BUILDING MANAGEMENT INFORMATION',
  NonProfitsectionThree: 'CONTACT 1 INFORMATION',
  NonProfitsectionFour: 'CONTACT 2 INFORMATION',
  SchoolsectionThree: 'CONTACT INFORMATION',
  SchoolsectionFour: 'FACILITIES/MAINTENANCE INFORMATION',
  sectionFive: 'ADDITIONAL COMMENTS OR QUESTIONS',

  SuccessMessage: "Success! Your response No. is: ",
  FailureMessage:"Please make sure your message is correct.",
  AddressAsEntered: "ADDRESS",
  FailureMessage:"Please make sure your message is correct.",
  CustomerTypeId: "WHO ARE YOU",
  PropertyName: "NAME OF BUILDING, COMPLEX OR SITE (OPTIONAL)",
  PhoneTypeId: "PHONE TYPE",
  PropertyUnitCount: "APPROXIMATE # OF UNITS/APTS IN BUILDING",
  SiteClassificationId: "HOW WOULD YOU CLASSIFY THIS SITE?",
  FirstName: "FIRST NAME",
  LastName: "LAST NAME",
  Email: "E-MAIL",
  Phone: "PHONE",
  PhoneType: "PHONE TYPE",
  AwarenessSources: "HOW DID YOU HEAR ABOUT THE PROGRAM? (OPTIONAL)",
  ConfirmEmail: "CONFIRM E-MAIL",
  OtherAwarenessSource: "PLEASE DESCRIBE (OPTIONAL)",
  Comments: "PLEASE INDICATE ANY ADDITIONAL COMMENTS OR QUESTIONS YOU HAVE ABOUT THE PROGRAM. (OPTIONAL)",
  // Property Management Form
  CompanyName: "MANAGEMENT COMPANY",
  CompanyPersonTitle: 'CONTACT PERSON TITLE',
  CompanyPersonFirstName: 'CONTACT PERSON FIRST NAME',
  CompanyPersonLastName: 'CONTACT PERSON LAST NAME',
  CompanyAddressAsEntered: 'ADDRESS (OPTIONAL)',
  CompanyApartment: 'FLOOR/SUITE/APT (OPTIONAL)',
  CompanyPersonEmail: 'E-MAIL',
  CompanyPersonPhone: 'PHONE',
  OtherSiteClassification: "PLEASE BRIEFLY EXPLAIN",
  // Non-profit Form
  OrganizationName: 'NAME OF ORGANIZATION',
  OrganizationTypeId: 'HOW WOULD YOU CLASSIFY THIS SITE?',
  OtherOrganizationType: 'PLEASE BRIEFLY EXPLAIN',
  OrganizationTitle1: 'WHAT IS YOUR TITLE/ROLE IN THE ORGANIZATION',
  OrganizationTitle2: 'WHAT IS YOUR TITLE/ROLE IN THE ORGANIZATION',
  OrganizationPhoneTypes: 'PHONE TYPE',
  OrganizationPersonFirstName: 'FIRST NAME',
  OrganizationPersonLastName: 'LAST NAME',
  OrganizationPersonEmail: 'E-MAIL',
  OrganizationPersonPhone: 'PHONE',
  // Agency Form
  AgencyName: 'NAME OF AGENCY',
  ParticipatingFloorsCount: '# OF PARTICIPATING FLOORS (OPTIONAL)',
  AgencyCompanyName: 'MANAGING ORGANIZATION (E.G DCAS)',
  AgencyTitle1: 'WHAT IS YOUR TITLE/ROLE IN THE Agency',
  AgencyTitle2: 'CONTACT PERSON TITLE',
  AgencyPhoneTypes: 'PHONE TYPE',
  AgencyPersonFirstName: 'CONTACT PERSON FIRST NAME',
  AgencyPersonLastName: 'CONTACT PERSON LAST NAME',
  AgencyPersonEmail: 'E-MAIL',
  AgencyPersonPhone: 'PHONE',
  // School Form
  SchoolName: 'NAME OF SCHOOL',
  SchoolTitle1: 'WHAT IS YOUR TITLE/ROLE AT THE SCHOOL',
  SchoolTitle2: 'FACILITIES CONTACT PERSON TITLE',
  SchoolPhoneTypes: 'PHONE TYPE',
  SchoolPersonFirstName: 'FACILITIES CONTACT PERSON FIRST NAME',
  SchoolPersonLastName: 'FACILITIES CONTACT PERSON LAST NAME',
  SchoolPersonEmail: 'E-MAIL',
  SchoolPersonPhone: 'PHONE',
  IsNonprofitSchool: "IS YOUR SCHOOL A NONPROFIT?",
  UsesPrivateFoodServiceVendor: "DOES YOUR SHCOOL UTILIZE A PRIVATE FOOD SERVICE VENDOR",
  PrivateFoodServiceVendorDescription: "PLEASE DESCRIBE SERVICE"
}

export const formObject = {
  "SRNo": "",
  "RequestCode": "",
  "CustomerTypeId": null,
  "RequestCodeObject": {
    "DisplayName": "",
    "RequestCode": ""
  },
  "Id": 0,
  "URI": "",
  "CustomerTypeId": null,
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
  "ServiceRequestStatusId": 1,
  "CreatedDate": "0001-01-01T00:00:00",
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

  // Property Form
  "PropertyFormId": 0,
  "PropertyFormOrganicsCollectionRequestId": 0,
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
  "SiteClassificationId": 0,
  "SelectedSiteClassification": null,
  "OtherSiteClassification": null,
  "PropertyHasInformedStaffAboutProgram": null,
  "CompanyName": null,
  "CompanyPersonTitle": null,
  "CompanyPhoneTypeId": null,
  "CompanySelectedPhoneType": null,
  "CompanyPersonFirstName": null,
  "CompanyPersonLastName": null,
  "CompanyPersonPhone": null,
  "CompanyPersonEmail": null,
  "CompanyFullName": null,
  "CompanyFullNameLastFirst": null,
  "CompanyAddressAsEntered": null,
  "CompanyHouseNumber": null, 
  "CompanyStreet": null,
  "CompanyBorough": null,
  "CompanyCity": null,
  "CompanyState": "NY",
  "CompanyZip": null,
  "CompanyAddressText": ", NY",
  "CompanyAddressTextOneLine": ", NY",
  "CompanyApartment": null,
  "CompanyPhoneTypes": [
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
  "CompanyCreatedDate": "0001-01-01T00:00:00",

  // Non-profit Form
  "NonprofitFormId": 0,
  "NonprofitFormIdOrganicsCollectionRequestId": 0,
  "OrganizationCreatedDate": "0001-01-01T00:00:00",
  "OrganizationName": null,
  "SelectedOrganizationType": null,
  "OrganizationTypeId": 0,
  "OtherOrganizationType": null,
  "OrganizationTypes": [
    {
      "Id": 1,
      "Name": "Nonprofit",
      "DisplayName": "Nonprofit",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "University",
      "DisplayName": "University/College",
      "Selected": false
    },
    {
      "Id": 3,
      "Name": "Religious",
      "DisplayName": "Religious",
      "Selected": false
    },
    {
      "Id": 4,
      "Name": "Library",
      "DisplayName": "Library",
      "Selected": false
    },
    {
      "Id": 5,
      "Name": "BotanicalGarden",
      "DisplayName": "Botanical Garden",
      "Selected": false
    },
    {
      "Id": 6,
      "Name": "CommunityGroup",
      "DisplayName": "Community Group",
      "Selected": false
    },
    {
      "Id": 7,
      "Name": "Unknown",
      "DisplayName": "I don't know",
      "Selected": false
    },
    {
      "Id": 8,
      "Name": "Other",
      "DisplayName": "Other",
      "Selected": false
    }
  ],
  "NonProfitHasInformedStaffAboutProgram": null,
  "OrganizationTitle1": null,
  "OrganizationTitle2": null,
  "OrganizationPhoneTypes": [
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
  "OrganizationPhoneTypeId": 0,
  "OrganizationSelectedPhoneType": null,
  "OrganizationPersonFirstName": null,
  "OrganizationPersonLastName": null,
  "OrganizationPersonEmail": null,
  "OrganizationPersonPhone": null,
  "OrganizationPersonFullName": null,
  "OrganizationPersonFullNameLastFirst": null,

  // City Agency Form

  "AgencyName": null,
  "ParticipatingFloorsCount": 0,
  "AgencyHasInformedStaffAboutProgram": null,
  "AgencyTitle1": null,
  "AgencyTitle2": null,
  "AgencyCompanyName": null,
  "AgencyPhoneTypes": [
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
  "AgencyPhoneTypeId": 0,
  "AgencyPersonFirstName": null,
  "AgencyPersonLastName": null,
  "AgencyPersonEmail": null,
  "AgencyPersonPhone": null,

  // School form
  "SchoolName": null,
  "SchoolHasInformedStaffAboutProgram": null,
  "SchoolTitle1": null,
  "SchoolTitle2": null,
  "SchoolPhoneTypes": [
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
  "SchoolPhoneTypeId": 0,
  "SchoolPersonFirstName": null,
  "SchoolPersonLastName": null,
  "SchoolPersonEmail": null,
  "SchoolPersonPhone": null,
  "IsNonprofitSchool": null,
  "ReceivesDsnyCollection": null,
  "UsesPrivateFoodServiceVendor": null,
  "PrivateFoodServiceVendorDescription": null
}
