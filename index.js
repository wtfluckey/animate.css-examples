$(function() {
  $('.button').not('.click').hover(
    function() {
      var type = $(this).html();
      $(this).addClass('animated '+ type + '');
  },
  function() {
    var type = $(this).html();
    $(this).removeClass('animated '+ type + '');
  });

  $('.button').not('.hover').on('click', function() {
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
    $(this).removeClass('hover').addClass('quick animated tada success').html('Success!');
  }).on('mouseup', function() {
    $('#success_button').removeClass('animated tada success');
  });

  $('#warning_button').on('click', function() {
    $('.input_warning').addClass('quick animated pulse warning');
  }).on('mouseup', function() {
    $('.input_warning').removeClass('animated pulse');
  });

  $(window).scroll( function() {
    $('.hideme').each( function(i) {
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      var type = $(this).html();

      if (bottom_of_window > bottom_of_object) {
        $(this).removeClass('hideme').addClass('animated '+ type + '');
      }
    });
  });

  $('.block')
    .mouseup(function() {
      var type = $(this).html();
      $(this).addClass('animated '+ type + '');
  }).mousedown(function() {
      var type = $(this).html();
      $(this).removeClass('animated '+ type + '');
  });

  $('.js_slow_click').mouseup(function() {
    $('#time_changer').removeClass().addClass('slow animated fadeInDown');
  }).mousedown(function() {
    $('#time_changer').removeClass();
  });

  $('.js_default_click').mouseup(function() {
    $('#time_changer').removeClass().addClass('animated fadeInDown');
  }).mousedown(function() {
    $('#time_changer').removeClass();
  });

  $('.js_fast_click').mouseup(function() {
    $('#time_changer').removeClass().addClass('quick animated fadeInDown');
  }).mousedown(function() {
    $('#time_changer').removeClass();
  });
});
