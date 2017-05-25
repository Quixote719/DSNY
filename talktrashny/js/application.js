	var videoOn = false;
	
	$(document).ready(function() {
			if( /Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				
				//$(".dsnLogo").attr('data-menuanchor','anchor5');
				//$("#myVideo").first().attr('poster','Assets/VideoPlaceHolderImage_Mobile');
				$(".dsnLogo").attr('src','Assets/SanitationLogo_Mobile.svg');
				$("#imghref").attr('href','#anchor0');
				$("#link3").attr('data-menuanchor','anchor5');
				$("#link3").html("<a href='#anchor5'>Don't Trash New York</a>");
				$("#link5").attr('data-menuanchor','anchor3');
				$("li#link5").html("<a href='#anchor3'>0X30</a>");

				$("#link3").addClass('hide');
				$("#link4").addClass('hide');
				$("#link5").addClass('hide');
			}
			/*else if(/iPad/i.test(navigator.userAgent) ) {
			
				$("#myVideo").first().attr('poster','Assets/VideoPlaceHolderImage_Tablet');
			} */
			
			//$("#menu li").on("click", function(e) {
				//changemenuTwo();
			//});

			var $hamburger = $(".hamburger");
			  $hamburger.on("click", function(e) {

				// Do something else, like open/close menu
				if($hamburger.hasClass("is-active"))
				{
					$("#link3").addClass('hide');
					$("#link4").addClass('hide');
					$("#link5").addClass('hide');
					$("#menu").removeClass('menuAddBgColor');
				}
				else
				{
					$("#link3").removeClass('hide');
					$("#link4").removeClass('hide');
					$("#link5").removeClass('hide');
					$("#menu").addClass('menuAddBgColor');
				}

				$hamburger.toggleClass("is-active");
			  });

			$('#nav-open-btn').click(function(){
				$("#link3").removeClass('hide');
				$("#link4").removeClass('hide');
				$("#link5").removeClass('hide');
			});

			$('.close').click(function(){
				videoOn = false;
				$('.dsnLogo').show();
				$(".mySpan").show();
				changemenuTwo();
				$("#link7").addClass('hide');
				
				if( /Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
						//$("#myVideo").get(0).pause();
						//$("#myVideo").first().attr('src','')
						$("#myVideo").css('object-fit','cover');
						$("#section0").children("#myVideo").remove();
						//$("#myVideo").first().attr('src','')
					}	
				else if(/iPad/i.test(navigator.userAgent) ) {
						//$("#myVideo").get(0).pause();
						//$("#myVideo").first().attr('src','')
						$("#myVideo").css('object-fit','cover');
						$("#section0").children("#myVideo").remove();
				}
				else
				{
					//$("#myVideo").get(0).pause();
					//$("#myVideo").first().attr('src','');
					$("#section0").children("#myVideo").remove();
					/*$("#myVideo").first().attr('src','')
					var videoFile = 'Video/TalkTrashCut.mp4';

					$("#myVideo").first().attr('src', videoFile);
					//$("#myVideo").first().attr('controls','');
					$("#myVideo").first().attr('loop','');
					$("#myVideo").first().attr('data-autoplay','');
					$("#myVideo").prop('muted', true);
					$("#myVideo").get(0).load();
					$("#myVideo").get(0).play(); */
				}
			});

			$(document).on('click', '.playpause', function (e) {
				e.preventDefault();
				jumpHome();
				$(this).fadeOut();
				
				
				
				$('.dsnLogo').hide();
				$(".mySpan").hide();
				$("#menu li").addClass('hide');
				$("#link7").removeClass('hide');
				
				var video = $('<video />', {
				  id: 'myVideo',
				  src: 'Video/TrashTalk.mp4',
				  type: 'video/mp4'
				});
				
				$('#section0').append(video);
				
				if( /Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
					$("#myVideo").css('object-fit','contain');
				}
				else if(/iPad/i.test(navigator.userAgent) ) {
					$("#myVideo").css('object-fit','contain');
				}

				/*$("#myVideo").get(0).pause();
				$("#myVideo").first().attr('src','')
				var videoFile = 'Video/new.mp4';

				$("#myVideo").first().attr('src', videoFile);
				//$("#myVideo").first().attr('controls','');
				$("#myVideo").first().removeAttr('loop');
				$("#myVideo").first().removeAttr('data-autoplay');
				$("#myVideo").prop('muted', false);
				$("#myVideo").get(0).load();
				if($("#myVideo").get(0).paused)
				{
					$("#myVideo").get(0).play();
				}*/
				if ($("#myVideo").attr("src") == '')
				{
					var videoFile = 'Video/TrashTalk.mp4';
					$("#myVideo").first().attr('src', videoFile);
					$("#myVideo").get(0).load();
				}
				$("#myVideo").get(0).play();
				

				/*var anchor = $(this);
				if ($(this).children("video").get(0) == undefined) {
					anchor.removeAttr('href');
					anchor.html(anchor.html().replace('<!--', '').replace('-->', ''));

				}

				if ($(this).children("video").get(0).paused) {
					$(this).children("video").attr('controls','');
					$(this).children("video").get(0).play();
					$(this).children(".playpause").fadeOut();
				} else {
					$(this).children("video").get(0).pause();
					$(this).children(".playpause").fadeIn();
					$(this).children("video").removeAttr('controls');
				} */


				/*$(function () {
		var width = $(window).width();
		if (width <= 768) {
			$('li').each(function() {
					$(this).parent().prepend(this);
			});
		} else {

		}
	});*/

				return false;
			});


			$('#fullpage').fullpage({
				verticalCentered: true,
        anchors: ['anchor0','','anchor5', 'anchor4', 'anchor3',''],
         menu: '#menu',
				'navigation': true,
				'lockAnchors': false,
				'navigationPosition': 'left',
				'scrollOverflow': false,
				'scrollBar': false,
				'afterLoad': function(anchorLink, index){
					
					//if( /Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
						//$("#menu").css('opacity','1');
						//$("#myVideo").attr('poster','Assets/VideoPlaceHolderImage.png');
					//}
					
					if(index == 1)  {
						if(!videoOn)
						{
							changemenuTwo();
							$("#fp-nav").hide();
						}
						/*$(".playpause").removeClass('hide');*/
					}
                    else if (index == 2) {
						changemenuOne();
						$("#fp-nav").hide();
					}else if (index == 3) {
                        changemenuOne();
                        $('#section1 .dtHeader').addClass('show animated fadeIn');
                        $('#section1 .dtfooter').addClass('show animated fadeInUp');
                      $("#fp-nav").show();
                    }else if (index == 4) {
                        changemenuOne();
                        $('#section2 .dtHeader').addClass('show animated fadeIn');
                        $('#section2 .dtfooter').addClass('show animated fadeInUp');
                      $("#fp-nav").show();
                    }else if (index == 5) {
                        changemenuOne();
                        $('#section3 .dtHeader').addClass('show animated fadeIn');
                        $('#section3 .dtfooter').addClass('show animated fadeInUp');
                        $('#section3 .chart').addClass('show animated fadeInUpBig');
                      $("#fp-nav").show();
                    }
				},
				 onLeave: function(index, nextIndex, direction){
					
					if( /Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
						$("#menu").removeClass('menuAddBgColor');
						//$("#menu").css('opacity','0.5');
						$(".hamburger").removeClass("is-active");
					}
					
					
					if(index == 1)  {
					
						$('.dsnLogo').show();
						$(".mySpan").show();
						/*$(".playpause").addClass('hide');*/
						$("#link7").addClass('hide');
						//$("#link6").removeClass('hide');
						if(videoOn)
						{
							changemenuTwo();
							$("#fp-nav").hide();
							videoOn = false;
						}
	
						if( /Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
							$("#menu li").addClass('hide');
							//$("#link6").removeClass('hide');
							$("#link2").removeClass('hide');
							$("#myVideo").css('object-fit','cover');
							//$("#myVideo").get(0).pause();
							//$("#myVideo").first().attr('src','');
							
							//$("#myVideo").get(0).pause();
							//$("#myVideo").first().attr('src','')
							//var videoFile = 'Video/TrashTalk.mp4';
							//$("#myVideo").first().attr('src', videoFile);
							//$("#myVideo").get(0).load();
							//$("#myVideo").get(0).pause();
							$("#section0").children("#myVideo").remove();
						}
						else if(/iPad/i.test(navigator.userAgent) ) {
							//$("#myVideo").get(0).pause();
							//$("#myVideo").first().attr('src','')
							$("#myVideo").css('object-fit','cover');
							//$("#myVideo").first().attr('src','')
							
							//$("#myVideo").get(0).pause();
							//$("#myVideo").first().attr('src','')
							//var videoFile = 'Video/TrashTalk.mp4';
							//$("#myVideo").first().attr('src', videoFile);
							//$("#myVideo").get(0).load();
							//$("#myVideo").get(0).pause();
							$("#section0").children("#myVideo").remove();
						}
						else
						{
							//$("#myVideo").get(0).pause();
							//$("#myVideo").first().attr('src','')
							//var videoFile = 'Video/TrashTalk.mp4';
							//$("#myVideo").first().attr('src', videoFile);
							//$("#myVideo").get(0).load();
							//$("#myVideo").get(0).pause();
							$("#section0").children("#myVideo").remove();
							//$("#myVideo").get(0).pause();
							/*if ($("#myVideo").attr("src") != 'Video/TalkTrashCut.mp4')
							{
								$(".hamburger").removeClass("is-active");
								$('.playpause').fadeIn();
								$(".mySpan").show();
								$("#myVideo").get(0).pause();
								$("#myVideo").first().attr('src','')
								var videoFile = 'Video/TalkTrashCut.mp4';

								$("#myVideo").first().attr('src', videoFile);
								//$("#myVideo").first().removeAttr('controls');
								$("#myVideo").first().attr('loop','');
								$("#myVideo").first().attr('data-autoplay','');
								$("#myVideo").prop('muted', true);
								$("#myVideo").get(0).load();
								//$("#myVideo").get(0).play();
							}*/
						}
					}
				},
			});
			
			
			//$(window).on("orientationchange",function(event){
			  //window.location.reload();
			//});
			
		});

        $("#link6").hover(
     function(){
          var itemClass = $(this).find('img').attr('src');
          console.log(itemClass)
      }
);
var animated = true
        function changemenuOne(){
			if( /Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				$("#menu li").addClass('hide');
				//$("#link6").removeClass('hide');
				$("#link2").removeClass('hide');
			}
			/*else if(/iPad/i.test(navigator.userAgent) ) {
				$("#menu li").addClass('hide');
				$("#link6").removeClass('hide');
			}*/
			else if (animated)
			{
				animated = false;
				$("#link2").addClass('hide');
				$("#menu li").removeClass('animated fadeIn').addClass('animated bounceOutUp');
				$("#link7").removeClass('animated bounceOutUp');
				$("#link6")
  .delay(400)
  .queue(function (next) {
    $(this).removeClass('hide animated bounceOutUp').addClass('animated fadeIn');
    next();
  });
				//$("#link6").removeClass('hide animated bounceOutUp').addClass('animated fadeIn');
			}
        }


         function changemenuTwo(){
					 animated = true;
			if(/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				$("#menu li").addClass('hide');
				$("#link2").removeClass('hide');
				$(".hamburger").removeClass("is-active");
			}
			/*else if(/iPad/i.test(navigator.userAgent) ) {
				$(".hide").removeClass('hide');
				$("#link2").addClass('hide');
				$("#link7").addClass('hide');
				$("#link6").addClass('hide');
			}*/
			else
			{
				$(".hide").removeClass('hide');
				$("#link2").addClass('hide');
				$("#link7").addClass('hide');
				$("#link6").addClass('hide animated bounceOutUp');
				$("#menu li").removeClass('animated bounceOutUp').addClass('animated fadeIn');
				$("#link7").removeClass('animated fadeIn');
			}

        }
		
		function jumpHome(){
			//$.fn.fullpage.setScrollingSpeed(0);
			location.href = '#anchor0';
			$("#menu li").addClass('hide');
			$("#link7").removeClass('hide');
			videoOn = true;
		}
