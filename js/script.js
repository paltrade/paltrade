

 // career browse 
 $(document).on("click", ".attachment-box", function() {
 	var t = $(this).parent().parent().parent().find(".file");
 	t.trigger("click")
 });
 $(document).on("change", ".file", function() {
 	$(this).parent().find(".attachment").val($(this).val().replace(/C:\\fakepath\\/i, ""))
 });


    // inquiry-from
    $(function(){
    	$("#enq-popup").load("enquiry-now.php"); 
    });

    if (window.innerWidth < 992) {
    	$('.test-btn').click(function() {
    		$(".menu-overlay").trigger("click");
    	});
    }


// <!--================= Navigation =================-->
$('[data-toggle="slide-collapse"]').on('click', function() {
	$navMenuCont = $($(this).data('target'));
	$navMenuCont.animate({
		'width': 'toggle'
	}, 350);
	$(".menu-overlay").fadeIn(500);
});
$(".menu-overlay").click(function(event) {
	$(".navbar-toggler").trigger("click");
	$(".menu-overlay").fadeOut(500);
});

$(".navbar-toggler").click(function(event) {
	$(".navbar-toggler").toggleClass("close");
});



//<!--================= News Area =================-->
$('#owl-feature-slider').owlCarousel({
	autoplay: true,
	loop: true,
	autoplayTimeout: 3000,
	items: 5,
	margin: 0,
	stagePadding: 0,
	smartSpeed: 1500,
	nav:false,
	dots:false,
	rewind: false,
	autoplayHoverPause: true,
	responsiveClass:true,
	responsive:{
		0:{items:1},
		576:{items:2},
		992:{items:3},
		1200:{items:4},
		1400:{items:5}
	}
})


// <!--================= career page file select =================-->

$('.input').on("focus blur", function() {
	if ($(this).val().length > 0 || $('.input').is(':focus')) {
		$(this).siblings().addClass('active');
		$(this).parent().addClass('active');
	} else {
		$(this).siblings().removeClass('active').addClass('not');
		$(this).parent().removeClass('active').addClass('not');
	}
	if ($(this).val().length < 2 && $('.input').is(':focus') != true && $(this).is(':invalid') || $(this).is(':invalid') && $('.input').is(':focus') != true) {
		$(this).parent().addClass('invalid');
		$(this).siblings().addClass('invalid');
	} else {
		$(this).parent().removeClass('invalid');
		$(this).siblings().removeClass('invalid');
	}
	if ($(this).val().length > 0 && $(this).is(':valid') && $('.input').is(':focus') != true) {
		$(this).parent().addClass('valid');
		$(this).siblings().addClass('valid');
	} else {
		$(this).parent().removeClass('valid');
		$(this).siblings().removeClass('valid');
	}
});



	// career page resume with validation 
	$('.file_input_replacement').on("focus blur", function() {
		if ($('.file_input_with_replacement').val().length < 2 && $('.file_input_replacement').is(':focus') != true && $('.file_input_with_replacement').is(':invalid') || $('.file_input_with_replacement').is(':invalid') && $('.file_input_replacement').is(':focus') != true) {
			$('.file_input_with_replacement').parent().addClass('invalid');
			$('.file_input_with_replacement').siblings().addClass('invalid');
		} else {
			$('.file_input_with_replacement').parent().removeClass('invalid');
			$('.file_input_with_replacement').siblings().removeClass('invalid');
		}


		if ($('.file_input_with_replacement').val().length > 0 && $('.file_input_with_replacement').is(':valid') && $('.file_input_replacement').is(':focus') != true) {
			$('.file_input_with_replacement').parent().addClass('valid');
			$('.file_input_with_replacement').siblings().addClass('valid');
		} else {
			$('.file_input_with_replacement').parent().removeClass('valid');
			$('.file_input_with_replacement').siblings().removeClass('valid');
		}
	});





// // <!--================= Navigation =================-->
// $('[data-toggle="slide-collapse"]').on('click', function() {
// 	$navMenuCont = $($(this).data('target'));
// 	$navMenuCont.animate({
// 		'transform': 'toggle'
// 	}, 350);
// 	$(".menu-overlay").fadeIn(500);
// 	var element = document.getElementById("slide-navbar-collapse");
// 	element.classList.toggle("show");
// }); 

// const $dropdown = $(".navi .dropdown");
// const $dropdownToggle = $(".dropdown-toggle");
// const $dropdownMenu = $(".dropdown-menu");
// const showClass = "show";

