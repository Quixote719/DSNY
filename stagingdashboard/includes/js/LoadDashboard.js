/*!
 * Dashboard Application JS
 */
	// JAVASCRIPT (jQuery)
	//"http://msdwvw-dsndny01.csc.nycnet/ePickupsAPI/api/PickupRequest/GetDashboard?SearchDate=09%2F24%2F2016&Borough=ALL&DistrictId=0&TruckId=0",

	//var APIUrl = 'https://msswvw-dnsdnyvp.csc.nycnet';
	//var APIUrl = 'https://msdwvw-dsndny01.csc.nycnet';

	jQuery.support.cors = true;
	var CustomCard = '';
	var ctgStr = '';
	var Colors = ['#5393E7', '#F0f0f0', '#DD6159','#f5a623','#686868'];
	var TextColors = ['#9b9b9b', '#ffffff','#4a4a4a'];
	var HeaderTextColors = ['#5393E7', '#9b9b9b', '#DD6159','#f5a623','#454545'];
	var color = '';
	var textColor = '';
	var HeaderTextColor = '';
	var status = 'Done';
	var SortByDistrict = false;
	var reqNumber = "";
	var addonCategoryID = 0;
	var DistrictIDName = '';
	var SelectedTaskIDS = [];
	var SelectedSRNOS = [];

	var SearchDate = sessionStorage.getItem("pickupdate");
	var SelecteBorough = sessionStorage.getItem("borough");
	var selectedDistrictID = sessionStorage.getItem("district");
	var selectedDistrictName = sessionStorage.getItem("districtName");
	var truckId = 0;



	if(sessionStorage.getItem("truckId") != undefined)
		truckId = sessionStorage.getItem("truckId");


	if (SearchDate == "" || SelecteBorough == "" || selectedDistrictID == "") {
		window.location.href = '/assets/dsny/stagingdashboard/login.shtml';
	}

	var SuperVisorRequestUrl = APIUrl + '/ePickupsAPI/api/Dashboard/GetEmployees';
	var AssignmnetsUrl = APIUrl + '/ePickupsAPI/api/Dashboard/GetTrucks?Borough=staten Island&DistrictId=0';

	function dayOfWeekAsString(dayIndex) {
		return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayIndex];
	}

	function hasVerticalScrollbar(div) {
		return $(".Total_assignments")[0].scrollHeight > $(".Total_assignments").height();
	}

	function flipCard(){
			if (reqNumber != ''){

			}
		  setTimeout(function(){
			if (reqNumber != ''){
                $('.dynamicData').scrollTop($('.dynamicData').find('.card[id='+reqNumber+']').offset().top - 500);

				//var height = $('.dynamicData').find('.card[id='+reqNumber+']').height();
				 //$('.dynamicData').animate({
					//scrollTop: height
					//'scrollTop' : $("#"+reqNumber).offset().top},'slow');
				//}, 500);

					$('.dynamicData').find('.card[id='+reqNumber+']').toggleClass('flipped');

				}
		 },500);

		 reqNumber = "";
      }


	$(function () {
		$('#datetimepicker2').datetimepicker({
			format: 'L'
		});
        $('#datetimepicker3').datetimepicker({
			format: 'L',
			format: 'MM/DD/YYYY',
			defaultDate: Date()
		});

		$('#open-datetimepicker').click(function(event){
			//event.preventDefault();
			if ($(".bootstrap-datetimepicker-widget").is(':visible'))
				$("#datetimepicker2").datetimepicker("hide");
			else
				$("#datetimepicker2").datetimepicker("show");
		});

		$('#datetimepicker2').keydown(function() {
		  //code to not allow any changes to be made to input field
		  return false;
		});
	});

	var FadeIn = function (e) {

		if(e.target.id == "datepicker" || e.target.id == "datepickerdiv" || e.target.id == "SelectedDay")
			return;

		if ($('#overlay').is(':visible')) {
			$('#overlay').fadeOut(300, function () {
				$('.expose').css('z-index', '1');
				$("#datetimepicker2").datetimepicker("hide");
				/*if ($('.bootstrap-datetimepicker-widget').is(':visible')) {
					$(".bootstrap-datetimepicker-widget").css('z-index', '1');
					$("#datepickerdiv").css('z-index', '1');
					$("#SelectedDay").css('z-index', '1');
				}*/
			});
		} else {
			$(this).css('z-index', '99999');
			/*if ($('.bootstrap-datetimepicker-widget').is(':visible')) {
				$(".bootstrap-datetimepicker-widget").css('z-index', '99999');
				$("#datepickerdiv").css('z-index', '99999');
				$("#SelectedDay").css('z-index', '99999');
			}*/
			$('#overlay').fadeIn(300);
		}
	}

	var FadeOut = function (e) {

		if(e.target.id != "open-datetimepicker" && e.target.id != "datetimepicker2")
			$("#datetimepicker2").datetimepicker("hide");

	    if(e.target.id == "datepicker" || e.target.id == "datepickerdiv" || e.target.id == "SelectedDay" || e.target.id == "open-datetimepicker" || e.target.id == "datetimepicker2")
			return;

		if ($('#overlay').is(':visible')) {
			$('#overlay').fadeOut(300, function () {
				$('.expose').css('z-index', '1');
			});
		}

		//$("#datetimepicker2").datetimepicker("hide");
	}



	$(document).click(function() {
		//$('#AddOnModal input.tooltipstered').tooltipster('hide');
	});


	var Request_Truck_list = function (Borough, DistrictID, SelectedDate) {
		$('.truckDropDown_menu_list').empty();
		var AssignmnetsUrl = APIUrl + '/ePickupsAPI/api/Dashboard/GetTrucks?Borough=' + Borough + '&DistrictId=0&searchdate=' + SelectedDate;
		$.ajax({
			async: false,
			url: AssignmnetsUrl,
			type: "GET",
			dataType: 'json',
			crossDomain: true,
			success: function (json) {
				if (json != undefined) {
					var TruckList = '';
					$.each(json, function (key, item) {
						TruckList += '<a class="dropdown-item truckDropDown_list" style="color:black;" id= ' + item.TruckId + ' href="#">' + item.TruckSerialNo + '</a>'
					});
					$('.truckDropDown_menu_list').append(TruckList);
				}
			}
		});
	}


	var Request_Assignments = function (Borough, DistrictID, SelectedDate) {
        $('.AssignedTruckDetails').mCustomScrollbar("destroy")
		$('.AssignedTruckDetails').empty();
		var AssignmnetsUrl = APIUrl + '/ePickupsAPI/api/Dashboard/GetTrucks?Borough=' + Borough + '&DistrictId=0&searchdate=' + SelectedDate;

		$.ajax({
			async: false,
			url: AssignmnetsUrl,
			type: "GET",
			dataType: 'json',
			crossDomain: true,
			success: function (json) {
				if (json != undefined) {
					var AssignedTruckHtml = '';
					var TotalAssignments = json[0].TotalAssignments;
					var SupervisorDetails = json[0].CurrentSupervisor;
					var SupervisorName = SupervisorDetails.FullName;

					// if (DistrictID != '0') {
					// 	$('.SelectedSupervisor').text('N/A');
					// 	$("#SUperVisorCard").addClass("disabledbutton");
					// } else {
						if (SupervisorName != '') {
							$('.SelectedSupervisor').text(SupervisorName);
						} else {
							$('.SelectedSupervisor').text('N/A');
						}

						$("#SUperVisorCard").removeClass("disabledbutton");

					//}

					$('#TotalAssignmentsValue').text(TotalAssignments);
					$.each(json, function (key, item) {

						var AssignedDriver = item.CurrentDriver;
						var AssignedLoader = item.CurrentLoader;
						var AssignedDriverName = 'N/A';
						var AssignedLoaderName = 'N/A';
						var REquestPerTruck = '';
						if (AssignedDriver.FullName != "") {
							AssignedDriverName = AssignedDriver.FullName

						} else {
							AssignedDriverName = 'N/A'
						}

						if (AssignedLoader.FullName != "") {

							AssignedLoaderName = AssignedLoader.FullName
						} else {
							AssignedLoaderName = 'N/A'
						}

						if (item.TruckSerialNo != 'Truck-floating') {

							REquestPerTruck = item.RequestsPerTruck
						}

						AssignedTruckHtml += '<div class="Truck_details" id = "' + item.TruckId + '"style="border-bottom:1px solid white; height:125px;">\
							<div>\
							<button class="btn btn-primary AssignmentFilter" id = "' + item.TruckId + '" type="submit" style="width:100%;background-color:#5393e7;color:white; border:0px;padding:5px;">\
										<div style="float:right; margin-top:10px;">\
											' + REquestPerTruck + '\
											<i class="fa fa-angle-right" style="padding:6px;" aria-hidden="true"></i></span>\
										</div>\
										<div>\
											<H5 align="left" class="card-text"> ' + item.TruckSerialNo + '</H5>\
											<H6 align="left" style="margin-left:12px;"> ' + item.MaterialType + '</H6>\
										</div>\
									</button>\
								</div>\
								<div style="width:100%; height:40px;">\
									<div  style="padding:5px;float:left;width:50%;">\
										<div class="btn-group expose" style="width:100%;">\
											<button class="btn dropdown RequestList" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"\ style="padding:0px;width:100%;height:30px; border-radius:5px; background-color:' + AssignedDriver.ColorCode + '; border:0px; outline:none;">\
											<div><span class="SelectedDriver box" style="color:Black; float:left; margin:5px 15px 5px 2px;">' + AssignedDriverName + '</span>\</div>\
											</button>\
											<div class="dropdown-menu truckDropDown_menu truckDropDown_menu_DriverList" style="border:0px; width:207.7%; max-height:150px;overflow:auto;">\
											</div>\
										</div>\
									</div>\
									<div  style="padding:5px;float:left;width:50%;">\
										<div class="btn-group expose" style="width:100%;">\
											<button class="btn dropdown RequestList" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="\ padding:0px;width:100%; height:30px; border-radius:5px; background-color:' + AssignedLoader.ColorCode + '; border:0px; outline:none;">\
												<div><span class="box" style="color:Black; float:left; margin:5px 15px 5px 2px;">' + AssignedLoaderName + '</span></div>\
											</button>\
											<div class="dropdown-menu truckDropDown_menu dropdown-menu-right truckDropDown_menu_LoaderList" style="border:0px; width:207.7%; height:150px;overflow:auto;">\
											</div>\
										</div>\
									</div>\
								</div>\
							</div>'
					});
					$('.AssignedTruckDetails').append(AssignedTruckHtml);
					$('.Total_assignments .expose').on('click', FadeIn);
                     $('.AssignedTruckDetails').mCustomScrollbar();
					$('.RequestList').on("click", function () {
						// get the scollTop (distance scrolled from top)
						var scrollTop = $(window).scrollTop();
						// get the top offset of the dropdown (distance from top of the page)
						var topOffset = $(this).offset().top;
						// calculate the dropdown offset relative to window position
						var relativeOffset = topOffset-scrollTop;
						// get the window height
						var windowHeight = $(window).height();

						// if the relative offset is greater than half the window height,
						// reverse the dropdown.
						if(relativeOffset > (windowHeight - 300)){
							$(this).parent().find(".dropdown-menu").addClass("reverse");
						}
						else{
							$(this).parent().find(".dropdown-menu").removeClass("reverse");
						}
					});

					/*if(hasVerticalScrollbar($(".Total_assignments"))){
						$(".Total_assignments").css('padding-right','0px');
					}
					else
					{
						$(".Total_assignments").css('padding-right','15px');
					}*/

				}
			}
		});

	}

	var Request_Supervisor_Driver_loader_list = function () {

		$('.truckDropDown_menu_DriverList').mCustomScrollbar("destroy");
		$('.truckDropDown_menu_LoaderList').mCustomScrollbar("destroy");
		$('#SupervisorDropDown').empty();
		//$('.SelectedSupervisor').empty();

		$('.truckDropDown_menu_DriverList').empty();
		$('.truckDropDown_menu_LoaderList').empty();
		$.ajax({
			async: false,
			url: SuperVisorRequestUrl,
			type: "GET",
			dataType: 'json',
			crossDomain: true,
			success: function (json) {
				if (json != undefined) {
					var SupervisorList = json.SupervisorList;
					var DriverList = json.DriverList;
					var LoaderList = json.LoaderList;
					var SupervisorName = '<a class="dropdown-item" style="color:white;" href="#" id ="0">N/A</a>';
					var DriverName = '<a class="dropdown-item" style="color:black;" href="#" id ="0">N/A</a>';
					var LoaderName = '<a class="dropdown-item" style="color:black;" href="#" id ="0">N/A</a>';
					$.each(SupervisorList, function (key, item) {
						SupervisorName += '<a class="dropdown-item box" style="color:white;" href="#" id = ' + item.EmployeeId + '>' + item.FullName + '</a>'
					});
					$.each(DriverList, function (key, item) {
						DriverName += '<a class="dropdown-item box" style="color:black;" href="#" id = ' + item.EmployeeId + '>' + item.FullName + '</a>'
					});
					$.each(LoaderList, function (key, item) {
						LoaderName += '<a class="dropdown-item box" style="color:black;" href="#" id = ' + item.EmployeeId + '>' + item.FullName + '</a>'
					});
					$('#SupervisorDropDown').append(SupervisorName);
					$('.truckDropDown_menu_DriverList').append(DriverName);
					$('.truckDropDown_menu_LoaderList').append(LoaderName);

					$('.truckDropDown_menu_DriverList').mCustomScrollbar();
					$('.truckDropDown_menu_LoaderList').mCustomScrollbar();
				}
			}
		});

	}



	var Task_cards_layout = function(key, item) {

              color = Colors[item.StatusId-1];
              HeaderTextColor = HeaderTextColors[item.StatusId-1];
                if (item.StatusId == 2) {
                                 TextColor = TextColors[0];
                             }else {
                                  TextColor = TextColors[1];
                             }

														 CustomCard += '<div class="col-md-5ths col-xs-6" id="' + item.RequestId + '">\
									 <div class="card CustomCards" style="border:0px;" id="' + item.RequestId + '">\
											 <div style="color:white;height: 36px;">\
														 <div class="btn-group" style="width:100%; margin:0px; padding:0px;border-bottom:1px solid grey;">\
								 <div class="btn" style="background-color:white;"><span class="AssignedSRNumber" style=" color:' + HeaderTextColor + ';"><b>' + item.SRNumber + '</b></span></div>'

								 if (item.StatusId == 1) {
									CustomCard += '<button type="button" class=" expose btn dropdown dropdown-split truckMenuDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  style="float:right;background-color:#457cfb; border-radius:5px;margin:2px 5px 0px 0px; padding:0px 3px 0px 3px;height:30px;">\
									 <span class="AssignedTruck" style="margin-bottom:3px; color:white;">' + item.TruckSerialNo + '</span>\
								 </button>\
									 <div class="dropdown-menu truckDropDown_menu truckDropDown_menu_list" data-mcs-theme="minimal-dark" style="border:0px; width:100%; max-height:150px;overflow:auto;"></div></div></div>'
								 } else {
										CustomCard += '<div style="float:right;background-color:#457cfb; border-radius:5px;margin:2px 5px 0px 0px; padding:5px 3px 0px 3px;height:30px;">\
									 <span class="AssignedTruck" style="margin-bottom:-3px; color:white;">' + item.TruckSerialNo + '</span>\
								 </div></div></div>'
								 }
										CustomCard += '<div class="card-block" style="padding:0px 5px 5px 5px"; >\
													 <p class="card-text">\
															 <span class="box">'+item.BuildingNumber +' ' + item.Street + '</span>\
															 <span style="float:right;">\
																	 <b>' + DistrictIDName+ '</b>\
															 </span>\
													 </p>\
													 <p class="card-text">\
															 <span>\
																	<img src="/assets/dsny/dashboard/includes/img/Black-CRT-TV-Icon.svg" alt="TV Icon" style="width:25px;height:20px; padding:0px; margin-right:3px;margin-top:-4px;">\
															 </span>\
															 <span>CRT (' + item.CRTTVs + ')</span> &\
															 <span><img src="/assets/dsny/dashboard/includes/img/black-TV.svg" alt="TV Icon" style="width:20px;height:15px; padding:0px; margin-right:5px;"></span>\
													 <span>LCD (' + item.LCDTVs + ')</span>\
													 <span style="float:right;">' + item.TVTotal + '</span>\
													 </p>\
											 <p class="card-text">\
													 Other<span style="float:right;">' + item.OthersTotal + '</span>\
											 </p>';
											  if (item.StatusId == 1 ) {
                       CustomCard += '<div class="overlay" id="' + item.RequestId + '"><button class="overlayButtonDetail completePopup"  type="button">Details</button><button class="OverlaymultiSelect PlainButton" id="' + item.SRNumber + '" type="button">Select <i class="fa fa-check-circle fa-lg" aria-hidden="true"></i></button></div>\
											 </div> <div id="' + item.SRNumber + '"class=" lockUnlock UnChecked" style="text-align: center; padding-top:70px;"><i class="fa fa-check  fa-3x" style="color:rgba(255, 255, 255, 1)"aria-hidden="true"></i></div>';

										 } else {
											 CustomCard += '<div class="overlay" id="' + item.RequestId + '"><button class="overlayButtonDetail completePopup"  type="button">Details</button></div></div>';
										 }
									CustomCard += '<div style="background-color:' + color + '; color:' + TextColor + '; border-radius:0px 0px 4px 4px; height: 36px; border:1px ' + color + ';">\
											 <p style="padding:5px; margin-left:10px;"><span><b>' + item.Status + '</b></span>';
											 if (item.StatusId == 1 || item.StatusId == 2 ) {
							 CustomCard += '<span id="selected" style="float:right; margin-right:10px;">Total ' + item.TotalRequestItems + '</span></p></div></div></div>';
											 } else {
												 CustomCard += '<span id="selected" style="float:right; margin-right:10px;">' + item.ReasonType + '</span></p></div></div></div>';
											 }
         };


	var RequestDashboard = function (Date, Borough, DistrictID, TruckId) {
		$('.dynamicData').mCustomScrollbar("destroy")
		$(".dynamicData").empty();
		var RequestUrl = APIUrl + '/ePickupsAPI/api/Dashboard/GetDashboard?SearchDate=' + Date + '&Borough=' + Borough + '&DistrictId=0&TruckId=' + TruckId;

		$.ajax({
			async: false,
			url: RequestUrl,
			type: "GET",
			dataType: 'json',
			crossDomain: true,
			success: function (json) {
				if (json != undefined) {
          CustomCard = '';
					var DistrictIDName = '';
          var DistrictID = new Array();
          var DistrictCard = '';
					var RequestedQuantitiesDescriptions = ['PendingRequestsTotal','UnserviceableRequestsTotal','CompletedRequestsTotal','NotOnLocationRequestsTotal','TotalCRTTVs','TotalLCDTVs','TotalOthers','PickedUpCRTTVSmallerThan20',
		                        'PickedUpCRTTV20to30','PickedUpCRTTV31to40','PickedUpCRTTV41to50','PickedUpCRTTV51to60','PickedUpCRTTVLargerThan60','PickedUpLCDTVSmallerThan20','PickedUpLCDTV20to30','PickedUpLCDTV31to40','PickedUpLCDTV41to50','PickedUpLCDTV51to60','PickedUpLCDTVLargerThan60',
								'PendingLCDTVLargerThan60','PendingLCDTV51to60','PendingLCDTV41to50','PendingLCDTV31to40','PendingLCDTV20to30','PendingLCDTVSmallerThan20','PendingCRTTVLargerThan60','PendingCRTTV51to60','PendingCRTTV41to50','PendingCRTTV31to40','PendingCRTTV20to30','PendingCRTTVSmallerThan20'];
				  var RequestedTVSDescriptions = ['TotalPendingCRTTVs','TotalPendingLCDTVs','TotalPickedUpCRTTVs','TotalPickedUpLCDTVs','TotalPendingOthers','TotalPickedUpOthers'];

							if (json[0] == undefined) {

								  RequestedQuantitiesDescriptions.forEach(function(desc) {
		                              $('#'+desc).append('0');
		                            });

									 RequestedTVSDescriptions.forEach(function(desc) {
		                              $('.'+desc).append('0');
		                            });

									$('.TotalPendingItems').append('0');
		                            $('.TotalPickedUpItems').append('0');

		                        if (TruckId == '0') {
		                        $('#target').append('<div class="alert alert-warning" style="margin:20px;text-align:center;" role="alert">There are no tasks on <strong>' + $('.selectedDate').val() + ', Staten Island, ' + $('.selectedDistrict').text() + '.</strong></div>');
		                        }else {

		                          $('#target').append('<div class="alert alert-warning" style="margin:20px;text-align:center;" role="alert">There are no tasks on <strong>' + $('.selectedDate').val() + ', Staten Island, ' + $('.selectedDistrict').text() + ','+TruckId+'.</strong></div>');
		                        }


							} else {

								var FirstOject = json[0];
								DistrictID = FirstOject.DistrictsList.split(",");

								var TotalPendingRequestedQuantity = parseInt(FirstOject.TotalPendingCRTTVs) + parseInt(FirstOject.TotalPendingLCDTVs) + parseInt(FirstOject.TotalPendingOthers);
								var TotalPickedUpRequestedQuantity = parseInt(FirstOject.TotalPickedUpCRTTVs) + parseInt(FirstOject.TotalPickedUpLCDTVs) + parseInt(FirstOject.TotalPickedUpOthers);


		                         RequestedQuantitiesDescriptions.forEach(function(desc) {
		                              $('#'+desc).append(FirstOject[desc]);
		                            });

									 RequestedTVSDescriptions.forEach(function(desc) {
		                              $('.'+desc).append(FirstOject[desc]);
		                            });

									$('.TotalPendingItems').append(TotalPendingRequestedQuantity);
		                            $('.TotalPickedUpItems').append(TotalPickedUpRequestedQuantity);

						if (SortByDistrict){
								DistrictID.forEach(function(dist) {
									CustomCard += '<div id='+dist+' class="col-lg-12"><div id='+dist+' class="col-lg-12" style="margin5px;padding:5px;" ><div class="col-lg-1" style="width:60px;">'+dist+'</div><div class="col-lg-11" style="background-color: #5b4d7c; margin-top:12px; padding:0px; width:95%;"></div></div>';
									$.each(json, function(key, item) {
										if ( dist == item.District){
											Task_cards_layout(key, item);
										}
									});
									CustomCard += '</div>';
								});
							} else
							{
									$.each(json, function(key, item) {
									if (DistrictID == 0) {
										DistrictIDName = item.District
									}
									Task_cards_layout(key, item);
								   });
							}
						}

						$('#target').append(CustomCard);
						//$('#target').addClass('row dynamicData mCustomScrollbar');
						$('.CustomCards .btn-group .expose').on('click', FadeIn);
                         flipCard()
						//$(".mCustomScrollbar").mCustomScrollbar();
						//$("#target").mCustomScrollbar();
						//$("#target").mCustomScrollbar({ theme: "minimal-dark" });
						//$("#target").mCustomScrollbar("update");
						$('.dynamicData').mCustomScrollbar();
					}
				}

		});

	}

	//$('body').ready(RequestDashboard($('.selectedDate').val(), 'All', '0', '0'));
	//$('body').ready(Request_Assignments('staten Island', $('.selectedDistrict').attr('id'), $('.selectedDate').val()));

	// To hide the footer
	var HideFooter = function() {$('#SelectedTasks').removeClass('FooterSelected').addClass('FooterNotSelected')};

	//Selected Taks with multi select option
	$(document).on('click','.OverlaymultiSelect',function (e) {
	$(this).parent().parent().parent().find('.lockUnlock').removeClass('UnChecked').addClass('Checked');
	SelectedTaskID = $(this).parent().parent().parent().attr('id');
	SelectedIds(SelectedTaskID);
	 SortSRNO($(this).attr('id'));
	});

	// Tapped to unlock the task cards.
	$(document).on("click", ".lockUnlock", function() {
	 $(this).removeClass('Checked').addClass('UnChecked');
	 SelectedTaskID = $(this).parent().parent().attr('id');
	 SelectedIds(SelectedTaskID);
	 SortSRNO($(this).attr('id'));
	});

	// function to append and delete Ids from array.
	var SelectedIds = function(x) {
	    console.log(x);
	    var found = jQuery.inArray(x, SelectedTaskIDS) ;
	  if (found >= 0) {
	      console.log("Element was found Removed - "+ x);
	    // Element was found, remove it.
	    SelectedTaskIDS.splice(found, 1);
	} else {
	     console.log("Element was not found Added - "+ x);
	    // Element was not found, add it.
	    SelectedTaskIDS.push(x);
	}
	console.log(SelectedTaskIDS);
	$('#totalSelected').text( SelectedTaskIDS.length) ;
	if ( SelectedTaskIDS.length == 0 ){
	HideFooter();
	} else
	{
	 $('#SelectedTasks').removeClass('FooterNotSelected').addClass('FooterSelected');
	}
	}


	// function to append and delete SRNOs from array.
	var SortSRNO = function(x) {
	    console.log(x);
	    var found = jQuery.inArray(x, SelectedSRNOS) ;
	  if (found >= 0) {
	      console.log("SRNO was found Removed - "+ x);
	    // Element was found, remove it.
	    SelectedSRNOS.splice(found, 1);
	} else {
	     console.log("SRNO was not found Added - "+ x);
	    // Element was not found, add it.
	    SelectedSRNOS.push(x);
	}
	console.log(SelectedSRNOS.toString());
	}


