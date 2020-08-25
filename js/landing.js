$(document).ready(function () {

	$("a, button, input, [tabindex='0']").on("keyup", function (e) {
	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 9) {
		$(this).css('outline', 'dashed 3px #4599ff')
	}

})
$("a, button, input, [tabindex='0']").on('focusout', function() {
	$(this).css('outline', 'none')
})

// const prefersColorSchemeDark = window.matchMedia('(prefers-color-scheme: dark)');
// if (prefersColorSchemeDark.matches) {
// 	// Apply a dark color scheme
// }




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

$(function() {
  $('[data-toggle="tooltip"]').tooltip()
})


$('#sendMessage').click(function (e) {

	if(!$('#formControl1').val() == '' && !$('#formControl2').val() =='' && !$('#general-inquiry').val() =='' && !$('#formControl4').val() =='')    {

		e.preventDefault()

		$('section').removeClass('block50');
		$("#slideOut2").addClass('showslideOut2');
		$("#slideOut2").css('left', '0px');

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

		$('#theform input').each(function () {
			$(this).attr('tabindex', '-1');
		});

		$('.radio-inline input').each(function () {
			$(this).attr('tabindex', '-1');
		});

		$('.form-control').attr('tabindex', '-1');

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
	$('#theform input').each(function () {
		$(this).attr('tabindex', '-1');
	});

	$('.radio-inline input').each(function () {
		$(this).attr('tabindex', '-1');
	});

	$('.form-control').attr('tabindex', '-1');

	$('#closeThisPlease').attr('tabindex', '-1');

	$('#sendMessage').attr('tabindex', '-1');

	$("#slideOut2").removeClass('showslideOut2');


}

$('#close').keypress(
	close

).click(
	close
);


$("#one").on("keyup", function (e) {

	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 9) {
		$(this).css('outline', 'dashed 3px #4599ff')

	}

})
$("#one").on('focusout', function() {
	$(this).css('outline', 'none')
})

$(".skip").on("keyup", function (e) {

	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 9) {
		$(this).css('outline', 'dashed 3px #4599ff')

	}

})
$(".skip").on('focusout', function() {
	$(this).css('outline', 'none')
})


$("a").on("keyup", function (e) {

	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 9) {
		$(this).css('outline', 'dashed 3px #4599ff')

	}

})
$("a").on('focusout', function() {
	$(this).css('outline', 'none')
})

$("#closeThisPlease").on("keyup", function (e) {

	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 9) {
		$(this).css('outline', 'dashed 3px #4599ff')

	}

})







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








})
