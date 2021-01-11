$(document).ready(function () {


	// if ($(document).innerWidth() <= 767) {
	//
	// 	$('.letter').first().removeClass('is-checked')
	//
	// }

	$('.firstGroup .letter').attr('tabindex', '0')

	var Opt01 = "";
	$('.firstGroup .letter p').each(function() {
		Opt01 = $(this).html();


		$(this).click(function() {
			console.log($(this).html())

			var storeLetter = $(this).html()

			$('#changeLetter').html(storeLetter)
		})


	})

	$('.letter').on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$('.backToSection').css('display', 'inline-block')
			// if (!$('.allLetter').hasClass('is-checked')){
			$('.newClass').css('overflow-y', 'visible')

			// }
		}
	})


	$(".secondGroup .letter.number").click(function () {

		$(".letter.number").removeClass("is-active");

		$(this).addClass("is-active");


		if ($('.allLetter').hasClass('is-checked')){


			$('.secondGroup .filter-item').addClass('newClass')


			$('#numberGrid').addClass('smallDiv')
		}
	});

	$('.anchorTag').attr('tabindex', '-1')
	$('.numberTags').attr('tabindex', '0')
	$('.backToSection').attr('tabindex', '0')




	// $('.anchorTag').on("keyup", function (e) {
	// 	var code = (e.keyCode ? e.keyCode : e.which);
	// 	if (code == 9) {
	//
	// 		// $('.backToLetters').focus().css('outline', 'dashed 3px #4599ff')
	// 		var activeOne = $('.firstGroup .letter.is-checked')
	//
	// 		$(activeOne).focus().css('outline', 'dashed 3px #4599ff')
	//
	//
	// 	}
	// })


	// $('.backToLetters').on("keyup", function (e) {
	// 	var code = (e.keyCode ? e.keyCode : e.which);
	// 	if (code == 13) {
	//
	// 		// $('.backToLetters').focus().css('outline', 'dashed 3px #4599ff')
	// 		var activeOne = $('.firstGroup .letter.is-checked')
	//
	// 		$(activeOne).focus().css('outline', 'dashed 3px #4599ff')
	// 		$('.backToLetters').css('outline', 'none')
	//
	// 	}
	// })

if ($(document).innerWidth() > 767) {

	if ($('.allLetter').hasClass('is-checked')){


		$('.secondGroup .filter-item').addClass('newClass')


		$('#numberGrid').addClass('smallDiv')
	}


	$(".numberTags").on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {



			$(this).css('outline', 'dashed 3px #4599ff')
			$(this).find(".letter.number").addClass("green-active");
		}

	})

$('.backToSection').on("keyup", function (e) {
	var code = (e.keyCode ? e.keyCode : e.which);
	if (code == 13) {
		$(this).css('outline', 'none')
		$(this).find(".letter.number").removeClass("green-active");

		var activeOne = $('.firstGroup .letter.is-checked')

		$(activeOne).blur().css('outline', 'none')


		var activeNext = $('.firstGroup .letter.is-checked').next()

		$(activeNext).focus().css('outline', 'dashed 3px #4599ff').addClass('is-checked').prev().removeClass('is-checked')

}


})







	$(".numberTags").on('focusout', function() {

				if ($(this).is(':last-child') && !$('.letter.allLetter').hasClass('is-checked')) {


					// $(this).css('outline', 'none')
					// $(this).find(".letter.number").removeClass("green-active");
					//
					// var activeOne = $('.firstGroup .letter.is-checked')
					//
					// $(activeOne).blur().css('outline', 'none')
					//
					//
					// var activeNext = $('.firstGroup .letter.is-checked').next()
					//
					// $(activeNext).focus().css('outline', 'dashed 3px #4599ff').addClass('is-checked').prev().removeClass('is-checked')


				}


		// if ($(this).is('.veryLastOne')) {
		//
		// // if ($(this).is(':last-child')) {
		//
		// 	$(this).css('outline', 'none')
		// 	$(this).find(".letter.number").removeClass("green-active");
		//
		// 	// var activeOne = $('.firstGroup .letter.is-checked')
		// 	//
		// 	// $(activeOne).blur().css('outline', 'none').removeClass('is-checked')
		// 	//
		// 	// var activeOne = $('.firstGroup .letter.is-checked')
		//
		// 	// $(activeOne).focus().css('outline', 'dashed 3px #4599ff')
		//
		// 	$('#one').focus().css('outline', 'dashed 3px #4599ff')
		// }


		$(this).css('outline', 'none')
		$(this).find(".letter.number").removeClass("green-active");

	})

}


