$(document).on("click", ".completePopup", function () {
		reqNumber = $(this).parent()[0].id;
		complete_Popup("ID",reqNumber);
	});

	var complete_Popup = function (ReqType,reqNumber) {


					$('#hardCategory').show();
					$('#tvCategory').hide();
					$('#submitreq').hide();
					$('#pndSubCategory').show();
					$('#cmpSubCategory').hide();
					$('#UnserviceableReason').hide();


					var color = '';
					var textColor = '';
					var HeaderTextColor = '';

					$('#btnComplete').show();
					$('#btnNol').show();
					$('#btnCancel').show();
					$('#btnUnserviceable').show();

					$('#card').empty();

					var CustomCard = '';

				   if (ReqType == "ID"){
							 CompleteURL = APIUrl + '/ePickupsAPI/api/BulkPickups/GetAssignmentDetails?pickupRequestId=' + reqNumber;
						 }else if (ReqType == "SRNO"){
							 CompleteURL = APIUrl + '/ePickupsAPI/api/BulkPickups/GetBySRNoAssignmentDetails?SRNo=' + reqNumber;
						 }else {
							CompleteURL = APIUrl + '/ePickupsAPI/api/BulkPickups/GetAssignmentDetails?pickupRequestId=' + reqNumber;
						 }


					$.ajax({
						async: false,
						url: CompleteURL,
						type: "GET",
						dataType: 'json',
						crossDomain: true,
						success: function (data) {

							if (data != undefined) {

								insertData = data.PickupRequest;
								var item = data.PickupRequest;
								var arr = data.ItemSummaries;
								CatgoryList = [];
								var ctgStr = '';

								color = Colors[item.StatusId-1];
			               HeaderTextColor = HeaderTextColors[item.StatusId-1];
			                 if (item.StatusId == 2) {
			                                  TextColor = TextColors[0];
			                              }else {
			                                   TextColor = TextColors[1];
			                              }
																		CustomCard += '<div id="' + item.PickupRequestId + '">\
																									 <div class="card CustomCards" style="border:0px;" id="' + item.PickupRequestId + '">\
																											 <div style="color:white;height: 36px;">\
																														 <div class="btn-group" style="width:100%; margin:0px; padding:0px;">\
																								 <div class="btn" style="background-color:white;"><span class="AssignedSRNumber" style=" color:' + HeaderTextColor + ';"><b>' + item.SRNo + '</b></span></div>';
																								 if (item.RouteOrder > 0){
																                CustomCard +=	'<div class="RouteBadge">' + item.RouteOrder + '</div>';
																                 }
																					CustomCard +=	'</div></div>';
																		CustomCard += '<div class="card-block" style="padding:0px 5px 5px 5px"; >\
																													 <p class="card-text ">\
																															 <div class="box TaskCardAddressLabel">'+ item.PickupAddress + '</div>\
																													 <span style="float:right;"><b>' + item.DistrictName + '</b></span>\
																													 </p>\
																											 <p class="card-text">\
																													 Total Items<span style="float:right;">' + item.ItemsCount + '</span>\
																											 </p>';
																											 CustomCard += '<div style="background-color:' + color + '; color:' + TextColor + '; border-radius:0px 0px 4px 4px; height: 36px; border:1px ' + color + ';">\
																 																				 <p style="padding:5px; margin-left:10px;"><span><b>' + item.StatusName + '</b></span>';
																 									    if (item.StatusId == 1 || item.StatusId == 2) {
																 									        CustomCard += '<span id="selected" style="float:right; margin-right:10px;"></span></p></div></div></div>';
																 									    } else {
																 									        CustomCard += '<span id="selected" style="float:right; margin-right:10px;">' + item.ReasonType + '</span></p></div></div></div>';
																 									    }
											CardComments = '';
											if (item.Comments.length > 0) {
											CardComments = '<div class="card"><div style=" width:100%;"><div style="height: 36px; background-color:#535a5f; color:white; border-bottom:1px solid white;"><span style="margin-left:10px;vertical-align: middle;">Comments</span></div> </div><div class="row divrowmargin"><div class="col-xs-12"><span id="canComments" class="dynamicData col-xs-8-margin" style=" word-wrap: break-word;"> &nbsp;' + item.Comments + '</span></div></div></div>'
										}
								$('#card').append(CustomCard + CardComments);
								$('#ItemCtegoryTotal').text(insertData.ItemsCount);
								$('[id=ppfname]').text(insertData.FirstName);
								$('[id=pplname]').text(insertData.LastName);
								$('[id=ppPhone]').text(insertData.Phone);
								$('[id=ppEmail]').text(insertData.Email);
								$('[id=ppAppointmentDate]').text(moment(insertData.AppointmentDate).format("MM/DD/YYYY"));
								$('[id=ppCreatedOn]').text(' '+insertData.CreatedDate);
								$('[id=ppLastUpdatedOn]').text(' '+insertData.LastUpdatedDate);
								$('[id=ppUpdatedUser]').text(' '+insertData.LastUpdatedBy);
								var strAddress = insertData.PickupAddress+ ', ' + insertData.Borough
								$('[id=ppaddress]').text(strAddress);
								$('[id=ppCrsStreet]').text(insertData.CrossStreets);
								$('[id=ppLocation]').text(insertData.PickupAddress);
								$('[id=PickupAddress]').text(insertData.RequestedOthersTotal);
								$('#ppComments').text(insertData.Comments);

								$.each(arr, function (key, item) {
             let subItems = item.PickupRequestSubItems;
									if (subItems.length > 0 ){
										ctgStr += ' <div class="row divborder">\
												<div class="col-md-6ths col-xs-9 ctgName ">'+ item.Category + '</div><div class="col-md-3ths col-xs-3 qtyRight" ></div>\
												</div>'
                  $.each(subItems, function (key, subItem){
										ctgStr += ' <div class="row divborder">\
												<div class="col-md-6ths col-xs-9 ctgName SubCategory ">'+ subItem.SubCategoryName + '</div><div class="col-md-3ths col-xs-3 qtyRight" >'+subItem.RequestedQty+'</div>\
												</div>'
									});
								}else {
									ctgStr += ' <div class="row divborder">\
											<div class="col-md-6ths col-xs-9 ctgName ">'+ item.Category + '</div><div class="col-md-3ths col-xs-3 qtyRight" >' + item.RequestedQty + '</div>\
										</div>';
								}
								});
								$('#BulkItemCtegory').html(ctgStr);
                   	if (item.StatusId != 0){

					     if (item.StatusId != 1) {
						$('#btnComplete').hide();
						$('#btnNol').hide();
						$('#btnCancel').hide();
		        $('#btnUnserviceable').hide();
						$('#msgModal').modal('show');
					} else {
						$('#msgModal').modal('show');
					  }
					} else {
						var alertModal = '<div class="modal-header" style="color:white;background-color:red;height:30px;padding:3px; margin:0px">\
					<b style="margin-left:10px;">Error !!</b>\
					 </div>\
				<div class="modal-body" style="height:25px;">\
					<p>Please Enter a Valid SRNO</p>\
					 </div>\
				<div class="modal-footer" style="height:60px;border:0px;">\
			 <button type="button" style="color:white;background-color:grey; width:100px;" class="btn dismissAlert" data-dismiss="modal">Dismiss</button>\
			</div>'
						$('.AlertContent').html(alertModal);
						$('.alertModal').modal('show');

					}
							}
						}
					});

						$('#mscmplform input[type="text"]').tooltipster({
							trigger: 'custom',
							onlyOne: true,
							position: 'bottom'
						});
						$('#mscmplform textarea').tooltipster({
							trigger: 'custom',
							onlyOne: true,
							position: 'bottom'
						});
						$('#mscmplform select').tooltipster({
							trigger: 'custom',
							onlyOne: true,
							position: 'bottom'
						});
	 }

	// Unserviceable Button click
	$('#btnUnserviceable').click(function () {
		$('#hardCategory').hide();
		$('#tvCategory').hide();
		$('#submitreq').show();
		$('#pndSubCategory').hide();
		$('#cmpSubCategory').hide();
		$('#btnComplete').hide();
		$('#btnNol').hide();
		$('#btnCancel').hide();
		$('#btnUnserviceable').hide();
		$('#UnserviceableReason').show();
		return false;

	});

		//To cancel the request
		$(document).on("click", "#btnCancel", function () {
		    jQuery.support.cors = true;
		    var getDateUrl = APIUrl + '/ePickupsAPI/api/BulkPickups/PickupRequestsCancelled?pickupRequestIds='+insertData.PickupRequestId+'&reasonType=&comments=&UserName='+sessionStorage.getItem("userId");
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
		$(document).on("click", "#btnNol", function () {
		    jQuery.support.cors = true;
		    var getDateUrl = APIUrl + '/ePickupsAPI/api/BulkPickups/PickupRequestsNotOnLocation?pickupRequestIds='+insertData.PickupRequestId+'&UserName='+sessionStorage.getItem("userId");
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

		//To Complete as is Cards
		$(document).on("click", "#btnComplete", function () {
		    jQuery.support.cors = true;
		    var getDateUrl = APIUrl + '/ePickupsAPI/api/BulkPickups/PickupRequestsCompleted?pickupRequestIds='+insertData.PickupRequestId+'&UserName='+sessionStorage.getItem("userId");
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

		//Update to Unserviceable
		$(document).on("click", "#btnCompleteSubmit", function () {
		    jQuery.support.cors = true;
		    var getDateUrl = APIUrl + '/ePickupsAPI/api/BulkPickups/PickupRequestsUnserviceable?pickupRequestIds='+insertData.PickupRequestId+'&reasonType='+$('input[name=gridRadios]:checked', '.form-group').val()+'&comments='+$('#UnserviceableComment').val()+'&UserName='+sessionStorage.getItem("userId");
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
