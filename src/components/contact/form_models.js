let compostForm = {
  "name": "compost form",
  "header": "Online Application",
  "sections": [
    {
      "title": "SECTION 1: APPLICANT AND ORGANIZATION LOCATION",
      "fields": [
        {
          "type": "goeAddress",
          "title": "Nearst Address",
          "required": true,
          "AddressText": ", NY"
        }
      ]
    }, {
      "title": "SECTION 2: TERMS OF SERVICE (MUST AGREE TO ALL TERMS )",
      "fields": [
        {
          "type": "terms",
          "tag": "WillPostCompostRecipientSignage",
          "title": "I WILL POST A DSNY COMPOST RECIPIENT SIGN NEAR WHERE DSNY COMPOST WILL BE USED.",
          "required": true,
          "WillPostCompostRecipientSignage": false
        }, {
          "type": "terms",
          "tag": "WillPostSignageWithinTwoWeeks",
          "title": "THE SIGN WILL BE INSTALLED WITHIN TWO WEEKS OF RECEIVING THE MATERIAL.",
          "required": true,
          "WillPostSignageWithinTwoWeeks": false
        }, {
          "type": "terms",
          "tag": "WillSubmitThreePhotos",
          "title": "I WILL SUBMIT THREE (3) PHOTOS OF THE COMPOST IN USE TO NYCCOMPOST@DSNY.NYC.GOV.",
          "required": true,
          "WillSubmitThreePhotos": false
        }, {
          "type": "terms",
          "tag": "ConsentToDsnyUseOfPhotos",
          "title": "PHOTOS SUBMITTED MAY BE USED FOR DSNY PROGRAM PROMOTION.",
          "required": true,
          "ConsentToDsnyUseOfPhotos": false
        }
      ]
    }, {
      "title": "SECTION 3: ORGANIZATION INFORMATION",
      "fields": [
        {
          "type": "goeAddress",
          "title": "Nearst Address",
          "required": true
        }
      ]
    }, {
      "title": "SECTION 4: APPLICANT CONTACT INFORMATION",
      "fields": [
        {
          "type": "goeAddress",
          "title": "Nearst Address",
          "required": true
        }
      ]
    }, {
      "title": "SECTION 5: SITE INFORMATION",
      "fields": [
        {
          "type": "goeAddress",
          "title": "Nearst Address",
          "required": true
        }
      ]
    }, {
      "title": "SECTION 6: DELIVERY INFORMATION",
      "fields": [
        {
          "type": "goeAddress",
          "title": "Nearst Address",
          "required": true
        }
      ]
    }
  ]
}