// $('#one').on('keydown blur', function(e) {
//   if (e.shiftKey && e.keyCode === 9) {
//     console.log('shift tab')
//
// 		// $('#one').css('outline', 'none')
//
// 		$('.veryLastOne').focus().css('outline', 'dashed 3px #4599ff')
//
//
// 		var makeGreen = $('.veryLastOne').find('.letter.number')
//
// 		$('.veryLastOne').focus().css('outline', 'dashed 3px #4599ff')
//
// 		$(makeGreen).addClass("green-active");
//
//   }
// });

	$('.allLetter').click(function() {
		$('.secondGroup .filter-item').addClass('newClass')

		$('#numberGrid').addClass('smallDiv')

	})

	// 	if ($(document).innerWidth() > 767) {
	// 	// $('.secondGroup .filter-item').addClass('newClass')
	// 	//
	// 	// $('#numberGrid').addClass('smallDiv')
	// 	$('.allLetter').click(function() {
	// 		$('.secondGroup .filter-item').addClass('newClass')
	//
	// 		$('#numberGrid').addClass('smallDiv')
	//
	// 	})
	//
	// }


	$('.letter').not('.allLetter').click(function() {
		$('.secondGroup .filter-item').removeClass('newClass')

		$('#numberGrid').removeClass('smallDiv')
	})



	$(window).scroll(function () {
		((window.pageYOffset || document.documentElement.scrollTop) > 100) ? $('.back-to-top').css({ opacity: 1, visibility: "visible" }) : $('.back-to-top').css({ opacity: 1, visibility: "visible" });
	});


	// var width = 	$('.rBorder').width()
	//
	//
	// var children = $('.rBorder').children().width() / 2
	//
	// console.log(width)
	// 	console.log(children)
	//
	//
	//
	// $('.rBorder').children().css({
	// 	'position':'relative',
	// 	'left':children
	// })


	// store filter for each group
	var filters = {};


	var $grid = $('.secondGrid').isotope({
		transformsEnabled: false,
		hiddenStyle: {
			// opacity: 0,
			transform: 'translateY(0px)',

		},
		visibleStyle: {
			// opacity: 1,
			transform: 'translateY(200)',
		}
	})

	if ($(document).innerWidth() <= 767) {

		$('.mobileOnly').click(function() {
			$(this).closest('.whiteBubble').find('.secondGroup').slideToggle()

			$(this).toggleClass('rotateIt')
		})


		var $grid3 = $('#numberGrid').isotope({
			itemSelector: '.filter-item',
			percentPosition: true,
			transitionDuration: 0,
			isResizeBound: false,

		})



		$('.letter').click(function() {
			$(this).removeClass('mobileBlue')
			$(this).closest('.whiteBubble').find('.secondGroup').slideDown()
			// $('.mobileOnlyAll').addClass('rotateAll');

			$('.mobileDash').remove()
		})

		$('.letter.number, .mobileOnlyAll, .allLetter').click(function() {

			$('.mobileOnlyAll').addClass('showIt');
			$('.position-fixed').addClass('bottomFixed').removeClass('addFixed')

			// $('.secondGroup .filter-item').removeClass('newClass')

			// $('#numberGrid').removeClass('smallDiv')

			// $('.ui-group').slideToggle()



			// $('.mobileOnlyAll').toggleClass('rotateAll')
		})

		$('.filter-item').css('position', 'relative')



		$('.mobileOnlyAll').click(function() {
			if(!$('.bottomFixed').hasClass('showHeight')) {

				setTimeout(function() {
					$('.bottomFixed').addClass('showHeight')
				}, 500)

				$('.bottomFixed').animate({
					"height" : "100%"
				},
				200);

			}

			if($('.bottomFixed').hasClass('showHeight')) {


				$('.bottomFixed').animate({
					"height" : "0"
				},
				200);

				setTimeout(function() {
					$('.bottomFixed').removeClass('showHeight')
				}, 500)

			}
			$(this).toggleClass('rotateAll')

		})


		$('.letter.number').click(function() {

			if($('.bottomFixed').hasClass('showHeight')) {


				$('.bottomFixed').animate({
					"height" : "0"
				},
				200);

				setTimeout(function() {
					$('.bottomFixed').removeClass('showHeight')
				}, 500)

				$('.mobileOnlyAll').removeClass('rotateAll')

			}


		})



	}


	// init Isotope
	var $grid = $('.grid').isotope({

		// transformsEnabled: false,
		// hiddenStyle: {
		// 	// opacity: 0,
		// 	 transform: 'translateY(0px)',
		//
		// },
		// visibleStyle: {
		// 	// opacity: 1,
		// 	 transform: 'translateY(100)',
		// },
		itemSelector: '.filter-item',
		percentPosition: true,
		// transitionDuration: 0,
		isResizeBound: false,


		filter: function() {

			var isMatched = true;
			var $this = $(this);

			for ( var prop in filters ) {
				var filter = filters[ prop ];

				filter = filter;

				if ( filter ) {
					isMatched = isMatched && $(this).is( filter );
				}

				if ( !isMatched ) {
					break;
				}
			}
			return isMatched;
		}


	});


	if ($(document).innerWidth() > 767) {

	$(window).resize(function () {
		$('.grid').isotope('layout');
	});

	$('.grid').isotope('reloadItems').isotope();


	$('.grid').imagesLoaded(function(){

		$('.grid').isotope('layout');

	});

}




	$('.filters').on( 'click', '.letter', function() {
		var $this = $(this);

		$('.hideInitial').fadeIn()



		var $buttonGroup = $this.parents('.button-group');
		var filterGroup = $buttonGroup.attr('data-filter-group');

		filters[ filterGroup ] = $this.attr('data-filter');

		$grid.isotope();
	});


	$('.letter').on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 13) {
			var $this = $(this);

			$('.hideInitial').fadeIn()

			var $buttonGroup = $this.parents('.button-group');
			var filterGroup = $buttonGroup.attr('data-filter-group');

			filters[ filterGroup ] = $this.attr('data-filter');

			$grid.isotope();



			var storeLetter = $(this).html()

			$('#changeLetter').html(storeLetter)



		}




	})



	$('.button-group').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', '.letter', function() {

			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$( this ).addClass('is-checked');
		});

		$buttonGroup.on( 'keyup', '.letter', function(e) {
			var code = (e.keyCode ? e.keyCode : e.which);
			if (code == 13) {

				$buttonGroup.find('.is-checked').removeClass('is-checked');
				$( this ).addClass('is-checked');

			}
		});



	});









})
