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

	$(".menu span").click(function(){
		$(".contenedorMenu").toggleClass("despliegueMenu");
		$(".contenedorMenu").animate({"width":"80%"}, 2000);
	});

});