// $(window).on("load resize", function() {
//   if (this.matchMedia("(min-width: 992px)").matches) {
// 	$dropdown.hover(
// 	  function() {
// 		const $this = $(this);
// 		$this.addClass(showClass);
// 		$this.find($dropdownToggle).attr("aria-expanded", "true");
// 		$this.find($dropdownMenu).addClass(showClass);
// 	  },
// 	  function() {
// 		const $this = $(this);
// 		$this.removeClass(showClass);
// 		$this.find($dropdownToggle).attr("aria-expanded", "false");
// 		$this.find($dropdownMenu).removeClass(showClass);
// 	  }
// 	);
//   }
// });

// window.addEventListener('load', function(){
// 	var movingBar = new MovingBar('.navbar');
// });
// // Moving Bar
// function MovingBar( nav ){
// 	var $navMovingBar = document.querySelector( nav ),
// 	$btnMenu11 = $navMovingBar.querySelectorAll('.nav-item'),
// 	bar = document.createElement('span'),
// 	width, left;

// 	bar.classList.add('effect');
// 	$navMovingBar.appendChild( bar );
// 	for( var i=0, max=$btnMenu11.length; i<max; i++ ){
// 		$btnMenu11[i].addEventListener('mouseenter', function(){
// 			width = this.offsetWidth,
// 			left = this.offsetLeft;
// 			barMovingCurrentMenu( width, left );
// 		});
// 	}
// 	function barMovingCurrentMenu( width, left ) {
// 		bar.style.width = width + 'px';
// 		bar.style.left = left + 'px';
// 	}
// }

// jQuery(document).ready(function() {
// 	jQuery('.navbar-nav').hover(function(){     
// 		jQuery('.navbar').addClass('show');
// 	},function(){    
// 		jQuery('.navbar').removeClass('show');
// 	});
// });

// // Responsive Menu
// $("#menu-toggle").click(function(e) {
// 	e.preventDefault();
// 	$(".body-menu").toggleClass("toggled");
// });
// $(".menu-overlay").click(function(e) {
// 	e.preventDefault();
// 	$(".body-menu").toggleClass("toggled");
// });

// //haveDrop
// $(document).ready(function(){
// 	$('.haveDrop a').click(
// 		function(){
// 			$(this).parent(".haveDrop").toggleClass("show");
// 		}
// 	)
// });





// $('.pageRadio').change(function() {
// 	$('.radioActive').removeClass('radioActive');
// 	if ($(this).is(':checked')) {
// 		$(this).parent().addClass('radioActive');
// 	}
// });
// $('.pageRadio2').change(function() {
// 	$('.radioActive2').removeClass('radioActive2');
// 	if ($(this).is(':checked')) {
// 		$(this).parent().addClass('radioActive2');
// 	}
// });


// // <!--================= Sticky Header =================-->
// myID = document.getElementById("stickyheader");
// var myScrollFunc = function () {
// 	var y = window.scrollY;
// 	if (y >= 10) {
// 		myID.className = "header sticky"
// 	} else {
// 		myID.className = "header"
// 	}
// };
// window.addEventListener("scroll", myScrollFunc);
// //=========================================== Index Services Slider ==
// $('#owl-services-slider').owlCarousel({
// 	autoplay: true,
// 	loop: true,
// 	autoplayTimeout: 3000,
// 	items: 4,
// 	margin: 0,
// 	stagePadding: 0,
// 	smartSpeed: 1500,
// 	nav:true,
// 	navText : ["<svg viewBox='0 -66 511.9995 511'><path id='spclArrow' d='M20.5,257.3h275.3V129c0,0-5.2-33.3,26.3-41.2c16.7-4.2,37.6,21.9,37.6,21.9l116.9,117.4c0,0,13,10.4,13,29.7 c0,18.8-17.2,35-17.2,35L357,408.7c0,0-16.6,19.4-35,18.8c-30.3-1-26.1-30.8-26.1-30.8v-43.3'/></svg>","<svg viewBox='0 -66 511.9995 511'><path id='spclArrow' d='M20.5,257.3h275.3V129c0,0-5.2-33.3,26.3-41.2c16.7-4.2,37.6,21.9,37.6,21.9l116.9,117.4c0,0,13,10.4,13,29.7 c0,18.8-17.2,35-17.2,35L357,408.7c0,0-16.6,19.4-35,18.8c-30.3-1-26.1-30.8-26.1-30.8v-43.3'/></svg>"],
// 	dots:false,
// 	rewind: false,
// 	autoplayHoverPause: true,
// 	responsiveClass:true,
// 	responsive:{
// 		0:{items:1},
// 		576:{items:2},
// 		992:{items:3},
// 		1400:{nav:true,items:4}
// 	}
// })


