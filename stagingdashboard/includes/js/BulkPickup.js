/*!
 * BulkPickup Application JS
 */
// JAVASCRIPT (jQuery)

jQuery.support.cors = true;
var CustomCard = '';
var ctgStr = '';
var Colors = ['#5393E7', '#F0f0f0', '#DD6159', '#f5a623', '#686868'];
var TextColors = ['#9b9b9b', '#ffffff', '#4a4a4a'];
var HeaderTextColors = ['#5393E7', '#9b9b9b', '#DD6159', '#f5a623', '#454545'];
var color = '';
var textColor = '';
var HeaderTextColor = '';
var status = 'Done';
var SortBy = 'Route';
var reqNumber = "";
var addonCategoryID = 0;
var DistrictIDName = '';
var SelectedTaskIDS = [];
var SelectedSRNOS = [];
//APIUrl = 'https://msswvw-dnsdnyvp.csc.nycnet';
var SearchDate = sessionStorage.getItem("pickupdate");
var SelecteBorough = sessionStorage.getItem("borough");
var selectedDistrictID = sessionStorage.getItem("district");
var selectedDistrictName = sessionStorage.getItem("districtName");
var truckId = 0;

if (SearchDate == "" && SelecteBorough == "") {
    window.location.href = '/assets/dsny/stagingdashboard/login.shtml';
}

var SupervisorRequestUrl = APIUrl + '/ePickupsAPI/api/BulkPickups/GetBoroughsGetSupervisor';
var BoroughRequestUrl = APIUrl + '/ePickupsAPI/api/BulkPickups/GetBoroughs';

function dayOfWeekAsString(dayIndex) {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayIndex];
}

function hasVerticalScrollbar(div) {
    return $(".Total_assignments")[0].scrollHeight > $(".Total_assignments").height();
}

function flipCard() {
    if (reqNumber != '') {

    }
    setTimeout(function () {
        if (reqNumber != '') {
            $('.dynamicData').scrollTop($('.dynamicData').find('.card[id=' + reqNumber + ']').offset().top - 500);
            $('.dynamicData').find('.card[id=' + reqNumber + ']').toggleClass('flipped');

        }
    }, 500);

    reqNumber = "";
}

$(function () {
    $('#datetimepicker2').datetimepicker({
        format: 'L'
    });
		$('#Reschedule').datetimepicker({
        format: 'L',
        minDate: Date(),
				widgetPositioning:{horizontal: 'auto',
            vertical: 'top'}
    });
    $('#datetimepicker3').datetimepicker({
        format: 'L',
        format: 'MM/DD/YYYY',
        minDate: Date()
    });

		$('#RescheduleButton').click(function (event) {
        if ($(".bootstrap-datetimepicker-widget").is(':visible'))
            $("#Reschedule").datetimepicker("hide");
        else
            $("#Reschedule").datetimepicker("show");
    });

    $('#open-datetimepicker').click(function (event) {
        //event.preventDefault();
        if ($(".bootstrap-datetimepicker-widget").is(':visible'))
            $("#datetimepicker2").datetimepicker("hide");
        else
            $("#datetimepicker2").datetimepicker("show");
    });

    $('#datetimepicker2').keydown(function () {
        //code to not allow any changes to be made to input field
        return false;
    });

});

$(document).on('click', '#RescheduleButton', function (e) {
	if ($(".bootstrap-datetimepicker-widget").is(':visible'))
			$("#Reschedule").datetimepicker("hide");
	else
			$("#Reschedule").datetimepicker("show");
})

var FadeIn = function (e) {

    if (e.target.id == "datepicker" || e.target.id == "datepickerdiv" || e.target.id == "SelectedDay")
        return;

    if ($('#overlay').is(':visible')) {
        $('#overlay').fadeOut(300, function () {
            $('.expose').css('z-index', '1');
            $("#datetimepicker2").datetimepicker("hide");
        });
    } else {
        $(this).css('z-index', '99999');
        $('#overlay').fadeIn(300);
    }
}

var FadeOut = function (e) {

    if (e.target.id != "open-datetimepicker" && e.target.id != "datetimepicker2")
        $("#datetimepicker2").datetimepicker("hide");

    if (e.target.id == "datepicker" || e.target.id == "datepickerdiv" || e.target.id == "SelectedDay" || e.target.id == "open-datetimepicker" || e.target.id == "datetimepicker2")
        return;

    if ($('#overlay').is(':visible')) {
        $('#overlay').fadeOut(300, function () {
            $('.expose').css('z-index', '1');
        });
    }

}



