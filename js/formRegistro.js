$(function(){
	$(".textbox").click(function(){
		$(".label").css({"top": "-8px", "font-size": "10px", "color": "white", "transition": "all .3s ease"});
	});

	$(".textbox").blur(function(){
		$(".label").css({"top": "3px", "font-size": "16px", "color": "#8D0800", "transition": "all .3s ease"});
	});

});