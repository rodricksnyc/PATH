$(document).ready(function () {
  $("a").on("keyup", function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {
      $(this).css('outline', 'dashed 4px #4599ff')

    }

  })
  $("a").on('focusout', function() {
    $(this).css('outline', 'none')
  })


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


    if (!$('.nav-link:eq(2)').hasClass('active') && $('.nav-link:eq(0)').hasClass('active')) {

      $('.nav-link:eq(2)  img').remove()
      $('.nav-link:eq(2)').html('<i class="fas fa-backpack"></i>')
    }

    if (!$('.nav-link:eq(2)').hasClass('active') && $('.nav-link:eq(1)').hasClass('active')) {

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
        'padding' : '1.5rem 1rem'
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




})
