var retCode = false;

// Intiate ToolTipster.
  $(document).ready(function () {

        $('#msform input[type="text"]').tooltipster({
            trigger: 'custom',
            onlyOne: true,
            position: 'bottom'
        });
        $('#msform textarea').tooltipster({
            trigger: 'custom',
            onlyOne: true,
            position: 'bottom'
        });
        $('#msform select').tooltipster({
            trigger: 'custom',
            onlyOne: true,
            position: 'bottom'
        });
		$('#msform button').tooltipster({
            trigger: 'custom',
            onlyOne: true,
            position: 'bottom'
        });
		
		$('#CONTACT-1-PHONE').mask("(999) 999-9999");

         if ($("#boro").attr("type") != "select a borough"){
           $("#boro").tooltipster('hide');
         }
         if ($("#street").val() != "" ){
           $("#street").tooltipster('hide');
         }
          if ($("#houseNumber").val() != "" ){
           $("#houseNumber").tooltipster('hide');
          }
		 
		 $('input[name=houseNumber]').change(function() { retCode = false; });
		 $('input[name=streetName]').change(function() { retCode = false; });
		 $('#boro').on('change', function() { retCode = false; });		 

     });
	 
	 $(document).click(function() {
		$('#nextstep2').tooltipster('hide');
	 });
	 
	 $('#nextstep2').hover(function () {
          $(this).tooltipster('hide');
     });
	 
	 $('#AddOnModal').on('hidden.bs.modal', function () {
	  // do something…
	  $('.alertModal').modal('hide');
	})

