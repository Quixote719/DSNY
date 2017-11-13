export const Titles = {
  sectionOne: 'WHERE IS ANIMAL LOCATED',
  sectionTwo: 'SPECIFIC INFORMATION',
  sectionThree: 'CONTACT INFORMATION',
  AnimalId: 'TYPE OF ANIMAL',
  OtherAnimal: 'OTHER ANIMAL',
  ExactLocationId: 'EXACT LOCATION',
  OtherLocation: 'OTHER LOCATION',
  FirstName: 'FIRST NAME',
  LastName: 'LAST NAME',
  Email: 'E-MAIL',
  Phone: 'PHONE',
  IsAnonymous: 'I would like to remain anonymous',
  AdditionalLocation: 'ADDITIONAL LOCATION INFORMATION (OPTIONAL)',

  CompostSiteTypeId: 'WHAT TYPE OF SITE IS THIS?',
  OtherCompostSiteType: 'OTHER SITE TYPE',
  CompostSitePermittingOrganizationId: 'PERMISSION TO TEND THIS SITE WAS GRANTED BY',
  OtherCompostSitePermittingOrganization: 'OTHER PERMITTING ORGANIZATION',
  SiteSize: 'SITE SIZE (SQUARE FEET)',
  IsGreenThumbGarden: 'IS THIS A GREENTHUMB GARDEN?',
  HasReceivedDsnyCompostBefore: 'HAVE YOU RECEIVED DSNY COMPOST IN THE PAST?',
  CompostUseDescription: 'DESCRIBE HOW WILL YOU USE DSNY COMPOST? (INCLUDE SPECIFIC DATES IF KNOWN)',
  FromHourOfDayId: 'PREFERRED DELIVERY TIMES From',
  ToHourOfDayId: 'To',
  DeliveryNotes: 'DELIVERY NOTES AND INSTRUCTIONS (Optional)',
  EntranceHeightWidth: 'HEIGHT AND WIDTH OF YOUR SITE’S ENTRANCE (Optional)',
  HasAlternateSideParking: 'ALTERNATE SIDE PARKING AT SITE?',
  Pallets: 'NUMBER OF PALLETS OF COMPOST',
  DeliveryDeadline: 'WHEN IS THE LATEST DATE YOUR COMPOST IS NEEDED BY?',
  DeliveryOn: 'THE SIGN WILL BE INSTALLED WITHIN TWO WEEKS OF RECEIVING THE MATERIAL.',
  AlternateSideParking: 'ALTERNATE SIDE PARKING DAYS? (Select ALL that apply)',
  AlternateSideParkingTimes: 'PREFERRED DELIVERY TIMES From',
  RequiredFieldMessage: 'This field is required',
}

export const formObject = {
  "Animals": [
    {
      "Id": 1,
      "Name": "Bird",
      "DisplayName": "Bird",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "Cat",
      "DisplayName": "Cat",
      "Selected": false
    },
    {
      "Id": 3,
      "Name": "Deer",
      "DisplayName": "Deer",
      "Selected": false
    },
    {
      "Id": 4,
      "Name": "Dog",
      "DisplayName": "Dog",
      "Selected": false
    },
    {
      "Id": 5,
      "Name": "Opossum",
      "DisplayName": "Opossum",
      "Selected": false
    },
    {
      "Id": 6,
      "Name": "Raccoon",
      "DisplayName": "Raccoon",
      "Selected": false
    },
    {
      "Id": 7,
      "Name": "Rat",
      "DisplayName": "Rat",
      "Selected": false
    },
    {
      "Id": 8,
      "Name": "Other",
      "DisplayName": "Other",
      "Selected": false
    }
  ],
  "AnimalId": 0,
  "OtherAnimal": null,
  "Id": 0,
  "SRNumberId": 0,
  "SRNo": null,
  "Source": null,
  "CreatedDate": "0001-01-01T00:00:00",
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
  "District": null,
  "Section": null,
  "BBL": null,
  "Latitude": 0,
  "Longitude": 0,
  "AddressText": ", NY",
  "AddressTextOneLine": ", NY",
  "IsAnonymous": false,
  "ExactLocation": [
    {
      "Id": 1,
      "Name": "Highway",
      "DisplayName": "Highway",
      "Selected": false
    },
    {
      "Id": 2,
      "Name": "Middle of road",
      "DisplayName": "Middle of road",
      "Selected": false
    },
    {
      "Id": 3,
      "Name": "Sidewalk",
      "DisplayName": "Sidewalk",
      "Selected": false
    },
    {
      "Id": 4,
      "Name": "Other",
      "DisplayName": "Other",
      "Selected": false
    }
  ],
  "ExactLocationId": 0,
  "OtherLocation": null,
  "AdditionalLocation": null
}