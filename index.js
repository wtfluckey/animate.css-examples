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
    $(this).addClass('hover')
  }, function() {
      $(this).removeClass('hover');
  });

  $('#error_button').on('click', function() {
    $('.input_error').addClass('quick animated flash error');
  }).on('mouseup', function() {
    $('.input_error').removeClass('animated flash');
  });

  $('#success_button').on('click', function() {
    $(this).removeClass('hover');
    $(this).addClass('quick animated tada success');
    $(this).html('Success!');
  }).on('mouseup', function() {
    $('#success_button').removeClass('animated tada success');
  });
  
});
