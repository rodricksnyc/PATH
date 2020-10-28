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


	$(".secondGroup .letter.number").click(function () {

		$(".letter.number").removeClass("is-active");

		$(this).addClass("is-active");




		if ($('.allLetter').hasClass('is-checked')){
			console.log('yes')

			$('.secondGroup .filter-item').addClass('newClass')

		 $('#numberGrid').addClass('smallDiv')
		}
	});

	$('.anchorTag').attr('tabindex', '0')
	$('.numberTags').attr('tabindex', '0')




	$('.anchorTag').on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {


			var activeOne = $('.firstGroup .letter.is-checked')

			$(activeOne).focus().css('outline', 'dashed 3px #4599ff')


		}
	})





	$(".numberTags").on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {



			$(this).css('outline', 'dashed 3px #4599ff')
			$(this).find(".letter.number").addClass("green-active");
		}

	})

	$(".numberTags").on('focusout', function() {

		if ($(this).is(':last-child')) {

		 $(this).css('outline', 'none')
		 $(this).find(".letter.number").removeClass("green-active");


			console.log("wefiywefi")
		 var activeOne = $('.firstGroup .letter.is-checked')

		 $(activeOne).blur().css('outline', 'none')

		 $('#one').focus().css('outline', 'dashed 3px #4599ff')
		}


		$(this).css('outline', 'none')
		$(this).find(".letter.number").removeClass("green-active");

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
			$('.mobileOnlyAll').addClass('rotateAll');
			$('.mobileOnlyAll').addClass('showIt');
			$('.mobileDash').remove()
		})

		$('.letter.number, .mobileOnlyAll').click(function() {
			$('.ui-group').slideToggle()


			$('.mobileOnlyAll').toggleClass('rotateAll')
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




	$(window).resize(function () {
		$('.grid').isotope('layout');
	});

	$('.grid').isotope('reloadItems').isotope();


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



	$('.grid').imagesLoaded(function(){

		$('.grid').isotope('layout');

	});






})