$(document).click(function () {
    //$('#AddOnModal input.tooltipstered').tooltipster('hide');
});

var Task_cards_layout = function (key, item) {

    color = Colors[item.StatusId - 1];
    HeaderTextColor = HeaderTextColors[item.StatusId - 1];
    if (item.StatusId == 2) {
        TextColor = TextColors[0];
    } else {
        TextColor = TextColors[1];
    }

    CustomCard += '<div class="col-md-5ths col-xs-6" id="' + item.PickupRequestId + '">\
									 <div class="card CustomCards" style="border:0px;" id="' + item.PickupRequestId + '">\
											 <div style="color:white;height: 36px;">\
														 <div class="btn-group" style="width:100%; margin:0px; padding:0px;">\
								 <div class="btn" style="background-color:white;"><span class="AssignedSRNumber" style=" color:' + HeaderTextColor + ';"><b>' + item.SRNo + '</b></span></div>';
                 if (item.RouteOrder > 0){
                CustomCard +=	'<div class="RouteBadge">' + item.RouteOrder + '</div>';
                 }
        CustomCard += '</div></div>';
    CustomCard += '<div class="card-block" style="padding:0px 5px 5px 5px"; >\
													 <p class="card-text ">\
															 <div class="box TaskCardAddressLabel">'+ item.PickupAddress + '</div>\
													 <span style="float:right;"><b>' + item.DistrictName + '</b></span>\
													 </p>\
											 <p class="card-text">\
													 Total Items<span style="float:right;">' + item.ItemsCount + '</span>\
											 </p>';
    if (item.StatusId == 1) {
        CustomCard += '<div class="overlay bulkOverlay" id="' + item.PickupRequestId + '"><button class="overlayButtonDetail completePopup"  type="button">Details</button><button class="OverlaymultiSelect PlainButton" id="' + item.SRNo + '" type="button">Select <i class="fa fa-check-circle fa-lg" aria-hidden="true"></i></button></div>\
			</div> <div id="' + item.SRNo + '"class=" lockUnlock UnChecked" style="text-align: center; padding-top:50px;"><i class="fa fa-check  fa-3x" style="color:rgba(255, 255, 255, 1)"aria-hidden="true"></i></div>';

    } else {
        CustomCard += '<div class="overlay bulkOverlay" id="' + item.PickupRequestId + '"><button class="overlayButtonDetail completePopup"  type="button">Details</button></div></div>';
    }
    CustomCard += '<div style="background-color:' + color + '; color:' + TextColor + '; border-radius:0px 0px 4px 4px; height: 36px; border:1px ' + color + ';">\
											 <p style="padding:5px; margin-left:10px;"><span><b>' + item.StatusName + '</b></span>';
    if (item.StatusId == 1 || item.StatusId == 2) {
        CustomCard += '<span id="selected" style="float:right; margin-right:10px;"></span></p></div></div></div>';
    } else {
        CustomCard += '<span id="selected" style="float:right; margin-right:10px;">' + item.ReasonType + '</span></p></div></div></div>';
    }
};

