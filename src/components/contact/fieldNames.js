export const eventParticipationfieldNames ={
    AddressText:'AddressText',
    EventName:'EventName',
    AlternateName:'AlternateName',
    StartDate:'StartDate',
    AttendeeCountRanges:'AttendeeCountRanges',
    IsRecurrent:'IsRecurrent',
    StartTime:'StartTime',
    EndTime:'EndTime',
    EndDate:'EndDate',
    ParticipatingOrganizationsDescription:'ParticipatingOrganizationsDescription',
    AdditionalEventInfo:'AdditionalEventInfo',
    ProvidedEquipmentDescription:'ProvidedEquipmentDescription',
    RecyclableShippingInfo:'RecyclableShippingInfo',
    ProvidedParkingDescription:'ProvidedParkingDescription',
    PfirstName:'PfirstName',
    PLastName:'PLastName',
    PTitle:'PTitle',
    POrganization:'POrganization',
    PFullAddress:'PFullAddress',
    PPhone:'PPhone',
    PEmail:'PEmail',
    PSelectedPhoneType:'PSelectedPhoneType',
    SFirstName:'SFirstName',
    SLastName:'SLastName',
    STitle:'STitle',
    SOrganization:'SOrganization',
    SFullAddress:'SFullAddress',
    SPhone:'SPhone',
    SSelectedPhoneType:'SSelectedPhoneType',
    SPhoneTypeId:'SPhoneTypeId',
    DailyTime:'DailyTime'

}



export const eventParticipationJSON = {
  
   Id: 0,
   SRNumberId: 0,
   SRNo: null,
   CreatedDate: "0001-01-01T00:00:00",
   AddressAsEntered: null,
   HouseNumber: null,
   Street: null,
   Apartment: null,
   Borough: null,
   City: null,
   State: null,
   Zip: null,
   AddressText: ",",
   AddressTextOneLine: ",",
   AdditionalLocationInfo: null,
   EventName: null,
   AlternateName: null,
   StartDate: null,
   StartTime: null,
   EndDate: null,
   EndTime: null,
   Theme: null,
   TargetAudiences: null,
   AttendeeCountRanges: [
    {
       Id: 3,
       Name: "Between100And200",
       DisplayName: "101-200",
       Selected: false
    },
    {
       Id: 4,
       Name: "Between200And300",
       DisplayName: "201-300",
       Selected: false
    },
    {
      Id: 5,
      Name: "Between300And400",
      DisplayName: "301-400",
      Selected: false
    },
    {
      Id: 6,
      Name: "Between400And500",
      DisplayName: "401-500",
      Selected: false
    },
    {
      Id: 2,
      Name: "FiftyTo100",
      DisplayName: "50-100",
      Selected: false
    },
    {
      Id: 7,
      Name: "Over500",
      DisplayName: "over 500",
      Selected: false
    },
    {
      Id: 1,
      Name: "Under50",
      DisplayName: "under 50",
      Selected: false
    }
  ],
  AttendeeCountRangeId: null,
  SelectedAttendeeCountRange: null,
  IsRecurrent: false,
  ParticipatingOrganizationsDescription: null,
  AdditionalEventInfo: null,
  ProvidedEquipmentDescription: null,
  RecyclableShippingInfo: null,
  ProvidedParkingDescription: null,
  ZeroWasteCan: false,
  BlueBin: false,
  GreenBin: false,
  BrownBin: false,
  LeafBag: false,
  PfirstName:null,
  PLastName:null,
  PPhone: null,
  PEmail:null,
  PFullName: null,
  PFullNameLastFirst: null,
  PTitle: null,
  POrganization: null,
  PFullAddress: null,
  PZip: null,
  PPhoneTypes: [
      {
        Id: 1,
        Name: "Work",
        DisplayName: "Work",
        Selected: false
      },
      {
        Id: 2,
        Name: "Mobile",
        DisplayName: "Mobile",
        Selected: false
      },
      {
        Id: 3,
        Name: "Home",
        DisplayName: "Home",
        Selected: false
      }
    ],
  PPhoneTypeId: null,
  PSelectedPhoneType: null,
  SFirstName:null,
  SLastName:null,
  SPhone:null,
  SEmail: null,
  SFullName: null,
  SFullNameLastFirst: null,
  STitle: null,
  SOrganization: null,
  SFullAddress: null,
  SZip: null,
  SPhoneTypes: [
      {
        Id: 1,
        Name: "Work",
        DisplayName: "Work",
        Selected: false
      },
      {
        Id: 2,
        Name: "Mobile",
        DisplayName: "Mobile",
        Selected: false
      },
      {
        Id: 3,
        Name: "Home",
        DisplayName: "Home",
        Selected: false
      }
    ],
  SPhoneTypeId: null,
  SSelectedPhoneType: null,
  DailyTime:[
        {
            Id:0,
            Name:'Twelve Am',
            DisplayName:'12:00 AM',
            Selected:false,
        },

        {
            Id:1,
            Name:'Twevlve Thirty Am',
            DisplayName:'12:30 AM',
            Selected:false,
        },

        {
            Id:2,
            Name:'One Am',
            DisplayName:'1:00 AM',
            Selected:false,
        },

        {
            Id:3,
            Name:'One Thirty Am',
            DisplayName:'1:30 AM',
            Selected:false,
        },

        {
            Id:4,
            Name:'Two Am',
            DisplayName:'2:00 AM',
            Selected:false,
        },

        {
            Id:5,
            Name:'Two Thirty Am',
            DisplayName:'2:30 AM',
            Selected:false,
        },

        {
            Id:3,
            Name:'Three Am',
            DisplayName:'3:00 AM',
            Selected:false,

        }
        ],


}