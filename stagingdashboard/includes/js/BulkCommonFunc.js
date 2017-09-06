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
	
	// Hide Tooltipster 
	$(document).click(function() {
		if($(event.target).closest('.inc').length > 0 || $(event.target).closest('.dec').length > 0 || $(event.target).closest('.txtValue').length > 0  ||  $(event.target).closest('input[name=elecCtgCount]').length > 0 ) {
			return false;
		}

		$("input[name=elecCtgCount]").tooltipster('hide');
		$(".txtValue").tooltipster('hide');
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
				   newVal = 0;				  		 
					}
				}
				var TotalCategory =  0;
				
				$('#dialogRequest').find('input[name^="elecCtgCount"]').each(function(index, element){
					//TotalCategory += parseFloat(element.value);
					TotalCategory = newVal;
				});

				$button.parent().find("input[name=elecCtgCount]").tooltipster('update', "You cannot enter quantity more than 99 for this category.");
				$button.parent().find("input[name=elecCtgCount]").tooltipster('hide');

				//TotalCategory = parseFloat((TotalCategory + newVal) - oldValue );

				//SubCtgSum = parseFloat($('#ctgsum' + CatID).val());
				
				if (($button.parent().find("input")[0].name == 'tvSubCat' + CatID)) {

					var TotalValue = 0;

					TotalValue = newVal;

					//TotalValue = parseFloat((TotalValue + newVal) - oldValue )

					if ( TotalValue <= 99){
						$button.parent().find("input").val(newVal);
					}
					else if (TotalValue <= 0){
						$button.parent().find("input").val(1);
					}
					//else if (TotalValue >= 5 && TotalCategory <= 20) {
					else if (TotalValue > 99) {
							$button.parent().find("input").val(oldValue)
							$button.parent().find("input").tooltipster('update', "You cannot enter quantity more than 99 for this category.");
							$button.parent().find("input").tooltipster('show');							
					}

				}
				else if (($button.parent().find("input")[0].name == 'elecCtgCount')) {

					if ( TotalCategory <= 99){
						$button.parent().find("input[name=elecCtgCount]").val(newVal);				
					}
					else{
						$button.parent().find("input[name=elecCtgCount]").val(oldValue);
						$button.parent().find("input[name=elecCtgCount]").tooltipster('show');
						return false;
					}
				}
			}
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
				TotalCategory = TextValue;
			});


			  if(($button[0].name == 'tvSubCat'+CatID ) )
			  {
					TotalCategory += TextValue;

					$('#Count'+CatID).tooltipster('hide');
					var TotalSubCategory =  0
					var SubCtgTotalValue = 0;

					//$button.parent().parent().parent().find('input[name^="tvSubCat'+CatID+'"]').each(function(){
					// Total of individual TV category
					SubCtgTotalValue = TextValue;

					
					if ( SubCtgTotalValue <= 99){
					
						//$('#Count'+CatID).val(SubCtgTotalValue);
						//$('#ctgsum'+CatID).val(SubCtgTotalValue);
						$button.val(TextValue); 
					}
					else if (SubCtgTotalValue <= 0){
						//$('#Count'+CatID).val(1);
						//$('#ctgsum'+CatID).val(1); 
						$button.val(0);				
					}
					else if (SubCtgTotalValue  > 99){
						//$('#Count'+CatID).val(1);
						//$('#ctgsum'+CatID).val(1); 
						$button.val(0);
						$button.tooltipster('update', "You can not enter more than 99 quantity for this category.");
						$button.tooltipster('show');
						
						return false;						
					}
			  }
			  else if (($button[0].name == 'elecCtgCount')  )
			  {
				 
				$button.tooltipster('update', "You can not enter more than 99 quantity for this category.");
				$button.tooltipster('hide');
				
				 if (TotalCategory <= 99)
					$button.val(TextValue); 
				else{
					$button.tooltipster('show');
					$button.val(0); 
					return false;				
				}

			  }
		});