//
var RequestDashboard = function () {
    $('.dynamicData').mCustomScrollbar("destroy")
    $(".dynamicData").empty();
    if ((sessionStorage.getItem("borough") != undefined) && (sessionStorage.getItem("borough").length > 0 ))  {
      $("#SelecteBorough").text(sessionStorage.getItem("borough"));
      $("#SelecteDistrict").text(sessionStorage.getItem("districtName"));

    var RequestUrl = APIUrl + '/ePickupsAPI/api/BulkPickups/Get?SearchDate='+$('.selectedDate').val()+ '&Borough='+sessionStorage.getItem("borough")+'&DistrictId='+sessionStorage.getItem("district")+'&SortBy='+SortBy;

    $.ajax({
        async: false,
        url: RequestUrl,
        type: "GET",
        dataType: 'json',
        crossDomain: true,
        success: function (json) {
            if (json != undefined) {
              $('#msgModal').modal('hide');
              $('.Checked').removeClass('Checked').addClass('UnChecked');
              $('#SelectedTasks').removeClass('FooterSelected').addClass('FooterNotSelected');
              SelectedTaskIDS = [];
              SelectedSRNOS = [];
                CustomCard = '';
                var DistrictIDName = '';
                var DistrictID = new Array();
                var DistrictCard = '';
                var RequestedQuantitiesDescriptions = ['TotalAssignments', 'TotalItems','PendingAssignments','PendingItems', 'TotalMileage', 'TotalStops'];

                if (json.Assignments[0] == undefined) {

                    RequestedQuantitiesDescriptions.forEach(function (desc) {
                        $('#' + desc).html('0');
                    });
                        $('#target').append('<div class="alert alert-warning" style="margin:20px;text-align:center;" role="alert">There are no Assignments on <strong>' + $('.selectedDate').val() + ','+sessionStorage.getItem("districtName")+'.</strong></div>');
                } else {

									RequestedQuantitiesDescriptions.forEach(function (desc) {
											$('#' + desc).html(json[desc]);

									});

                   var Assignments = json.Assignments;
									 var FirstOject = Assignments[0];
									 DistrictID = 0;


                        $.each(Assignments, function (key, item) {
                            if (DistrictID == 0) {
                                DistrictIDName = item.District
                            }
                            Task_cards_layout(key, item);
                        });
                }

                $('#target').append(CustomCard);
                $('.CustomCards .btn-group .expose').on('click', FadeIn);
                flipCard()
                $('.dynamicData').mCustomScrollbar();
            }
        }
    });
  }else{
      $('#target').html('<div class="alert alert-warning" style="margin:20px;text-align:center;" role="alert"><strong>Please select a borough to get Assignment details.</strong></div>');
  }
}
// for black out animation

$('.HoverDiv .expose').on('click', FadeIn);
$('#datetimepicker2 .expose').on('click', FadeIn);
$('#open-datetimepicker .expose').on('click', FadeIn);
$(document).on('click', FadeOut);

// To hide the footer
var HideFooter = function () { $('#SelectedTasks').removeClass('FooterSelected').addClass('FooterNotSelected') };

//Selected Taks with multi select option
$(document).on('click', '.OverlaymultiSelect', function (e) {
    $(this).parent().parent().parent().find('.lockUnlock').removeClass('UnChecked').addClass('Checked');
    SelectedTaskID = $(this).parent().parent().parent().attr('id');
    SelectedIds(SelectedTaskID);
    SortSRNO($(this).attr('id'));
});

// Tapped to unlock the task cards.
$(document).on("click", ".lockUnlock", function () {
    $(this).removeClass('Checked').addClass('UnChecked');
    SelectedTaskID = $(this).parent().parent().attr('id');
    SelectedIds(SelectedTaskID);
    SortSRNO($(this).attr('id'));
});

// function to append and delete Ids from array.
var SelectedIds = function (x) {
    console.log(x);
    var found = jQuery.inArray(x, SelectedTaskIDS);
    if (found >= 0) {
        console.log("Element was found Removed - " + x);
        // Element was found, remove it.
        SelectedTaskIDS.splice(found, 1);
    } else {
        console.log("Element was not found Added - " + x);
        // Element was not found, add it.
        SelectedTaskIDS.push(x);
    }
    console.log(SelectedTaskIDS);
    $('#totalSelected').text(SelectedTaskIDS.length);
    if (SelectedTaskIDS.length == 0) {
        HideFooter();
    } else {
        $('#SelectedTasks').removeClass('FooterNotSelected').addClass('FooterSelected');
    }
}


// function to append and delete SRNOs from array.
var SortSRNO = function (x) {
    console.log(x);
    var found = jQuery.inArray(x, SelectedSRNOS);
    if (found >= 0) {
        console.log("SRNO was found Removed - " + x);
        // Element was found, remove it.
        SelectedSRNOS.splice(found, 1);
    } else {
        console.log("SRNO was not found Added - " + x);
        // Element was not found, add it.
        SelectedSRNOS.push(x);
    }
    console.log(SelectedSRNOS.toString());
}


// to change the filter
$(document).on("click", ".SelectedStatusList a", function () {
    SortBy = $(this).text();
    $("#SelectedStatusType").text($(this).text());
    RequestDashboard();
});

