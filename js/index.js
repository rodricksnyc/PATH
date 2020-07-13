$(document).ready(function () {

// const prefersColorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)');
// if (prefersColorSchemeDark.matches) {
// 	// Apply a dark color scheme
// }

if ($(document).innerWidth() <= 767) {

	$(window).on('scroll', function() {
		var screenTop = $(window).scrollTop();
		var screenBottom = $(window).scrollTop() + window.innerHeight;

		$('section').each(function() {
			var elementTop = $(this).offset().top;
			var elementBottom = $(this).offset().top + $(this).outerHeight();

			if ((screenBottom > elementTop + ($(this).find('.heros').height() / 3 )) && (screenTop < elementBottom)) {
				$('section').removeClass('active')
				$(this).addClass('active')
			}
			else {
				$(this).removeClass('active')
			}
		})
		if ($('.block10').hasClass('active')) {

			$('.menu-buttons-768-list li:eq(0)').addClass('activated')
		}

		else {

			$('.menu-buttons-768-list li:eq(0)').removeClass('activated')
		}


		if ($('.block5').hasClass('active')) {

			$('.menu-buttons-768-list li:eq(1)').addClass('activated')
		}

		else {

			$('.menu-buttons-768-list li:eq(1)').removeClass('activated')
		}


		if ($('.block50').hasClass('active')) {

			$('.menu-buttons-768-list li:eq(2)').addClass('activated')
		}

		else {

			$('.menu-buttons-768-list li:eq(2)').removeClass('activated')
		}

		if ($('.block0').hasClass('active')) {

			$('.menu-buttons-768-list li:eq(0)').removeClass('activated')
			$('.menu-buttons-768-list li:eq(1)').removeClass('activated')
			$('.menu-buttons-768-list li:eq(2)').removeClass('activated')
			$('.menu-buttons-768-list li:eq(3)').removeClass('activated')
		}


	})


	// $('.menu-buttons-768-list li:eq(0)').click(function() {
	// 	$('.menu-buttons-768-list li:eq(1)').removeClass('activated')
	// 	$('.menu-buttons-768-list li:eq(2)').removeClass('activated')
	// 	$('.menu-buttons-768-list li:eq(3)').removeClass('activated')
	// })
	//
	// $('.menu-buttons-768-list li:eq(1)').click(function() {
	// 	$('.menu-buttons-768-list li:eq(0)').removeClass('activated')
	// 	$('.menu-buttons-768-list li:eq(2)').removeClass('activated')
	// 	$('.menu-buttons-768-list li:eq(3)').removeClass('activated')
	// })
	//
	// $('.menu-buttons-768-list li:eq(2)').click(function() {
	// 	$('.menu-buttons-768-list li:eq(0)').removeClass('activated')
	// 	$('.menu-buttons-768-list li:eq(1)').removeClass('activated')
	// 	$('.menu-buttons-768-list li:eq(3)').removeClass('activated')
	// })
	//
	// $('.menu-buttons-768-list li:eq(3)').click(function() {
	// 	$('.menu-buttons-768-list li:eq(0)').removeClass('activated')
	// 	$('.menu-buttons-768-list li:eq(1)').removeClass('activated')
	// 	$('.menu-buttons-768-list li:eq(2)').removeClass('activated')
	// })

	$('.landing-panel .form-control.access').focus(function () {
		$('html, body').animate({ scrollTop: ($('.landing-panel .form-control.access').offset().top - 40) }, 600);
		return false;
	});



	$('.pin').attr('src',"images/pin-mobile.svg")
	$('.reward').attr('src',"images/Reward-mobile.svg")

	$('.select').attr('src',"images/Select-answer-mobile.svg")
	$('.next').attr('src',"images/Next-back-mobile.svg")
	$('.submit').attr('src',"images/Submit-mobile.svg")

	$("#slideOut").css("left" , 0);

	$('#slideOut').removeClass('showSlideOut')

	$("#slideOut").css("bottom" , -$('#slideOut').height() );

	var overlay = document.getElementById('whiteBlock');

	// console.log(window.getComputedStyle(overlay).height);


	$(window).on("scroll", function() {
		var docHeight = $(document).height();
		var winScrolled = $(window).height() + $(window).scrollTop(); // Sum never quite reaches
		if ((docHeight - winScrolled) > 1) {

			var setHeight = $("#contact").height() + 25;

			$("#slideOut").animate({
				bottom:'75',
				top: setHeight

			}, 10);

		}


	});



}


$('.spanish').on('click', function() {

	$(this).removeClass('inactiveDot').addClass('activeDot')
	$('.english').removeClass('activeDot').addClass('inactiveDot')

})

$('.english').on('click', function() {

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




$('#sendMessage').click(function (e) {

	if(!$('#formControl1').val() == '' && !$('#formControl2').val() =='' && !$('#general-inquiry').val() =='' && !$('#formControl4').val() =='')    {

		e.preventDefault()

		$('section').removeClass('block50');
		$("#slideOut").addClass('showSlideOut');
		$("#slideOut").css('left', '0px');

		$(".secondBlock").removeClass('hide2').addClass('animated fadeIn').show();

		$(".firstBlock").addClass('hide1').removeClass('animated fadeIn').hide();

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
					$(this).parents('.vertical').css('background' ,'#166da1');

				} else {
					$(this).parents('.vertical').css( 'background' ,'transparent')
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
			$(this).closest('.vertical').find('.fas').css('color', '#7bc043')
			$(this).parents('.vertical').css('background' ,'#166da1');

		} else {
			$(this).parents('.vertical').css( 'background' ,'transparent')
			$(this).closest('.vertical').find('.fas').css('color', 'white')
		}
	})
}

setReasonActive()





document.getElementById("access").addEventListener("keyup", function (e) {


	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 13 ) {

		if (pwShown == 0) {
			pwShown = 1;
			show();

			$("#eye").attr('src',"images/close-eye.svg");


			$('#access').html('Hide')

		} else {
			pwShown = 0;
			hide();

			$("#eye").attr('src',"images/show-access.svg");



			$('#access').html('Show')
		}


	}
})


document.getElementById("access2").addEventListener("keyup", function (e) {


	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 13 ) {

		if (pwShown == 0) {
			pwShown = 1;
			show2();

			$("#eye2").attr('src',"images/close-eye.svg");


			$('#access2').html('Hide')

		} else {
			pwShown = 0;
			hide2();

			$("#eye2").attr('src',"images/show-access.svg");



			$('#access2').html('Show')
		}


	}
})


function show() {
	var p = document.getElementById('MainContent_txtAccessCode1');
	p.setAttribute('type', 'text');
}

function hide() {
	var p = document.getElementById('MainContent_txtAccessCode1');
	p.setAttribute('type', 'password');
}

function show2() {
	var p2 = document.getElementById('MainContent_txtAccessCode2');
	p2.setAttribute('type', 'text');
}

function hide2() {
	var p2 = document.getElementById('MainContent_txtAccessCode2');
	p2.setAttribute('type', 'password');
}

var pwShown = 0;

var pwShown2 = 0;

document.getElementById("togglepwd").addEventListener("click", function () {
	if (pwShown == 0) {
		pwShown = 1;
		show();

		$("#eye").attr('src',"images/close-eye.svg");
		// $('#eye').css('margin-top', '2px');

		$('#access').html('Hide')

	} else {
		pwShown = 0;
		hide();

		$("#eye").attr('src',"images/show-access.svg");

		// $('#eye').css('margin-top', '-2px');

		$('#access').html('Show')
	}

}, false);

$('.form-login-a')


document.getElementById("togglepwd2").addEventListener("click", function () {
	if (pwShown2 == 0) {
		pwShown2 = 1;
		show2();

		$("#eye2").attr('src',"images/close-eye.svg");
		// $('#eye').css('margin-top', '2px');

		$('#access2').html('Hide')

	} else {
		pwShown2 = 0;
		hide2();

		$("#eye2").attr('src',"images/show-access.svg");

		// $('#eye').css('margin-top', '-2px');

		$('#access2').html('Show')
	}

}, false);


if ($(document).innerWidth() >= 768) {


	$(window).on('scroll', function() {
		var screenTop = $(window).scrollTop();
		var screenBottom = $(window).scrollTop() + window.innerHeight;

		$('section').each(function() {
			var elementTop = $(this).offset().top;
			var elementBottom = $(this).offset().top + $(this).outerHeight();

			if ((screenBottom > elementTop + ($(this).find('.heros').height() / 3 )) && (screenTop < elementBottom)) {
				$('section').removeClass('active')
				$(this).addClass('active')
			}
			else {
				$(this).removeClass('active')
			}
		})


		if ($('.block10').hasClass('active')) {
			$('.menu-buttons-floating-list li:eq(1)').addClass('activated')
			$('.menu-buttons-768-list li:eq(0)').addClass('activated')
		}

		else {
			$('.menu-buttons-floating-list li:eq(1)').removeClass('activated')
			$('.menu-buttons-768-list li:eq(0)').removeClass('activated')
		}


		if ($('.block5').hasClass('active')) {
			$('.menu-buttons-floating-list li:eq(2)').addClass('activated')
			$('.menu-buttons-768-list li:eq(1)').addClass('activated')
		}

		else {
			$('.menu-buttons-floating-list li:eq(2)').removeClass('activated')
			$('.menu-buttons-768-list li:eq(1)').removeClass('activated')
		}


		if ($('.block50').hasClass('active')) {
			$('.menu-buttons-floating-list li:eq(3)').addClass('activated')
			$('.menu-buttons-768-list li:eq(2)').addClass('activated')
		}

		else {
			$('.menu-buttons-floating-list li:eq(3)').removeClass('activated')
			$('.menu-buttons-768-list li:eq(2)').removeClass('activated')
		}

		if ($('.block0').hasClass('active')) {
			$('.menu-buttons-floating-list li:eq(0)').removeClass('activated')
			$('.menu-buttons-floating-list li:eq(1)').removeClass('activated')
			$('.menu-buttons-floating-list li:eq(2)').removeClass('activated')
			$('.menu-buttons-floating-list li:eq(3)').removeClass('activated')


			$('.menu-buttons-768-list li:eq(0)').removeClass('activated')
			$('.menu-buttons-768-list li:eq(1)').removeClass('activated')
			$('.menu-buttons-768-list li:eq(2)').removeClass('activated')
			$('.menu-buttons-768-list li:eq(3)').removeClass('activated')
		}

		if ($('.block50').hasClass('active')) {

			$('#slideOut').addClass('showSlideOut');

		}



		if (!$('.block50').hasClass('active') || $('.block5').hasClass('active')) {

			$('#slideOut').removeClass('showSlideOut')
		}



	})


}




function scrollfn(e) {
	let $target = $(e),
	offSet = e === "#Home" ? 0 : $target.offset().top;
	$('html, body').stop().animate({
		'scrollTop': offSet
	}, 1200, 'swing');

	// setTimeout(function(){
	// 	$(':focus').blur();
	// }, 1300);
}

$('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('click', function (e) {

	e.preventDefault();
	scrollfn($(this).attr('data-target'));
});


