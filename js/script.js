var slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
	showSlidesNum(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("slider-item");
	var dots = document.getElementsByClassName("dot");

	if(n > slides.length){
		slideIndex = 1;
	}
	if(n < 1){
		slideIndex = slides.length;
	}
	for(i=0; i<slides.length; i++){
		slides[i].style.display = "none";
	}
	for(i=0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active","");
	}
	 slides[slideIndex-1].style.display = "block";
	 dots[slideIndex-1].className+= " active";
}

function showSlidesNum(n){
	var i;
	var sliders = document.getElementsByClassName("slider-item-top");

	if(n > sliders.length){
		slideIndex = 1;
	}
	if(n < 1){
		slideIndex = sliders.length;
	}
	for(i=0; i<sliders.length; i++){
		sliders[i].style.display = "none";
	}
	sliders[slideIndex-1].style.display = "block";
}