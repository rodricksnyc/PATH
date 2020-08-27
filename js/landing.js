$(document).ready(function () {

	$("a, button, input, [tabindex='0'], li, #one").on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff')
		}

	})
	$("a, button, input, [tabindex='0'], li, #one").on('focusout', function() {
		$(this).css('outline', 'none')
	})

	// const prefersColorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)');
	// if (prefersColorSchemeDark.matches) {
	// 	// Apply a dark color scheme
	// }

	//make the nav item have active line on current page

	var path = window.location.href;
	// $('.navbar-nav li a').each(function() {
	//   if (this.href === path) {
	//     $(this).addClass('active');
	//   }
	//   else {
	//     $(this).removeClass('active');
	//   }
	//
	// });

	$('.navbar-nav li .nav-link').each(function() {
		if (this.href === path) {
			$(this).addClass('active');
		}
		else {
			$(this).removeClass('active');
		}

	});


// 	var dataAttr = $('#inputName').attr('data-error')
//
// 	console.log(dataAttr)
//
//
//
//
// $("#inputName").attr({"data-error": "required"})
//

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  "use strict";
  window.addEventListener("load", function() {
    var form = document.getElementById("creditCard");
    form.addEventListener("submit", function(event) {
      if (form.checkValidity() == false) {
        event.preventDefault();
        event.stopPropagation();

				// alert('no')
				// $('.invalid-feedback').closest('.form-group').css('background', '#faede9')
      }

		  if (form.checkValidity() == true) {

			// $('.invalid-feedback').closest('.form-group').css('background', 'white')
			}
      form.classList.add("was-validated");
    }, false);
  }, false);
}());



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





	$('.spanish').on('click', function(e) {
		// e.preventDefault()
		$(this).removeClass('navbar inactiveDot').addClass('navbar activeDot')
		$('.english').removeClass('navbar activeDot').addClass('navbar inactiveDot')

	})

	$('.english').on('click', function(e) {
		// e.preventDefault()
		$(this).removeClass('navbar inactiveDot').addClass('navbar activeDot')
		$('.spanish').removeClass('navbar activeDot').addClass('navbar inactiveDot')

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



	$('#sendMessage').click(function (e) {

		if(!$('#formControl1').val() == '' && !$('#formControl2').val() =='' && !$('#general-inquiry').val() =='' && !$('#formControl4').val() =='')    {

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

			if(!$('#formControl1').val() == '' && !$('#formControl2').val() =='' && !$('#general-inquiry').val() =='' && !$('#formControl4').val() =='')    {

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

			// $('#theform input').each(function () {
			// 	$(this).attr('tabindex', '-1');
			// });

			// $('.radio-inline input').each(function () {
			// 	$(this).attr('tabindex', '-1');
			// });

			$('#slideOut2 .form-control').attr('tabindex', '-1');

			$('#closeThisPlease').attr('tabindex', '-1');

			$('#sendMessage').attr('tabindex', '-1');

			$("#slideOut2").removeClass('showslideOut2');

			setTimeout(function() {
				$('body').removeClass('showContact')
			}, 300)

		}
	})





	var close = function() {

		$('.contactUsOverlay').hide();
		// $('#theform input').each(function () {
		// 	$(this).attr('tabindex', '-1');
		// });
		//
		// $('.radio-inline input').each(function () {
		// 	$(this).attr('tabindex', '-1');
		// });

		$('#slideOut2 .form-control').attr('tabindex', '-1');

		$('#closeThisPlease').attr('tabindex', '-1');

		$('#sendMessage').attr('tabindex', '-1');

		$("#slideOut2").removeClass('showslideOut2');


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

	// $("#one").on("keyup", function (e) {
	//
	// 	var code = (e.keyCode ? e.keyCode : e.which);
	// 	if (code == 9) {
	//
	// 		$('input').focus().css('outline', 'dashed 3px #4599ff')
	// 	}
	//
	// })



	if ($(document).innerWidth() <= 767) {


		$('.openTab .plum').html('<i class="fas fa-envelope"></i>')
		$('#one').css('right', '-20px')

	}

})