$('.menu-buttons-floating li').click(function() {
	$(this).addClass('activated')
})



$('.menu-buttons-list li, .menu-buttons-floating-list li, .menu-buttons-768-list li').on('keypress', function (e) {

	e.preventDefault();
	scrollfn($(this).attr('data-target'));
});

$('.collapse').on('show.bs.collapse', function () {
	$('a[href="#' + this.id + '"] .caret-down').css({
		transform: "rotate(180deg)"
	});
	$('a[href="#' + this.id + '"] .iques').css({
		opacity: "1"
	});
});
$('.collapse').on('hide.bs.collapse', function () {
	$('a[href="#' + this.id + '"] .caret-down').css({
		transform: "rotate(0deg)"
	});
	$('a[href="#' + this.id + '"] .iques').css({
		opacity: "0.4"
	});
});






$(window).scroll(function () {
	var distanceY = window.pageYOffset || document.documentElement.scrollTop;
	if (distanceY > 555) {
		$('.btnContact').css({
			top: "92px"
		})
		$('.menu-buttons-floating').css({
			opacity: '1',
			visibility: 'visible'
		})
	} else {
		$('.btnContact').css({
			top: "192px"
		})
		$('.menu-buttons-floating').css({
			opacity: '0',
			visibility: 'hidden'
		})
	}
});