// to change the filter
	$(document).on("click", ".SelectedStatusList a", function () {

	 var SortType = $(this).text();
	 $("#SelectedStatus").text($(this).text())

if ($(this).text() == "District"){
	 SortByDistrict = true
} else if ($(this).text() == "Status")
{
SortByDistrict = false
}
RequestDashboard($('.selectedDate').val(), 'Staten Island', $('.selectedDistrict').attr('id'), '0');
Request_Assignments('staten Island', $('.selectedDistrict').attr('id'), $('.selectedDate').val());


	});

	// to unselect All the task cards
	$(document).on("click", "#unselectAll", function() {

	           $('.Checked').removeClass('Checked').addClass('UnChecked');
	           $('#SelectedTasks').removeClass('FooterSelected').addClass('FooterNotSelected');
	           SelectedTaskIDS = [];
						 SelectedSRNOS = [];
	});

	// to select all the task cards
	$(document).on("click", "#selectAll", function() {
	                   $.each($('.UnChecked'), function() {
	                   console.log("Unlocked ID - "+ $(this).parent().attr('id') );
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

			var Update_truck_post_url = APIUrl + '/ePickupsAPI/api/Dashboard/UpdateTruckForPickupRequest?SRNo=' + SelectedSRNOS.toString() + '&TruckId=' + $(this).attr("id");
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
						RequestDashboard($('.selectedDate').val(), 'Staten Island', $('.selectedDistrict').attr('id'), '0');
						Request_Assignments('staten Island', $('.selectedDistrict').attr('id'), $('.selectedDate').val());
						$('.Checked').removeClass('Checked').addClass('UnChecked');
						$('#SelectedTasks').removeClass('FooterSelected').addClass('FooterNotSelected');
						SelectedTaskIDS = [];
						SelectedSRNOS = [];

					}
				}
			});
	});
