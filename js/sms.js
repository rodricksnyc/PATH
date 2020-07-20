$(document).ready(function () {
  $('a, [tabIndex="0"]').on("keyup", function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {
      $(this).css('outline', 'dashed 4px #4599ff')

    }

  })
  $('a, [tabIndex="0"]').on('focusout', function() {
    $(this).css('outline', 'none')
  })



  $('.dropToggle').on('click', function(e) {
e.stopPropagation()

  if($(".hiddenDiv").is(':visible')) {

    $('.hiddenDiv').css('background', 'transparent')
    $('.youthFilters span').css('background', 'transparent')

   $(this).find('i').replaceWith('<i class="far fa-expand-arrows-alt"></i>')
    $(".hiddenDiv").slideUp();


  }

  else if ($(".hiddenDiv").is(':hidden')){
    e.stopPropagation()

     $(this).find('i').replaceWith('<i class="far fa-compress-arrows-alt"></i>')
     $('.hiddenDiv').css('background', '#d9f0fe')
     $('.youthFilters span').css('background', '#d9f0fe')
    $(".hiddenDiv").slideDown();
  }

});



  // $('a').on('click', function() {



  if ($('.wrapper').hasClass('adult-participant')) {

    $('.nav-link:eq(1)').addClass('active')
    $('.nav-link:eq(2)').removeClass('active')
    $('.nav-link:eq(0)').removeClass('active')

    var parent = $('.nav-link:eq(1)').closest('.nav-item')
    var span = $('.nav-link:eq(1)').closest('.nav-item').find('span')

    $('<div class="greenBubble"></div>').appendTo(parent).after(span);

    $(span).hide()
  }




  //
  // })

  //
  // $('a').on('click', function() {

  if ($('.wrapper').hasClass('youth-participant')) {

    $('.nav-link:eq(2)').addClass('active')
    $('.nav-link:eq(1)').removeClass('active')
    $('.nav-link:eq(0)').removeClass('active')
    var parent = $('.nav-link:eq(2)').closest('.nav-item')
    var span = $('.nav-link:eq(2)').closest('.nav-item').find('span')

    //     var img = $('.nav-link:eq(2)').closest('.nav-item').find('img')
    //
    // $('<div class="greenBubble"></div>').appendTo(parent).after(img)

    $(span).hide()

    $('<div class="greenBubble"></div>').appendTo(parent).after(span);

    $(span).hide()
    //
    // $('.nav-link:eq(2)  img').remove()
    //
    // $('.nav-link:eq(1)').html('<i class="fas fa-briefcase"></i>')
    // $('<a class="nav-link" href="youth.html" title="Youth Summary" tabindex="0"><img class="img-fluid" src="images/child.svg"></a>').appendTo(parent).before(span).css('transform' , 'scale(1.3)')

    // $('.nav-link:eq(2)').html('<i class="fas fa-backpack"></i>').remove()

  }

  // })


  var path = window.location.href;

  $('.nav-link').each(function() {
    if (this.href === path) {
      $(this).addClass('active');
      var green = $('<div class="greenBubble"></div>')
      $(this).closest('.nav-item').append(green)

      $(this).closest('.nav-item').css({
        'background' : 'none',
        'height': 'auto',
        'min-height' : '5rem',
        'width': '-webkit-fill-available'
      })

    }
    else {
      $(this).removeClass('active');

    }




    if (!$('.nav-link:eq(0)').hasClass('active')) {

      $('.nav-link:eq(0)  img').remove()
      $('.nav-link:eq(0)').html('<i class="far fa-desktop"></i>')
    }

    if (!$('.nav-link:eq(1)').hasClass('active') && $('.nav-link:eq(0)').hasClass('active')) {

      $('.nav-link:eq(1)  img').remove()
      $('.nav-link:eq(1)').html('<i class="fas fa-briefcase"></i>')
    }

    if (!$('.nav-link:eq(1)').hasClass('active') && $('.nav-link:eq(2)').hasClass('active')) {

      $('.nav-link:eq(1)  img').remove()
      $('.nav-link:eq(1)').html('<i class="fas fa-briefcase"></i>')
    }


    if (!$('.nav-link:eq(2)').hasClass('active') && $('.nav-link:eq(0)').hasClass('active') && !$('.nav-link:eq(1)').hasClass('active')) {



      $('.nav-link:eq(2)  img').remove()
      $('.nav-link:eq(2)').html('<i class="fas fa-backpack"></i>')
    }



    if ( $('.nav-link:eq(1)').hasClass('active') && !$('.nav-link:eq(0)').hasClass('active')) {

      $('.nav-link:eq(2)  img').remove()
      $('.nav-link:eq(2)').html('<i class="fas fa-backpack"></i>')
    }




  });


  var clickLastNav = function() {

    // $('.nav-link:eq(3)').on('click', function() {
    if (!$('.nav-link:eq(3)').hasClass('bars')) {
      $('.nav-link:eq(3)').html('<i class="fas fa-bars"></i>').addClass('bars')
      $('.nav-item:not(:last-child)').hide()

      $('.nav-item').last().css({
        'margin' : '0em'
      })

      $('.nav-item .nav-link').last().css({
        'padding' : '1.6rem 1rem'
      })

      $('.nav-item i').last().css('font-size', '27px')
    }

    else {
      $('.nav-item:not(:last-child)').show()

      $('.nav-link:eq(3)').html('<i class="far fa-compress-arrows-alt"></i>').removeClass('bars')

      $('.nav-item').last().css({
        'margin' : '1.5em 0em -3em 0em'
      })
      $('.nav-item .nav-link').last().css({
        'padding' : '.5rem 1rem'
      })

      $('.nav-item i').last().css('font-size', '17px')

    }

    // })

  }

  $('.nav-link:eq(3)').keypress(
    clickLastNav

  ).click(
    clickLastNav
  );





  if ($(document).innerWidth() <= 767) {

    var Opt01 = "";
    $('.no-more-tables a').each(function() {
    	Opt01 = $(this).html();

    	if ($(this).html() > 99) {

        $(this).css({
          'padding':'.5em .3em',
          'height':'2.55em',
          'width' : '2.55em'
        })
    }

  })



    $('.nav-link.active').closest('.nav-item').find('.title').hide()

    $('.nav-item').css({
      'background' : 'none',
      'height': 'auto',
      'min-height' : '0rem',
      'width': '25%'
    })

    $('.logout').html('')

    var bubbleHeight = $('.greenBubble').height()

    console.log(bubbleHeight)

    // $('.menu-buttons-768-list li:nth-of-type(1)').css({
    //   'height' : bubbleHeight,
    //   'width' : bubbleHeight
    //
    // })

  }


  function scrollfn(e) {
    let $target = $(e),
    offSet = e === "#Home" ? 0 : $target.offset().top;
    $('html, body').stop().animate({
      'scrollTop': offSet
    }, 1000, 'swing');

  }

  $('.menu-buttons-768-list li').on('click', function (e) {

    e.preventDefault();
    scrollfn($(this).attr('data-target'));
  });


  $('.menu-buttons-768-list li').click(function() {
    $(this).addClass('activated')
    setTimeout(function(){

      $('.menu-buttons-768-list li').removeClass('activated')
    }, 1300);

  })


  $('.menu-buttons-768-list li').on('keypress', function (e) {
    e.preventDefault();
    scrollfn($(this).attr('data-target'));
  });



  $('.NavItem').click(function(evt) {
    evt.preventDefault();
    evt.stopPropagation();



    var navItem = $(this),
    allNavItems = $('.NavItem'),
    activeClass = 'NavItem--is-active';

    allNavItems.removeClass(activeClass);
    navItem.addClass(activeClass);

    var type = $(this).data('type');
    $('.option').addClass('hidden');
    $('.option[data-type="'+type+'"]').removeClass('hidden');

  })



  $('.option[data-type="allItems"]').addClass('hidden').show();
  $('.option[data-type="notStarted"]').addClass('hidden').show();
  $('.option[data-type="started"]').addClass('hidden').show();
  $('.option[data-type="submitted"]').addClass('hidden').show();


  // $("td[data-title='Status']").each(function() {
  // // var textStuff = $(this).html()
  // // console.log(textStuff)
  // //
  // //
  // // if ($(textStuff).val()  == 'Web Survey Started, not submitted') {
  // //   alert("sdjhdbv")
  // // }
  //
  // })
  //
  // $('a').click(function() {
  //   if ($('.progressStatus').html() == 'Web Survey Started, not submitted') {
  //
  //
  // }
  // })




  //  $("td[data-title='Status']").each(function() {
  //
  //
  //  if ($('.progressStatus').html() == 'Web Survey Started, not submitted') {
  //  console.log("eiufgierugivgirgvivugrirgeiuvgigr")
  //
  // }
  //
  //
  //
  //  if ($('.progressStatus').html() == 50) {
  //  console.log("bitch")
  //
  // }
  //
  //
  //
  // })



  // var Opt01 = "";
  // $('td').each(function() {
  // 	Opt01 = $(this).text();
  //
  //
  //
  // 	if ($(this).text() == 50) {
  //     console.log("seubdsiubv")
  // 		$(this).css('background', 'red')
  // 	}
  //
  //
  //   if ($(this).text() == 'Web Survey Started, not submitted') {
  //     $(this).css('background', 'red')
  //   }
  //
  //
  // });





})
