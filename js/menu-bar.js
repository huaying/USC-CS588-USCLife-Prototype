$(document).on('pagebeforecreate', function(){  
    showMenu();
	showSearch();
    slideLeft();
    resetBars();
    $(document).find('a[href="eventdetail.html"').attr('data-ajax','false');
});

function expandEventMenu() {    
    $('.menu-bar ul li ul').slideToggle();
}

function showMenu() {
    $(".menu-btn").click(function(){
    	if ($(".menu-bar").css("left") == "0px") {
        	slideLeft();
    	} else {
        	slideRight();
    	}    
  	});  
}


function showSearch() {  
    $(".search-btn").click(function(){
    	if ($(".category-bar").css("top") == "-20px") {
        	slideDown();       
    	} else {
        	slideUp();
    	}
  	});  
}

function resetBars() {
	$(".menu-bar").css("left", "-185px");
    $(".category-bar").css("left", "0px");
    $(".ui-content").css("margin-left", "0px");    
    $(".ui-filterable").css("margin-left", "0px");
    $(".btn-edit").css("left", "255px");
    $(".event-details-plus").css("right", "-1px");
    
    $(".menu-bar").css("top", "50px");
    $(".ui-filterable").css("top", "-20px");
    $(".category-bar").css("top", "-20px");   
    $(".date-slider").css("top", "-20px");
    $(".time-slider").css("top", "-20px");
    $(".btn-edit").css("top", "50px");
    $(".event-details-plus").css("top", "70px");
    $(".ui-content").css("margin-top", "48px");
    
    $(".menu-btn").removeClass("ui-icon-carat-d");
    $(".menu-btn").addClass("ui-icon-carat-l");
    $(".menu-event-expand").unbind('click').bind('click', expandEventMenu);
    $(".menu-expand-btn").css("display", "none");
}


function slideLeft() {
	$(".menu-bar").animate({left: "-185px"}, "fast");
    $(".ui-content").animate({marginLeft: "0px"}, "fast");
    $(".ui-filterable").animate({left: "0px"}, "fast");
    $(".category-bar").animate({left: "0px"}, "fast");
    $(".btn-edit").animate({left: "255px"}, "fast");
    $(".event-details-plus").animate({right: "-1px"}, "fast");
    $(".date-slider").animate({left: "0px"}, "fast");
    $(".time-slider").animate({left: "0px"}, "fast");
    $(".menu-btn").removeClass("ui-icon-carat-d");
    $(".menu-btn").addClass("ui-icon-carat-l");
}

function slideRight() {
	$(".menu-bar").animate({left: "0px"}, "fast");
    $(".ui-content").animate({marginLeft: "185px"}, "fast");
    $(".ui-filterable").animate({left: "185px"}, "fast");
    $(".category-bar").animate({left: "185px"}, "fast");
    $(".btn-edit").animate({left: "405px"}, "fast");
    $(".event-details-plus").animate({right: "-30px"}, "fast");
    $(".date-slider").animate({left: "185px"}, "fast");
    $(".time-slider").animate({left: "185px"}, "fast");      
    $(".menu-btn").removeClass("ui-icon-carat-l");
    $(".menu-btn").addClass("ui-icon-carat-d");
}


function slideDown() {
	$(".ui-filterable").animate({top: "50px"} ,"fast");
    $(".category-bar").animate({top: "110px"}, "fast");
    $(".date-slider").animate({top: "160px"}, "fast");
    $(".time-slider").animate({top: "220px"}, "fast");    
    $(".btn-edit").animate({top: "180px"} ,"fast");
    $(".event-details-plus").animate({top: "180px"}, "fast");
    $(".ui-content").animate({marginTop: "275px"}, "fast");
}

function slideUp() {
	$(".category-bar").animate({top: "-20px"}, "fast");
    $(".ui-filterable").animate({top: "-20px"}, "fast");
    $(".date-slider").animate({top: "-20px"}, "fast");
    $(".time-slider").animate({top: "-20px"}, "fast");   
    $(".btn-edit").animate({top: "50px"} ,"fast");
    $(".event-details-plus").animate({top: "70px"}, "fast");
    $(".ui-content").animate({marginTop: "48px"}, "fast");
}


   urls = [
        "http://cdn.jtsage.com/datebox/latest/jqm-datebox.core.min.js",
        "http://dev.jtsage.com/cdn/datebox/latest/jqm-datebox.mode.flipbox.min.js",
        "./js/login.js",
        "./css/ion.rangeSlider-2.0.1/js/ion-rangeSlider/ion.rangeSlider.min.js",
        "./css/ion.rangeSlider-2.0.1/js/moment.min.js"
        ];

      $.ajaxSetup({cache:true});
      for(i in urls){        
          $.ajax({
              url: urls[i],
              dataType: "script",
              async: false
          });
      }
