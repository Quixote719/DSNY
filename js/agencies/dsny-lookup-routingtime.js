var a = function (json) {
    if (json && json.address) {
        return json.address;
    }
    return {};
};

$("#msform").on('click', 'input[name="streetOptions"]', function () {
    var selectedVal = $("input:radio[name='streetOptions']:checked").val();

    var array = selectedVal.split(",");

    $("form :input[id='houseNumber']").val(array[0]);
    $("form :input[id='street']").val(array[1]);
    $("form :input[id='boro']").val(getBoroughCode(array[2]));
});


var getFormInput = function () {
    var input = {};
    input.app_key = $("form :input[name='app_key']").val();
    input.houseNumber = $("form :input[name='houseNumber']").val();
    input.street = $("form :input[name='street']").val();
    input.borough = $("form :input[name='borough']").val();
    return input;
    // return $("#addressform1").serialize();
};

var setFormInput = function (input) {
    $("form :input[name='houseNumber']").val(input.houseNumber);
    $("form :input[name='street']").val(input.street);
    $("form :input[name='borough']").val(getBoroughCode(input.borough));
};

var clearFormErrors = function () {
    $("#streetLabel").removeClass("missingFormInput");
    $("#boroughLabel").removeClass("missingFormInput");
    $("#formErrorMessage").empty();
}

var showFormErrors = function (error) {
    var boroughLi = "<li>Borough is required</li>",
	    streetLi = "<li>Street Name is required</li>";
    var errorMsg = "Please provide valid values for the following form fields:<br/><br/>";

    errorMsg += "<ul>";

    if (error.street && error.borough) {
        // Both are wrong
        errorMsg += streetLi;
        errorMsg += boroughLi;
    } else if (error.street) {
        // Only street
        errorMsg += streetLi;
        $("#streetLabel").addClass("missingFormInput");
    } else {
        // Only borough
        errorMsg += boroughLi;
        $("#boroughLabel").addClass("missingFormInput");
    }
    errorMsg += "</ul>";
    $("#formErrorMessage").html(errorMsg).addClass("missingFormInput");
}

var validateForm = function (input) {

    clearFormErrors();

    var errorSpec = {};
    if (!input.street) {
        errorSpec.street = true;
    }

    if (!input.borough || input.borough == "0") {
        errorSpec.borough = true;
    }

    if (errorSpec.street || errorSpec.borough) {
        showFormErrors(errorSpec);
        return false;
    }

    return true;
};

var getQueryString = function () {
    var input = {};
    var sn = getParameterByName("sn");
    input.houseNumber = sn ? sn : getParameterByName("houseNumber");
    input.street = getParameterByName("street");
    input.borough = getParameterByName("borough");
    return input;
};

var getBoroughCode = function (value) {
    if (value) {
        if (value.match(/^[1-5]$/)) {
            // Already a valid borough number
            return value;
        } else if (value.match(/manhattan/i)) {
            return "1";
        } else if (value.match(/bronx/i)) {
            return "2";
        } else if (value.match(/brooklyn/i)) {
            return "3";
        } else if (value.match(/queens/i)) {
            return "4";
        } else if (value.match(/staten is/i)) {
            return "5";
        }
    }
    // Invalid
    return "0";
};

var parse = function (json) {
    var result = {};
    var rc = a(json).geosupportReturnCode;
    result.rc = rc ? rc : "";
    result.success = result.rc && (result.rc.match(/^00/) || result.rc.match(/^01/));
    result.message = a(json).message;
    result.houseNumber = a(json).houseNumber;
    result.street = a(json).firstStreetNameNormalized;
    result.borough = a(json).firstBoroughName;
    if (result.houseNumber) {
        // Address
        result.address = result.houseNumber + " " + result.street + "(" + result.borough + ")";
    } else {
        // Place name
        result.address = result.street + "(" + result.borough + ")";
    }
    if (!result.success) {
        // error
        result.hasSchedule = false;
        var numString = a(json).numberOfStreetCodesAndNamesInList;
        var num = numString ? Number(numString) : 0;
        result.possibleStreets = [];
        result.hasPossibleStreets = num > 0;
        if (result.hasPossibleStreets) {
            for (var i = 1; i <= num; i++) {
                result.possibleStreets.push(a(json)["streetName" + i]);
            }
        }
    } else {
        // success
        result.trashPickup = parseSchedule(a(json).sanitationRegularCollectionSchedule);
        result.recyclePickup = parseSchedule(a(json).sanitationRecyclingCollectionSchedule);
        result.organics = parseSchedule(a(json).sanitationOrganicsCollectionSchedule)||"";
        result.commercial = json.commercialRoutingTime;
        result.residential = json.residentialRoutingTime;
        result.mixed = json.mixedUseRoutingTime;
   }
    return result;
}

