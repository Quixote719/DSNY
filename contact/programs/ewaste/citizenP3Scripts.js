function check_certify() {
    var isChecked = $('#certify').prop('checked');
    console.log("Is checked: " + isChecked);
    if (isChecked == true || isChecked == "on") {
        $('#submit-button').prop('disabled', false);
    } else {
        $('#submit-button').prop('disabled', true);
    }
}

function fillInfo() {
    var bldg = getCookie('bldg_num');
    var street = getCookie('street');
    var city = getCookie('city');
    var cs1 = getCookie('cs1');
    var cs2 = getCookie('cs2');

    document.getElementById("buildingNumber").innerHTML = bldg;
    document.getElementById("streetAddress").innerHTML = street;
    document.getElementById("verifiedBorough").innerHTML = city.toUpperCase();
    document.getElementById("crossStreet1").innerHTML = cs1;
    document.getElementById("crossStreet2").innerHTML = cs2;

    document.getElementById("buildingNumber2").innerHTML = bldg;
    document.getElementById("streetAddress2").innerHTML = street;
    document.getElementById("verifiedBorough2").innerHTML = city.toUpperCase();
    document.getElementById("CrossStreet1").innerHTML = cs1;
    document.getElementById("CrossStreet2").innerHTML = cs2;

    // Fill in Pickup location & appointment Date
    var pickupLoc = getCookie('pickup_location')
    var pickupD = getCookie('pickupDate');
    console.log(pickupD);

    document.getElementById("pickupLocation").innerHTML = pickupLoc.toUpperCase();
    document.getElementById("pickupDate").innerHTML = pickupD;

    // Fill in Electronics Category Information
    var numTV = getCookie('televisions');
    var numComps = getCookie('comps');
    var numMon = getCookie('mons');
    var numEKey = getCookie('keys');
    var numEMice = getCookie('mice');
    var numFax = getCookie('fax');
    var numTVP = getCookie('tvp');
    var numVCR = getCookie('vcr');
    var numDVR = getCookie('dvr');
    var numDVD = getCookie('dvd')
    var numDCB = getCookie('dcb');
    var numCable = getCookie('cable')
    var numXbox = getCookie('xbox');
    var numSSS = getCookie('sss');
    var numPD = getCookie('pd');
    var numIpods = getCookie('ipods');

    var tv1 = getCookie('tv1');
    var tv2 = getCookie('tv2');
    var tv3 = getCookie('tv3');
    var tv4 = getCookie('tv4');
    var tv5 = getCookie('tv5');

    if (numTV == "0" || numTV == "") {
        document.getElementById("tvs2").style.display = "none";
    } else {
        document.getElementById("numTV").innerHTML = numTV;
        if (numTV == "1") {
            document.getElementById("tv1").style.display = "block";
            document.getElementById("tv1size").innerHTML = tv1;
        }
        if (numTV == "2") {
            document.getElementById("tv1").style.display = "block";
            document.getElementById("tv1size").innerHTML = tv1;
            document.getElementById("tv2").style.display = "block";
            document.getElementById("tv2size").innerHTML = tv2;
        }
        if (numTV == "3") {
            document.getElementById("tv1").style.display = "block";
            document.getElementById("tv1size").innerHTML = tv1;
            document.getElementById("tv2").style.display = "block";
            document.getElementById("tv2size").innerHTML = tv2;
            document.getElementById("tv3").style.display = "block";
            document.getElementById("tv3size").innerHTML = tv3;
        }
        if (numTV == "4") {
            document.getElementById("tv1").style.display = "block";
            document.getElementById("tv1size").innerHTML = tv1;
            document.getElementById("tv2").style.display = "block";
            document.getElementById("tv2size").innerHTML = tv2;
            document.getElementById("tv3").style.display = "block";
            document.getElementById("tv3size").innerHTML = tv3;
            document.getElementById("tv4").style.display = "block";
            document.getElementById("tv4size").innerHTML = tv4;
        }
        if (numTV == "5") {
            document.getElementById("tv1").style.display = "block";
            document.getElementById("tv1size").innerHTML = tv1;
            document.getElementById("tv2").style.display = "block";
            document.getElementById("tv2size").innerHTML = tv2;
            document.getElementById("tv3").style.display = "block";
            document.getElementById("tv3size").innerHTML = tv3;
            document.getElementById("tv4").style.display = "block";
            document.getElementById("tv4size").innerHTML = tv4;
            document.getElementById("tv5").style.display = "block";
            document.getElementById("tv5size").innerHTML = tv5;
        }
    }

    if (numComps == "0" || numComps == "") {
        document.getElementById("comps2").style.display = "none";
    } else {
        document.getElementById("numComps").innerHTML = numComps;
    }

    if (numMon == "0" || numMon == "") {
        document.getElementById("mon2").style.display = "none";
    } else {
        document.getElementById("numMon").innerHTML = numMon;
    }

    if (numEKey == "0" || numEKey == "") {
        document.getElementById("ekey").style.display = "none";
    } else {
        document.getElementById("numEKey").innerHTML = numEKey;
    }

    if (numEMice == "0" || numEMice == "") {
        document.getElementById("emice").style.display = "none";
    } else {
        document.getElementById("numEMice").innerHTML = numEMice;
    }

    if (numFax == "0" || numFax == "") {
        document.getElementById("fax").style.display = "none";
    } else {
        document.getElementById("numFax").innerHTML = numFax;
    }

    if (numTVP == "0" || numTVP == "") {
        document.getElementById("tvp").style.display = "none";
    } else {
        document.getElementById("numTVP").innerHTML = numTVP;
    }

    if (numVCR == "0" || numVCR == "") {
        document.getElementById("vcr2").style.display = "none";
    } else {
        document.getElementById("numVCR").innerHTML = numVCR;
    }

    if (numDVR == "0" || numDVR == "") {
        document.getElementById("dvr2").style.display = "none";
    } else {
        document.getElementById("numDVR").innerHTML = numDVR;
    }

    if (numDVD == "0" || numDVD == "") {
        document.getElementById("dvd2").style.display = "none";
    } else {
        document.getElementById("numDVD").innerHTML = numDVD;
    }

    if (numDCB == "0" || numDCB == "") {
        document.getElementById("dcb2").style.display = "none";
    } else {
        document.getElementById("numDCB").innerHTML = numDCB;
    }

    if (numCable == "0" || numCable == "") {
        document.getElementById("cable2").style.display = "none";
    } else {
        document.getElementById("numCable").innerHTML = numCable;
    }

    if (numXbox == "0" || numXbox == "") {
        document.getElementById("xbox2").style.display = "none";
    } else {
        document.getElementById("numXbox").innerHTML = numXbox;
    }

    if (numSSS == "0" || numSSS == "") {
        document.getElementById("sss2").style.display = "none";
    } else {
        document.getElementById("numSSS").innerHTML = numSSS;
    }

    if (numPD == "0" || numPD == "") {
        document.getElementById("pd2").style.display = "none";
    } else {
        document.getElementById("numPD").innerHTML = numPD;
    }

    if (numIpods == "0" || numIpods == "") {
        document.getElementById("ipod2").style.display = "none";
    } else {
        document.getElementById("numIpods").innerHTML = numIpods;
    }

    // Fill in First Name, Last Name, Phone & Email (if provided)

    var fName = getCookie('firstName');
    var lName = getCookie('lastName');
    var phone = getCookie('phone');
    var email = getCookie('email');

    document.getElementById("firstName").innerHTML = fName.toUpperCase();
    document.getElementById("lastName").innerHTML = lName.toUpperCase();
    document.getElementById("phoneNumber").innerHTML = phone;
    document.getElementById("emailAddress").innerHTML = email;
}

