$(document).ready(function(){
	$(".clients__slider").slick({
		slidesToShow:2,
		slidesToScroll:1,
		infinite:false,
		dots:true,
		responsive: [
			{
				breakpoint: 1121,
				settings: {
					slidesToShow:1,
					
				}
			}
		]
	});
});