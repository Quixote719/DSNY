var a = function (json) {
    if (json && json.address) {
        return json.address;
    }
    return {};
};

var getFormInput = function () {
    var input = {};
    input.app_key = $("form :input[name='app_key']").val();
    input.houseNumber = $("form :input[id='houseNumber']").val();
    input.street = $("form :input[id='street']").val();
    input.borough = $("form :input[id='boro']").val();
    input.bldg = $("form :input[id='houseNumber']").val();
    return input;
    // return $("#addressform1").serialize();
};

var setFormInput = function (input) {
    $("form :input[id='houseNumber']").val(input.houseNumber);
    $("form :input[id='street']").val(input.street);
    $("form :input[id='boro']").val(getBoroughCode(input.borough));
};

var clearFormErrors = function() {
    $("#streetLabel").removeClass("missingFormInput");
    $("#boroughLabel").removeClass("missingFormInput");
    $("#formErrorMessage").empty();
};

function validateRequiredFields(requiredFields) {
    
    clearFormErrors();
    
    var errorMsg = "Please provide valid values for the following form fields:<br/>";

    errorMsg += "<ul>";

    var requiredLi;

    $.each(requiredFields, function (i, fieldId) {
        var fieldValue = $("form :input[id='" + fieldId + "']").val();
        alert(fieldValue);

//        var fieldName = $("form :input[id='" + fieldId + "']");
//        alert(fieldName);
        
        if (fieldValue == "") {

            alert("Please enter " + fieldName);

            requiredLi = "<li>" + fieldName + " is required.</li>";

            errorMsg += requiredLi;
        }
    });

    errorMsg += "</ul>";
    $("#formErrorMessage").html(errorMsg).addClass("missingFormInput");
}

var showFormErrors = function(error) {
    var boroughLi = "<li>Borough is required</li>",
        bldgLi = "<li>BLDG# is required</li>",
        streetLi = "<li>Street Name is required</li>";
    var errorMsg = "Please provide valid values for the following form fields:<br/>";

    errorMsg += "<ul>";

//    if (error.street && error.borough) {
//        // Both are wrong
//        errorMsg += streetLi;
//        errorMsg += boroughLi;
    //    } else 

    if (error.borough) {
        errorMsg += boroughLi;
        //$("#boroughLabel").addClass("missingFormInput");
    }

    if (error.bldg) {
        errorMsg += bldgLi;
        //$("#boroughLabel").addClass("missingFormInput");
    }
    
    if (error.street) {
        errorMsg += streetLi;
       // $("#streetLabel").addClass("missingFormInput");
    } 
   
    errorMsg += "</ul>";
    $("#formErrorMessage").html(errorMsg).addClass("missingFormInput");
};

var validateForm = function (input) {

    clearFormErrors();

    var errorSpec = {};
    if (!input.street) {
        errorSpec.street = true;
    }

    if (!input.bldg) {
        errorSpec.bldg = true;
    }

    if (!input.borough || input.borough == "") {
        errorSpec.borough = true;
    }

    if (errorSpec.street || errorSpec.borough || errorSpec.bldg) {
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
    return "";
};

var parse = function(json) {
    var result = {};
    var rc = a(json).geosupportReturnCode;
    result.rc = rc ? rc : "";
    result.success = result.rc && (result.rc.match(/^00/) || result.rc.match(/^01/));
    result.message = a(json).message;
    result.houseNumber = a(json).houseNumber;
    result.street = a(json).firstStreetNameNormalized;
    result.borough = a(json).firstBoroughName;

    result.city = a(json).uspsPreferredCityName;
    result.zipCode = a(json).zipCode;

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
		result.possiblegiStreet = '';
		var arryStreet = [];
        //result.hasPossibleStreets = num > 0;
        //if (result.hasPossibleStreets) {
        for (var i = 1; i <= 20; i++) {
              //result.possiblegiStreet.push(a(json)["giStreetName" + i]);	
			if (a(json)["giStreetName" + i] != undefined){
				
				if (jQuery.inArray( a(json)["giStreetName" + i] , arryStreet ) == -1){
					
					result.possiblegiStreet += '<option value="'+ i +'">'+ a(json)["giStreetName" + i] +'</option>';
					arryStreet.push(a(json)["giStreetName" + i]);
				} 
				
				
			}
			else{
				break;
			}  
			  
			 
          }
        //}
		
		
		result.possiblehighCrossStreetName = '';
		
        //result.hasPossibleStreets = num > 0;
        //if (result.hasPossibleStreets) {
        for (var i = 1; i <= 20; i++) {
			
			if(a(json)["highCrossStreetName" + i] != undefined){
				result.possiblehighCrossStreetName += a(json)["highCrossStreetName" + i] + ', ';
			}
			else{
				break;
			}			
			
              //result.possiblehighCrossStreetName += a(json)["highCrossStreetName" + i];
          }
        //}
		
		
		result.possiblelowCrossStreetName = '';
        //result.hasPossibleStreets = num > 0;
        //if (result.hasPossibleStreets) {
        for (var i = 1; i <= 20; i++) {             
			if (a(json)["lowCrossStreetName" + i] != undefined ){
				result.possiblelowCrossStreetName += a(json)["lowCrossStreetName" + i] + ', ';
			}
			else{
				break;
			}
			 
          }
        //}
		
		//result.giStreetName1 = a(json).giStreetName1;
		//result.giStreetName2 = a(json).giStreetName2; 
		result.communityDistrict = a(json).communityDistrict;
		//result.highCrossStreetName = a(json).highCrossStreetName1;
		//result.lowCrossStreetName = a(json).lowCrossStreetName1;
    }
    return result;
};

