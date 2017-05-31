$(function () {
	$(".tab-menu ul li").click(function(){
		$(this).addClass("selected").siblings().removeClass("selected");
		var index = $(".tab-menu ul li").index(this);
		$(".tab-box div").eq(index).show().siblings().hide();
	})	
})