$(document).ready(function () {
  $('a, [tabIndex="0"], input').on("keyup", function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 9) {
      $(this).css('outline', 'dashed 4px #4599ff')

    }

  })
  $('a, [tabIndex="0"], input').on('focusout', function() {
    $(this).css('outline', 'none')
  })

  var ifSaved = false;
  $(".hiddenDiv .form-check-inline input").change(function(){


    if($(this).prop("checked")==true){


      $(this).closest('.form-check-inline').addClass('activeCheckbox ')

      // var text =  $(this).closest('.form-check-inline').find('label').html()
      //
      // $('.dropToggle span.across').append(`<li id="${this.id}" class='results hidden'>${text}</li>`);
      //
      // $('.results').each(function(){
      //
      //     var truncated = $(this).html().substr(0, 30);
      //     //Updating with ellipsis if the string was truncated
      //     $(this).html(truncated+(truncated.length<30?'':'[...]<div class="removeTag"><i class="fal fa-times ml-1"></i></div> '));
      // });

    }


    // if ($('.hiddenDiv .form-check-inline input:checked').length ==  0){
    //
    //  $(this).closest('.form-check-inline').removeClass('activeCheckbox ')
    // }

    if($(this).prop("checked")==false){

      $(this).closest('.form-check-inline').removeClass('activeCheckbox ')
      // $(".filter-attr-list li[data-year=" + this.value + "]").remove()
    };


    //
    // var isChecked = document.querySelectorAll('input:checked').length === 0 ? false : true;
    // return isChecked;
    //


    //
    // $('.dropToggle span.across').on('click', '.removeTag', function() {
    //
    //
    // $(".hiddenDiv .form-check-inline input[id=" + $(this).attr("id") + "]").prop("checked",false);
    //   $(this).closest('li').remove()
    // })

  });




  $('.dropToggle').on('click', function(e) {

    if($(".hiddenDiv").is(':visible')) {

      $('.youthFilters span').css('background', 'transparent')

      $('.changeWord').html('Filter')
      $('.notVisible').css('visibility', 'hidden')

      $('.surveyStatus .black').hide()
      setTimeout(function() {
        $('.results').removeClass('hidden')
      }, 500)


      $(this).find('.expand i').replaceWith('<i class="far fa-expand-alt"></i>')
      $(".hiddenDiv").slideUp().css('display', 'flex');


    }

    else if ($(".hiddenDiv").is(':hidden')){

      $('.results').addClass('hidden')

      $('.notVisible').css('visibility', 'visible')
      $('.surveyStatus .black').show().css('display', 'flex');

      $('.changeWord').html('Continuing Youth')

      $(this).find('.expand i').replaceWith('<i class="far fa-compress-arrows-alt blue"></i>')

      $('.youthFilters span').css('background', '#d9f0fe')
      $(".hiddenDiv").slideDown().css({
        'display': 'flex',
        'flex-wrap': 'wrap'
      });
    }

  }).on('click', '.wrappingDiv', function(e) {

    e.stopPropagation();
  }).on('click', '.results', function(e) {
    e.preventDefault()
    e.stopPropagation();
  })




  $('.dropToggle').on('keyup', function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {

      if($(".hiddenDiv").is(':visible')) {

        $('.youthFilters span').css('background', 'transparent')

        $('.changeWord').html('Filter')
        $('.notVisible').css('visibility', 'hidden')

        $('.surveyStatus .black').hide()

        $(this).find('.expand i').replaceWith('<i class="far fa-expand-alt"></i>')
        $(".hiddenDiv").slideUp().css('display', 'flex');


      }

      else if ($(".hiddenDiv").is(':hidden')){

        $('.notVisible').css('visibility', 'visible')
        $('.surveyStatus .black').show().css('display', 'flex');

        $('.changeWord').html('Continuing Youth')

        $(this).find('.expand i').replaceWith('<i class="far fa-compress-arrows-alt blue"></i>')

        $('.youthFilters span').css('background', '#d9f0fe')
        $(".hiddenDiv").slideDown().css({
          'display': 'flex',
          'flex-wrap': 'wrap'
        });
      }

    }

  }).on('keyup', '.wrappingDiv', function (e) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {

      e.stopPropagation();

    }
  });



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


  $('.stickyNav .nav .nav-item').last().on('mouseenter', function() {

    if ($('.nav-link:eq(3)').hasClass('bars')) {
      $('.stickyNav .nav .nav-item').last().css('background', 'transparent')

    }

    if (!$('.nav-link:eq(3)').hasClass('bars')) {
      $('.stickyNav .nav .nav-item').last().css('background', '#94d678')

    }


  })


  $('.stickyNav .nav .nav-item').last().on('mouseleave', function() {

    if ($('.nav-link:eq(3)').hasClass('bars')) {
      $('.stickyNav .nav .nav-item').last().css('background', 'transparent')

    }

    if (!$('.nav-link:eq(3)').hasClass('bars')) {
      $('.stickyNav .nav .nav-item').last().css('background', 'transparent')

    }
  })


  var clickLastNav = function() {



    // $('.nav-link:eq(3)').on('click', function() {
    if (!$('.nav-link:eq(3)').hasClass('bars')) {

      $('.stickyNav .nav .nav-item').last().css('background', 'transparent')


      $('.nav-link:eq(3)').html('<i class="fas fa-bars"></i>').addClass('bars')
      $('.nav-item:not(:last-child)').hide()

      $('.nav-item').last().css({
        'margin' : '0em'
      })

      $('.nav-item .nav-link').last().css({
        'padding' : '.4rem 1rem'
      })

      $('.nav-item i').last().css('font-size', '27px')

    }

    else {

      $('.stickyNav .nav .nav-item').last().css('background', 'transparent')

      $('.nav-item:not(:last-child)').show()

      $('.nav-link:eq(3)').html('<i class="far fa-compress-arrows-alt"></i>').removeClass('bars')

      $('.nav-item').last().css({
        'margin' : '0em 0em 1em 0em'
      })
      $('.nav-item .nav-link').last().css({
        'padding' : '.5rem 1rem'
      })

      $('.nav-item i').last().css('font-size', '1.5rem')

    }

    // })

  }

  $('.nav-link:eq(3)').keypress(
    clickLastNav

  ).click(
    clickLastNav
  );



  $('.smallWhiteBubble .filter-attr-list a').click(function() {
    // var tag = $('<i class="fal fa-times removeTag"></i>')
    // $(this).append(tag)

    //
    // else {
    //   $(this).remove(tag)
    // }

  })





  if ($(document).innerWidth() <= 991) {

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

  }





  if ($(document).innerWidth() <= 767) {


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
  // $('td.progressStatus').each(function() {
  // 	Opt01 = $(this).find('p').html();
  //
  //
  //   if (	Opt01 == 'Web Survey Not Started') {
  //     $(this).addClass('pink')
  //
  //   }
  //
  //
  // });
  //




})