// Validate the required field
 var validator;
    function validateForm() {
        validator = $('#msform').validate({
            errorPlacement: function (error, element) {
                //alert('validate');
                if (element.attr("type") == "text" && element.val() == "") {
                    $(element).tooltipster('update', "This field is required");
                } else if (element.attr("type") == "select-one") {
                    //alert(element);
                    $(element).tooltipster('update', "Please select from the list");
                }
                else {
                    $(element).tooltipster('update', "This field is required");
                }
                if (element.attr("name") == "CONTACT-1-EMAIL") {
                    $(element).tooltipster('update', "Please enter valid email address");
                }
                if (element.attr("name") == "CONTACT-2-EMAIL") {
                    $(element).tooltipster('update', "Please enter valid email address");
                }
                if (element.attr("name") == "EVENT-START-DATE") {
                    $(element).tooltipster('update', "Please enter valid date");
                }
                if (element.attr("name") == "EVENT-END-DATE") {
                    $(element).tooltipster('update', "Please enter valid date");
                }
                $('element').tooltipster({
                    functionInit: function () {
                        return $('element').html();
                    },
                    functionReady: function () {
                        $('element').attr('aria-hidden', false);
                    },
                    functionAfter: function () {
                        $('element').attr('aria-hidden', true);
                    }
                });
                $(element).focus(function () {
                    if ((element.attr("required") == "required" && element.attr("class") != "tooltipstered valid"))
                    { $(this).tooltipster('show'); }
                })
                   .blur(function () {
                       $(this).tooltipster('hide');
                   });
            },
            success: function (label, element) {
                $(element).tooltipster('hide');
            },
            invalidHandler: function () {
                $(this).find(".error:first").focus();
            }
        });
        if (!$('#msform').valid()) {
             $('#AddOnModal').modal('show');
            return false;
        } else {
             $('#AddOnModal').modal('show');
            return true;
        }

        return  false;
    }

	// New Request Click (Add on)
	$('#btnNewRequest').click(function () {
		$("#houseNumber").val("");
		$("#street").val("");
		$("#boro").val("");
		$("#results").empty();

		$('#msform input[type="text"]').removeAttr("required");
		$('#msform select').removeAttr("required");
		$('#msform textarea').removeAttr("required");
		$('#msform input[type="checkbox"]').removeAttr("required");
		$('#boro').attr("required",'true');
		$('#houseNumber').attr("required",'true');
		$('#street').attr("required",'true');

		$('#Step2div').hide();
		$('#CONTACT-1-FIRST-NAME').val(sessionStorage.getItem("userId"));
		$('#CONTACT-1-LAST-NAME').val("");
		$('#CONTACT-1-PHONE').val("");
		$('#CONTACT-1-EMAIL').val("");

		// $('#CONTACT-1-FIRST-NAME').attr("disabled","disabled");
		// $('#CONTACT-1-LAST-NAME').attr("disabled","disabled");
		// $('#CONTACT-1-PHONE').attr("disabled","disabled");
		// $('#CONTACT-1-EMAIL').attr("disabled","disabled");

		var d = new Date();
		var month = d.getMonth()+1;
		var day = d.getDate();
		var output = (month<10 ? '0' : '') + month + '/' + (day<10 ? '0' : '') + day + '/' + d.getFullYear();

		$("#datetimepicker3").val(output);

		Add_New_Task_ItemCategories();
		 $('#AddOnModal').modal('show');
		return false;
	});


	 var Add_New_Task_ItemCategories = function () {
        $('#NewRequestItemSubCtegory').empty();
        $('#SubCateogry_items').empty();
		var fetchItemCategoriesUrl = APIUrl + '/ePickupsAPI/api/PickupRequest/GetItemCategories';

		$.ajax({
			async: false,
			url: fetchItemCategoriesUrl,
			type: "GET",
			dataType: 'json',
			crossDomain: true,
			success: function (json) {
				if (json != undefined) {
					var ctgStr = '';
                    var SubCatStr = '';
					$.each(json, function (key, item) {

                        addonCategoryID = item.CategoryId;

                        if ( item.hasSubCategory == 1){

                        SubCatStr +=  '<div class="categorycard" id="'+ item.CategoryId + '"  style="line-height:35px;">\
                                                <div class="row" style="background-color:#EAC454;color:white;">\
                                                    <div class="col-md-6ths col-xs-9 ctgName ">'+item.Category+'</div>\
													<div class="col-md-3ths col-xs-3 "  id="'+ item.CategoryId + '"  ><span id="othItmTotal"> </span>\
													<div class="inc button" style="width:15px;" > </div>\
														<input type="number" class="txtValue tvctgqty" name="elecCtgCount" disabled id="Count'+ item.CategoryId +'" onkeydown="return false" value="0">\
														<input name="ctgsum'+ item.CategoryId +'" id="ctgsum'+ item.CategoryId +'" type="hidden" value=0 />\
														<div class="dec button" style="width:20px;" ></div>\
													</div>\
                                                </div>\
                                                <div id="ItemsSubCategory'+item.CategoryId+'">\
                                                </div></div>'

                            $('#SubCateogry_items').append(SubCatStr);
                            SubCatStr ='';
                            Add_New_Task_ItemSubCategories(item.CategoryId);
                        }else {
                         ctgStr += '<div class="row divborder">\
							<div class="col-md-9ths col-xs-9 ctgName ">'+ item.Category + '</div>\
							<div class="col-md-3ths col-xs-3" id="'+ item.CategoryId + '" >\
							<div class="dec button addon"><img  src="/assets/dsny/stagingdashboard/includes/img/hover-minus.svg" class="divdecimage "></div>\
							<input type="text" class="txtValue  disableText addon" value="0" maxlength="2" name="elecCtgCount" id="Count' + item.CategoryId + '">\
							<div class="inc button addon"><img  src="/assets/dsny/stagingdashboard/includes/img/hover plus.svg" class="divimage"></div>\
							</div> </div>'

                        }

					});
					$('#NewRequestItemSubCtegory').append(ctgStr);


                    $('#msform input[type="text"]').tooltipster({
							trigger: 'custom',
							onlyOne: true,
							position: 'bottom'
						});
					$('#msform input[type="number"]').tooltipster({
							trigger: 'custom',
							onlyOne: true,
							position: 'bottom'
						});
                     $('#AddOnModal').modal('show');
				}

			}
		});
	}
	 var Add_New_Task_ItemSubCategories = function (SelectedCategoryID) {
		$('.truckDropDown_menu_list').empty();
		var fetchItemSubCategoriesUrl = APIUrl + '/ePickupsAPI/api/PickupRequest//GetItemSubCategories?CategoryID='+ SelectedCategoryID;
		$.ajax({
			async: false,
			url: fetchItemSubCategoriesUrl,
			type: "GET",
			dataType: 'json',
			crossDomain: true,
			success: function (json) {
				if (json != undefined) {
					var SubctgStr = '';
                    var img = '';
                    $.each(json, function (key, item) {

									if (SelectedCategoryID == 1) {
										img = '<span><img src="/assets/dsny/stagingdashboard/includes/img/Black-CRT-TV-Icon.svg" alt="TV Icon" style="width:25px;height:20px; padding:0px; margin-right:3px;margin-top:-4px;"></span>';
									}
									else if (SelectedCategoryID == 17){
										img = '<span><img src="/assets/dsny/stagingdashboard/includes/img/black-TV.svg" alt="TV Icon" style="width:20px;height:15px; padding:0px; margin-right:5px;"></span>';
									}
									SubctgStr += '<div class="row divborder">'
									SubctgStr += '<div class="col-md-6ths col-xs-6 ctgName ">' + img + ' ' + item.SubCategory + '</div><div class="col-md-3ths col-xs-3" ></div>'
									SubctgStr += '<div class="col-md-3ths col-xs-3" id="' + addonCategoryID + '" name="'+ item.SubCategoryId+'" >\
									<div class="dec button addon"><img  src="/assets/dsny/stagingdashboard/includes/img/hover-minus.svg" class="divdecimage"></div>\
										<input type="text" class="txtValue disableText addon" name="tvSubCat'+ addonCategoryID +'" id="'+ item.SubCategoryId +'" maxlength="2" value="0">\
										<div class="inc button addon"><img  src="/assets/dsny/stagingdashboard/includes/img/hover plus.svg" class="divimage" > </div> </div> </div>'
								});
                    $('[id=ItemsSubCategory' + SelectedCategoryID + ']').append(SubctgStr);


				}
			}
		});
	}