// to unselect All the task cards
$(document).on("click", "#unselectAll", function () {

    $('.Checked').removeClass('Checked').addClass('UnChecked');
    $('#SelectedTasks').removeClass('FooterSelected').addClass('FooterNotSelected');
    SelectedTaskIDS = [];
    SelectedSRNOS = [];
});

// to select all the task cards
$(document).on("click", "#selectAll", function () {
    $.each($('.UnChecked'), function () {
        console.log("Unlocked ID - " + $(this).parent().attr('id'));
        SortSRNO($(this).attr('id'));
        SelectedIds($(this).parent().attr('id'));
    });

    $('.UnChecked').addClass('Checked').removeClass('UnChecked');

});


// update multiple TruckS
$(document).on("click", ".BulktruckDropDown_list", function () {
    var TruckNumber = $(this).text();
    var TruckID = $(this).attr('id');
    var selectedClass = this;

    var Update_truck_post_url = APIUrl + '/ePickupsAPI/api/BulkPickups/UpdateTruckForPickupRequest?SRNo=' + SelectedSRNOS.toString() + '&TruckId=' + $(this).attr("id");
    $.ajax({
        async: false,
        url: Update_truck_post_url,
        type: "POST",
        dataType: 'json',
        crossDomain: true,
        success: function (json) {
            if (json.length > 5) {

                var alertModal = '<div class="modal-header" style="color:white;background-color:red;height:30px;padding:3px; margin:0px">\
						  <b style="margin-left:10px;">Equipment Not Available</b>\
						   </div>\
						<div class="modal-body" style="height:80px;">\
						  <p>' + json + '</p>\
						   </div>\
						<div class="modal-footer" style="height:60px;border:0px;">\
					 <button type="button" style="color:white;background-color:red; width:100px;" class="btn" data-dismiss="modal">ok</button>\
					</div>'
                $('.AlertContent').html(alertModal);
                $('.alertModal').modal('show');

            } else {
                RequestDashboard();

                $('.Checked').removeClass('Checked').addClass('UnChecked');
                $('#SelectedTasks').removeClass('FooterSelected').addClass('FooterNotSelected');
                SelectedTaskIDS = [];
                SelectedSRNOS = [];

            }
        }
    });
});

//To Complete as is Multiple Cards
$(document).on("click", "#BulkUpdateComplete", function () {
    jQuery.support.cors = true;
    var getDateUrl = APIUrl + '/ePickupsAPI/api/BulkPickups/PickupRequestsCompleted?pickupRequestIds='+SelectedTaskIDS.toString()+'&UserName='+sessionStorage.getItem("userId");;
    $.ajax({
        async: false,
        url: getDateUrl,
        type: "POST",
        dataType: 'json',
        crossDomain: true,
        success: function (data) {
            if (data != undefined) {
              ResetFooterToDefault();
            }
        }
    });
    return false;
});
//To Update status to not on location
$(document).on("click", "#BulkUpdateNOL", function () {
    jQuery.support.cors = true;
    var getDateUrl = APIUrl + '/ePickupsAPI/api/BulkPickups/PickupRequestsNotOnLocation?pickupRequestIds='+SelectedTaskIDS.toString()+'&UserName='+sessionStorage.getItem("userId");
    $.ajax({
        async: false,
        url: getDateUrl,
        type: "POST",
        dataType: 'json',
        crossDomain: true,
        success: function (data) {
            if (data != undefined) {
              ResetFooterToDefault();
            }
        }
    });
    return false;
});

//To delete multiple tasks for reason snow
$(document).on("click", ".UnserviceableReason", function () {
    jQuery.support.cors = true;
    var getDateUrl = APIUrl + '/ePickupsAPI/api/BulkPickups/PickupRequestsUnserviceable?pickupRequestIds='+SelectedTaskIDS.toString()+'&reasonType='+$(this).text()+'&comments=&UserName='+sessionStorage.getItem("userId");
    $.ajax({
        async: false,
        url: getDateUrl,
        type: "POST",
        dataType: 'json',
        crossDomain: true,
        success: function (data) {
            if (data != undefined) {
              ResetFooterToDefault();
            }
        }
    });
    return false;
});

