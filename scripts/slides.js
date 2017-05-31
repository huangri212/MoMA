$(function(){
		var page = 1;
		var i = 4;
		var $parent = $(".brandnew");
		var len = $(".brandnew ul li").length;
		var width = $(".product").width();
		var pages = Math.ceil(len/i);
		$(".next").click(function(){
		if (!$parent.is(":animated")) {
			if (page==pages) {
				$parent.animate({left:"0px"},1000);
				page =1;
			}else{
				$parent.animate({left:"-="+width},1000);
				page++;
			}		
		}
		});
		$(".previous").click(function(){
			if (!$parent.is(":animated")) {
				if (page==1) {
				$parent.animate({left:"-="+width*(pages-1)},1000)
				page = pages;
			}else{
				$parent.animate({left:"+="+width},1000);
				page--;
			}
		}	
	});
});