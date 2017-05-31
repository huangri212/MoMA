$(function(){
	$("#navi ul li:has(ul)").hover(function(){
		$(this).children("ul").slideDown(400);
	},function(){
		$(this).children("ul").slideUp("fast");
	});
});