//To delete multiple tasks for reason snow
$(document).on("click", "#BulkCancellationSnow", function () {

  var alertModal = '<div class="modal-header" style="color:white;background-color:#EDA51B;height:30px;padding:3px; margin:0px">\
<b style="margin-left:10px;">Cancel Assignments</b>\
</div>\
<div class="modal-body" style="height:80px;">\
<p><b>Do you want to cancel selected Assignments? </b></p>\
</div>\
<div class="modal-footer" style="height:60px;border:0px;">\
<button type="button" style="color:white;background-color:#BDBDBD; width:100px;" class="btn" id="dismissSnowWithSnowreason" data-dismiss="modal">Not now</button>\
<button type="button" style="color:white;background-color:#2E8B15; width:300px; margin-left:30px;" class="btn" id="cancleWithSnowreason"  data-dismiss="modal">Yes, Cancel Assignments</button>\
</div>'
  $('.AlertContent').html(alertModal);
  $('.alertModal').modal('show');

  $('.alertModal').on("click", "#dismissSnowWithSnowreason", function () {
        ResetFooterToDefault();
  });

  $('.alertModal').on("click", "#cancleWithSnowreason", function () {
    jQuery.support.cors = true;
    var getDateUrl = APIUrl + '/ePickupsAPI/api/BulkPickups/PickupRequestsCancelled?pickupRequestIds='+SelectedTaskIDS.toString()+'&reasonType=snow&comments=&UserName='+sessionStorage.getItem("userId");
    $.ajax({
        async: false,
        url: getDateUrl,
        type: "POST",
        dataType: 'json',
        crossDomain: true,
        success: function (data) {
            if (data != undefined) {
              ResetFooterToDefault();
            }
        }
    });
    return false;
  });
});

//To delete multiple tasks for reason other
$(document).on("click", "#BulkCancellation", function () {

                      var alertModal = '<div class="modal-header" style="color:white;background-color:#EDA51B;height:30px;padding:3px; margin:0px">\
  				  <b style="margin-left:10px;">Cancel Assignments</b>\
  				   </div>\
  				<div class="modal-body" style="height:80px;">\
  				  <p><b>Do you want to cancel selected Assignments? </b></p>\
  				   </div>\
  				<div class="modal-footer" style="height:60px;border:0px;">\
  			 <button type="button" style="color:white;background-color:#BDBDBD; width:100px;" class="btn" id="dismissCancleWithNoreason"  data-dismiss="modal">Not now</button>\
  			 <button type="button" style="color:white;background-color:#2E8B15;  width:300px; margin-left:30px;" class="btn" id="cancleWithNoreason"  data-dismiss="modal">Yes, Cancel Assignments</button>\
  			</div>'
                      $('.AlertContent').html(alertModal);
                      $('.alertModal').modal('show');

                      $('.alertModal').on("click", "#dismissCancleWithNoreason", function () {
                            ResetFooterToDefault();
                      });

                      $('.alertModal').on("click", "#cancleWithNoreason", function () {

                        jQuery.support.cors = true;
                        var getDateUrl = APIUrl + '/ePickupsAPI/api/BulkPickups/PickupRequestsCancelled?pickupRequestIds='+SelectedTaskIDS.toString()+'&reasonType=&comments=&UserName='+sessionStorage.getItem("userId");
                        $.ajax({
                            async: false,
                            url: getDateUrl,
                            type: "POST",
                            dataType: 'json',
                            crossDomain: true,
                            success: function (data) {
                                if (data != undefined) {
                                  ResetFooterToDefault();
                                }
                            }
                        });
                        return false;

                      });
});


var ResetFooterToDefault = function () {
	$('#msgModal').modal('hide');
	RequestDashboard();
	$('.Checked').removeClass('Checked').addClass('UnChecked');
	$('#SelectedTasks').removeClass('FooterSelected').addClass('FooterNotSelected');
	SelectedTaskIDS = [];
	SelectedSRNOS = [];
}

$(document).keypress("a", function (e) {
    if (e.ctrlKey) {
        if (e.which == 1) {
            $.each($('.UnChecked'), function () {

                SelectedIds(this.id);
            });

            $('.UnChecked').addClass('Checked').removeClass('UnChecked');
        }
    }
});
var unFocus = function () {
    if (document.selection) {
        document.selection.empty()
    } else {
        window.getSelection().removeAllRanges()
    }
}
//yesh

$(document).on("click", ".dropdown-menu a", function () {

		$(this).parents(".btn-group").find('.card-text').text($(this).text());
		$(this).parents(".btn-group").find('.card-text').val($(this).text());
		$(this).parents(".btn-group").find('.card-text').attr('id', $(this).attr('id'));
});