// Button click to validate the address
$("#nextstep2").click(function (event) {
		var disableDT = [];
		var minDate = moment()//.format("MM-DD-YYYY")
        var MaxDate = moment().add(14, 'days');
        //MaxDate = MaxDate.format("MM-DD-YYYY");


		$('#msform input[type="text"]').removeAttr("required");
        $('#msform select').removeAttr("required");
        $('#msform textarea').removeAttr("required");
        $('#msform input[type="checkbox"]').removeAttr("required");
		$('#boro').attr("required",'true');
		$('#houseNumber').attr("required",'true');
		$('#street').attr("required",'true');

		$('#Step2div').hide();

		// $('#CONTACT-1-FIRST-NAME').attr("disabled","disabled");
		// $('#CONTACT-1-LAST-NAME').attr("disabled","disabled");
		// $('#CONTACT-1-PHONE').attr("disabled","disabled");
		// $('#CONTACT-1-EMAIL').attr("disabled","disabled");
		var d = new Date();

		var month = d.getMonth()+1;
		var day = d.getDate();

		var output = (month<10 ? '0' : '') + month + '/' + (day<10 ? '0' : '') + day + '/' + d.getFullYear();

		$("#datetimepicker3").val(output);
		//$("#datetimepicker3").datetimepicker("update", new Date());


       if (validateForm()) {
            //var retCode = false;
            current_fs = $(this).parent().parent();
            next_fs = $(this).parent().parent().next();
            event.preventDefault();
            validateAddress(function (output) {
                if (output == true) {
                    retCode = true;
                    //new3 code
                    var getDateUrl = APIUrl + '/ePickupsAPI/api/PickupRequest/IsDistrictActive?districtCode='+ $('#GEODistrict').val();
            				var objReturn =$.ajax({
            					async:false,
            					url: getDateUrl,
            					dataType: 'json',
            					crossDomain: true,
            					success: function(data){
            						if (data != undefined)
            						{
            							if (data == false)
            							{
            								//showInactiveDistrictResults();
                            var Errmsg = "<h4 style='font-size:15px !important'><span style='color:red'>This address is currently not enrolled in the e-waste pilot.</span></h4>";
                            //<h4 style='font-size:15px !important'>
                            $("#results").html(Errmsg);
            								validator.focusInvalid();
            								return false;
            							}
            						}
                      }
                    });
                    //new3 code
                }else{
                 $('#Step2div').hide();
                }
                if (retCode == true && ($('#results').text().length == 0)) {

					//$('#ReqHeader').text('Step 2 - Specific Info');

                    var fullAddress = $("#houseNumber").val() + " " + $("#street").val() + " " + $("#GEOcity").val();
					//+ " " + $("#GEOzipcode").val() + " " + $("#additionalinfo").val();
					$('#rdAddress').html(fullAddress);
					$('#rdStreet').html($("#GEOCrossStreet").val());
					$('#Step2div').show();

					//$('#lstPickUpLocation').find('option:gt(0)').remove();
					$('#lstPickUpLocation').empty();
					$('#lstPickUpLocation').append('<option selected="selected" value="">Please select one:</option>');
					$('#lstPickUpLocation').append($("#GEOPickupStreet").val());

					$('#slapptdate').removeAttr("disabled");
					// $('#CONTACT-1-FIRST-NAME').removeAttr("disabled");
					// $('#CONTACT-1-LAST-NAME').removeAttr("disabled");
					// $('#CONTACT-1-PHONE').removeAttr("disabled");
					// $('#CONTACT-1-EMAIL').removeAttr("disabled");
					// $('#CONTACT-CONFRIM-EMAIL').removeAttr("disabled");
					$('#msform input[type="checkbox"]').removeAttr("disabled");

					$('select').removeAttr("disabled");

					$('#slapptdate').attr("required",'true');
					// $('#CONTACT-1-FIRST-NAME').attr("required",'true');
					// $('#CONTACT-1-LAST-NAME').attr("required",'true');
					// $('#CONTACT-1-PHONE').attr("required",'true');
					// $('#CONTACT-1-EMAIL').attr("required",'true');
					// $('#CONTACT-CONFRIM-EMAIL').attr("required",'true');


					$('select').attr("required",'true');

						$('#msform input[type="checkbox"]').tooltipster({
							trigger: 'custom',
							onlyOne: true,
							position: 'bottom'
						});
						$('#msform input[type="text"]').tooltipster({
							trigger: 'custom',
							onlyOne: true,
							position: 'bottom'
						});
						$('#msform select').tooltipster({
							trigger: 'custom',
							onlyOne: true,
							position: 'bottom'
						});

                    //next_fs.show();
                    //current_fs.hide();
                    //$('#astep1').removeClass('active1');
                    //$('#astep2').addClass('active2');
                    return false;
                }
            });
        }
       else {
            validator.focusInvalid();
            return false;
        }

        return   false  ;
    });