var parseSchedule = function(str) {
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
    //return sched.trim();
    return sched;
};

var returnCode;

//var successCallback = function (json) {
//    var result = parse(json);
//    if (result.success) {
//        // success
//        showSuccessResults(result);
//        returnCode = true;
//        //$("form :input[name='validAddress']").val("true");
//    } else {
//        // error
//        showErrorResults(result);
//        returnCode = false;
//        //$("form :input[name='validAddress']").val("false");
//    }

//    alert("return : " + returnCode);
//    //alert($("form :input[name='validAddress']").val());
//};


function successCallback(json) {
    
    var result = parse(json);
    if (result.success) {
        // success
        showSuccessResults(result); 
		
		if (result.trashPickup != undefined)
		{
			 $("form :input[name='GEOcity']").val(result.city);
			$("form :input[name='GEOzipcode']").val(result.zipCode);
			var str = '<option value="1">Curb</option>';
			
			if (result.possiblegiStreet.length > 0){
				$("form :input[name='GEOPickupStreet']").val(result.possiblegiStreet);
			}		
			else{
				$("form :input[name='GEOPickupStreet']").val(str);
			} 
			//$("form :input[name='GEOPickupStreet']").val(str);				
			$("form :input[name='GEODistrict']").val(result.communityDistrict);			
			if (result.possiblelowCrossStreetName.length > 0 &&  result.possiblehighCrossStreetName.length > 0 ){ 
				$("form :input[name='GEOCrossStreet']").val(result.possiblelowCrossStreetName.substring(0, (result.possiblelowCrossStreetName.length - 2) ) +' / '+ result.possiblehighCrossStreetName.substring(0, (result.possiblehighCrossStreetName.length - 2) ));
			}
			else{				
				$("form :input[name='GEOCrossStreet']").val('');
			}
				returnCode = true;    				
		}
		else{
			returnCode = false;			
		}       

    } else {
        // error
        showErrorResults(result);
        returnCode = false;
    }

};

function getReturnCode() {
    return returnCode;
}

var showSuccessResults = function (result) {
    var msg = "";
       if (result.trashPickup) {
    //        // show schedule info
    //        msg = "<strong>The collection schedule for " + result.address
    //				+ " is:</strong><br/><br/>";
    //        msg += "Refuse: " + result.trashPickup + "<br/>";
    //        msg += "Recycling: " + result.recyclePickup + "<br/><br />";
    //        msg += "Place refuse and recyclables at the curb the <em>night before</em> your collection day.<br /><br />";
    //        msg += "There is no garbage or recycling collection on <a href=\"http://www.nyc.gov/html/dsny/html/collection/schedule.shtml\">Department of Sanitation holidays</a>.<br />";

      } else {
           // possible commercial building (call succeeded but no schedule data)
            msg = "<p> <strong> The address: "
    				+ result.address
					+ " may be a <span style='color:red'>commercial building </span></strong></p>";
					//, therefore there is no Refuse/Recycling Pickup schedule available. 
       } 

    //msg = "The address is validated. Click Next to proceed.";
    //msg += ""; 
     
   // var msg = "";
    showMessage(msg);
};

$("#msform").on('click', 'input[name="streetOptions"]', function () {
    var selectedVal = $("input:radio[name='streetOptions']:checked").val();

    var array = selectedVal.split(",");

    $("form :input[id='houseNumber']").val(array[0]);
    $("form :input[id='street']").val(array[1]);
    $("form :input[id='boro']").val(getBoroughCode(array[2]));
});


