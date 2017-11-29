export const Titles = {
  sectionOne: 'SUBMITTER INFORMATION',
  sectionTwo: 'SUBMIT YOUR DOCUMENT(S)',
  AgencyName: 'AGENCY / INSTITUTION',
  Title: 'TITLE / POSITION',
  FirstName: 'FIRST NAME',
  LastName: 'LAST NAME',
  Email: 'E-MAIL',
  ConfirmEmail: 'CONFIRM E-MAIL',
  Phone: 'PHONE',
  PhoneTypeId: 'PHONE TYPE',
  Message: "COMMENTS",
  SuccessMessage: "Success! Your response No. is: ",
  FailureMessage:"Please make sure your message is correct.",
  RequiredFieldMessage: 'This field is required',
}


export const formObject = {
  
  "Id": 0,
  "SRNumberId": 0,
  "SRNo": null,
  "ServiceRequestStatusId": 0,
  "AgencyName": null,
  "Title": null,
  "FirstName": null,
  "LastName": null,
  "Email": null,
  "Phone": null,
  "PhoneTypes": [
    {
      "Id": 0,
      "Name": "Select One",
      "DisplayName": "Select One",
      "Selected": false
    }
  ],
  "PhoneTypes": [
    {
      "Id": 0,
      "Name": "Select One",
      "DisplayName": "Select One",
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
  "SelectedPhoneType": {
    "Id": 0,
    "Name": null,
    "DisplayName": null,
    "Selected": false
  },
  "FullName": null,
  "FullNameLastFirst": null,
  "CreatedDate": "0001-01-01T00:00:00",
  "MediaFiles": [
    {
      "Id": 0,
      "DetailRecordId": 0,
      "FileName": null,
      "URI": null
    }
  ],
  "files1": [],
  "files2": [],
  "files3": []
}