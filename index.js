$(function() {

  /* Hover & Click  */
  var hoverIn = function() {
    var type = $(this).html();
    $(this).addClass(type + ' animated');
  };

  var hoverOut = function() {
    var type = $(this).html();
    $(this).removeClass(type + ' animated');
  };

  $('.hover').hover(hoverIn, hoverOut);
  $('.click').click(hoverIn).on('mouseup', hoverOut);


  var displayCodeBlock = function() {
    $(this).siblings('.prettyprint').slideToggle('slow');
  };

  $('.view_code').click(displayCodeBlock);

  /* Form Validations - error and warning */
  var add_animation_to_input = function() {
    var animation = $(this).data('animation');
    $(this).siblings('input').addClass(animation);
  };

  var remove_input_styles = function() {
    $(this).siblings('input').removeClass();
  }

  var add_success_animation = function() {
    var animation = $(this).data('animation');
    var message = $(this).data('message');
    $(this).removeClass('hover').addClass(animation).html(message);
  };

  var remove_success = function() {
    var animation = $(this).data('animation');
    $(this).removeClass(animation);
  };

  $('.js_submit_validations').mouseup(add_animation_to_input).mousedown(remove_input_styles);
  $('#success_button').click(add_success_animation).mouseup(remove_success);

  /* Scrolling entrances */
  /* Only works on screens bigger than 480px */
  var unhide_on_scroll = function() {
    $('.hideme').each( function(i) {
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      var type = $(this).html();

      if (bottom_of_window > bottom_of_object) {
        $(this).removeClass('hideme').addClass(type + ' animated');
      }
    });
  };

  if ( $(window).width() > 480) {
    $(window).scroll(unhide_on_scroll);
  } else {
    $('.hideme').removeClass('hideme');
  };

  /* Click on the blocks after scroll to trigger animation again */
  var animate_block = function() {
    var type = $(this).html();
    $(this).removeClass().addClass(type + ' animated');
  };

  var remove_class = function() {
    var type = $(this).html();
    $(this).removeClass();
  };

  $('.block').mouseup(animate_block).mousedown(remove_class);

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
