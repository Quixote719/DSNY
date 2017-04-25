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
					$('#btnPckUp').show();
					$('#btnDelete').show();
					$('#btnUnserviceable').show();


					$('#card').empty();

					$('#tvCategory').empty();
					$('#otherCtegory').empty();
					$('#otherpndCtegory').empty();

					$('#Itemctg').empty();
					$('#pckItemctg').empty();

					//var reqNumber = $(this).parent().find('span.disableClick').text();

				//	reqNumber = $(this).parent()[0].id;
					//var clncard = $(this).parent().find('div.expose').removeClass('expose')
					rn = $(this).parent().find('.CustomCards').id;
					//var card = $(this).parent().find('div.expose').removeClass('expose').clone().appendTo($('#card'));

					$('#cmlcard').empty();
					//$(this).parent().clone().removeClass('expose').appendTo($('#cmlcard'));

					//"http://msdwvw-dsndny01.csc.nycnet/ePickupsAPI/api/PickupRequest/GetPickUpRequest?SRNumber="+ reqNumber
					var CustomCard = '';

					//CompleteURL = 'http://msdwvw-dsndny01.csc.nycnet/ePickupsAPI/api/PickupRequest/GetPickUpRequestForDashboard?RequestId='+ reqNumber ;

				   if (ReqType == "ID"){
							 CompleteURL = APIUrl + '/ePickupsAPI/api/PickupRequest/GetPickUpRequestForDashboard?RequestId=' + reqNumber;
						 }else if (ReqType == "SRNO"){
							 CompleteURL = APIUrl + '/ePickupsAPI/api/PickupRequest/GetPickUpRequest?SRNumber=' + reqNumber;
						 }else {
							CompleteURL = APIUrl + '/ePickupsAPI/api/PickupRequest/GetPickUpRequestForDashboard?RequestId=' + reqNumber;
						 }



					$.ajax({
						async: false,
						url: CompleteURL,
						type: "GET",
						dataType: 'json',
						crossDomain: true,
						success: function (data) {

							if (data != undefined) {

								insertData = data;
								var item = data;
								var arr = data.PickupRequestItems;
								CatgoryList = [];
								var ctgStr = ''

								color = Colors[item.StatusId-1];
			               HeaderTextColor = HeaderTextColors[item.StatusId-1];
			                 if (item.StatusId == 2) {
			                                  TextColor = TextColors[0];
			                              }else {
			                                   TextColor = TextColors[1];
			                              }

								CustomCard += '<div  id="' + item.RequestId + '">\
										<div class="card CustomCards"   id="' + item.RequestId + '">\
											<div   style="color:white;height: 36px; padding-top:5px; margin-bottom:5px; border-radius:5px;  border-bottom:1px solid grey;">\
												   <div class="btn-group" style="width:100%;border-radius:5px;  border-bottom:1px solid #9b9b9b;">\
										<button class="btn dropdown truckMenuDropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"style=" padding:0px;width:100%; background-color:white; border:0px;border-radius:5px;  outline:none;">\
									<div><span class="AssignedSRNumber" style=" color:'+ HeaderTextColor + '; float:left; margin:5px;"><b>' + item.SRNumber + '</b></span>\
										<span class="AssignedTruck"  style="float:right;background-color:#457cfb; color:white; margin: 3px;border-radius: 5px;padding: 5px;">' + item.TruckSerialNo + '</span></div>\
										</button>\
										</div></div>\
											<div class="card-block" style="padding:0px 5px 5px 5px"; >\
												<p class="card-text">\
													<span class="box">' + item.BuildingNumber + ' ' + item.Street + '</span>\
													<span style="float:right;">\
														<b>' + item.District + '</b>\
													</span>\
												</p>\
												<p class="card-text">\
													<span>\
														<img src="/assets/dsny/stagingdashboard/includes/img/Black-CRT-TV-Icon.svg" alt="TV Icon" style="width:25px;height:20px; padding:0px; margin-right:3px;margin-top:-4px;">\
													</span>\
													<span>CRT (' + item.CRTTVs + ')</span> &\
													<span><img src="/assets/dsny/stagingdashboard/includes/img/black-TV.svg" alt="TV Icon" style="width:20px;height:15px; padding:0px; margin-right:5px;"></span>\
												<span>LCD (' + item.LCDTVs + ')</span>\
												<span style="float:right;">' + item.TVTotal + '</span>\
												</p>\
											<p class="card-text">\
												Other<span style="float:right;">' + item.OthersTotal + '</span>\
											</p>\
										</div><div  style="background-color:' + color + '; color:' + TextColor + '; border-radius:0px 0px 4px 4px; height: 36px; border:1px ' + color + ';">\
											<p style="padding:5px; margin-left:10px;"><span><b>' + item.Status + '</b></span><span style="float:right; margin-right:10px;">' + item.TotalRequestItems + '</span></p></div></div></div>'



								$('#cmlcard').append(CustomCard);
								$('#card').append(CustomCard);

								$('[id=ppfname]').text(data.FirstName);
								$('[id=pplname]').text(data.LastName);
								$('[id=ppPhone]').text(data.Phone);
								$('[id=ppEmail]').text(data.Email);
								var strAddress = data.BuildingNumber + ' ' + data.Street + ', ' + data.Borough
								$('[id=ppaddress]').text(strAddress);
								$('[id=ppCrsStreet]').text(data.CrossStreets);
								$('[id=ppLocation]').text(data.PickUpLocation);
								$('[id=othItmTotal]').text(data.RequestedOthersTotal);
								$('[id=pckothItmTotal]').text(data.PickedUpOthersTotal);
								$('#ppComments').text(data.Comments);



								$('[id=CRTTVsHeaderTotal]').text(data.RequestedCRTTVs);
								$('[id=LCDTVsHeaderTotal]').text(data.RequestedLCDTVs);

								//Completed Popup.
								$('[id=pckCRTTVsHeaderTotal]').text(data.PickedUpCRTTVs);
								$('[id=pckLCDTVsHeaderTotal]').text(data.PickedUpLCDTVs);

								$.each(arr, function (key, item) {
									//if (item.checked){
									//alert('selected');
									var ctgpndStr = '';

									ctgStr = '';
									//var CategoryDiv = $(item).parent().parent();
									var CtgID = item.CategoryId
									var Ctgname = item.Category
									var CtgVAL = item.RequestedQty;

									var competedCategory = '';
									var pckCompletedCtc = ''

									//$('#tvCategory').append(ctgStr);

									if (item.PickupRequestSubItems.length > 0) {
										ctgStr += ' <div class="categorycard" > <div class="row" style="background-color:#EAC454;color:white;">\
										<div class="col-md-6ths col-xs-6 ctgName ">'+ Ctgname + '</div><div class="col-md-3ths col-xs-3" >Requested</div>\
										<div class="col-md-3ths col-xs-3">Picked Up\
										<input name="ctgsum'+ item.CategoryId + '" id="ctgsum' + item.CategoryId + '" type="hidden" value="' + CtgVAL + '" />\
										</div> </div>'

										var arrSubCat = item.PickupRequestSubItems
										//$(item).parent().parent().find('#tvSubCategory').find('input[type=text]')
										var SubctgStr = '';
										$.each(arrSubCat, function (Subkey, Subitem) {

											var img = ''
											if (CtgID == 1) {
												img = '<span><img src="/assets/dsny/stagingdashboard/includes/img/Black-CRT-TV-Icon.svg" alt="TV Icon" style="width:25px;height:20px; padding:0px; margin-right:3px;margin-top:-4px;"></span>'

												$('[id=CRTTV' + Subitem.SubCategoryId + ']').text(Subitem.RequestedQty);
												$('[id=pckCRTTV' + Subitem.SubCategoryId + ']').text(Subitem.PickedUpQty);

											}
											else {
												img = '<span><img src="/assets/dsny/stagingdashboard/includes/img/black-TV.svg" alt="TV Icon" style="width:20px;height:15px; padding:0px; margin-right:5px;"></span>'

												$('[id=LCDTV' + Subitem.SubCategoryId + ']').text(Subitem.RequestedQty);
												$('[id=pckLCDTV' + Subitem.SubCategoryId + ']').text(Subitem.PickedUpQty);
											}

											SubctgStr = '';
											//CtgVAL = ;
											//SubCategoryID = $(Subitem).find('.pure-u-md-3-24').attr('name');
											SubctgStr += '<div class="row divborder">'
											//SubctgStr +=''
											SubctgStr += '<div class="col-md-6ths col-xs-6 ctgName ">' + img + ' ' + Subitem.SubCategoryName + '</div><div class="col-md-3ths col-xs-3" >' + Subitem.RequestedQty + '</div>'
											SubctgStr += '	<div class="col-md-3ths col-xs-3" id="' + CtgID + '" > \
											<div class="dec button"><img  src="/assets/dsny/stagingdashboard/includes/img/hover-minus.svg" class="divdecimage"></div>\
												<input type="text" class="txtValue disableText" name="tvSubCat' + CtgID + '" maxlength="2"  id="' + Subitem.SubCategoryId + '" value="' + Subitem.RequestedQty + '">\
												<div class="inc button"><img  src="/assets/dsny/stagingdashboard/includes/img/hover plus.svg" class="divimage" > </div> </div> </div>'

											ctgStr += SubctgStr;
											//$('#tvCategory').append(SubctgStr);
										});

										ctgStr += '</div>';
										$('#tvCategory').append(ctgStr);

									}
									else {

										ctgpndStr += ' <div class="row divborder">\
												<div class="col-md-6ths col-xs-9 ctgName ">'+ Ctgname + '</div><div class="col-md-3ths col-xs-3 qtyRight" >' + CtgVAL + '</div>\
												</div>'


										ctgStr += '<div class="row divborder">\
									<div class="col-md-6ths col-xs-6 ctgName ">'+ Ctgname + '</div><div class="col-md-3ths col-xs-3" >' + CtgVAL + '</div>\
									<div class="col-md-3ths col-xs-3" id="'+ CtgID + '" >\
									<div class="dec button"><img  src="/assets/dsny/stagingdashboard/includes/img/hover-minus.svg" class="divdecimage "></div>\
									<input type="text" class="txtValue disableText"  maxlength="2" name="elecCtgCount" id="Count' + item.CategoryId + '" value="' + CtgVAL + '" >\
									<div class="inc button"><img  src="/assets/dsny/stagingdashboard/includes/img/hover plus.svg" class="divimage"></div>\
									</div> </div>'
										$('#otherpndCtegory').append(ctgpndStr);
										$('#otherCtegory').append(ctgStr);

										if (item.RequestedQty > 0) {
											competedCategory += ' <div class="row divborder">\
												<div class="col-md-6ths col-xs-9 ctgName ">'+ Ctgname + '</div><div class="col-md-3ths col-xs-3 qtyRight" >' + item.RequestedQty + '</div>\
												</div>'
										}

										if (item.PickedUpQty > 0) {
											pckCompletedCtc += ' <div class="row divborder">\
												<div class="col-md-6ths col-xs-9 ctgName ">'+ Ctgname + '</div><div class="col-md-3ths col-xs-3 qtyRight" >' + item.PickedUpQty + '</div>\
												</div>'
										}
										// Completed Popup
										$('#Itemctg').append(competedCategory);
										$('#pckItemctg').append(pckCompletedCtc);

									}

									//$(item).parent().parent().html()
									//}
								});

								$('#tvCategory').append('<div class="row"> <strong>  Comments </strong> </div>');
								$('#tvCategory').append('<div class="row"> <textarea id="txtComment" maxlength="250" style="width:100%;resize:none;border: 1px solid rgba(0,0,0,.125);"> </textarea> </div>');

                   	if (item.StatusId != 0){
															if (item.StatusId == 2) {
					          	$('#cmpModal').modal('show');
					    }
					    else if (item.StatusId == 3 || item.StatusId == 4 || item.StatusId == 5) {
						$('#btnComplete').hide();
						$('#btnPckUp').hide();
						$('#btnDelete').hide();
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
	 
	
	
	// Complete button click
	$('#btnComplete').click(function () {
			$('#hardCategory').hide();
			$('#tvCategory').show();
			$('#submitreq').show();
			$('#pndSubCategory').hide();
			$('#cmpSubCategory').show();
			$('#btnComplete').hide();
			$('#btnPckUp').hide();
			$('#btnDelete').hide();
			$('#btnUnserviceable').hide();
			return false;
		});

	// Unserviceable Button click	
	$('#btnUnserviceable').click(function () {
		$('#hardCategory').hide();
		$('#tvCategory').hide();
		$('#submitreq').show();
		$('#pndSubCategory').hide();
		$('#cmpSubCategory').hide();
		$('#btnComplete').hide();
		$('#btnPckUp').hide();
		$('#btnDelete').hide();
		$('#btnUnserviceable').hide();
		$('#UnserviceableReason').show();
		return false;

	});
	
	// Submit completed Task or Unserviceable Task details
	$('#btnCompleteSubmit').click(function () {
		   if ($('#UnserviceableReason').is(":visible")){
				insertData.Comments = $('#UnserviceableComment').val();
				insertData.strRequestId = ''+insertData.RequestId;
				insertData.Source = 'Dashboard';
				insertData.StatusId = 4;
				insertData.ReasonType = $('input[name=gridRadios]:checked', '.form-group').val();
				insertData.Status = 'Unserviceable';
				insertData.IsCompleteRequest = false;
				delete insertData.$id;
				var RequestURL = APIUrl + '/ePickupsAPI/api/PickupRequest/CancelPickupRequest';
			 } 
			 else  {
				var arrSubCat = $('#tvCategory').find('input:text')
				var CatgoryList = [];
				$.each(arrSubCat, function (key, item) {
					if (item.value > 0) {
						CatgoryList.push({
							CategoryID: item.parentElement.id,
							SubCategoryId: item.id,
							//RequestedQty: item.parentElement.previousElementSibling.innerText ,
							PickedUpQty: item.value
						});
					}
				});
				var arrOtherCtg = $('#otherCtegory').find('input:text');
				$.each(arrOtherCtg, function (key, item) {
					if (item.value > 0) {
						CatgoryList.push({
							CategoryID: item.parentElement.id,
							SubCategoryId: 0,
							//RequestedQty: item.parentElement.previousElementSibling.innerText ,
							PickedUpQty: item.value
						});
					}
				});
				var arr = insertData.PickupRequestItems;
				insertData.PickupRequestItems = CatgoryList;
				insertData.Comments = $('#txtComment').val();
				insertData.strRequestId = ''+insertData.RequestId;
				insertData.Source = 'Dashboard';
				insertData.StatusId = 2;
				insertData.Status = 'Completed';
				insertData.IsCompleteRequest = true;
				delete insertData.$id;
				var RequestURL = APIUrl + '/ePickupsAPI/api/PickupRequest/AddUpdatePickUpRequest';
				//var arrUpdate = CatgoryList;
			}

			//'http://msdwvw-dsndny01.csc.nycnet/ePickupsAPI/api/PickupRequest/AddUpdatePickUpRequest';
			$.ajax({
				async: false,
				url: RequestURL,
				data: insertData,
				type: "POST",
				dataType: 'json',
				crossDomain: true,
				success: function (json) {
						if (json != undefined) {
						$('#msgModal').modal('hide');
						RequestDashboard($('.selectedDate').val(), 'Staten Island', $('.selectedDistrict').attr('id'), '0');
						Request_Assignments('staten Island', $('.selectedDistrict').attr('id'), $('.selectedDate').val());
						}
				}
			});
		});

		// Delete Task - Cancel button click event  
		$("#btnDelete").click(function () {
			jQuery.support.cors = true;
				insertData.Status = 'Request Cancelled';
					insertData.strRequestId = ''+insertData.RequestId;
					insertData.StatusId = 5;
						insertData.IsCompleteRequest = false;
				delete insertData.$id;
				var getDateUrl = APIUrl + '/ePickupsAPI/api/PickupRequest/CancelPickupRequest';
				$.ajax({
					async: false,
					url: getDateUrl,
					data: insertData,
					type: "POST",
				dataType: 'json',
				crossDomain: true,
				success: function (data) {
					if (data != undefined) {
						$('#msgModal').modal('hide');
						RequestDashboard($('.selectedDate').val(), 'Staten Island', $('.selectedDistrict').attr('id'), '0');
						Request_Assignments('staten Island', $('.selectedDistrict').attr('id'), $('.selectedDate').val());

					}
				}
			});

			return false;
		});
		
		// Not on Location click event
		$("#btnPckUp").click(function () {
			jQuery.support.cors = true;
			insertData.strRequestId = ''+insertData.RequestId;
			insertData.Status = 'Not on Location';
			insertData.StatusId = 3;
			insertData.IsCompleteRequest = false;
			delete insertData.$id;
			var getDateUrl = APIUrl + '/ePickupsAPI/api/PickupRequest/CancelPickupRequest';
			$.ajax({
				async: false,
				url: getDateUrl,
				data: insertData,
				type: "POST",
				dataType: 'json',
				crossDomain: true,
				success: function (data) {
					if (data != undefined) {
						$('#msgModal').modal('hide');
						RequestDashboard($('.selectedDate').val(), 'Staten Island', $('.selectedDistrict').attr('id'), '0');
						Request_Assignments('staten Island', $('.selectedDistrict').attr('id'), $('.selectedDate').val());

					}
				}
			});

			return false;
		});