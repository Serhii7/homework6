$(document).ready(function() {

	if ($(window).width() <= '1000'){
		$('.menu').addClass('fixed_menu');
		$('.menu_nav').addClass('fixed_menu_nav');
		// console.log('sdfsdfsd');
	}else{
		$('.menu').removeClass('fixed_menu');
		$('.menu_nav').removeClass('fixed_menu_nav');
	}

	$('.fixed_menu_nav').click(function(){
		if($('.fixed_menu').hasClass('show')){
			$('.fixed_menu').removeClass('show');
			$('.fixed_menu').hide('slow');
		}
		else{
			$('.fixed_menu').addClass('show');
			$('.fixed_menu').show('slow');
		}
	});
});