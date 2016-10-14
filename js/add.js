;(function(){
	function init(){
		addStyle();
	}
	function addStyle(){
			//按钮的点击样式
		$(".text span em").on("click",function(){
			 $(this).addClass("checked").parent().siblings().find("em").removeClass("checked");
		})
		$(".text span em").first().addClass("checked");
	//点击按钮(有)出现矩形框
		$(".block").on("click",function(){
			$("#ul").css({"display":"block"})
		})
		$(".none").on("click",function(){
			$("#ul").css({"display":"none"})
		})
		$("#ul span").on("click",function(){
			$(this).addClass("bg");//矩形的点击样式
		})
	}
	init();
})(jQuery)