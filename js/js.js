;(function($){
	function init(){	
		//ajax渲染
		apply();
	}
  //ajax的请求
  	function apply(){
  		$.ajax({
  			url:"data/data.json",
  			type:"get",
  			dataType:"json",
  			success:function(data){
  				//console.log(data);
  				var html=""
  				$.each(data,function(i,val){
  					if(i<5){
  						html+='<li>'+
							'<p class="p" data-id="'+val.id+'"><img src="img/f_05.png" alt="">'+val.qName+'</p>'+
							'<p class="span">'+
							'<span data-count="0">没有</span>'+
							'<span data-count="1">很少</span>'+
							'<span data-count="2">有时</span>'+
							'<span data-count="3">经常</span>'+
							'<span data-count="4">总是</span>'+
							'</p>'+
						'</li>';
  					}
						$("#item").html(html)
  				})
  				$(".span span").on("click",function(){
					$(this).addClass("bg").siblings().removeClass("bg");
				  })	
  			},
  			error:function(){
  				alert("您请求的数据有误")
  			}
  		})
  	}

  	init();  
})(Zepto)