function toggleBegin(el) {
	$(el).attr('href') === '#signin' ? (
		$('.landing-panel-p2').show(),
		$('.form-signin-heading').text('To start your survey, please enter the PIN included in your invitation letter.'),
		$('.form-login-input').hide(),
		$('.form-signin-input').show()
	) : (
		$('.landing-panel-p2 second').hide(),
		$('.form-signin-heading').text('Log in with your username and password.'),
		$('.form-signin-input').hide(),
		$('.form-login-input').show()
	);
}

$('.form-login-a').on('click', function (e) {
	toggleBegin(this);
})

$('.form-login-a').on('keypress', function (e) {
	toggleBegin(this);
})

$('.form-login-a').on('click', function (e) {
	// $('#access2').html('Show password')
	$('#MainContent_btnContinue').val('Login');
	$('#MainContent_Label1').addClass('hidden')
	$('#blue').html('New participant? Enter PIN')

	$('#blue').hide()
	$('.landing-panel-p2').hide()
	$('.form-login-a.second').show().css('display', 'flex')
	$('.landing-panel-p1.text-center').html('Welcome back to the PATH Study!')
	$('.position-relative.form-login-input input:eq(0)').focus()


})



$('.form-login-a.second').on('click', function (e) {
	$('.form-signin input:eq(0)').focus()
	$('#blue').html('Already a participant? Log in')
	$('#MainContent_btnContinue').val('Begin');
	$('#MainContent_Label1').removeClass('hidden')

	$('#blue').show()
	$('.landing-panel-p2').show()
	$('.form-login-a.second').hide()
	$('.landing-panel-p1.text-center').html('Welcome to the PATH Study!')

})







})
