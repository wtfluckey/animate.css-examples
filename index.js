$(function() {

  hoverIn = function() {
    var type = $(this).html();
    $(this).addClass(type + ' animated');
  };

  hoverOut = function() {
    var type = $(this).html();
    $(this).removeClass(type + ' animated');
  };

  $('.hover').hover(hoverIn, hoverOut);
  $('.click').click(hoverIn).on('mouseup', hoverOut);

  $('.submit_button').hover(function() {
    $(this).addClass('hover')
  }, function() {
    $(this).removeClass('hover');
  });

  $('#error_button').mouseup(function() {
    $('#input_error').addClass('Fast animated flash error');
  }).mousedown(function() {
    $('#input_error').removeClass();
  });

  $('#success_button').on('click', function() {
    $(this).removeClass('hover').addClass('Fast animated tada success').html('Success!');
  }).on('mouseup', function() {
    $('#success_button').removeClass('animated tada success');
  });

  $('#warning_button').mouseup(function() {
    $('#input_warning').addClass('Fast animated pulse warning');
  }).mousedown(function() {
    $('#input_warning').removeClass();
  });

  $(window).scroll( function() {
    $('.hideme').each( function(i) {
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      var type = $(this).html();

      if (bottom_of_window > bottom_of_object) {
        $(this).removeClass('hideme').addClass(type + ' animated');
      }
    });
  });

  $('.block')
    .mouseup(function() {
      var type = $(this).html();
      $(this).removeClass().addClass(type + ' animated');
  }).mousedown(function() {
      var type = $(this).html();
      $(this).removeClass();
  });

  $('.js_click').mouseup(function() {
    var animation_type = $('option').val();
    alert(animation_type);
    var animation_speed = $(this).html();
    var animation_time = $(this).data('timing');
    $('#time_changer').removeClass().addClass('animated fadeInDown ' + animation_speed + '').html(animation_time);
  }).mousedown(function() {
    $('#time_changer').removeClass();
  });
});