function createUpdate() {

    if (!$('#certify').prop('checked')) {
        alert("Please check the box to certify that you are not submitting a commercial request.");
        return false;
    } else {

        var computers, monitors, keyboards, mice, fax, peripherals, vcrs, dvrs, dvd, dcb, cable, xbox, sss, portables, ipods;
        computers = Number(getCookie('comps')) + 0;
        monitors = Number(getCookie('mons')) + 0;
        keyboards = Number(getCookie('keys')) + 0;
        mice = Number(getCookie('mice')) + 0;
        fax = Number(getCookie('fax')) + 0;
        peripherals = Number(getCookie('tvp')) + 0;
        vcrs = Number(getCookie('vcr')) + 0;
        dvrs = Number(getCookie('dvr')) + 0;
        dvd = Number(getCookie('dvd')) + 0;
        dcb = Number(getCookie('dcb')) + 0;
        cable = Number(getCookie('cable')) + 0;
        xbox = Number(getCookie('xbox')) + 0;
        sss = Number(getCookie('sss')) + 0;
        portables = Number(getCookie('pd')) + 0;
        ipods = Number(getCookie('ipods')) + 0;

        var televisions = Number(getCookie('televisions')) + 0;

        var electronicDevicesTotal = computers + monitors + keyboards + mice + fax + peripherals + vcrs + dvrs + dvd + dcb + cable + xbox + sss + portables + ipods + televisions + 0;

        var buildingNumber = encodeURI(getCookie('bldg_num'));
        var streetAddress = encodeURI(getCookie('street'));
        var firstName = encodeURI(getCookie('firstName'));
        var lastName = encodeURI(getCookie('lastName'));
        var userEmail = encodeURI(getCookie('email'));
        var phoneNumber = getCookie('phone');
        console.log('phoneNumber: ' + phoneNumber);
        phoneNumber = phoneNumber[1] + phoneNumber[2] + phoneNumber[3] + phoneNumber[6] + phoneNumber[7] + phoneNumber[8] + phoneNumber[10] + phoneNumber[11] + phoneNumber[12] + phoneNumber[13];
        console.log('Phone Number: ' + phoneNumber.trim());
        var suffix = "";

        var crossStreet = encodeURI(getCookie('cs1') + " - " + getCookie('cs2'));
        var bbl = encodeURI(getCookie('bbl'));
        var district = encodeURI(getCookie('district'));
        var lat = encodeURI(getCookie('lat'));
        var lon = encodeURI(getCookie('lon'));
        var cityName = encodeURI(getCookie('city'));
        var zip = encodeURI(getCookie('zip'));
        if (userEmail == '') {
            userEmail = "null";
        }

        var settings = {
            "async": false,
            "crossDomain": true,
            "url": "http://54.174.123.211:3000/create/" + electronicDevicesTotal + "/" + televisions + "/" + bbl + "/" + buildingNumber + "/" + streetAddress + "/" + crossStreet + "/" + district + "/" + cityName + "/" + lon + "/" + lat + "/" + zip + "/" + firstName + "/" + lastName + "/" + userEmail + "/" + phoneNumber + "",
            "method": "GET",
            "headers": {
                "cache-control": "no-cache",
                "postman-token": "a24a589c-fcdc-0d6d-f9b2-e6ca3ebd9f7a"
            }
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
            capID = response.result["id"];
            customId = response.result["customId"];
        });

        var tv32 = 0;
        var tv43 = 0;
        var tv49 = 0;
        var tv59 = 0;
        var tv69 = 0;
        var tv70 = 0;

        if (televisions == 1) {
            var size1 = getCookie('tv1');
            if (size1 == "32 Inches and Under")
                tv32++;
            if (size1 == "33 to 43 inches")
                tv43++;
            if (size1 == "44 to 49 inches")
                tv49++;
            if (size1 == "50 to 59 inches")
                tv59++;
            if (size1 == "60 to 69 inches")
                tv69++;
            if (size1 == "Larger than 70 inches")
                tv70++;
        }
        if (televisions == 2) {
            var size1 = getCookie('tv2');
            if (size1 == "32 Inches and Under")
                tv32++;
            if (size1 == "33 to 43 inches")
                tv43++;
            if (size1 == "44 to 49 inches")
                tv49++;
            if (size1 == "50 to 59 inches")
                tv59++;
            if (size1 == "60 to 69 inches")
                tv69++;
            if (size1 == "Larger than 70 inches")
                tv70++;
            var size2 = getCookie('tv3');
            if (size2 == "32 Inches and Under")
                tv32++;
            if (size2 == "33 to 43 inches")
                tv43++;
            if (size2 == "44 to 49 inches")
                tv49++;
            if (size2 == "50 to 59 inches")
                tv59++;
            if (size2 == "60 to 69 inches")
                tv69++;
            if (size3 == "Larger than 70 inches")
                tv70++;
        }
        if (televisions == 3) {
            var size1 = getCookie('tv1');
            if (size1 == "32 Inches and Under")
                tv32++;
            if (size1 == "33 to 43 inches")
                tv43++;
            if (size1 == "44 to 49 inches")
                tv49++;
            if (size1 == "50 to 59 inches")
                tv59++;
            if (size1 == "60 to 69 inches")
                tv69++;
            if (size1 == "Larger than 70 inches")
                tv70++;
            var size2 = getCookie('tv2');
            if (size2 == "32 Inches and Under")
                tv32++;
            if (size2 == "33 to 43 inches")
                tv43++;
            if (size2 == "44 to 49 inches")
                tv49++;
            if (size2 == "50 to 59 inches")
                tv59++;
            if (size2 == "60 to 69 inches")
                tv69++;
            if (size2 == "Larger than 70 inches")
                tv70++;
            var size3 = getCookie('tv3');
            if (size3 == "32 Inches and Under")
                tv32++;
            if (size3 == "33 to 43 inches")
                tv43++;
            if (size3 == "44 to 49 inches")
                tv49++;
            if (size3 == "50 to 59 inches")
                tv59++;
            if (size3 == "60 to 69 inches")
                tv69++;
            if (size3 == "Larger than 70 inches")
                tv70++;
        }
        if (televisions == 4) {
            var size1 = getCookie('tv1');
            if (size1 == "32 Inches and Under")
                tv32++;
            if (size1 == "33 to 43 inches")
                tv43++;
            if (size1 == "44 to 49 inches")
                tv49++;
            if (size1 == "50 to 59 inches")
                tv59++;
            if (size1 == "60 to 69 inches")
                tv69++;
            if (size1 == "Larger than 70 inches")
                tv70++;
            var size2 = getCookie('tv2');
            if (size2 == "32 Inches and Under")
                tv32++;
            if (size2 == "33 to 43 inches")
                tv43++;
            if (size2 == "44 to 49 inches")
                tv49++;
            if (size2 == "50 to 59 inches")
                tv59++;
            if (size2 == "60 to 69 inches")
                tv69++;
            if (size2 == "Larger than 70 inches")
                tv70++;
            var size3 = getCookie('tv3');
            if (size3 == "32 Inches and Under")
                tv32++;
            if (size3 == "33 to 43 inches")
                tv43++;
            if (size3 == "44 to 49 inches")
                tv49++;
            if (size3 == "50 to 59 inches")
                tv59++;
            if (size3 == "60 to 69 inches")
                tv69++;
            if (size3 == "Larger than 70 inches")
                tv70++;
            var size4 = getCookie('tv4');
            if (size4 == "32 Inches and Under")
                tv32++;
            if (size4 == "33 to 43 inches")
                tv43++;
            if (size4 == "44 to 49 inches")
                tv49++;
            if (size4 == "50 to 59 inches")
                tv59++;
            if (size4 == "60 to 69 inches")
                tv69++;
            if (size4 == "Larger than 70 inches")
                tv70++;
        }
        if (televisions == 5) {
            var size1 = getCookie('tv1');
            if (size1 == "32 Inches and Under")
                tv32++;
            if (size1 == "33 to 43 inches")
                tv43++;
            if (size1 == "44 to 49 inches")
                tv49++;
            if (size1 == "50 to 59 inches")
                tv59++;
            if (size1 == "60 to 69 inches")
                tv69++;
            if (size1 == "Larger than 70 inches")
                tv70++;
            var size2 = getCookie('tv2');
            if (size2 == "32 Inches and Under")
                tv32++;
            if (size2 == "33 to 43 inches")
                tv43++;
            if (size2 == "44 to 49 inches")
                tv49++;
            if (size2 == "50 to 59 inches")
                tv59++;
            if (size2 == "60 to 69 inches")
                tv69++;
            if (size2 == "Larger than 70 inches")
                tv70++;
            var size3 = getCookie('tv3');
            if (size3 == "32 Inches and Under")
                tv32++;
            if (size3 == "33 to 43 inches")
                tv43++;
            if (size3 == "44 to 49 inches")
                tv49++;
            if (size3 == "50 to 59 inches")
                tv59++;
            if (size3 == "60 to 69 inches")
                tv69++;
            if (size3 == "Larger than 70 inches")
                tv70++;
            var size4 = getCookie('tv4');
            if (size4 == "32 Inches and Under")
                tv32++;
            if (size4 == "33 to 43 inches")
                tv43++;
            if (size4 == "44 to 49 inches")
                tv49++;
            if (size4 == "50 to 59 inches")
                tv59++;
            if (size4 == "60 to 69 inches")
                tv69++;
            if (size4 == "Larger than 70 inches")
                tv70++;
            var size5 = getCookie('tv5');
            if (size5 == "32 Inches and Under")
                tv32++;
            if (size5 == "33 to 43 inches")
                tv43++;
            if (size5 == "44 to 49 inches")
                tv49++;
            if (size5 == "50 to 59 inches")
                tv59++;
            if (size5 == "60 to 69 inches")
                tv69++;
            if (size5 == "Larger than 70 inches")
                tv70++;
        }

        capID = capID;
        console.log('CAP ID: ' + capID);
        // Update with Correct Information
        var settings = {
            "async": false,
            "crossDomain": true,
            "url": "http://54.174.123.211:3000/update/" + capID + "/" + tv32 + "/" + tv43 + "/" + tv49 + "/" + tv59 + "/" + tv69 + "/" + tv70 + "/" + televisions + "/" + computers + "/" + monitors + "/" + keyboards + "/" + mice + "/" + fax + "/" + peripherals + "/" + vcrs + "/" + dvrs + "/" + dvd + "/" + dcb + "/" + cable + "/" + xbox + "/" + sss + "/" + portables + "/" + ipods + "",
            "method": "GET",
            "headers": {
                "cache-control": "no-cache",
                "postman-token": "8bce7523-f85e-4883-8c09-b9331ab5cc97"
            },
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
        });

        console.log("pickup date: " + pickupDate);

        // Schedule the Inspection on the Appropirate Date
        var pickupDate = getCookie('pickupDate');
        var settings = {
            "async": false,
            "crossDomain": true,
            "url": "http://54.174.123.211:3000/schedule/" + capID + "/" + pickupDate + "",
            "method": "GET",
            "headers": {
                "cache-control": "no-cache",
                "postman-token": "1fef8950-f3dc-ae46-a7ab-4c33c505a14c"
            },
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
            console.log("Inspection Scheduled")
        });

        setCookie("record", customId, 1);

        window.location.href = 'citizenPageP4.html';
    }
    //window.location.href = '/assets/dsny/contact/programs/ewaste/citizenPageP4.html';
}
