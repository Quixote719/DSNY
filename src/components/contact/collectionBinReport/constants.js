export const Titles = {
"sectionOne": "BUSINESS LOCATION ADDRESS",
"sectionTwo": "REGISTRANT INFORMATION",
"sectionThree": "MAILING ADDRESS(IF DIFFERENT THAN BUSINESS LOCATION)",
"sectionFour": "BUSINESS TYPE",
"sectionFive": "ON-SITE PROCESSING METHOD",
"sectionSix": "EQUIPMENT AND CAPACITY INFORMATION",
"sectionSeven": "GREASE INTERCEPTOR INSTALLATION",
"RegistrantFirstName": "FIRST NAME",
"RegistrantLastName": "LAST NAME",
"RegistrantTitle": "ROLE/TITLE",
"Title": "YOUR TITLE OR AFFILIATION WITH ORGANIZATION (optional)",
"RegistrantPhone": "PHONE",
"RegistrantPhoneTypeId": "PHONE TYPE",
"PrimaryPhone": "PRIMARY PHONE NUMBER",
"PrimaryPhoneTypeId": "Phone Type (optional)",
"SecondaryPhone": "SECONDARY PHONE NUMBER (Optional)",
"SecondaryPhoneTypeId": "Phone Type (optional)",
"RegistrantEmail": "E-MAIL",
"Address": "ADDRESS",
"AddressAsEntered": "ADDRESS (OPTIONAL)",
"Apartment": "FLOOR/SUITE/APT (OPTIONAL)",
"MailingApartment": "FLOOR/SUITE/APT (OPTIONAL)",
"RegistrantBusinessName": "NAME OF BUSINESS",
"ResidentInfo": "Registrant Information",
"MailingAddress": "Mailing Address (if different than business location)",
"BusinessType": "Business Type",
"OnsiteMethod": "ON-SITE PROCESSING METHOD",
"EquipmentandCapacityInfo": "EQUIPMENT AND CAPACITY INFORMATION",
"EquipmentManufacturer": "MANUFACTURER (OTPIONAL)",
"EquipmentModelNo": "MODEL # (OTPIONAL)",
"EquipmentDescribeSystem": "DESCRIBE YOUR SYSTEM (OTPIONAL)",
"EquipmentMinimumCapacity": "MINIMUM CAPACITY(LBS/DAY)",
"EquipmentMaximumCapacity": "MAXIMUM CAPACITY(LBS/DAY)",
"InstallationDate": "INSTALLATION DATE (MM/DD/YYYY)",
"GreaseInterceptorTypeId": "GREASE INTERCEPTOR INSTALLATION (OPTIONAL)",
"GreaseInterceptorManufacturer": "MANUFACTURER (OPTIONAL)",
"GreaseInterceptorModelNo": "MODEL # (OPTIONAL)",
"GreaseInterceptorCapacity": "CAPACITY (LBS)(OPTIONAL)",
"GreaseInterceptorFlow": "FLOW(UNITS PER MANUFATURER SPECS)(OPTIONAL)",
"BusinessActivityTypes": "WHAT IS THE NATURE OF BUSINESS ACTIVITY AT THIS PREMISES? (SELECT ALL THAT APPLY)",
"OnsitePMOptions": "ON-SITE PROCESSING METHOD (SELECT ALL THAT APPLY)",
"OtherDescribe": "PLEASE DESCRIBE"
}

export const formObject = {
  "$id": "1",
  "Id": 0,
  "SRNumberId": 0,
  "SRNo": null,
  "RegistrantBusinessName": null,
  "RegistrantFirstName": null,
  "RegistrantLastName": null,
  "RegistrantTitle": null,
  "RegistrantEmail": null,
  "RegistrantPhone": null,
  "RegistrantPhoneTypes": [
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
  "RegistrantPhoneTypeId": null,
  "RegistrantSelectedPhoneType": null,
  "MailingHouseNumber": null,
  "MailingStreet": null,
  "MailingApartment": null,
  "MailingBorough": null,
  "MailingCity": null,
  "MailingState": null,
  "MailingZip": null,
  "MailingContactTitle": null,
  "MailingContactPhone": null,
  "BusinessActivityTypes": {
      "Values": [
          {
              "Id": 4,
              "Name": "Arena",
              "DisplayName": "Arena",
              "Selected": false
          },
          {
              "Id": 3,
              "Name": "FoodManufacturer",
              "DisplayName": "Food Manufacturer",
              "Selected": false
          },
          {
              "Id": 1,
              "Name": "FoodServiceEstablishment",
              "DisplayName": "Food Service Establishment",
              "Selected": false
          },
          {
              "Id": 2,
              "Name": "FoodWholesaler",
              "DisplayName": "Food Wholesaler",
              "Selected": false
          },
          {
              "Id": 5,
              "Name": "Hotel",
              "DisplayName": "Hotel",
              "Selected": false
          },
          {
              "Id": 6,
              "Name": "Other",
              "DisplayName": "Other",
              "Selected": false
          }
      ],
      "SelectedValues": []
  },
  "FoodServiceEstablishment": false,
  "FoodWholesaler": false,
  "FoodManufacturer": false,
  "Arena": false,
  "Hotel": false,
  "Other": false,
  "OtherDescribe": null,
  "OnSiteProcessingTypes": {
      "Values": [
          {
              "Id": 2,
              "Name": "AerobicDigestion",
              "DisplayName": "Aerobic Digestion",
              "Selected": false
          },
          {
              "Id": 7,
              "Name": "AnaerobicDigestion",
              "DisplayName": "Anaerobic Digestion",
              "Selected": false
          },
          {
              "Id": 1,
              "Name": "Composting",
              "DisplayName": "Composting",
              "Selected": false
          }
      ],
      "SelectedValues": []
  },
  "Composting": false,
  "AerobicDigestion": false,
  "AnaerobicDigestion": false,
  "EquipmentManufacturer": null,
  "EquipmentModelNo": null,
  "EquipmentDescribeSystem": null,
  "EquipmentMinimumCapacity": null,
  "EquipmentMaximumCapacity": null,
  "InstallationDate": "0001-01-01T00:00:00",
  "GreaseInterceptorTypes": [
      {
          "Id": 1,
          "Name": "StandaloneInterceptor",
          "DisplayName": "Stand Alone Interceptor",
          "Selected": false
      },
      {
          "Id": 2,
          "Name": "TiedInInterceptor",
          "DisplayName": "Tied In Interceptor",
          "Selected": false
      }
  ],
  "GreaseInterceptorTypeId": null,
  "SelectedGreaseInterceptorType": null,
  "GreaseInterceptorManufacturer": null,
  "GreaseInterceptorModelNo": null,
  "GreaseInterceptorCapacity": null,
  "GreaseInterceptorFlow": null,
  "Source": null,
  "CreatedDate": "0001-01-01T00:00:00",
  "AddressAsEntered": null,
  "HouseNumber": null,
  "Street": null,
  "Apartment": null,
  "Borough": null,
  "City": null,
  "State": "NY",
  "Zip": null,
  "District": null,
  "Section": null,
  "BBL": null,
  "Latitude": 0,
  "Longitude": 0,
  "AddressText": ", NY",
  "AddressTextOneLine": ", NY"
}
