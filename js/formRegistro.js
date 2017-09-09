$(function(){
	$(".textbox").focus(function(){
		var label = $(this).siblings().eq(0);
		if ($(this).val() == "") {
			label.toggleClass("labelActive");
		}
	});

	$(".textbox").blur(function(){
		var label = $(this).siblings().eq(0);
		if ($(this).val() == "") {
			label.toggleClass("labelActive");
		}
	});

	

});