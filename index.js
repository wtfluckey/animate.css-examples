$(function() {
  $('.hover > span').hover(
    function() {
      var type = $(this).html();
      $(this).addClass('animated '+ type + '');
  },
  function() {
    var type = $(this).html();
    $(this).removeClass('animated '+ type + '');
  });

  $('.click > span').on('click', function() {
    var type = $(this).html();
    $(this).addClass('animated '+ type + '');
  }).on('mouseup', function() {
    var type = $(this).html();
    $(this).removeClass('animated ' + type + '');
  });

  $('.submit_button').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });

  $('.submit_button').on('click', function() {
    $('input').addClass('quick animated flash error');
  }).on('mouseup', function() {
    $('input').removeClass('animated flash');
  });
});
