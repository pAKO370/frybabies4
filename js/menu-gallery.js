(function(){
	
	//stores gallery-div in variable
	var galleryDiv = document.getElementById('gallery-div');
	
	//when browser loads, set div height
	window.onload = function(){
		galleryDiv.style.height = galleryDiv.offsetWidth / 1.7 + "px";
	};
	
	//when browser is resized, div width is changed
	window.addEventListener("resize", function(e){			
		galleryDiv.style.height = galleryDiv.offsetWidth / 1.7 + "px";
		console.log(galleryDiv.offsetHeight);
	});
	
	//stores image locations in an array
	var imagesArray = ['assets/images/menu2.jpg','assets/images/menu3.jpg','assets/images/menu4.jpg','assets/images/menu5.jpg'];
	
	//stores divs image in variable
	var galleryImage = galleryDiv.childNodes[1];
	
	//counter for image slider	
	var i = 1;
	
	//variable is global for pause
	var refresh;
	
	//changes image every 5000 ms
	function startSlider(){
		refresh = setInterval(imageSwap, 5000);
	}
	
	//pauses slider function
	function pauseSlide(){
		clearInterval(refresh);
	}
	// function to sawap images
	function imageSwap(){
		$('#image').fadeOut(300,function(){
			$(this).attr('src',imagesArray[i]);
			$(this).fadeIn(600);
			i++
			//if imagesArray is at max, restart from the first element in array
				if(i >=4){
					i = 0;
				}
			})
		};
	
	//starts and pauses on mouse enter or leave
		$('#gallery-div')
			.on('mouseenter', pauseSlide)
			.on('mouseleave', startSlider);
	
	//starts slider function
		startSlider();
})($);
	