var showErrorResults = function (result) {

    var msg = "<h4 style='font-size:15px !important'>Location "
        + result.address
        + " <span style='color:red'>Not Found</span></h4>";  
        
    
     if (result.hasPossibleStreets) {
        msg += "<p> Please select from the possible street names given below: </p>";
        msg += "<br/>";
        
        for (var i = 0; i < result.possibleStreets.length; i++) {
            var street = result.possibleStreets[i];            
	    msg += "<input type='radio' name='streetOptions' value='" + result.houseNumber + "," + street + "," + result.borough + "'>";
            msg += street + " (" + result.borough + ")";
            msg += "<br/>";
        }

        //msg += "</ul></p>";
        msg += "</p>";
    }
    showMessage(msg);
};

var handleCallError = function(xhr, status) {
    showMessage("<div class=\"serviceError\">[ERROR] - Call to geoclient service failed. </div>");
};

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
//$(document).ready(function () {

    // Register event handler for form submission

    //$("#msform").submit(function (event) {
    //$("#nextstep2").click(function (event) {
function validateAddress(callback)
{
        var formInput = getFormInput();
        if (validateForm(formInput)) {
            // Required form values are present; call the service
            $.ajax({
                //url: "http://csgis-dev-web.csc.nycnet:84/geoclient/v1/address.json", //DEV\
                async: false,
                url: "https://maps.nyc.gov/geoclient/v1/address.json", //PROD
				//url: "https://csgis-stg-prx.csc.nycnet/geoclient/v1/address.json", //STAG
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

            //alert("end func: " + returnCode);
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

    // Handle request from query string (if any parameters are set) by
    // setting form values and submitting the form. This way, validation
    // is run.
    var queryStringInput = getQueryString();
    if (queryStringInput.houseNumber || queryStringInput.street || queryStringInput.borough) {
        setFormInput(queryStringInput);
        $("#msform").submit();
    }
//});

function isValidEmailAddress(input) {

 if (input.val() == "") {
        return true;
    }

var pattern = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
var emailAddress = input.val();
if (!(emailAddress == "")) {
if(!pattern.test(emailAddress))  
{ 
input.attr("class", "tooltipstered error");
input.attr("aria-invalid", true);
input.tooltipster('show');
input.focus();
}
else
{
input.attr("class", "tooltipstered");
input.removeAttr("aria-invalid");
}
return pattern.test(emailAddress);
}
else
{
return true;
}
};


function checkdate(input) {

	 if (input.val() == "") {
        return true;
    }

         var validformat = /^\d{2}\/\d{2}\/\d{4}$/; 
         var returnval = false;
         if (!validformat.test(input.val()))         
         {
             input.attr("class", "tooltipstered error");
             input.attr("aria-invalid", "true");
	     input.tooltipster('show');	 
	     input.focus();    
         }
         else {
             var monthfield = input.val().split("/")[0];
             var dayfield = input.val().split("/")[1];
             var yearfield = input.val().split("/")[2];
             var dayobj = new Date(yearfield, monthfield - 1, dayfield);
             if ((dayobj.getMonth() + 1 != monthfield) || (dayobj.getDate() != dayfield) || (dayobj.getFullYear() != yearfield))              
             {
                 input.attr("class", "tooltipstered error");
                 input.attr("aria-invalid", "true");
		 input.tooltipster('show');
		 input.focus();
             }
             else
                 returnval = true;
         }
         if (returnval == false) input.focus();
         return returnval;
     }


function validateCheckBox(input) {
    var returnval = false;

    var firstCheckBox = $('#msform').find('input[type=checkbox]').filter(':first');

    if ($('#msform').find('input[type=checkbox]:checked').length == 0) { 
        firstCheckBox.attr("class", "tooltipstered error");
        firstCheckBox.attr("aria-invalid", "true");
        firstCheckBox.tooltipster('show');
        firstCheckBox.tooltipster('update', "Please select atleast one checkbox");
    }
    else {
        input.attr("class", "tooltipstered");
        input.removeAttr("aria-invalid");
        returnval = true;
    }
    if (returnval == false) firstCheckBox.focus();
    return returnval;
}


function validateRadioButton(input) {
        var returnval = false;

        var firstCheckBox = $('#msform').find('input[type=radio]').filter(':first');

        if ($('#msform').find('input[type=radio]:checked').length == 0) {
            firstCheckBox.attr("class", "tooltipstered error");
            firstCheckBox.attr("aria-invalid", "true");
            firstCheckBox.tooltipster('show');
            firstCheckBox.tooltipster('update', "Please select atleast one radio button");
        }
        else {
            input.attr("class", "tooltipstered");
            input.removeAttr("aria-invalid");
            returnval = true;
        }
        if (returnval == false) firstCheckBox.focus();
        return returnval;
    }

