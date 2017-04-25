/*!
 * Dashboard Application JS
 */
	// JAVASCRIPT (jQuery)
	//"http://msdwvw-dsndny01.csc.nycnet/ePickupsAPI/api/PickupRequest/GetDashboard?SearchDate=09%2F24%2F2016&Borough=ALL&DistrictId=0&TruckId=0",
	
	var APIUrl = 'https://a827-donatenyc.nyc.gov';
	jQuery.support.cors = true; 
	var Colors = ['#5393E7', '#F0f0f0', '#DD6159','#F5A623'];
	var TextColors = ['#9b9b9b', '#ffffff'];
	var HeaderTextColors = ['#5393E7', '#9b9b9b', '#DD6159','#F5A623'];
    var reqNumber = "";
	var addonCategoryID = 0;
	//var SearchDate = '09-24-2016';
	//var SelecteBorough = $('#SelecteBorough').text;
	//var selectedDistrictID = 57;


	var SearchDate = sessionStorage.getItem("pickupdate");
	var SelecteBorough = sessionStorage.getItem("borough");
	var selectedDistrictID = sessionStorage.getItem("district");
	var selectedDistrictName = sessionStorage.getItem("districtName");
	var truckId = 0; 

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
         
     });

	if(sessionStorage.getItem("truckId") != undefined)
		truckId = sessionStorage.getItem("truckId");

	
	if (SearchDate == "" || SelecteBorough == "" || selectedDistrictID == "") {
		window.location.href = '/assets/dsny/dashboard/login.shtml';
	}

	var SuperVisorRequestUrl = APIUrl + '/ePickupsAPI/api/Dashboard/GetEmployees';
	var AssignmnetsUrl = APIUrl + '/ePickupsAPI/api/Dashboard/GetTrucks?Borough=staten Island&DistrictId=57';

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
	
	$(document).click(function() {
		if($(event.target).closest('.inc').length > 0 || $(event.target).closest('.dec').length > 0 || $(event.target).closest('.txtValue').length > 0  ||  $(event.target).closest('input[name=elecCtgCount]').length > 0 ) {
			return false;
		}
		  
		$("input[name=elecCtgCount]").tooltipster('hide');  
		$(".txtValue").tooltipster('hide');  
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
    
	
	function isValidEmailAddressAPP(input) {

	 if (input.val() == "") {
			return true;
		}

		var pattern = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
		var emailAddress = input.val();
		if (!(emailAddress == "")) {
		if(!pattern.test(emailAddress))  
		{ 
		input.addClass("class", "tooltipstered error");
		input.tooltipster('update', "Please enter valid email address.");
		input.attr("aria-invalid", true);
		input.tooltipster('show');
		input.focus();
		}
		else
		{
		input.removeClass("class", "tooltipstered error");
		input.removeAttr("aria-invalid");
		}
		return pattern.test(emailAddress);
		}
	else
	{
	return true;
	}
	};
	
	
	
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



$("#nextstep2").click(function (event) {
		var disableDT = [];
		var minDate = moment()//.format("MM-DD-YYYY")
        var MaxDate = moment().add(14, 'days');
        //MaxDate = MaxDate.format("MM-DD-YYYY"); 
    
    /*if ($("#boro").attr("type") == "select a borough") {
        $("#boro").addClass("tooltipstered error");
            $("#boro").attr("required",'true');
            $("#boro").attr("aria-invalid",'true');
            $("#boro").attr("aria-required",'true');
            $("#boro").tooltipster('update', "Please select from the list");
            $("#boro").tooltipster('show'); 
            $("#boro").focus();
                } else if ($("#houseNumber").val() == "" ){
            $("#houseNumber").addClass("tooltipstered error");
            $("#houseNumber").attr("required",'true');
            $("#houseNumber").attr("aria-invalid",'true');
            $("#houseNumber").attr("aria-required",'true');
            $("#houseNumber").tooltipster('update', "This field is required");
            $("#houseNumber").tooltipster('show'); 
            $("#houseNumber").focus(); 
    } else if ($("#street").val() == "" ){
            $("#street").addClass("tooltipstered error");
            $("#street").attr("required",'true');
            $("#street").attr("aria-invalid",'true');
            $("#street").attr("aria-required",'true');
            $("#street").tooltipster('update', "This field is required");
            $("#street").tooltipster('show'); 
            $("#street").focus(); 
    } else {
        $('body').tooltipster('hide');  */      
		
		$('#msform input[type="text"]').removeAttr("required");  
        $('#msform select').removeAttr("required");
        $('#msform textarea').removeAttr("required");
        $('#msform input[type="checkbox"]').removeAttr("required");
		$('#boro').attr("required",'true');
		$('#houseNumber').attr("required",'true');
		$('#street').attr("required",'true');  
		
		$('#Step2div').hide();
					
		$('#CONTACT-1-FIRST-NAME').attr("disabled","disabled");
		$('#CONTACT-1-LAST-NAME').attr("disabled","disabled");
		$('#CONTACT-1-PHONE').attr("disabled","disabled");
		$('#CONTACT-1-EMAIL').attr("disabled","disabled");		
		
		var d = new Date();
		var month = d.getMonth()+1;
		var day = d.getDate();
		var output = (month<10 ? '0' : '') + month + '/' + (day<10 ? '0' : '') + day + '/' + d.getFullYear();
		$("#datetimepicker3").val(output);
		
		
       if (validateForm()) {
            var retCode = false;
            current_fs = $(this).parent().parent();
            next_fs = $(this).parent().parent().next();
            event.preventDefault();
            validateAddress(function (output) {
                if (output == true) {
                    retCode = true;
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
					$('#CONTACT-1-FIRST-NAME').removeAttr("disabled");
					$('#CONTACT-1-LAST-NAME').removeAttr("disabled");
					$('#CONTACT-1-PHONE').removeAttr("disabled");
					$('#CONTACT-1-EMAIL').removeAttr("disabled");
					$('#CONTACT-CONFRIM-EMAIL').removeAttr("disabled");
					$('#msform input[type="checkbox"]').removeAttr("disabled");
					
					$('select').removeAttr("disabled");
					
					$('#slapptdate').attr("required",'true');
					$('#CONTACT-1-FIRST-NAME').attr("required",'true');
					$('#CONTACT-1-LAST-NAME').attr("required",'true');
					$('#CONTACT-1-PHONE').attr("required",'true');
					$('#CONTACT-1-EMAIL').attr("required",'true');
					$('#CONTACT-CONFRIM-EMAIL').attr("required",'true');
					
					
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
    
$('#btnaddonSubmit').click(function (event) {
			
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
						CrossStreets : $('#GEOCrossStreet').val(),
						PickupRequestItems : CatgoryList
					}			
			
			
			var RequestURL = APIUrl + '/ePickupsAPI/api/PickupRequest/AddUpdatePickUpRequest';
			//'http://msdwvw-dsndny01.csc.nycnet/ePickupsAPI/api/PickupRequest/AddUpdatePickUpRequest';
			$.ajax({
				async: false,
				url: RequestURL,
				data: Requestdata,
				type: "POST",
				dataType: 'json',
				crossDomain: true,
				success: function (json) {
					if (json != undefined) {

						$('#AddOnModal').modal('hide');
						RequestDashboard($('.selectedDate').val(), 'Staten Island', $('.selectedDistrict').attr('id'), '0');
						Request_Assignments('staten Island', $('.selectedDistrict').attr('id'), $('.selectedDate').val());
						$('#Step2div').hide();
					
						$('#CONTACT-1-FIRST-NAME').attr("disabled","disabled");
						$('#CONTACT-1-LAST-NAME').attr("disabled","disabled");
						$('#CONTACT-1-PHONE').attr("disabled","disabled");
						$('#CONTACT-1-EMAIL').attr("disabled","disabled");
						$('#msform').trigger("reset"); 
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
										img = '<span><img src="/assets/dsny/dashboard/includes/img/Black-CRT-TV-Icon.svg" alt="TV Icon" style="width:25px;height:20px; padding:0px; margin-right:3px;margin-top:-4px;"></span>';
									}
									else if (SelectedCategoryID == 17){
										img = '<span><img src="/assets/dsny/dashboard/includes/img/black-TV.svg" alt="TV Icon" style="width:20px;height:15px; padding:0px; margin-right:5px;"></span>';
									}
									SubctgStr += '<div class="row divborder">'
									SubctgStr += '<div class="col-md-6ths col-xs-6 ctgName ">' + img + ' ' + item.SubCategory + '</div><div class="col-md-3ths col-xs-3" ></div>'
									SubctgStr += '<div class="col-md-3ths col-xs-3" id="' + addonCategoryID + '" name="'+ item.SubCategoryId+'" >\
									<div class="dec button addon"><img  src="/assets/dsny/dashboard/includes/img/hover-minus.svg" class="divdecimage"></div>\
										<input type="text" class="txtValue disableText addon" name="tvSubCat'+ addonCategoryID +'" id="'+ item.SubCategoryId +'" maxlength="2" value="0">\
										<div class="inc button addon"><img  src="/assets/dsny/dashboard/includes/img/hover plus.svg" class="divimage" > </div> </div> </div>'
								});
                    $('[id=ItemsSubCategory' + SelectedCategoryID + ']').append(SubctgStr); 
                    
					
				}
			}
		});
	}
	
	$(document).click(function() {
		//$('#AddOnModal input.tooltipstered').tooltipster('hide');  
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
							<div class="dec button addon"><img  src="/assets/dsny/dashboard/includes/img/hover-minus.svg" class="divdecimage "></div>\
							<input type="text" class="txtValue  disableText addon" value="0" maxlength="2" name="elecCtgCount" id="Count' + item.CategoryId + '">\
							<div class="inc button addon"><img  src="/assets/dsny/dashboard/includes/img/hover plus.svg" class="divimage"></div>\
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


	

	var Request_Truck_list = function (Borough, DistrictID, SelectedDate) {
		$('.truckDropDown_menu_list').empty();
		var AssignmnetsUrl = APIUrl + '/ePickupsAPI/api/Dashboard/GetTrucks?Borough=' + Borough + '&DistrictId=' + DistrictID + '&searchdate=' + SelectedDate;
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
		var AssignmnetsUrl = APIUrl + '/ePickupsAPI/api/Dashboard/GetTrucks?Borough=' + Borough + '&DistrictId=' + DistrictID + '&searchdate=' + SelectedDate;

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

					if (DistrictID != '0') {
						$('.SelectedSupervisor').text('N/A');
						$("#SUperVisorCard").addClass("disabledbutton");
					} else {
						if (SupervisorName != '') {
							$('.SelectedSupervisor').text(SupervisorName); 
						} else {
							$('.SelectedSupervisor').text('N/A');
						}

						$("#SUperVisorCard").removeClass("disabledbutton");

					}

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

	var RequestDashboard = function (Date, Borough, DistrictID, TruckId) {
		$('.dynamicData').mCustomScrollbar("destroy")
		$(".dynamicData").empty();
		var RequestUrl = APIUrl + '/ePickupsAPI/api/Dashboard/GetDashboard?SearchDate=' + Date + '&Borough=' + Borough + '&DistrictId=' + DistrictID + '&TruckId=' + TruckId;

		$.ajax({
			async: false,
			url: RequestUrl,
			type: "GET",
			dataType: 'json',
			crossDomain: true,
			success: function (json) {
				if (json != undefined) {

					var ctgStr = '';
					var color = '';
					var textColor = '';
					var HeaderTextColor = '';
					var status = 'Done';
					var CustomCard = '';
					var DistrictIDName = '';




					if (json[0] == undefined) {

						$('#TotalRequestedQuantity').text('0');
						$('#TotlaTvs').text('0');
						$('#CRTTVsHeaderTotal').text('0');
						$('#LCDTVsHeaderTotal').text('0');
						$('#PendingRequestsTotal').text('0');
						$('#CompletedRequestsTotal').text('0');
						$('#NotOnLocationRequestsTotal').text('0');
						$('#TotalCRTTVs').text('0');
						$('#TotalLCDTVs').text('0');
						$('#TotalOthers').text('0');
						$('#CRTTVSmallerThan20').text('0');
						$('#CRTTV20to30').text('0');
						$('#CRTTV31to40').text('0');
						$('#CRTTV41to50').text('0');
						$('#CRTTV51to60').text('0');
						$('#CRTTVLargerThan60').text('0');
						$('#LCDTVSmallerThan20').text('0');
						$('#LCDTV20to30').text('0');
						$('#LCDTV31to40').text('0');
						$('#LCDTV41to50').text('0');
						$('#LCDTV51to60').text('0');
						$('#LCDTVLargerThan60').text('0');
                        if (TruckId == '0') {
                        $('#target').append('<div class="alert alert-warning" style="margin:20px;text-align:center;" role="alert">There are no tasks on <strong>' + $('.selectedDate').val() + ', Staten Island, ' + $('.selectedDistrict').text() + '.</strong></div>');    
                        }else {
                            
                          $('#target').append('<div class="alert alert-warning" style="margin:20px;text-align:center;" role="alert">There are no tasks on <strong>' + $('.selectedDate').val() + ', Staten Island, ' + $('.selectedDistrict').text() + ','+TruckId+'.</strong></div>');    
                        }
						

					} else {

						var FirstOject = json[0];

						var TotalRequestedQuantity = parseInt(FirstOject.PendingRequestsTotal) + parseInt(FirstOject.CompletedRequestsTotal) + parseInt(FirstOject.NotOnLocationRequestsTotal);
						var TotlaTvs = parseInt(FirstOject.TotalCRTTVs) + parseInt(FirstOject.TotalLCDTVs) + parseInt(FirstOject.TotalOthers);


						$('#TotalRequestedQuantity').text(TotalRequestedQuantity);
						$('#TotlaTvs').text(TotlaTvs);
						$('#CRTTVsHeaderTotal').text(FirstOject.TotalCRTTVs);
						$('#LCDTVsHeaderTotal').text(FirstOject.TotalLCDTVs);
						$('#PendingRequestsTotal').text(FirstOject.PendingRequestsTotal);
						$('#CompletedRequestsTotal').text(FirstOject.CompletedRequestsTotal);
						$('#NotOnLocationRequestsTotal').text(FirstOject.NotOnLocationRequestsTotal);
						$('#TotalCRTTVs').text(FirstOject.TotalCRTTVs);
						$('#TotalLCDTVs').text(FirstOject.TotalLCDTVs);
						$('#TotalOthers').text(FirstOject.TotalOthers);
						$('#CRTTVSmallerThan20').text(FirstOject.CRTTVSmallerThan20);
						$('#CRTTV20to30').text(FirstOject.CRTTV20to30);
						$('#CRTTV31to40').text(FirstOject.CRTTV31to40);
						$('#CRTTV41to50').text(FirstOject.CRTTV41to50);
						$('#CRTTV51to60').text(FirstOject.CRTTV51to60);
						$('#CRTTVLargerThan60').text(FirstOject.CRTTVLargerThan60);
						$('#LCDTVSmallerThan20').text(FirstOject.LCDTVSmallerThan20);
						$('#LCDTV20to30').text(FirstOject.LCDTV20to30);
						$('#LCDTV31to40').text(FirstOject.LCDTV31to40);
						$('#LCDTV41to50').text(FirstOject.LCDTV41to50);
						$('#LCDTV51to60').text(FirstOject.LCDTV51to60);
						$('#LCDTVLargerThan60').text(FirstOject.LCDTVLargerThan60);




						$.each(json, function (key, item) {

							if (DistrictID == 0) {
								DistrictIDName = item.District

							}

							if (item.StatusId == 2) {
								color = Colors[1];
								HeaderTextColor = HeaderTextColors[1];
								TextColor = TextColors[0];

							} else if (item.StatusId == 1) {
								color = Colors[0];
								HeaderTextColor = HeaderTextColors[0];
								TextColor = TextColors[1];

							} else if (item.StatusId == 3) {
								color = Colors[2];
								HeaderTextColor = HeaderTextColors[2];
								TextColor = TextColors[1];

							} else if (item.StatusId == 4) {
							color = Colors[3];
							HeaderTextColor = HeaderTextColors[3];
							TextColor = TextColors[1];

						    } else {

								color = Colors[2];
								HeaderTextColor = HeaderTextColors[2];
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
     CustomCard += '<div class="card-block completePopup" style="padding:0px 5px 5px 5px"; >\
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
        </p>\
    </div><div class="completePopup" style="background-color:' + color + '; color:' + TextColor + '; border-radius:0px 0px 4px 4px; height: 36px; border:1px ' + color + ';">\
        <p style="padding:5px; margin-left:10px;"><span><b>' + item.Status + '</b></span><span style="float:right; margin-right:10px;">' + item.TotalRequestItems + '</span></p></div></div></div>'    
                        });

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
			var Update_Supervisor_post_url = APIUrl + '/ePickupsAPI/api/Dashboard/UpdateEmployeeAssignment?EmployeeType=Supervisor&DistrictId=' + $('.selectedDistrict').attr('id') + '&EmployeeId=' + EmployeeId + '&TruckId=0&OverRide=false&Borough=Staten Island';

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
							var Update_Supervisor_url = APIUrl + '/ePickupsAPI/api/Dashboard/UpdateEmployeeAssignment?EmployeeType=Supervisor&DistrictId=' + $('.selectedDistrict').attr('id') + '&EmployeeId=' + EmployeeId + '&TruckId=0&OverRide=true&Borough=Staten Island';

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
		
		
		// Quantity Textbox change value 
	   $(document).on("change","input:text.txtValue", function() {
	         
		  var $button = $(this);
		  var TextValue = parseFloat($button.val());
		  var CatID = $button.parent()[0].id;
		  var SubCtgSum =  parseFloat($('#ctgsum'+CatID).val()) ;	
			var TotalCategory =  0
				
			//$button.parent().parent().parent().parent().parent().parent().find('input[name^="elecCtgCount"]').each(function(){
			$('#dialogRequest').find('input[name^="elecCtgCount"]').each(function(index, element){
				TotalCategory += parseFloat(this.value);
			});	
		
		  
			  if(($button[0].name == 'tvSubCat'+CatID ) )
			  {   		  
					TotalCategory += TextValue;
		  
					$('#Count'+CatID).tooltipster('hide');
					var TotalSubCategory =  0
					
					//$button.parent().parent().parent().find('input[name^="tvSubCat'+CatID+'"]').each(function(){
					// Total of individual TV category					
					$button.parent().parent().parent().parent().parent().find('input[name^="tvSubCat"]').each(function(index, element){
						TotalSubCategory += parseFloat(this.value);
					});					
					
					var SubCtgTotalValue = 0;					
					// Total of individual TV category					
					//$button.parent().parent().parent().find('input[name^="tvSubCat"]').each(function(){
					$button.parent().parent().parent().find('input[name^="tvSubCat"]').each(function(){
						SubCtgTotalValue += parseFloat(this.value);
					});					
					
					
					if ( TotalSubCategory <= 5 && TotalCategory <= 20){
					
						$('#Count'+CatID).val(SubCtgTotalValue);
						$('#ctgsum'+CatID).val(SubCtgTotalValue); 
						$button.val(TextValue);
					}
					else if (TotalSubCategory <= 0){
						$('#Count'+CatID).val(1);
						$('#ctgsum'+CatID).val(1); 
						$button.val(1);						
					}
					else if (TotalSubCategory >= 5 && TotalCategory <= 20) {
						
						if ($button.hasClass('addon')) {
						
							$button.val(0);	
							$('#Count'+CatID).val(SubCtgTotalValue - TextValue);
							$('#ctgsum'+CatID).val(SubCtgTotalValue - TextValue); 
							$('#Count'+CatID).tooltipster('update', "You can not enter more than 5 quantity for TV.");
							$('#Count'+CatID).tooltipster('show');
						
						}
						else {
							$('#Count'+CatID).val(TotalSubCategory);
							$('#ctgsum'+CatID).val(TotalSubCategory); 
							$button.val(TextValue);
						} 
						
					}
					else if (TotalCategory >= 20) {	
					
						if ($button.hasClass('addon')) {	
							$button.parent().find("input").val(0)
							$('#Count'+CatID).val(SubCtgTotalValue - TextValue);
							$('#ctgsum'+CatID).val(SubCtgTotalValue - TextValue); 	
							$('#Count'+CatID).tooltipster('update', "You can not enter more than 20 quantity for this request.");
							$('#Count'+CatID).tooltipster('show'); 					
						}
						else {
							$('#Count'+CatID).val(TotalSubCategory);
							$('#ctgsum'+CatID).val(TotalSubCategory); 
							$button.val(TextValue);
						} 
					}
					
					/*
					if ( TotalCategory <= 5){
					
						$('#Count'+CatID).val(TotalCategory);
						$('#ctgsum'+CatID).val(TotalCategory); 
						$button.val(TextValue);
					}
					else if (TotalCategory <= 0){
						$('#Count'+CatID).val(1);
						$('#ctgsum'+CatID).val(1); 
						$button.val(1);						
					}
					else{
						
						if ($button.hasClass('addon')) {
						
							$('#Count'+CatID).val(SubCtgSum);
							$('#ctgsum'+CatID).val(SubCtgSum); 
							$('#Count'+CatID).tooltipster('update', "You can not enter more than 5 quantity for TV.");
							$('#Count'+CatID).tooltipster('show');
							$button.val(0);		
						}
						else {
							$('#Count'+CatID).val(TotalCategory);
							$('#ctgsum'+CatID).val(TotalCategory); 
							$button.val(TextValue);
						} 
					}
						*/ 
			  }
			  else if (($button[0].name == 'elecCtgCount')  )
			  {
				/*$button.tooltipster('update', "You can not enter more than 20 quantity for this category.");
				$button.tooltipster('hide');
				if  (parseFloat(TextValue) <= 20)
					$button.val(TextValue); 
				else{
					if ($button.hasClass('addon')) {
						$button.tooltipster('show');
						$button.val(20); 
						return false;
						//$button.val(1); 
					}
					else{
						$button.val(TextValue); 
					}
				}*/
				
				
				$button.tooltipster('update', "You can not enter more than 20 quantity for this request.");
				$button.tooltipster('hide');
				
				if  (TotalCategory <= 20)
					$button.val(TextValue); 
				else{
					if ($button.hasClass('addon')) {
						$button.tooltipster('show');
						$button.val(0); 
						return false;
						//$button.val(1);
					}
					else{
						$button.val(TextValue); 
					}
				}
				
			  }  
		});
		
		 // Plus and minus quantity.
		$(document).on("click", "div.button", function () {
				var $button = $(this);
			var oldValue = $button.parent().find("input[type=text]").val();
			var CatID = $button.parent()[0].id;
			var SubCtgSum = 0;
			if ($button.parent().find("input[type=text]").hasClass('disableText')) {
				if ($button.hasClass("inc")) {
					var newVal = parseFloat(oldValue) + 1;
				} else {
					// Don't allow decrementing below zero
					if (oldValue > 1) {
						var newVal = parseFloat(oldValue) - 1;
					} else {

						if (($button.parent().find("input")[0].name == 'elecCtgCount')) {
							newVal = 0;
						}
						else {
							newVal = 0;
						}
					}
				}				
				var TotalCategory =  0
			
				// $button.parent().parent().parent().parent().parent().parent().find('input[name^="elecCtgCount"]').each(function(index, element){
				$('#dialogRequest').find('input[name^="elecCtgCount"]').each(function(index, element){
					TotalCategory += parseFloat(element.value);
				});
				
				$button.parent().find("input[name=elecCtgCount]").tooltipster('update', "You can not enter more than 20 quantity for this request.");
				$button.parent().find("input[name=elecCtgCount]").tooltipster('hide');
			
				TotalCategory = parseFloat((TotalCategory + newVal) - oldValue );
				
				SubCtgSum = parseFloat($('#ctgsum' + CatID).val());
				if (($button.parent().find("input")[0].name == 'tvSubCat' + CatID)) {
					
					$('#Count'+CatID).tooltipster('update', "You can not enter more than 5 quantity for TV.");
					$('#Count'+CatID).tooltipster('hide');
					
					var SubCtgTotalValue = 0;
					
					// Total of individual TV category
					$button.parent().parent().parent().find('input[name^="tvSubCat"]').each(function(){
						SubCtgTotalValue += parseFloat(this.value);
					});
					
					SubCtgTotalValue = parseFloat((SubCtgTotalValue + newVal) - oldValue );	
					
					var TotalValue = 0; 
					// $button.parent().parent().parent().parent().find('input[name^="tvSubCat"]')
					$button.parent().parent().parent().parent().parent().find('input[name^="tvSubCat"]').each(function(index, element){
						TotalValue += parseFloat(element.value);
					});
					
					TotalValue = parseFloat((TotalValue + newVal) - oldValue )
				
					if ( TotalValue <= 5 && TotalCategory <= 20){						
						$('#Count'+CatID).val(SubCtgTotalValue);
						$('#ctgsum'+CatID).val(SubCtgTotalValue); 
						$button.parent().find("input").val(newVal);
					} 
					else if (TotalValue <= 0){					
						$('#Count'+CatID).val(1);
						$('#ctgsum'+CatID).val(1); 
						$button.parent().find("input").val(1);			
					}
					else if (TotalValue >= 5 && TotalCategory <= 20) {
						
						if ($button.hasClass('addon')) {
						
							$button.parent().find("input").val(oldValue)
							$('#Count'+CatID).val(SubCtgSum); 
							$('#ctgsum'+CatID).val(SubCtgSum); 
							$('#Count'+CatID).tooltipster('update', "You can not enter more than 5 quantity for TV.");						
							$('#Count'+CatID).tooltipster('show'); 
						}
						else {
							$('#Count' + CatID).val(TotalValue);
							$('#ctgsum' + CatID).val(TotalValue);
							$button.parent().find("input").val(newVal);
						}
						//$button.val(0);
					}  
					else if (TotalCategory >= 20) {
						
						if ($button.hasClass('addon')) {
							
							$button.parent().find("input").val(oldValue)
							$('#Count'+CatID).val(SubCtgSum);
							$('#ctgsum'+CatID).val(SubCtgSum); 	
							$('#Count'+CatID).tooltipster('update', "You can not enter more than 20 quantity for this request.");
							$('#Count'+CatID).tooltipster('show'); 					
						}
						else {
							$('#Count' + CatID).val(TotalValue);
							$('#ctgsum' + CatID).val(TotalValue);
							$button.parent().find("input").val(newVal);
						}
					}
			  
			  
				
					/*
					if ( TotalValue <= 5){
						
						$('#Count'+CatID).val(TotalValue);
						$('#ctgsum'+CatID).val(TotalValue); 
						$button.parent().find("input").val(newVal);
					}
					else if (TotalValue <= 0){
					
						$('#Count'+CatID).val(1);
						$('#ctgsum'+CatID).val(1); 
						$button.parent().find("input").val(1);
					
					}
					else{
						if ($button.hasClass('addon')) {
							$('#Count'+CatID).val(SubCtgSum);
							$('#ctgsum'+CatID).val(SubCtgSum); 						
							$('#Count'+CatID).tooltipster('show');
							$button.val(0);							
						}
						else{
							
							$('#Count' + CatID).val(TotalValue);
							$('#ctgsum' + CatID).val(TotalValue);
							$button.parent().find("input").val(newVal);
						}					
					}
					*/
					
					/*
					var TotalValue = parseFloat((SubCtgSum + newVal) - oldValue)

					if (TotalValue <= 0) {

						$('#Count' + CatID).val(1);
						$('#ctgsum' + CatID).val(1);
						$button.parent().find("input").val(1);

					}
					else {
						
					}

					$('#Count' + CatID).val(TotalValue);
					$('#ctgsum' + CatID).val(TotalValue);
					$button.parent().find("input").val(newVal);
					
					*/
					
					
					
				}
				else if (($button.parent().find("input")[0].name == 'elecCtgCount')) {
					
					if ($button.hasClass('addon')) {
						$button.parent().find("input").tooltipster('hide');
					}
					
					
					if ( TotalCategory <= 20){
						$button.parent().find("input[name=elecCtgCount]").val(newVal);				
					}
					else{
						if ($button.hasClass('addon')) {	
							$button.parent().find("input[name=elecCtgCount]").val(oldValue);
							$button.parent().find("input[name=elecCtgCount]").tooltipster('show');
							return false;
						}
						else{
							$button.parent().find("input[name=elecCtgCount]").val(newVal);
						}
					}
					
					
					
					/*if (parseFloat(newVal) <= 20){
						$button.parent().find("input").val(newVal);
						
					}
					else{
						
						if ($button.hasClass('addon')) {						
							$button.parent().find("input").tooltipster('update', "You can not enter more than 20 quantity for this category.");
							$button.parent().find("input").tooltipster('show');
							return false;
						}
						else{
							$button.parent().find("input").val(newVal);
						}
					
					}*/
					
					/*
					//if (parseFloat(newVal) <= 20){
					$button.parent().find("input").val(newVal);
					//}
					//else{
					return false;
					//	}
					*/

				}
			} 
		});


		




		$(document).on("click", ".completePopup", function () {
			//$('.completePopup').on('click', function(){

			$('#hardCategory').show();
			$('#tvCategory').hide();
			$('#submitreq').hide();
			$('#pndSubCategory').show();
			$('#cmpSubCategory').hide();

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

			reqNumber = $(this).parent()[0].id;
			//var clncard = $(this).parent().find('div.expose').removeClass('expose')

			//var card = $(this).parent().find('div.expose').removeClass('expose').clone().appendTo($('#card'));

			$('#cmlcard').empty();
			//$(this).parent().clone().removeClass('expose').appendTo($('#cmlcard'));

			//"http://msdwvw-dsndny01.csc.nycnet/ePickupsAPI/api/PickupRequest/GetPickUpRequest?SRNumber="+ reqNumber
			var CustomCard = '';

			//CompleteURL = 'http://msdwvw-dsndny01.csc.nycnet/ePickupsAPI/api/PickupRequest/GetPickUpRequestForDashboard?RequestId='+ reqNumber ;
			CompleteURL = APIUrl + '/ePickupsAPI/api/PickupRequest/GetPickUpRequestForDashboard?RequestId=' + reqNumber;

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


						if (item.StatusId == 2) {
							color = Colors[1];
							HeaderTextColor = HeaderTextColors[1];
							TextColor = TextColors[0];

						} else if (item.StatusId == 1) {
							color = Colors[0];
							HeaderTextColor = HeaderTextColors[0];
							TextColor = TextColors[1];

						} else if (item.StatusId == 3) {
							color = Colors[2];
							HeaderTextColor = HeaderTextColors[2];
							TextColor = TextColors[1];

						}else if (item.StatusId == 4) {
							color = Colors[3];
							HeaderTextColor = HeaderTextColors[3];
							TextColor = TextColors[1];

						} else {

							color = Colors[2];
							HeaderTextColor = HeaderTextColors[2];
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
												<img src="/assets/dsny/dashboard/includes/img/Black-CRT-TV-Icon.svg" alt="TV Icon" style="width:25px;height:20px; padding:0px; margin-right:3px;margin-top:-4px;">\
											</span>\
											<span>CRT (' + item.CRTTVs + ')</span> &\
											<span><img src="/assets/dsny/dashboard/includes/img/black-TV.svg" alt="TV Icon" style="width:20px;height:15px; padding:0px; margin-right:5px;"></span>\
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
										img = '<span><img src="/assets/dsny/dashboard/includes/img/Black-CRT-TV-Icon.svg" alt="TV Icon" style="width:25px;height:20px; padding:0px; margin-right:3px;margin-top:-4px;"></span>'

										$('[id=CRTTV' + Subitem.SubCategoryId + ']').text(Subitem.RequestedQty);
										$('[id=pckCRTTV' + Subitem.SubCategoryId + ']').text(Subitem.PickedUpQty);

									}
									else {
										img = '<span><img src="/assets/dsny/dashboard/includes/img/black-TV.svg" alt="TV Icon" style="width:20px;height:15px; padding:0px; margin-right:5px;"></span>'

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
									<div class="dec button"><img  src="/assets/dsny/dashboard/includes/img/hover-minus.svg" class="divdecimage"></div>\
										<input type="text" class="txtValue disableText" name="tvSubCat' + CtgID + '" maxlength="2"  id="' + Subitem.SubCategoryId + '" value="' + Subitem.RequestedQty + '">\
										<div class="inc button"><img  src="/assets/dsny/dashboard/includes/img/hover plus.svg" class="divimage" > </div> </div> </div>'

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
							<div class="dec button"><img  src="/assets/dsny/dashboard/includes/img/hover-minus.svg" class="divdecimage "></div>\
							<input type="text" class="txtValue disableText"  maxlength="2" name="elecCtgCount" id="Count' + item.CategoryId + '" value="' + CtgVAL + '" >\
							<div class="inc button"><img  src="/assets/dsny/dashboard/includes/img/hover plus.svg" class="divimage"></div>\
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
                          if (item.StatusId == 2) {
			          	$('#cmpModal').modal('show');
			    }
			    else if (item.StatusId == 3) {
				$('#btnComplete').hide();
				$('#btnPckUp').hide();
				$('#btnDelete').hide();
                $('#btnUnserviceable').hide();    
				$('#msgModal').modal('show');
			  } 
                else if (item.StatusId == 4) {
				$('#btnComplete').hide();
				$('#btnPckUp').hide();
				$('#btnDelete').hide();
                $('#btnUnserviceable').hide();    
				$('#msgModal').modal('show');
			  }
			   else {
				$('#msgModal').modal('show');
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
		});

		//  Textbox change value
		$(document).on("keydown", "input:text.txtValue", function (e) {
			// Allow: backspace, delete, tab, escape, enter and .
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
				// Allow: Ctrl+A, Command+A
				(e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
				// Allow: home, end, left, right, down, up
				(e.keyCode >= 35 && e.keyCode <= 40)) {
				// let it happen, don't do anything
				return;
			}
			// Ensure that it is a number and stop the keypress
			if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
				e.preventDefault();
			}
		});

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

		//var RequestURL = APIUrl + '/ePickupsAPI/api/PickupRequest/AddUpdatePickUpRequest';

		$('#btnCompleteSubmit').click(function () {
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
			insertData.Source = 'Dashboard';
			insertData.StatusId = 2;
			insertData.Status = 'Completed';
			insertData.IsCompleteRequest = true;  
			
			delete insertData.$id;
			//var arrUpdate = CatgoryList;

			var RequestURL = APIUrl + '/ePickupsAPI/api/PickupRequest/AddUpdatePickUpRequest';
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
		$("#btnDelete").click(function () {

			jQuery.support.cors = true;
			var getDateUrl = APIUrl + '/ePickupsAPI/api/PickupRequest/CancelPickupRequest?RequestId=' + reqNumber + '&Status=Request Cancelled';
			$.ajax({
				async: false,
				url: getDateUrl,
				type: "GET",
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
        
        
        $("#btnUnserviceable").click(function () {

			jQuery.support.cors = true;
			var getDateUrl = APIUrl + '/ePickupsAPI/api/PickupRequest/CancelPickupRequest?RequestId=' + reqNumber + '&Status=Unserviceable';
			$.ajax({
				async: false,
				url: getDateUrl,
				type: "GET",
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

		$("#btnPckUp").click(function () {

			jQuery.support.cors = true;
			var getDateUrl = APIUrl + '/ePickupsAPI/api/PickupRequest/CancelPickupRequest?RequestId=' + reqNumber + '&Status=Not on Location';
			$.ajax({
				async: false,
				url: getDateUrl,
				type: "GET",
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
			$('#CONTACT-1-FIRST-NAME').val("");
			$('#CONTACT-1-LAST-NAME').val("");
			$('#CONTACT-1-PHONE').val("");
			$('#CONTACT-1-EMAIL').val("");
					
			$('#CONTACT-1-FIRST-NAME').attr("disabled","disabled");
			$('#CONTACT-1-LAST-NAME').attr("disabled","disabled");
			$('#CONTACT-1-PHONE').attr("disabled","disabled");
			$('#CONTACT-1-EMAIL').attr("disabled","disabled");		
			
			var d = new Date();
			var month = d.getMonth()+1;
			var day = d.getDate();
			var output = (month<10 ? '0' : '') + month + '/' + (day<10 ? '0' : '') + day + '/' + d.getFullYear();
			$("#datetimepicker3").val(output);
		 
			Add_New_Task_ItemCategories();
              $('#AddOnModal').modal('show');
            return false;
		});

		$('#print').click(function () {
			window.location.href = '/assets/dsny/dashboard/printdashboard.shtml';
			return false;
		});

		$('.logoutButton').click(function () {
			sessionStorage.setItem("pickupdate", "");
			sessionStorage.setItem("borough", "");
			sessionStorage.setItem("district", "");
			window.location.href = '/assets/dsny/dashboard/login.shtml';
			return false;
		});
	
	});
	
	

	$("input, select, textarea, form, button btn-group").css("outline", "none");
	$("input, select, textarea, form, button btn-group").css("box-shadow", "none");
 