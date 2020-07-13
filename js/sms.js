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

})