var parseSchedule = function (str) {
    if (!str || "" == str) {
        return null;
    }
    var sched = "";
    for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        switch (c) {
            case 'M':
                sched += "Monday ";
                break;
            case 'T':
                if ((i + 1 <= str.length) && str.substr(i, i + 1) == "TH") {
                    // Thursday
                    sched += "Thursday ";
                    // increment i over the 'H' character
                    i++;
                } else {
                    // Tuesday
                    sched += "Tuesday ";
                }
                break;
            case 'W':
                sched += "Wednesday ";
                break;
            case 'F':
                sched += "Friday ";
                break;
            case 'S':
                sched += "Saturday ";
                break;
            case '6':
                if ((i + 1 <= str.length) && str.substr(i, i + 1) == "6X") {
                    // Overwrite 'sched' variable instead of appending to it
                    sched = "Six days a week(not Sunday)";
                    // increment i over the 'X' character
                    i++;
                }
                break;
            case 'A':
                // Applies only to recycling schedule:
                // sched += " - A week"
                break;
            case 'B':
                // Applies only to recycling schedule:
                // sched += " - B week"
                break;
            case 'E':
                // Applies only to recycling schedule:
                // sched = "Every " + sched // (prepend)
                break;
            default:
                // NO-OP
                break;
        }
    }
    return sched.trim();
}

var returnCode;
var successCallback = function (json) {
	var rc = a(json).geosupportReturnCode;
    rc = rc ? rc : "";
    success = rc && (rc.match(/^00/) || rc.match(/^01/));
    if (success) {
        // success
        showSuccessResults(json);
        returnCode = true;
    } else {
        // error
        showErrorResults(json);
        returnCode = false;
    }
};

var showSuccessResults = function (json) {
	$.ajax({
       url:"/apps/311utils/routingTime?district="+json.address.sanitationDistrict+"&section="+json.address.sanitationCollectionSchedulingSectionAndSubsection,
       type:"GET",
       dataType: "json"

    }).done(function (e){
        $.extend(true,json,e);
		console.log("---- output ----");
		console.log(json);
		var result = parse(json);
	    var msg = "<p>";
	    if (result.trashPickup) {
	        // show schedule info
	
	        msg="<strong>Enforcement Routing Times: </strong><br>Commercial: "+result.commercial+"<br>Residential: "+result.residential+"<br>Mixed-Use: "+result.mixed;
	
	    } else {
	        // possible commercial building (call succeeded but no schedule data)
	       
	        msg="<br><strong>Enforcement Routing Times: </strong><br>Commercial: "+result.commercial+"<br>Residential: "+result.residential+"<br>Mixed-Use: "+result.mixed;
	    }
	    msg += "</p>";
	    showMessage(msg);        
    }).error(function (xhr, status, errorThrown) {
        console.log(xhr);
        console.log(status);
        console.log(errorThrown);
    });

};

var showErrorResults = function (json) {
	var result=parse(json);

    var msg = "<h4 style='font-size:14px !important'>Location "
			+ result.address
			+ " <span style='color:red'>Not Found</span></h4>";
+"<p>This tool was not able to identify any locations that were similar to the information you entered. Some helpful hints on entering a street address:</p>"
			+ "<ul><li>Include the street type in the street address. Common street types are Avenue, Street, Road and Place.</li>"
			+ "<li>Include geographic identifiers (North, South, East, or West) when they are part of the street name. For example, include the \"West\" in \"West 52nd Street.\"</li>"
			+ "<li>Enter other common known names for the same street. For example, enter \"Avenue of the Americas\" instead of \"6th Avenue.\"</li>"
			+ "<li>If you are not sure of the street name spelling then enter a shortened version and search for possible candidates. For further assistance call the New York City Citizen Service Center at 3-1-1.</li></ul></p>";

    if (result.hasPossibleStreets) {
        msg += "<p> Please select from the possible street names given below: </p>";
        msg += "<br/>";
        for (var i = 0; i < result.possibleStreets.length; i++) {
            var street = result.possibleStreets[i];
            msg += "<input type='radio' name='streetOptions' style='vertical-align:top' value='" + result.houseNumber + "," + street + "," + result.borough + "'>&nbsp;";
            msg += street + " (" + result.borough + ")";
            msg += "<br/>";
        }
        msg += "</p>";
    }
    showMessage(msg);
};

var handleCallError = function (xhr, status) {
    showMessage("<div class=\"serviceError\">[ERROR] - Call to geoclient service failed. Unable to retrieve DSNY collection schedules.</div>");
}

var showMessage = function (msg) {
    $("#results").html(msg);
};

var getParameterByName = function (name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};


// JQuery event handler for when the document is loaded 
function validateAddress(callback) {
    var formInput = getFormInput();
    if (validateForm(formInput)) {
        // Required form values are present; call the service
        $.ajax({
            async: false,
            url: "http://maps.nyc.gov/geoclient/v1/address.json", //PROD
            data: formInput,
            type: "GET",
            dataType: "jsonp",
            //success: successCallback,
            success: function (json) {
                successCallback(json);
                callback(returnCode);
            },
            error: handleCallError,
            complete: function (xhr, status) {
            }
        });

    }

    // Prevent default form submit behavior since Javascript/Ajax is
    // taking care of retrieving the requested schedlue data
    //event.preventDefault();
    if (event.preventDefault) {
        event.preventDefault();
    }
    else {
        event.returnValue = false;
    }
};


var queryStringInput = getQueryString();
if (queryStringInput.houseNumber || queryStringInput.street || queryStringInput.borough) {
    setFormInput(queryStringInput);
    //$("#msform").submit();
	validateAddress(function (output) {
	 if (output == true) {
	     return true;
	 }
	});
}
