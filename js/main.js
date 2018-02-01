$(function(){
	$(".page-num").click(function(){
		var index = $(this).index();
		var html = $(this).find("a").html() - 1;
		$(this).addClass("active").siblings(".page-num").removeClass("active");
		$(".tab-page").eq(html).removeClass("hide").siblings().addClass("hide");		
	})
	
	$(".page-prev").click(function(){
		debugger;
		var index_html = $(".page-num.active a").html() - 1;
		var len = $(".tab-page").length;
		if(index_html > 0 && index_html<len){
			$(".tab-page").eq(index_html-1).removeClass("hide").siblings().addClass("hide");	
			$(".page-num").eq(index_html-1).addClass("active").siblings(".page-num").removeClass("active")
		}
	})
	$(".page-next").click(function(){
		var index_html = $(".page-num.active a").html();
		var len = $(".tab-page").length;
		if(index_html > 0 && index_html<len+1){
			$(".tab-page").eq(index_html).removeClass("hide").siblings().addClass("hide");	
			$(".page-num").eq(index_html).addClass("active").siblings(".page-num").removeClass("active")
		}
	})
	
	//date picker
	$(".date-year").click(function(){
		$(this).next().slideToggle().siblings("ul").slideUp();
	})
	
	$(".date-line-item li").click(function(){
		$(".date-line-item li").removeClass("active");
		$(this).addClass("active");
		
	})
})
