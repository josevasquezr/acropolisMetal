$(function(){
	// $(".textbox").focus(function(){
	// 	var label = $(this).siblings().eq(0);
	// 	if ($(this).val() == "") {
	// 		label.toggleClass("labelActive");
	// 	}
	// });

	// $(".textbox").blur(function(){
	// 	var label = $(this).siblings().eq(0);
	// 	if ($(this).val() == "") {
	// 		label.toggleClass("labelActive");
	// 	}
	// });

	var abierto = 0;
	$(".menuAdaptable").click(function(){
		if (abierto == 0) {
			$("nav").addClass("abrir");
			$("nav").removeClass("cerrar");
			abierto = 1;
		}else{
			$("nav").removeClass("abrir");
			$("nav").addClass("cerrar");
			abierto = 0;
		}
	});

	$("nav").click(function(){
		if (abierto == 0) {
			$("nav").addClass("abrir");
			$("nav").removeClass("cerrar");
			abierto = 1;
		}else{
			$("nav").removeClass("abrir");
			$("nav").addClass("cerrar");
			abierto = 0;
		}
	});
});