$(function(){
	var $side = $(".side");
	var $main = $('.container-div');
	
	$('.header-container').on('click', function(){
		console.log('app is working');
		$main.toggleClass('container-open');
		$side.toggleClass('side-open');
	});
});