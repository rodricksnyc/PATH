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



})
