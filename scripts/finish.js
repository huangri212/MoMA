$(function(){
	$(".detail-right .cart img").click(function(){
		var pro_name = $(".detail-right h1").text();
		var pro_size = $(".detail-right .size strong").text();
		var pro_color = $(".detail-right .color-change p strong").text(); 
		var pro_num = $(".detail-right .item select").val();
		var pro_value = $(".detail-right .caculator p strong").text();
		var dialog = " 感谢您的购买。\n您购买的\n"+
		        "产品是："+pro_name+"；\n"+
				"尺寸是："+pro_size+"；\n"+
				"颜色是："+pro_color+"；\n"+
				"数量是："+pro_num+"；\n"+
				"总价是："+pro_value +"元。";
		if (confirm(dialog)) {
			alert("您已经下单了！")
		}
	})
})
