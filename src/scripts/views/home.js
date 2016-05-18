var homeTpl = require('../tpl/home.string');

// 定义一个视图
SPA.defineView('home',{
	html: homeTpl,
	
	
	plugins:[
		'delegated'
	],
	
	bindEvents:{
		beforeShow:function(){
			
			
			
			
			
			
			
			
			
			
			
			
			var myswiper = new Swiper('.swiper-container', {
				pagination: '.swiper-pagination',
		        nextButton: '.swiper-button-next',
		        prevButton: '.swiper-button-prev',
		        paginationClickable: true,
		        spaceBetween: 30,
		        centeredSlides: true,
		        autoplay: 2000,
		        autoplayDisableOnInteraction: false,
				loop:true
			});
		}
		
	}
	
});




