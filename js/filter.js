$(document).ready(function () {


	$('.letter').attr('tabindex', '0')



	var Opt01 = "";
	$('.firstGroup .letter p').each(function() {
		Opt01 = $(this).html();


		$(this).click(function() {
			console.log($(this).html())

			var storeLetter = $(this).html()

			$('#changeLetter').html(storeLetter)
		})




	})


	// store filter for each group
	var filters = {};

	// init Isotope
	var $grid = $('.grid').isotope({
		itemSelector: '.filter-item',
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



	$('.filters').on( 'click', '.letter', function() {
		var $this = $(this);


		// get group key
		var $buttonGroup = $this.parents('.button-group');
		var filterGroup = $buttonGroup.attr('data-filter-group');
		// set filter for group
		filters[ filterGroup ] = $this.attr('data-filter');
		// arrange, and use filter fn
		$grid.isotope();
	});

	// change is-checked class on buttons
	$('.button-group').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', '.letter', function() {

			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$( this ).addClass('is-checked');
		});
	});

})