//To delete multiple tasks for snow
	$(document).on("click", "#BulkCancellation", function() {
		jQuery.support.cors = true;

		var BulkSnow = {
	                         Status:  'Request Cancelled',
	                         strRequestId:''+SelectedTaskIDS.toString(),
							 ReasonType:'Snow',
							 StatusId: 5 ,
							 IsCompleteRequest:false

	                     };
			var getDateUrl = APIUrl + '/ePickupsAPI/api/PickupRequest/CancelPickupRequest';
			$.ajax({
				async: false,
				url: getDateUrl,
				data: BulkSnow,
				type: "POST",
			dataType: 'json',
			crossDomain: true,
			success: function (data) {
				if (data != undefined) {
					$('#msgModal').modal('hide');
					RequestDashboard($('.selectedDate').val(), 'Staten Island', $('.selectedDistrict').attr('id'), '0');
					Request_Assignments('staten Island', $('.selectedDistrict').attr('id'), $('.selectedDate').val());
					$('.Checked').removeClass('Checked').addClass('UnChecked');
					$('#SelectedTasks').removeClass('FooterSelected').addClass('FooterNotSelected');
					SelectedTaskIDS = [];
					SelectedSRNOS = [];

				}
			}
		});

		return false;
	});



	$(document).keypress("a",function(e) {
	  if(e.ctrlKey){
	      if (e.which == 1) {
	   $.each($('.UnChecked'), function() {

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




	$('body').ready( function() {

	});

	//$('body').ready(RequestDashboard(SearchDate, SelecteBorough, selectedDistrictID, '0'));
	//$('body').ready(Request_Assignments(SelecteBorough, selectedDistrictID, SearchDate));



	$(function () {
//          $(window).on("load",function(){
//            $(".content").mCustomScrollbar();
//        });



		jQuery.support.cors = true;


		$(".dynamicData").mCustomScrollbar();
		$(".AssignedTruckDetails").mCustomScrollbar();
		$("#datetimepicker2").val(SearchDate);
		$(".selectedDistrict").attr("id", selectedDistrictID);
		$(".selectedDistrict").text(selectedDistrictName);
		$("#SelectedDay").text(dayOfWeekAsString(new Date(SearchDate).getDay()));
		RequestDashboard(SearchDate, SelecteBorough, selectedDistrictID, '0');
		Request_Assignments(SelecteBorough, selectedDistrictID, SearchDate);

		$(document).on("click", ".truckMenuDropdown", function () {
			Request_Truck_list('staten Island', $('.selectedDistrict').attr('id'), $('.selectedDate').val())
		});

		$(document).on("click", ".RequestList", function () {
			Request_Supervisor_Driver_loader_list()
		});

		$(document).on("click", ".dropdown-menu a", function () {

			$(this).parents(".btn-group").find('.card-text').text($(this).text());
			$(this).parents(".btn-group").find('.card-text').val($(this).text());
			$(this).parents(".btn-group").find('.card-text').attr('id', $(this).attr('id'));

		});

		$(document).on("click", ".UpdateDistrict", function () {

			sessionStorage.setItem("district", $('.selectedDistrict').attr('id'));
			sessionStorage.setItem("districtName", $(".selectedDistrict").text());
			RequestDashboard($('.selectedDate').val(), 'Staten Island', $('.selectedDistrict').attr('id'), '0');
			Request_Assignments('staten Island', $('.selectedDistrict').attr('id'), $('.selectedDate').val());

		});

		$(document).on("click", ".TotalAssignmentFilter", function () {
			RequestDashboard($('.selectedDate').val(), 'Staten Island', $('.selectedDistrict').attr('id'), '0');
			sessionStorage.setItem("truckId", 0);
		});
		$(document).on("click", ".AssignmentFilter", function () {
			RequestDashboard($('.selectedDate').val(), 'Staten Island', $('.selectedDistrict').attr('id'), $(this).attr('id'));
			sessionStorage.setItem("truckId", $(this).attr('id'));
		});


		// to Update the DropDown Items  selectedDistrict

		$(".selectedDate").on("dp.change", function () {

			var myDate = new Date($('.selectedDate').val());
			var day = myDate.getDay();
			sessionStorage.setItem("pickupdate", $('.selectedDate').val());

			if($('.selectedDate').val() != $('#SelectedDay').text())
			{
				$('#SelectedDay').text(dayOfWeekAsString(day));

				if ($('#overlay').is(':visible')) {
					$('#overlay').fadeOut(300, function () {
						$('.expose').css('z-index', '1');
					});
				}

				RequestDashboard($('.selectedDate').val(), 'Staten Island', $('.selectedDistrict').attr('id'), '0');
				Request_Assignments('staten Island', $('.selectedDistrict').attr('id'), $('.selectedDate').val());
			}

		});


		// for black out animation

		$('.firstDiv .expose').on('click', FadeIn);
		$('#datetimepicker2 .expose').on('click', FadeIn);
		$('#open-datetimepicker .expose').on('click', FadeIn);
		$(document).on('click', FadeOut);




		$(document).on("click", ".truckDropDown_list", function () {

			var TruckNumber = $(this).text();
			var TruckID = $(this).attr('id');
			var selectedClass = this;

			var Update_truck_post_url = APIUrl + '/ePickupsAPI/api/Dashboard/UpdateTruckForPickupRequest?SRNo=' + $(this).parents(".btn-group").find('.AssignedSRNumber').text() + '&TruckId=' + $(this).attr("id");
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
						RequestDashboard($('.selectedDate').val(), 'Staten Island', $('.selectedDistrict').attr('id'), '0');
						Request_Assignments('staten Island', $('.selectedDistrict').attr('id'), $('.selectedDate').val());

					}
				}
			});
		});



		$(document).on("click", " #SupervisorDropDown a", function () {
			var EmployeeId = $(this).attr("id");
			var Update_Supervisor_post_url = APIUrl + '/ePickupsAPI/api/Dashboard/UpdateEmployeeAssignment?EmployeeType=Supervisor&DistrictId=0&EmployeeId=' + EmployeeId + '&TruckId=0&OverRide=false&Borough=Staten Island';

			$.ajax({
				async: false,
				url: Update_Supervisor_post_url,
				type: "POST",
				dataType: 'json',
				crossDomain: true,
				success: function (json) {

					if (json.length > 5) {

						var alertModal = '<div class="modal-header" style="color:white;background-color:red;height:30px;padding:3px; margin:0px">\
				  <b style="margin-left:10px;">Supervisor Not available</b>\
				   </div>\
				<div class="modal-body" style="height:80px;">\
				  <p>' + json + '</p>\
				   </div>\
				<div class="modal-footer" style="height:60px;border:0px;">\
			 <button type="button" style="color:white;background-color:grey; width:100px;" class="btn" id="Dont_update_supervisor" data-dismiss="modal">No</button>\
			 <button type="button" style="color:white;background-color:red; width:100px;" class="btn" id="update_supervisorAssignment"  data-dismiss="modal">Yes</button>\
			</div>'
						$('.AlertContent').html(alertModal);
						$('.alertModal').modal('show');


						$('.alertModal').on("click", "#Dont_update_supervisor", function () {
							RequestDashboard($('.selectedDate').val(), 'Staten Island', $('.selectedDistrict').attr('id'), '0');
							Request_Assignments('staten Island', $('.selectedDistrict').attr('id'), $('.selectedDate').val());

						});

						$('.alertModal').on("click", "#update_supervisorAssignment", function () {
							var Update_Supervisor_url = APIUrl + '/ePickupsAPI/api/Dashboard/UpdateEmployeeAssignment?EmployeeType=Supervisor&DistrictId=0&EmployeeId=' + EmployeeId + '&TruckId=0&OverRide=true&Borough=Staten Island';

							$.ajax({
								async: false,
								url: Update_Supervisor_url,
								type: "POST",
								dataType: 'json',
								crossDomain: true,
								success: function (json) {

									RequestDashboard($('.selectedDate').val(), 'Staten Island', $('.selectedDistrict').attr('id'), '0');
									Request_Assignments('staten Island', $('.selectedDistrict').attr('id'), $('.selectedDate').val());
								}
							});

						});

					} else {

						RequestDashboard($('.selectedDate').val(), 'Staten Island', $('.selectedDistrict').attr('id'), '0');
						Request_Assignments('staten Island', $('.selectedDistrict').attr('id'), $('.selectedDate').val());

					}
				}
			});

		});

		$(document).on("click", ".truckDropDown_menu_DriverList a", function () {

			var EmployeeId = $(this).attr("id");
			var TruckId = $(this).parents(".Truck_details").find(".AssignmentFilter").attr("id");
			var Update_Driver_post_url = APIUrl + '/ePickupsAPI/api/Dashboard/UpdateEmployeeAssignment?EmployeeType=Driver&DistrictId=0&EmployeeId=' + EmployeeId + '&TruckId=' + TruckId + '&OverRide=false&Borough=Staten Island';

			$.ajax({
				async: false,
				url: Update_Driver_post_url,
				type: "POST",
				dataType: 'json',
				crossDomain: true,
				success: function (json) {

					if (json.length > 5) {

						var alertModal = '<div class="modal-header" style="color:white;background-color:red;height:30px;padding:3px; margin:0px">\
				  <b style="margin-left:10px;">Personnel Not available</b>\
				   </div>\
				<div class="modal-body" style="height:80px;">\
				  <p>' + json + '</p>\
				   </div>\
				<div class="modal-footer" style="height:60px;border:0px;">\
			 <button type="button" style="color:white;background-color:grey; width:100px;" class="btn Dont_update_Driver" data-dismiss="modal">No</button>\
			 <button type="button" style="color:white;background-color:red; width:100px;" class="btn update_DriverAssignment"  data-dismiss="modal">Yes</button>\
			</div>'
						$('.AlertContent').html(alertModal);
						$('.alertModal').modal('show');

						$('.alertModal').on("click", ".Dont_update_Driver", function () {
							RequestDashboard($('.selectedDate').val(), 'Staten Island', $('.selectedDistrict').attr('id'), '0');
							Request_Assignments('staten Island', $('.selectedDistrict').attr('id'), $('.selectedDate').val());

						});


						$('.alertModal').on("click", ".update_DriverAssignment", function () {

							var Update_Driver_url = APIUrl + '/ePickupsAPI/api/Dashboard/UpdateEmployeeAssignment?EmployeeType=Driver&DistrictId=0&EmployeeId=' + EmployeeId + '&TruckId=' + TruckId + '&OverRide=true&Borough=Staten Island';

							$.ajax({
								async: false,
								url: Update_Driver_url,
								type: "POST",
								dataType: 'json',
								crossDomain: true,
								success: function (json) {

									RequestDashboard($('.selectedDate').val(), 'Staten Island', $('.selectedDistrict').attr('id'), '0');
									Request_Assignments('staten Island', $('.selectedDistrict').attr('id'), $('.selectedDate').val());
								}
							});

						});

					} else {

						RequestDashboard($('.selectedDate').val(), 'Staten Island', $('.selectedDistrict').attr('id'), '0');
						Request_Assignments('staten Island', $('.selectedDistrict').attr('id'), $('.selectedDate').val());

					}
				}
			});

		});



		$(document).on("click", ".truckDropDown_menu_LoaderList a", function () {

			var EmployeeId = $(this).attr("id");
			var TruckId = $(this).parents(".Truck_details").find(".AssignmentFilter").attr("id");
			var Update_Loader_post_url = APIUrl + '/ePickupsAPI/api/Dashboard/UpdateEmployeeAssignment?EmployeeType=Loader&DistrictId=0&EmployeeId=' + EmployeeId + '&TruckId=' + TruckId + '&OverRide=false&Borough=Staten Island';
			$.ajax({
				async: false,
				url: Update_Loader_post_url,
				type: "POST",
				dataType: 'json',
				crossDomain: true,
				success: function (json) {

					if (json.length > 5) {

						var alertModal = '<div class="modal-header" style="color:white;background-color:red;height:30px;padding:3px; margin:0px">\
				  <b style="margin-left:10px;">Personnel Not available</b>\
				   </div>\
				<div class="modal-body" style="height:80px;">\
				  <p>' + json + '</p>\
				   </div>\
				<div class="modal-footer" style="height:60px;border:0px;">\
			 <button type="button" style="color:white;background-color:grey; width:100px;" class="btn Dont_update_Loade" data-dismiss="modal">No</button>\
			 <button type="button" style="color:white;background-color:red; width:100px;" class="btn update_LoaderAssignment"  data-dismiss="modal">Yes</button>\
			</div>'
						$('.AlertContent').html(alertModal);
						$('.alertModal').modal('show');

						$('.alertModal').on("click", ".update_LoaderAssignment", function () {

							var Update_Loader_url = APIUrl + '/ePickupsAPI/api/Dashboard/UpdateEmployeeAssignment?EmployeeType=Loader&DistrictId=0&EmployeeId=' + EmployeeId + '&TruckId=' + TruckId + '&OverRide=true&Borough=Staten Island';

							$.ajax({
								async: false,
								url: Update_Loader_url,
								type: "POST",
								dataType: 'json',
								crossDomain: true,
								success: function (json) {
									RequestDashboard($('.selectedDate').val(), 'Staten Island', $('.selectedDistrict').attr('id'), '0');
									Request_Assignments('staten Island', $('.selectedDistrict').attr('id'), $('.selectedDate').val());
								}
							});

						});

						$('.alertModal').on("click", ".Dont_update_Loade", function () {

							RequestDashboard($('.selectedDate').val(), 'Staten Island', $('.selectedDistrict').attr('id'), '0');
							Request_Assignments('staten Island', $('.selectedDistrict').attr('id'), $('.selectedDate').val());

						});

					} else {

						RequestDashboard($('.selectedDate').val(), 'Staten Island', $('.selectedDistrict').attr('id'), '0');
						Request_Assignments('staten Island', $('.selectedDistrict').attr('id'), $('.selectedDate').val());

					}
				}
			});

		});

		//bulkTruck

		$(document).on("click", ".BulktruckMenuDropdown", function () {
			Bulk_Request_Truck_list('staten Island', $('.selectedDistrict').attr('id'), $('.selectedDate').val())
		});

		var Bulk_Request_Truck_list = function (Borough, DistrictID, SelectedDate) {
		$('.truckDropDown_menu_list').empty();
		var AssignmnetsUrl = APIUrl + '/ePickupsAPI/api/Dashboard/GetTrucks?Borough=' + Borough + '&DistrictId=0&searchdate=' + SelectedDate;
		$.ajax({
			async: false,
			url: AssignmnetsUrl,
			type: "GET",
			dataType: 'json',
			crossDomain: true,
			success: function (json) {
				if (json != undefined) {
					var TruckList = '';
					$.each(json, function (key, item) {
						TruckList += '<a class="dropdown-item BulktruckDropDown_list" style="color:black;" id= ' + item.TruckId + ' href="#">' + item.TruckSerialNo + '</a>'
					});
					$('.truckDropDown_menu_list').append(TruckList);
				}
			}
		});
	}


	$("#SR_search_input").keyup(function(event){
    if(event.keyCode == 13){
			complete_Popup("SRNO",$("#SR_search_input").val());
			$("#SR_search_input").val('');
    }
	});






		$('#print').click(function () {
			window.location.href = '/assets/dsny/stagingdashboard/printdashboard.shtml';
			return false;
		});

		$('.logoutButton').click(function () {
			sessionStorage.setItem("pickupdate", "");
			sessionStorage.setItem("borough", "");
			sessionStorage.setItem("district", "");
			window.location.href = '/assets/dsny/stagingdashboard/login.shtml';
			return false;
		});

	});



	$("input, select, textarea, form, button btn-group").css("outline", "none");
	$("input, select, textarea, form, button btn-group").css("box-shadow", "none");
