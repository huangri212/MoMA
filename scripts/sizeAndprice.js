//尺寸选择
$(function(){
	$(".size ul li span").click(function(){
		var size = $(this).text();
		$(".detail-right .size strong").text(size);
	});
});

//价格和总价

$(function(){
		var $span = $(".caculator p strong");
		var price = $span.text(); 
	$(".nums").change(function(){
			
			var num = $(this).val();
			
			var num_amount = num*price;
			$span.text(num_amount);
	}).change();
});