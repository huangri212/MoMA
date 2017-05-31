//鼠标hover在slides上停止动
$(function(){
	var index = 0;
	var adTimer;
	var len = $(".num > li").length;
	$(".num li").mouseover(function(){
		index =  $(".num li").index(this);
		showImg(index);
	}).eq(0).mouseover();

	$(".ads").hover(function(){
		clearInterval(adTimer);
	},function(){
		adTimer = setInterval(function(){
			showImg(index)
			index++;
			if(index==len){index=0;}
		}, 1500);
	}).trigger("mouseleave");
})
//显示slides  并点亮tab
function showImg(index){
	var adHeight = $(".content-right .ads").height();
	$(".slides").stop(true,false).animate({top : -adHeight*index},1500);
	$(".num li").removeClass("on")
				.eq(index).addClass("on");
}