$(function() {

  /* Hover & Click  */
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


  /* Submit button hovers. TODO: convert to CSS */
  $('.submit_button').hover(function() {
    $(this).addClass('hover')
  }, function() {
    $(this).removeClass('hover');
  });

  /* TODO: Refactor these! Data attributes or something*/
  /* Form Validations - error */
  $('#error_button').mouseup(function() {
    $('#input_error').addClass('Fast animated flash error');
  }).mousedown(function() {
    $('#input_error').removeClass();
  });

  /* Form Validations - success */
  $('#success_button').on('click', function() {
    $(this).removeClass('hover').addClass('Fast animated tada success').html('Success!');
  }).on('mouseup', function() {
    $('#success_button').removeClass('animated tada success');
  });

  /* Form Validations - warning */
  $('#warning_button').mouseup(function() {
    $('#input_warning').addClass('Fast animated pulse warning');
  }).mousedown(function() {
    $('#input_warning').removeClass();
  });

  /* Scrolling entrances */
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

  /* Click on the blocks after scroll to trigger animation again */
  $('.block')
    .mouseup(function() {
      var type = $(this).html();
      $(this).removeClass().addClass(type + ' animated');
  }).mousedown(function() {
      var type = $(this).html();
      $(this).removeClass();
  });

  /* Animation picker - attention seekers */
  $('.js_click_1').mouseup(function() {
    var animation_type = $('.choose_animation_1').val();
    var animation_speed = $(this).html();
    var animation_time = $(this).data('timing');
    $('#time_changer_1').removeClass().addClass('animated ' + animation_type + ' ' + animation_speed).html(animation_time + ' ' + animation_type);
  }).mousedown(function() {
    $('#time_changer_1').removeClass();
  });

  /* Animation picker - entrances */
  $('.js_click_2').mouseup(function() {
    var animation_type = $('.choose_animation_2').val();
    var animation_speed = $(this).html();
    var animation_time = $(this).data('timing');
    $('#time_changer_2').removeClass().addClass('animated ' + animation_type + ' ' + animation_speed).html(animation_time + ' ' + animation_type);
  }).mousedown(function() {
    $('#time_changer_2').removeClass();
  });

  /* Animation picker - exits */
  $('.js_click_3').mouseup(function() {
    var animation_type = $('.choose_animation_3').val();
    var animation_speed = $(this).html();
    var animation_time = $(this).data('timing');
    $('#time_changer_3').removeClass().addClass('animated ' + animation_type + ' ' + animation_speed).html(animation_time + ' ' + animation_type);
  }).mousedown(function() {
    $('#time_changer_3').removeClass();
  });
});
