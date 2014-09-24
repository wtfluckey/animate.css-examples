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
  /* Only works on screens bigger than 480px */
  if ( $(window).width() > 480) {
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
  } else {
      $('.hideme').removeClass('hideme');
  };

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
  var detect_animation_end = function() {
   $('#time_changer').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', remove_class);
  };

  var execute_animation = function() {
    detect_animation_end();
    var animation_type = $('.choose_animation').val();
    var animation_speed = $(this).html();
    var animation_time = $(this).data('timing');
    $('#time_changer').removeClass().addClass(
      'animated ' + animation_type + ' ' + animation_speed)
      .html(animation_time + ' ' + animation_type);
  };

  var remove_class = function() {
    $('#time_changer').removeClass();
  };

  $('.js_click').mouseup(execute_animation).mousedown(remove_class);
});
