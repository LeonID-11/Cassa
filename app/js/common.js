$(document).ready(function() {

	// Скрол
	$(".head").find(".product-wrap .list .link-popap").click(function(){
		$(this).parent(".list").children(".spoiler").stop().slideToggle();
	});
	$(".head").find(".product-wrap .list .spoiler li").click(function(){
		var x = $(this).html(),
		f='<i class="fa fa-caret-down" aria-hidden="true">';
		$(this).parent(".spoiler").parent(".list").children(".link-popap").html(x+f);
		$(this).parent(".spoiler").slideUp();
	});
	
	// Popap окно
	$(".head").find(".product-wrap .link .link-click").click(function(){
		$(".head").find(".popap-oder").css("display","block").css("opacity","1");
	});
	
	$(".popap-oder").click(function(event){
		if($(event.target).attr("class") == "popap-oder"){
		$(".head").find(".popap-oder").css("display","none");}
	});
	
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};


});