// Button click to save the request.
$('#btnaddonSubmit').click(function (event) {

	if($("#boro").val() != "" && $("#houseNumber").val() != "" && $("#street").val() != "")
	{
		if(!retCode)
		{
			$('#nextstep2').addClass("tooltipstered error");
					//$('#nextstep2').attr("required",'true');
					//$('#nextstep2').attr("aria-invalid",'true');
					//$('#nextstep2').attr("aria-required",'true');
					$('#nextstep2').tooltipster('update', "Please verify the address");
					$('#nextstep2').tooltipster('show');
					$('#nextstep2').focus();
			return false;
		}
	}

	if (validateForm() && isValidEmailAddressAPP($('#CONTACT-1-EMAIL')) ) {

		$('#Count3').tooltipster('hide');
		var arrSubCat = $('#SubCateogry_items').find('input:text')
		var CatgoryList = [];
		$.each(arrSubCat, function (key, item) {
			if (item.value > 0) {
				CatgoryList.push({
					CategoryID: item.parentElement.id,
					SubCategoryId: item.id,
					//RequestedQty: item.parentElement.previousElementSibling.innerText ,
					RequestedQty: item.value
				});
			}
		});
		var arrOtherCtg = $('#NewRequestItemCtegory').find('input:text');
		$.each(arrOtherCtg, function (key, item) {
			if (item.value > 0) {
				CatgoryList.push({
					CategoryID: item.parentElement.id,
					SubCategoryId: 0,
					//RequestedQty: item.parentElement.previousElementSibling.innerText ,
					RequestedQty: item.value
				});
			}
		});

		//var arrUpdate = CatgoryList;

		if (CatgoryList.length > 0 ){

			var Requestdata= {
						FirstName: $('#CONTACT-1-FIRST-NAME').val(),
						LastName : $('#CONTACT-1-LAST-NAME').val(),
						Phone : $('#CONTACT-1-PHONE').val(),
						Email : $('#CONTACT-1-EMAIL').val(),
						BuildingNumber : $('#houseNumber').val(),
						Street : $('#street').val(),
						District : $('#GEODistrict').val(),
						PickUpLocation :$("#lstPickUpLocation option:selected").text(),
						AppointmentDate : $('#datetimepicker3').val(),
						Source : 'Dashboard',
						Comments:$("#NewReqComment").val(),
						CrossStreets : $('#GEOCrossStreet').val(),
						PickupRequestItems : CatgoryList,
						UserName: sessionStorage.getItem("userId")
					}


			var RequestURL = APIUrl + '/ePickupsAPI/api/PickupRequest/AddUpdatePickUpRequest';

			$.ajax({
				async: false,
				url: RequestURL,
				data: Requestdata,
				type: "POST",
				dataType: 'json',
				crossDomain: true,
				success: function (json) {
					if (json != undefined) {
					 if (json.toUpperCase() == 'NOT AVAILABLE'){
							$('#errorDate').text($('#disApptDate').text());
							$('.fieldset6').show();
					  }
					  else if (json.toUpperCase() == 'DUPLICATE ADDRESS'){
							var duplicateaddress = '<div class="modal-header" style="color:white;background-color:#D0021B;height:30px;padding:3px; margin:0px">\
								<b style="margin-left:10px;">Error</b>\
								 </div>\
									<div class="modal-body" style="height:25px;">\
										<p>A request already exists at the current address on the same date. Please place your items at the designated area or choose a different date to schedule a separate appointment.</p>\
										 </div>\
									<div class="modal-footer" style="height:60px;border:0px;">\
								 <button type="button" style="color:white;background-color:grey; width:100px;" class="btn dismissAlert" data-dismiss="modal">OK</button>\
								</div>'
									$('.AlertContent').html(duplicateaddress);
									$('.alertModal').modal('show');
							return false;
					  }
					  else {

						$('#AddOnModal').modal('hide');
						RequestDashboard('0');
						Request_Assignments();
						$('#Step2div').hide();

						// $('#CONTACT-1-FIRST-NAME').attr("disabled","disabled");
						// $('#CONTACT-1-LAST-NAME').attr("disabled","disabled");
						// $('#CONTACT-1-PHONE').attr("disabled","disabled");
						// $('#CONTACT-1-EMAIL').attr("disabled","disabled");
						$('#msform').trigger("reset");
						}
					}
				}
			});

		}
		else{

				$('#Count3').addClass("tooltipstered error");
				$('#Count3').attr("required",'true');
				$('#Count3').attr("aria-invalid",'true');
				$('#Count3').attr("aria-required",'true');
				$('#Count3').tooltipster('update', "Please select one category.");
				$('#Count3').tooltipster('show');
				$('#Count3').focus();

		}



	}else {
            validator.focusInvalid();
            return false;
        }
	return false;

});
