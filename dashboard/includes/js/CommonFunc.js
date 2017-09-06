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

						if (($button.parent().find("input")[0].name == 'elecCtgCount')) {
							newVal = 0;
						}
						else {
							newVal = 0;
						}
					}
				}
				var TotalCategory =  0;
				
				$('#dialogRequest').find('input[name^="elecCtgCount"]').each(function(index, element){
					TotalCategory += parseFloat(element.value);
				});

				$button.parent().find("input[name=elecCtgCount]").tooltipster('update', "You cannot enter more than 20 items (including televisions).");
				$button.parent().find("input[name=elecCtgCount]").tooltipster('hide');

				TotalCategory = parseFloat((TotalCategory + newVal) - oldValue );

				SubCtgSum = parseFloat($('#ctgsum' + CatID).val());
				if (($button.parent().find("input")[0].name == 'tvSubCat' + CatID)) {

					$('#Count'+CatID).tooltipster('update', "You cannot enter more than 5 televisions.");
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
							$('#Count'+CatID).tooltipster('update', "You cannot enter more than 5 televisions.");
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
							$('#Count'+CatID).tooltipster('update', "You cannot enter more than 20 items (including televisions).");
							$('#Count'+CatID).tooltipster('show');
						}
						else {
							$('#Count' + CatID).val(TotalValue);
							$('#ctgsum' + CatID).val(TotalValue);
							$button.parent().find("input").val(newVal);
						}
					}				


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
							$('#Count'+CatID).tooltipster('update', "You cannot enter more than 5 televisions.");
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
							$('#Count'+CatID).tooltipster('update', "You cannot enter more than 20 items (including televisions).");
							$('#Count'+CatID).tooltipster('show');
						}
						else {
							$('#Count'+CatID).val(TotalSubCategory);
							$('#ctgsum'+CatID).val(TotalSubCategory);
							$button.val(TextValue);
						}
					}
			  }
			  else if (($button[0].name == 'elecCtgCount')  )
			  {
				 
				$button.tooltipster('update', "You cannot enter more than 20 items (including televisions).");
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