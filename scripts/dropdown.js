$(function(){
	$(".module-up-down").click(function(){
		var $ul = $(this).siblings("div");
		var current = (current-180)%360;
		if ($ul.is(":visible")) {
			$(this).toggleClass("rotate");
			$ul.hide(300);
		}else{
			$(this).toggleClass("rotate");
			$ul.show(300);
		}
		return false;
	})	
})