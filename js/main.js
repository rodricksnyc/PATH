$(document).ready(function () {



	$("a, button, input, [tabindex='0'], li, #one, .letter").on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff')
		}

	})
	$("a, button, input, [tabindex='0'], li, #one, .letter").on('focusout', function() {
		$(this).css('outline', 'none')
	})

	$("#espanol").parent().on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$(this).css('outline', 'none')
		}

	})


	$(".block50 a").on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$(this).find('.whiteBubble').css('outline', 'dashed 3px #4599ff')
		}

	})
	$(".block50 a").on('focusout', function() {
		$(this).find('.whiteBubble').css('outline', 'none')
	})




	if ($(document).innerWidth() > 767) {
		$(window).scroll(function () {
			var distanceY = window.pageYOffset || document.documentElement.scrollTop;
			if (distanceY > 200) {

				$('.position-fixed').css({
					top: '0'
				})
			} else {

				$('.position-fixed').css({
					top: 'auto'
				})
			}
		});



	}


	var path = window.location.href

	$('.navbar-nav li .nav-link').each(function() {
		if (this.href === path) {
			$(this).addClass('active');
		}
		else {
			$(this).removeClass('active');
		}

	});

	var mainURL = window.location.href;


	$('#ingles').attr('href' , mainURL)

	$(window).on('load', function() {
		if(mainURL.includes('googtrans(en|es)')) {

			$('#espanol').removeClass('inactiveDot').addClass('activeDot')
			$('#ingles').removeClass('activeDot').addClass('inactiveDot')

			$('#espanol').on('keyup', function(e) {

				var code = (e.keyCode ? e.keyCode : e.which);
				if (code == 13 ) {
					$(this).removeClass('inactiveDot').addClass('activeDot')
					$('.english').removeClass('activeDot').addClass('inactiveDot')

				}

			})

		}

	})


	// $(window).on('load', function() {
	// 			$('a').not('#espanol').prop('hash','#googtrans(en|en)');
	// })

	if ($(document).innerWidth() <= 767) {
		$('#ingles p').html('EN')
		$('#espanol p').html('ES')
		$('.loginButton').html('<i class="fas fa-sign-in-alt"></i>').addClass('addMobile')

		$(window).scroll(function(){
			var sticky = $('.position-fixed'),
			scroll = $(window).scrollTop();

			if (scroll >= 40) sticky.addClass('addFixed');

			else sticky.removeClass('addFixed');
		});


	}


	$('.spanish').on('click', function(e) {

		$('.grid').isotope('reloadItems').isotope();

		$('.spanish-spacer').css('height', '2.2vh')
		// e.preventDefault()

		$(this).removeClass('inactiveDot').addClass('activeDot')
		$('.english').removeClass('activeDot').addClass('inactiveDot')

	})

	$('.english').on('click', function(e) {
		// e.preventDefault()
		$(this).removeClass('inactiveDot').addClass('activeDot')
		$('.spanish').removeClass('activeDot').addClass('inactiveDot')

	})

	$('.spanish').on('keyup', function(e) {

		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 13 ) {
			$(this).removeClass('inactiveDot').addClass('activeDot')
			$('.english').removeClass('activeDot').addClass('inactiveDot')

		}

	})


	$('.english').on('keyup', function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 13 ) {
			$(this).removeClass('inactiveDot').addClass('activeDot')
			$('.spanish').removeClass('activeDot').addClass('inactiveDot')

		}

	})

	$('#formControl1').focusout(function(){

		$('#formControl1').filter(function(){
			var emil=$('#formControl1').val();
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			if( !emailReg.test( emil ) ) {
				alert('Please enter valid email');
			} else {
				// alert('Thank you for your valid email');
			}
		})
	});


	$('#sendMessage').click(function (e) {

		if(!$('#formControl1').val() == '')    {
			e.preventDefault()

			$("#slideOut2").removeClass('showslideOut2');
			setTimeout(function () {
				$('.toast').css('right', '0px')
				$('.toast').removeClass('transparent-opacity').addClass('animated slideInRight')
			}, 300)

			setTimeout(function () {
				$('.toast').removeClass('transparent-opacity').removeClass('animated slideInRight')
				$('.toast').addClass('transparent-opacity');
				$('.toast').removeClass('animated slideOutRight')

			}, 5000)
			setTimeout(function () {
				$('.toast').css('right', '-335px')
				$('.toast').addClass('animated slideOutRight')
			}, 4900)


		}

	});



	$('#sendMessage').on('keyup', function(e) {

		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 13 ) {

			if(!$('#formControl1').val() == '')    {

				e.preventDefault()

				$("#slideOut2").removeClass('showslideOut2');
				setTimeout(function () {
					$('.toast').css('right', '0px')
					$('.toast').removeClass('transparent-opacity').addClass('animated slideInRight')
				}, 300)

				setTimeout(function () {
					$('.toast').removeClass('transparent-opacity').removeClass('animated slideInRight')
					$('.toast').addClass('transparent-opacity');
					$('.toast').removeClass('animated slideOutRight')

				}, 5000)
				setTimeout(function () {
					$('.toast').css('right', '-335px')
					$('.toast').addClass('animated slideOutRight')
				}, 4900)

			}

		}

	});



	$('.radio-inline input').on('keyup', function(e) {

		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9 ) {

			$('.radio-inline input').change(function (e) {

				setReasonActive();

			})

			function setReasonActive() {
				$('.radio-inline input').each(function () {
					if ($(this).prop('checked')) {
						$(this).parents('.vertical').css('background' ,'#A3E56A');
						$(this).closest('label').css('color', '#0a5799')

					} else {
						$(this).parents('.vertical').css( 'background' ,'transparent')
						$(this).closest('label').css('color', 'white')
					}
				})
			}

			setReasonActive()

		}
	})


	$('.radio-inline input').change(function (e) {
		setReasonActive();

	})

	function setReasonActive() {
		$('.radio-inline input').each(function () {
			if ($(this).prop('checked')) {

				$(this).parents('.vertical').css('background' ,'#A3E56A');
				$(this).closest('label').css('color', '#0a5799')
			} else {
				$(this).parents('.vertical').css( 'background' ,'transparent')
				$(this).closest('label').css('color', 'white')

			}
		})
	}

	setReasonActive()

	var open = function() {

		$('.contactUsOverlay').show();

		$('#theform input').each(function () {
			$(this).attr('tabindex', '0');
		});
		$('.radio-inline input').each(function () {
			$(this).attr('tabindex', '0');
		});

		$('.form-check-input').attr('tabindex', '0');

		$('.form-control').attr('tabindex', '0');

		$('#closeThisPlease').attr('tabindex', '0');

		$('#sendMessage').attr('tabindex', '0');

		$('.modal-content').addClass('opened')
		$("#slideOut2").addClass('showslideOut2');
		setTimeout(function() {
			$('body').addClass('showContact')
		}, 300)

	}
	$('#one').keypress(
		open

	).click(
		open
	);



	$('.contactUsOverlay').on('click', function(e) {

		if($('body').hasClass('showContact')) {

			$('#slideOut2 .form-control').attr('tabindex', '-1');

			$('#closeThisPlease').attr('tabindex', '-1');

			$('#sendMessage').attr('tabindex', '-1');
			$('.form-check-input').attr('tabindex', '-1');

			$("#slideOut2").removeClass('showslideOut2');
			$('.contactUsOverlay').hide();

			setTimeout(function() {
				$('body').removeClass('showContact')
			}, 300)

		}
	})


	var close = function() {
		$('.contactUsOverlay').hide();
		$('#slideOut2 .form-control').attr('tabindex', '-1');
		$('#closeThisPlease').attr('tabindex', '-1');
		$('#sendMessage').attr('tabindex', '-1');
		$("#slideOut2").removeClass('showslideOut2');
		$('.form-check-input').attr('tabindex', '-1');

	}

	$('#close').keypress(
		close

	).click(
		close
	);


	$("#closeThisPlease").on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 13) {

			$('#one').focus().css('outline', 'dashed 3px #4599ff')
		}

	})



	$('.back-to-top').click(() => {
		scrollfn("#overview");
	})


	var firstOne = $('.secondGroup .filter-item').find('.numberTags:eq(0)')

	var theLetters = $('.firstGroup .letter')

	$(firstOne).click(() => {
		scrollfn("#overview");
	})

	$(theLetters).click(() => {
		scrollfn("#overview");
	})

	$('.back-to-top').click(() => {
		scrollfn("#overview");
	})

