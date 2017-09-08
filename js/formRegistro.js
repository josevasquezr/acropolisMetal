$(function(){
	$(".textbox").focus(function(){
		var label = $(this).siblings().eq(0);
		label.addClass("labelActive");
	});

	$(".textbox").blur(function(){
		var label = $(this).siblings().eq(0);
		label.removeClass("labelActive");
	});

});