$(document).on("click", ".UpdateDistrict", function () {
		sessionStorage.setItem("district", $('.selectedDistrict').attr('id'));
		sessionStorage.setItem("districtName", $(".selectedDistrict").text());
		RequestDashboard();
});

// to Update the DropDown Items  selectedDistrict

$(".selectedDate").on("dp.change", function () {
		var myDate = new Date($('.selectedDate').val());
		var day = myDate.getDay();
		sessionStorage.setItem("pickupdate", $('.selectedDate').val());

		if ($('.selectedDate').val() != $('#SelectedDay').text()) {
				$('#SelectedDay').text(dayOfWeekAsString(day));

				if ($('#overlay').is(':visible')) {
						$('#overlay').fadeOut(300, function () {
								$('.expose').css('z-index', '1');
						});
				}
				RequestDashboard();
		}
});



 function Reschedule_Taks(){
   jQuery.support.cors = true;
   if ($(".bootstrap-datetimepicker-widget").is(':visible')){
     var getDateUrl = APIUrl + '/ePickupsAPI/api/BulkPickups/UpdatePickupRequestDates?pickupRequestIds='+SelectedTaskIDS.toString()+'&appointmentDate='+$('#Reschedule').val()+'&UserName='+sessionStorage.getItem("userId");
     $.ajax({
         async: false,
         url: getDateUrl,
         type: "POST",
         dataType: 'json',
         crossDomain: true,
         success: function (data) {
           var returnList =  data;
           if (returnList != undefined && returnList.length > 0){
             var alertModal = '<div class="modal-header" style="color:white;background-color:#D0021B;height:30px;padding:3px; margin:0px">\
   <b style="margin-left:10px;">Reschedule</b>\
    </div>\
 <div class="modal-body" style="height:80px;">\
   <p><b>There were '+returnList.length+' appointment(s) could not be rescheduled because an appointment already exists for the selected date.</b></p>\
    </div>\
 <div class="modal-footer" style="height:60px;border:0px;">\
 <button type="button" style="color:white;background-color:#D0021B; width:100px;" class="btn"  data-dismiss="modal">OK</button>\
 </div>'
             $('.AlertContent').html(alertModal);
             $('.alertModal').modal('show');
           }
             if (data != undefined) {
               ResetFooterToDefault();
             }
         }
     });
     return false;
   }
  }

$("#Reschedule").on("dp.update", function (e) {
     register_select_same_day();
 });
 $("#Reschedule").on("dp.show", function (e) {
     register_select_same_day();
 });

$("#Reschedule").on("dp.change", function () {
Reschedule_Taks();
});
function register_select_same_day(){
     // since dp.change doesn't trigger if the date doesn't change, we have to check ourself
     $(".datepicker .datepicker-days td.day.active").click(function(){
      Reschedule_Taks();
     });
     $(".datepicker .datepicker-days td.day.old.today").click(function(){
      Reschedule_Taks();
     });
     $(".datepicker .datepicker-days td.day.today").click(function(){
      Reschedule_Taks();
     });
 }

// update multiple Boroughs dropDown
$(document).on("click", "#reqBorough", function () {
	$('#BoroughDropDown').empty();
$.ajax({
		async: false,
		url: BoroughRequestUrl,
		type: "GET",
		dataType: 'json',
		crossDomain: true,
		success: function (json) {
				if (json != undefined) {
						var BoroughList = json;
						var BoroughName = '';

						$.each(BoroughList, function (key, item) {
								BoroughName += '<a class="dropdown-item box" style="color:white;" href="#" id = ' + item.Id + '>' + item.Borough + '</a>'
						});
						$('#BoroughDropDown').append(BoroughName);
				}
		}
});
});
// update multiple Districts dropDown
$(document).on("click", "#ReqDistrict", function () {
	$('#DistrictDropDown').empty();
$.ajax({
		async: false,
		url: APIUrl + '/ePickupsAPI/api/BulkPickups/GetDistrictsByBorough?Borough='+sessionStorage.getItem("borough"),
		type: "GET",
		dataType: 'json',
		crossDomain: true,
		success: function (json) {
				if (json != undefined) {
						var DistrictList = json;
						var DistrictName = '';

						$.each(DistrictList, function (key, item) {
								DistrictName += '<a class="dropdown-item box" style="color:white;" href="#" id = ' + item.Id + '>' + item.DistrictName + '</a>'
						});
						$('#DistrictDropDown').append(DistrictName);
				}
		}
});
});

