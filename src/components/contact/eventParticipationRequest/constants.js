export const Titles = {
  sectionOne: 'WHERE IS THE EVENT',
  sectionTwo: 'EVENT INFORMATION',
  AddressAsEntered:'ADDRESS',
  sectionThree: 'PRIMARY CONTACT INFORMATION',
  sectionFour: 'SECONDARY CONTACT INFORMATION',
  sectionFive: 'SECTION 5: SITE INFORMATION',
  sectionSix: 'SECTION 6: DELIVERY INFORMATION',
  AdditionalLocationInfo:'ADDITIONAL LOCATION INFORMATION',
  EventName: 'EVENT NAME',
  AlternateName: 'ALTERNATE NAME/SITE NAME',
  StartDate: 'START DATE',
  EndDate:'END DATE',
  StartTime:'START TIME', 
  EndTime:'END TIME',
  AttendeeCountRangeId:'EXPECTED # oF ATTENDEES',
  IsRecurrent:'IS THIS A RECURRING EVENT',
  ParticipatingOrganizationsDescription:'DESCRIBE PARTICIPATING ORGANIZATIONS',
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
  PFullAddress: 'ADDRESS',
  PSuite:'FLOOR/SUITE/APT',
  PPhoneTypeId:'PHONE TYPE',
  PEmailConfirm:'CONFIRM E-MAIL',
  SFirstName:'FIRST NAME',
  SLastName: 'LAST NAME',
  SPhone: 'PHONE',
  SEmail: 'EMAIL',
  STitle: 'TITLE',
  SOrganization: 'ORGANIZATION',
  SAddress: 'ADDRESS',
  SSuite:'FLOOR/SUITE/APT',
  SPHONE:'PHONE',
  SPhoneTypeId:'PHONE TYPE',
  SEmailConfirm: 'CONFIRM E-MAIL',
  Theme:'EVENT THEME',
  TargetAudiences:'TARGET AUDIENCE',
  RequiredFieldMessage: 'This field is required',
  Message: "MESSAGE",
  formTitle:'Event Participation Request',
  SuccessMessage: "Success! Your response No. is: ",
  FailureMessage:"Please make sure your message is correct.",
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
  "StartTime":0,
  "EndTime":0,
  "TargetAudiences":null,
  "AttendeeCountRanges": [
     {
      "Id":0,
      "Name":"Select One",
      "DisplayName": "Select one",
      "Selected": false
    },
    {
      "Id": 1,
      "Name": "Under50",
      "DisplayName": "under 50",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "FiftyTo100",
      "DisplayName": "50-100",
      "Selected": false
    },
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
      "Id": 7,
      "Name": "Over500",
      "DisplayName": "over 500",
      "Selected": false
    },
  ],
  "AttendeeCountRangeId": 0,
  "SelectedAttendeeCountRange": null,
  "IsRecurrent":0,
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
  "AddressAsEntered":null,
  "PEmail":null,
  "PFullName": null,
  "PFullNameLastFirst": null,
  "PTitle": null,
  "POrganization": null,
  "PFullAddress": null,
  "PSuite":null,
  "PSelectedPhoneType":null,
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
  "AdditionalLocationInfo":null,
  "Theme":null,
   "PrimarySelectedPhoneType": [
    {
      "Id":0,
      "Name":"Select One",
      "DisplayName": "Select one",
      "Selected": false
    },
    {
      "Id": '1',
      "Name": "Work",
      "DisplayName": "Work",
      "Selected": false
    },
    {
      "Id": '2',
      "Name": "Mobile",
      "DisplayName": "Mobile",
      "Selected": false
    },
    {
      "Id": '3',
      "Name": "Home",
      "DisplayName": "Home",
      "Selected": false
    },
  
  ],
  "PPhoneTypeId":0,
  "SecondarySelectedPhoneTypes": [
    {
      "Id":0,
      "Name":"Select One",
      "DisplayName": "Select one",
      "Selected": false
    },
    {
      "Id": '1',
      "Name": "Work",
      "DisplayName": "Work",
      "Selected": false
    },
    {
      "Id": '2',
      "Name": "Mobile",
      "DisplayName": "Mobile",
      "Selected": false
    },
    {
      "Id": '3',
      "Name": "Home",
      "DisplayName": "Home",
      "Selected": false
    },
  ],
  "SPhoneTypeId":null,
  "startDailyTimes": [
    {
      "Id":0,
      "Name":"Select One",
      "DisplayName": "Select one",
      "Selected": false
    },
    {
      "Id": 1,
      "Name": "TwelveAm",
      "DisplayName": "12:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 2,
      "Name": "OneAm",
      "DisplayName": "01:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 3,
      "Name": "TwoAm",
      "DisplayName": "02:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 4,
      "Name": "ThreeAm",
      "DisplayName": "03:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 5,
      "Name": "FourAm",
      "DisplayName": "04:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 6,
      "Name": "FiveAm",
      "DisplayName": "05:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 7,
      "Name": "SixAm",
      "DisplayName": "06:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 8,
      "Name": "SevenAm",
      "DisplayName": "07:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 9,
      "Name": "EightAm",
      "DisplayName": "08:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 10,
      "Name": "NineAm",
      "DisplayName": "09:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 11,
      "Name": "TenAm",
      "DisplayName": "10:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 12,
      "Name": "ElevenAm",
      "DisplayName": "11:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 13,
      "Name": "TwelvePm",
      "DisplayName": "12:00 PM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 14,
      "Name": "OnePm",
      "DisplayName": "01:00 PM",
      "Selected": false,
      "type":"time",
    },
    
    {
      "Id": 15,
      "Name": "TwoPm",
      "DisplayName": "02:00 PM",
      "Selected": false,
      "type":"time",
    },
 
    {
      "Id": 16,
      "Name": "ThreePm",
      "DisplayName": "03:00 PM",
      "Selected": false,
      "type":"time",
    },
  
    {
      "Id": 17,
      "Name": "FourPm",
      "DisplayName": "04:00 PM",
      "Selected": false,
      "type":"time",
    },
  
    {
      "Id": 18,
      "Name": "FivePm",
      "DisplayName": "05:00 PM",
      "Selected": false,
      "type":"time",
    },
  
    {
      "Id": 19,
      "Name": "SixPm",
      "DisplayName": "06:00 PM",
      "Selected": false,
      "type":"time",
    },
    
    {
      "Id": 20,
      "Name": "SevenPm",
      "DisplayName": "07:00 PM",
      "Selected": false,
      "type":"time",
    },
 
    {
      "Id": 21,
      "Name": "EightPm",
      "DisplayName": "08:00 PM",
      "Selected": false
    },
   
    {
      "Id": 22,
      "Name": "NinePm",
      "DisplayName": "09:00 PM",
      "Selected": false,
      "type":"time",
    },
  
    {
      "Id": 23,
      "Name": "TenPm",
      "DisplayName": "10:00 PM",
      "Selected": false,
      "type":"time",
    },
    
    {
      "Id": 24,
      "Name": "ElevenPm",
      "DisplayName": "11:00 PM",
      "Selected": false,
      "type":"time",
    },
 
   
  ],
  "EndDailyTimes": [
    {
      "Id":0,
      "Name":"Select One",
      "DisplayName": "Select one",
      "Selected": false
    },
    {
      "Id": 1,
      "Name": "TwelveAm",
      "DisplayName": "12:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 2,
      "Name": "OneAm",
      "DisplayName": "01:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 3,
      "Name": "TwoAm",
      "DisplayName": "02:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 4,
      "Name": "ThreeAm",
      "DisplayName": "03:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 5,
      "Name": "FourAm",
      "DisplayName": "04:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 6,
      "Name": "FiveAm",
      "DisplayName": "05:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 7,
      "Name": "SixAm",
      "DisplayName": "06:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 8,
      "Name": "SevenAm",
      "DisplayName": "07:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 9,
      "Name": "EightAm",
      "DisplayName": "08:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 10,
      "Name": "NineAm",
      "DisplayName": "09:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 11,
      "Name": "TenAm",
      "DisplayName": "10:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 12,
      "Name": "ElevenAm",
      "DisplayName": "11:00 AM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 13,
      "Name": "TwelvePm",
      "DisplayName": "12:00 PM",
      "Selected": false,
      "type":"time",
    },
    {
      "Id": 14,
      "Name": "OnePm",
      "DisplayName": "01:00 PM",
      "Selected": false,
      "type":"time",
    },
    
    {
      "Id": 15,
      "Name": "TwoPm",
      "DisplayName": "02:00 PM",
      "Selected": false,
      "type":"time",
    },
 
    {
      "Id": 16,
      "Name": "ThreePm",
      "DisplayName": "03:00 PM",
      "Selected": false,
      "type":"time",
    },
  
    {
      "Id": 17,
      "Name": "FourPm",
      "DisplayName": "04:00 PM",
      "Selected": false,
      "type":"time",
    },
  
    {
      "Id": 18,
      "Name": "FivePm",
      "DisplayName": "05:00 PM",
      "Selected": false,
      "type":"time",
    },
  
    {
      "Id": 19,
      "Name": "SixPm",
      "DisplayName": "06:00 PM",
      "Selected": false,
      "type":"time",
    },
    
    {
      "Id": 20,
      "Name": "SevenPm",
      "DisplayName": "07:00 PM",
      "Selected": false,
      "type":"time",
    },
 
    {
      "Id": 21,
      "Name": "EightPm",
      "DisplayName": "08:00 PM",
      "Selected": false
    },
   
    {
      "Id": 22,
      "Name": "NinePm",
      "DisplayName": "09:00 PM",
      "Selected": false,
      "type":"time",
    },
  
    {
      "Id": 23,
      "Name": "TenPm",
      "DisplayName": "10:00 PM",
      "Selected": false,
      "type":"time",
    },
    
    {
      "Id": 24,
      "Name": "ElevenPm",
      "DisplayName": "11:00 PM",
      "Selected": false,
      "type":"time",
    },
 
  ],
  
}