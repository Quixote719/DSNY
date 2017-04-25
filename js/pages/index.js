var NYC = NYC || {};
NYC.Agencies = {};
console.log('test/js/pages/index.js');
/**
 * Events Index
 *
 */
 if(typeof hero_type =="undefined"){
	hero_type="";
}
if(hero_type.toLowerCase()=="nostatus"||hero_type.toLowerCase()=="piconly"){
	NYC.Agencies.Index = (function() {
	
		var self = this;
	
		self.init = function init() {
	
			//inline comment
			var self = this;
		    self.startModules();
			self.bindEvents();
	
		},
		  self.startModules = function() {
		  //Add VideoPlayer
		  var videoPlayer= new NYC.VideoPlayer();
	
	    //hero slideshow module
	    var heroSlideshow = new NYC.HeroSlideshow({
	        el : ".module-homepage-hero",
	        colorTransition : false
	    });
	
	  }
	
	
		self.resizeElements = function() {
			if (Modernizr.mq('(min-width: 767px)')) {
	              $('.agencies-index-ul').css("display", "block");
	              var span12=$(".agencies-first").hasClass("span12");
	              if(!span12){
		              var theHeight=$('.agencies-no-scrolling').height();
		              $('.agencies-first .scroll-pane').css("height",theHeight+"px");
		              $('.agencies-second .scroll-pane').css("height",theHeight+"px");
		              $('.agencies-third .scroll-pane').css("height",theHeight+"px");
	             }
			} else{
	              $('.extra-padding').removeClass("active");
	              $('.agencies-second .agencies-index-panel').css("height", "auto").toggle();
	              $('.agencies-third .agencies-index-panel').css("height", "auto").toggle();
			}
		},
	
		self.bindEvents = function() {
	
			var self = this;
	
			$(".toggle-list").on("click", function(e) {
				e.preventDefault();
	
				if(Modernizr.mq('(max-width: 767px)')) {
					$(this).toggleClass("active").parent().find(".agencies-index-panel").toggle();
				}
			});
	
			// Resize on page load
			self.resizeElements();
	
			$(window).smartresize(function() {
				self.resizeElements();
			});
	
	
		}
	
	    return self;
	
	}());
}else if(hero_type.toLowerCase()=="nohero"){
	NYC.Agencies.Index = (function() {
	
		var self = this;
	
		self.init = function init() {
	
			//inline comment
			var self = this;
			self.bindEvents();
	
		},
	
	
	
		self.resizeElements = function() {
			if (Modernizr.mq('(min-width: 767px)')) {
	              $('.agencies-index-ul').css("display", "block");
	              var span12=$(".agencies-first").hasClass("span12");
	              if(!span12){
		              var theHeight=$('.agencies-no-scrolling').height();
		              $('.agencies-first .scroll-pane').css("height",theHeight+"px");
		              $('.agencies-second .scroll-pane').css("height",theHeight+"px");
		              $('.agencies-third .scroll-pane').css("height",theHeight+"px");
	             }
			} else{
	              $('.extra-padding').removeClass("active");
	              $('.agencies-second .agencies-index-panel').css("height", "auto").toggle();
	              $('.agencies-third .agencies-index-panel').css("height", "auto").toggle();
			}
		},
	
	
		self.bindEvents = function() {
	
			var self = this;
	
			$(".toggle-list").on("click", function(e) {
				e.preventDefault();
	
				if(Modernizr.mq('(max-width: 767px)')) {
					$(this).toggleClass("active").parent().find(".agencies-index-panel").toggle();
				}
			});
	
			// Resize on page load
			self.resizeElements();
	
			$(window).smartresize(function() {
				self.resizeElements();
			});
	
	
		}
	
	    return self;
	
	}());
}else{
	NYC.Agencies.Index = (function() {
	
		var self = this;
	
		self.init = function init() {
	
			//inline comment
			var self = this;
		    self.startModules();
			self.bindEvents();
	
		},
		  self.startModules = function() {
		  //Add VideoPlayer
		  var videoPlayer= new NYC.VideoPlayer();
	
	    //hero slideshow module
	    var heroSlideshow = new NYC.HeroSlideshow({
	        el : ".module-homepage-hero",
	        colorTransition : false
	    });
	
	    // Status Update Module
	    var statusUpdate = new NYC.StatusUpdate({
			el : ".module-homepage-hero",
			"status" : true
	    });
	
	  }
	
	
		self.resizeElements = function() {
			if (Modernizr.mq('(min-width: 767px)')) {
	              $('.agencies-index-ul').css("display", "block");
	              var span12=$(".agencies-first").hasClass("span12");
	              if(!span12){
		              var theHeight=$('.agencies-no-scrolling').height();
		              $('.agencies-first .scroll-pane').css("height",theHeight+"px");
		              $('.agencies-second .scroll-pane').css("height",theHeight+"px");
		              $('.agencies-third .scroll-pane').css("height",theHeight+"px");
	              }
			} else{
	              $('.extra-padding').removeClass("active");
	              $('.agencies-second .agencies-index-panel').css("height", "auto").toggle();
	              $('.agencies-third .agencies-index-panel').css("height", "auto").toggle();
			}
		},
	
		self.bindEvents = function() {
	
			var self = this;
	
			$(".toggle-list").on("click", function(e) {
				e.preventDefault();
	
				if(Modernizr.mq('(max-width: 767px)')) {
					$(this).toggleClass("active").parent().find(".agencies-index-panel").toggle();
				}
			});
	
			// Resize on page load
			self.resizeElements();
	
			$(window).smartresize(function() {
				self.resizeElements();
			});
	
	
		}
	
	    return self;
	
	}());

}

$(document).ready(function(){
	NYC.Agencies.Index.init();
});