//To fetch districts wrt borough
var Fetch_district_for = function (Borough) {
	$('#DistrictDropDown').empty();
	$.ajax({
			async: false,
			url:  APIUrl + '/ePickupsAPI/api/BulkPickups/GetDistrictsByBorough?Borough='+Borough,
			type: "GET",
			dataType: 'json',
			crossDomain: true,
			success: function (json) {
					if (json != undefined) {
							var DistrictList = json;
							var DistrictName = '';
             $('.SelectedDistrict').text(DistrictList[0].DistrictName);
						 $('.SelectedDistrict').attr('id', DistrictList[0].Id);
             sessionStorage.setItem("district",DistrictList[0].Id);
            sessionStorage.setItem("districtName",DistrictList[0].DistrictName);
						 var districtID = DistrictList[0].Id;
						 RequestDashboard();
							$.each(DistrictList, function (key, item) {
									DistrictName += '<a class="dropdown-item box" style="color:white;" href="#" id = ' + item.Id + '>' + item.DistrictName + '</a>'
							});
							$('#DistrictDropDown').append(DistrictName);
					}
			}
	});
};

// update dashboard wrt Borough
$(document).on("click", "#BoroughDropDown a", function () {
	var borough = $(this).text();
	sessionStorage.setItem("borough",borough);
	Fetch_district_for(borough);
});

$('#EODReport').click(function () {
    window.location.href = '/assets/dsny/stagingdashboard/BulkEODReport.shtml';
    return false;
});

$('#print').click(function () {
    window.location.href = '/assets/dsny/stagingdashboard/RouteReport.shtml';
    return false;
});

// update dashboard wrt districtID
$(document).on("click", "#DistrictDropDown a", function () {
	var districtID = $(this).attr('id');
  sessionStorage.setItem("district",districtID);
	sessionStorage.setItem("districtName",$(this).text());
	 RequestDashboard();
});

$("#SR_search_input").keyup(function (event) {
		if (event.keyCode == 13) {
				complete_Popup("SRNO", $("#SR_search_input").val());
				$("#SR_search_input").val('');
		}
});


		// $('#EODReport').click(function () {
		// 		window.location.href = '/assets/dsny/stagingdashboard/EODReport.shtml';
		// 		return false;
		// });

		$('#AssReport').click(function () {
				window.location.href = '/assets/dsny/stagingdashboard/AssignReport.shtml';
				return false;
		});

// $('#print').click(function () {
// 		window.location.href = '/assets/dsny/stagingdashboard/printdashboard.shtml';
// 		return false;
// });

$('.logoutButton').click(function () {
		sessionStorage.setItem("pickupdate", "");
		sessionStorage.setItem("borough", "");
		sessionStorage.setItem("district", "");
		window.location.href = '/assets/dsny/stagingdashboard/login.shtml';
		return false;
});

$('#BulkPickup').click(function () {
    window.location.href = '/assets/dsny/stagingdashboard/BulkIndex.shtml';
    sessionStorage.setItem("districtName", "");
    sessionStorage.setItem("borough", "");
    sessionStorage.setItem("district", "");
    return false;
});

$('#eWastePickup').click(function () {
  sessionStorage.setItem("districtName", "");
  sessionStorage.setItem("borough", "");
  sessionStorage.setItem("district", "");
    window.location.href = '/assets/dsny/stagingdashboard/index.shtml';
    return false;
});


$('body').ready(function () {

});

  $(function () {

    jQuery.support.cors = true;

    $(".dynamicData").mCustomScrollbar();
    $(".AssignedTruckDetails").mCustomScrollbar();
    $("#datetimepicker2").val(SearchDate);
    $(".selectedDistrict").attr("id", selectedDistrictID);
    $(".selectedDistrict").text(selectedDistrictName);
    $("#SelectedDay").text(dayOfWeekAsString(new Date(SearchDate).getDay()));
    RequestDashboard();
 });

$("input, select, textarea, form, button btn-group").css("outline", "none");
$("input, select, textarea, form, button btn-group").css("box-shadow", "none");