$('.allLetter').click(function() {
	$('.secondGroup .filter-item').addClass('newClass')

 $('#numberGrid').addClass('smallDiv')
})

$('.letter').not('.allLetter').click(function() {
	$('.secondGroup .filter-item').removeClass('newClass')

  $('#numberGrid').removeClass('smallDiv')
})




	$(window).scroll(function () {
		((window.pageYOffset || document.documentElement.scrollTop) > 100) ? $('.back-to-top').css({ opacity: 1, visibility: "visible" }) : $('.back-to-top').css({ opacity: 0, visibility: "hidden" });
	});

	function scrollfn(e) {
		let $target = $(e),
		offSet = e === "#overview" ? 0 : $target.offset().top;
		$('html, body').stop().animate({
			'scrollTop': offSet
		}, 1200, 'swing');


	}

	$('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('click', function (e) {

		e.preventDefault();
		scrollfn($(this).attr('data-target'));
	});

	$('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('keypress', function (e) {

		e.preventDefault();
		scrollfn($(this).attr('data-target'));
	});


	// var about = function() {
	// 	window.location.href="about.html"
	// }
	//
	// $('.goToAbout').keypress(
	// 	about
	//
	// ).click(
	// 	about
	// );
	//
	// var participants = function() {
	// 	window.location.href="participants.html"
	// }
	//
	// $('.goToParticipants').keypress(
	// 	participants
	//
	// ).click(
	// 	participants
	// );
	//
	// var researchers = function() {
	// 	window.location.href="researchers.html"
	// }
	//
	// $('.goToParticipants').keypress(
	// 	researchers
	//
	// ).click(
	// 	researchers
	// );






	if ($(document).innerWidth() <= 767) {

		$('.openTab .plum').html('<i class="fas fa-envelope"></i>')
		$('#one').css('right', '-20px')

		$('.openIt').click(function() {

			$('.menuBubble').animate({

				'bottom' : '0vh'

			}, 500);
		})

		$('.closeIt').click(function() {

			$('.menuBubble').animate({

				'bottom' : '-100vh'

			}, 500);
		})


	}




	$(".cards").on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$(this).find('.flip-card').css('outline', 'dashed 3px #4599ff')
		}

	})
	$(".cards").on('focusout', function() {
		$(this).find('.flip-card').css('outline', 'none')
	})

	$('.cards').on("keyup", function (e) {

		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 13) {

			$(this).find('.flip-card-inner').toggleClass('flipIt')
		}
	});


	$("input").on("keyup", function (e) {

		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff')

		}

	})
	$("input").on('focusout', function() {
		$(this).css('outline', 'none')
	})

	$(".form-check").on("keyup", function (e) {

		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$('.form-check').each(function() {
				$(this).addClass('focusClass')
			});

		}

	})


	$(".box-container").on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$(this).find('.flip-box').css('outline', 'dashed 3px #4599ff')
		}

	})
	$(".box-container").on('focusout', function() {
		$(this).find('.flip-box').css('outline', 'none')
	})

	$('.box-container').on("keyup", function (e) {

		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 13) {

			$(this).find('.flip-box').toggleClass('flipIt')
		}
	});

	// if ($(document).innerWidth() <= 767) {
	//
	// $('.box-container').on("click", function (e) {
	//
	// 		$(this).find('.flip-box').toggleClass('flipIt')
	//
	// });
	//
	// }

	$('li[data-target="#Guide"]').addClass('activated')

	$(window).on('scroll', function() {
		var screenTop = $(window).scrollTop();
		var screenBottom = $(window).scrollTop() + window.innerHeight;

		$('section').each(function() {
			var elementTop = $(this).offset().top;
			var elementBottom = $(this).offset().top + $(this).outerHeight();

			if ((screenBottom > elementTop + ($(this).find('.heros').height() / 5 )) && (screenTop < elementBottom)) {
				$('section').removeClass('active')
				$(this).addClass('active')
			}
			else {
				$(this).removeClass('active')
			}
		})


		if ($('.block10').hasClass('active')) {
			$('li[data-target="#Guide"]').addClass('activated')
		}

		else {
			$('li[data-target="#Guide"]').removeClass('activated')
		}


		if ($('.block5').hasClass('active')) {
			$('li[data-target="#FAQ"]').addClass('activated')
		}

		else {
			$('li[data-target="#FAQ"]').removeClass('activated')
		}


		if ($('.block50').hasClass('active')) {
			$('li[data-target="#Contact"]').addClass('activated')
		}

		else {
			$('li[data-target="#Contact"]').removeClass('activated')
		}

		if ($('.block0').hasClass('active')) {

		}


	})


	if ($(document).innerWidth() >= 1025) {

		$(window).scroll(function() {
			if($(window).scrollTop() + $(window).height() > $(document).height() - .01*$(document).height()) {

				$('.back-to-top').css({
					'top' : '72%'
				})
			}
			else {

				$('.back-to-top').css({
					'top' : '90%'
				})

			}

		});


	}



	if ($(document).innerWidth() <= 1024) {

		$(window).scroll(function() {
			if($(window).scrollTop() + $(window).height() > $(document).height() - .01*$(document).height()) {

				$('.back-to-top').css({
					'top' : '74%'
				})
			}
			else {

				$('.back-to-top').css({
					'top' : '78%'
				})

			}

		});

	}


	if ($(document).innerWidth() <= 767 && $(document).innerWidth() > 325) {

		$(window).scroll(function() {
			if($(window).scrollTop() + $(window).height() > $(document).height() - .01*$(document).height()) {

				$('.back-to-top').css({
					'top' : '44%'
				})
			}
			else {

				$('.back-to-top').css({
					'top' : '68%'
				})

			}

		});

	}

	if ($(document).innerWidth() <= 325) {

		$(window).scroll(function() {
			if($(window).scrollTop() + $(window).height() > $(document).height() - .01*$(document).height()) {

				$('.back-to-top').css({
					'top' : '39%'
				})
			}
			else {

				$('.back-to-top').css({
					'top' : '68%'
				})

			}

		});

	}





	// (function() {
	//   "use strict";
	//   window.addEventListener("load", function() {
	//     var form = document.getElementById("creditCard");
	//     form.addEventListener("submit", function(event) {
	//       if (form.checkValidity() == false) {
	//         event.preventDefault();
	//         event.stopPropagation();
	//
	//       }
	//
	// 		  if (form.checkValidity() == true) {
	//
	// 			}
	//       form.classList.add("was-validated");
	//     }, false);
	//   }, false);
	// }());

	$(".slideForm").validate(
		{
			rules:
			{
				email:
				{
					required: true,
					email: true

				}

			}
		});


		$("#creditCard").validate(
			{
				rules:
				{
					cardNumber:
					{
						required: true,
						maxlength: 4,
						minlength:4,
						digits: true
					}
				}
			});

			$("#update").validate(
				{
					rules:
					{
						email:
						{
							required: true,
							email: true

						}

					}
				});

				$("#field-interviewer").validate(
					{
						rules:
						{
							email:
							{
								required: true,
								email: true

							},
							fieldName:
							{
								required: true

							}


						}
					});





					// $("#creditCard").validate({
					//   // Specify validation rules
					//   rules: {
					//     lastName: "required",
					//     lastName: "required",
					//     cardNumber: {
					//       required: true,
					// 			maxlength: 4,
					// 			minlength:4
					//     },
					//   //   phone: {
					//   //     required: true,
					//   //     digits: true,
					//   //     minlength: 10,
					//   //     maxlength: 10,
					//   //   },
					//   //   password: {
					//   //     required: true,
					//   //     minlength: 5,
					//   //   }
					//   // },
					//   messages: {
					//     firstName: {
					//     required: "Please enter first name",
					//    },
					//    lastName: {
					//     required: "Please enter last name",
					//    },
					// 	 cardNumber: {
					// 		  required: "Please enter 4 digits",
					// 	 }
					//    // phone: {
					//    //  required: "Please enter phone number",
					//    //  digits: "Please enter valid phone number",
					//    //  minlength: "Phone number field accept only 10 digits",
					//    //  maxlength: "Phone number field accept only 10 digits",
					//    // },
					//    // email: {
					//    //  required: "Please enter email address",
					//    //  email: "Please enter a valid email address.",
					//    // },
					//   }
					// }
					//
					// });

					// var defaultState = {
					//    current: window.location.pathname
					// };
					//
					// var requestParameters = [
					//    '#googtrans(en|es)'
					// ];
					//
					//
					//
					//
					// var path = window.location.pathname + requestParameters.join("");
					// window.history.pushState(defaultState, 'Title', path);
					//

				})
