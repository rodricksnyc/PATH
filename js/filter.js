$(document).ready(function () {


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
	});





	$(".numberTags").on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 9) {
			$(this).css('outline', 'dashed 3px #4599ff')
			$(this).find(".letter.number").addClass("green-active");
		}

	})
	$(".numberTags").on('focusout', function() {

		$(this).css('outline', 'none')
		$(this).find(".letter.number").removeClass("green-active");

	})



	$(".numberTags").attr('tabindex', '0')



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

	// init Isotope
	var $grid = $('.grid').isotope({



		itemSelector: '.filter-item',
		percentPosition: true,
		resizable: false,
		masonry: {


		},


		filter: function() {

			var isMatched = true;
			var $this = $(this);

			for ( var prop in filters ) {
				var filter = filters[ prop ];
				// use function if it matches
				filter = filter;
				// test each filter
				if ( filter ) {
					isMatched = isMatched && $(this).is( filter );
				}
				// break if not matched
				if ( !isMatched ) {
					break;
				}
			}
			return isMatched;
		}


	});


	//
	// $('.grid').imagesLoadedMB().progress( function() {
	// 				 $('.grid').isotope('layout');
	// 	});

	$('.grid').imagesLoaded(function(){

		$('.grid').isotope('layout');
		// $('.grid').masonry({
		//  itemSelector: '.grid-item',
		//  columnWidth: 100
		// });
	});

	$(window).resize(function(){
    isotope.isotope('layout');
  });


	$('.grid').isotope('reloadItems').isotope();


	$('.filters').on( 'click', '.letter', function() {
		var $this = $(this);


		$('.hideInitial').show()

		//
		// var gridHeight = $('.secondGrid').height()
		//
		//
		//
		// $(window).css({
		// 	'height': $('.secondGrid').height()
		// })
		//
		// console.log(gridHeight)
		//
		// console.log($(window).height())

		// get group key
		var $buttonGroup = $this.parents('.button-group');
		var filterGroup = $buttonGroup.attr('data-filter-group');
		// set filter for group
		filters[ filterGroup ] = $this.attr('data-filter');
		// arrange, and use filter fn
		$grid.isotope();
	});


	$('.letter').on("keyup", function (e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code == 13) {
			var $this = $(this);


			// get group key
			var $buttonGroup = $this.parents('.button-group');
			var filterGroup = $buttonGroup.attr('data-filter-group');
			// set filter for group
			filters[ filterGroup ] = $this.attr('data-filter');
			// arrange, and use filter fn
			$grid.isotope();

		}


	})




	// change is-checked class on buttons
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