// const stats = document.querySelectorAll(".counter");

// stats.forEach(stat => {
// 	const patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;
// 	const time = 500;
// 	let result = [...patt.exec(stat.textContent)];
// 	let fresh = true;
// 	let ticks;

// 	result.shift();
// 	result = result.filter(res => res != null);

// 	while (stat.firstChild) {
// 		stat.removeChild(stat.firstChild);
// 	}

// 	for (let res of result) {
// 		if (isNaN(res)) {
// 			stat.insertAdjacentHTML("beforeend", `<span>${res}</span>`);
// 		} else {
// 			for (let i = 0; i < res.length; i++) {
// 				stat.insertAdjacentHTML(
// 					"beforeend",
// 					`<span data-value="${res[i]}">
// 						<span>&ndash;</span>
// 						${Array(parseInt(res[i]) + 1)
// 							.join(0)
// 							.split(0)
// 							.map(
// 								(x, j) => `<span>${j}</span>`
// 							)
// 							.join("")}
// 					</span>`
// 				);
// 			}
// 		}
// 	}

// 	ticks = [...stat.querySelectorAll("span[data-value]")];
// 	let activate = () => {
// 		let top = stat.getBoundingClientRect().top;
// 		let offset = window.innerHeight * 0.8;

// 		setTimeout(() => {
// 			fresh = false;
// 		}, time);

// 		if (top < offset) {
// 			setTimeout(() => {
// 				for (let tick of ticks) {
// 					let dist = parseInt(tick.getAttribute("data-value")) + 1;
// 					tick.style.transform = `translateY(-${dist * 100}%)`;
// 				}
// 			}, fresh ? time : 0);
// 			window.removeEventListener("scroll", activate);
// 		}
// 	};
// 	window.addEventListener("scroll", activate);
// 	activate();
// });



// //=========================================== Index Reviews Slider ==
// $('#owl-reviews-slider').owlCarousel({
// 	autoplay: true,
// 	loop: true,
// 	autoplayTimeout: 3000,
// 	items: 1,
// 	margin: 0,
// 	stagePadding: 0,
// 	smartSpeed: 1500,
// 	nav:true,
// 	navText : ["<svg viewBox='0 -66 511.9995 511'><path id='spclArrow' d='M20.5,257.3h275.3V129c0,0-5.2-33.3,26.3-41.2c16.7-4.2,37.6,21.9,37.6,21.9l116.9,117.4c0,0,13,10.4,13,29.7 c0,18.8-17.2,35-17.2,35L357,408.7c0,0-16.6,19.4-35,18.8c-30.3-1-26.1-30.8-26.1-30.8v-43.3'/></svg>","<svg viewBox='0 -66 511.9995 511'><path id='spclArrow' d='M20.5,257.3h275.3V129c0,0-5.2-33.3,26.3-41.2c16.7-4.2,37.6,21.9,37.6,21.9l116.9,117.4c0,0,13,10.4,13,29.7 c0,18.8-17.2,35-17.2,35L357,408.7c0,0-16.6,19.4-35,18.8c-30.3-1-26.1-30.8-26.1-30.8v-43.3'/></svg>"],
// 	dots:false,
// 	rewind: false,
// 	autoplayHoverPause: true,
// 	responsiveClass:true,
// 	responsive:{
// 		0:{items:1},
// 		1400:{items:1}
// 	}
// })

// //=========================================== Index Values Slider ==
// $('#owl-values-slider').owlCarousel({
// 	autoplay: true,
// 	loop: true,
// 	autoplayTimeout: 3000,
// 	items: 4,
// 	margin: 0,
// 	stagePadding: 0,
// 	smartSpeed: 1500,
// 	nav:false,
// 	dots:false,
// 	rewind: false,
// 	autoplayHoverPause: true,
// 	responsiveClass:true,
// 	responsive:{
// 		0:{items:1},
// 		768:{items:2},
// 		1200:{items:3},
// 		1400:{items:4}
// 	}
// })









// // <!--================= Back to top =================-->
// $(document).ready(function(){
// 	$("#back-top").hide();
// 	$(function () {
// 		$(window).scroll(function () {
// 			if ($(this).scrollTop() > 300) {
// 				$('#back-top').fadeIn();
// 			}else {
// 				$('#back-top').fadeOut();
// 			}
// 		});
// 		$('#back-top a').click(function () {
// 			$('body,html').animate({
// 				scrollTop: 0
// 			}, 1000);
// 			return false;
// 		});
// 	});
// });

