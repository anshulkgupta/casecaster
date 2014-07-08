$(document).ready(function(){
  $("label.inlined + input.input-text").each(function (type) {

    Event.observe(window, 'load', function () {
      setTimeout(function(){
        if (!input.value.empty()) {
          input.previous().addClassName('has-text');
        }
      }, 200);
    });
 
    $(this).focus(function () {
      $(this).prev("label.inlined").addClass("focus");
    });
 
    $(this).keypress(function () {
      $(this).prev("label.inlined").addClass("has-text").removeClass("focus");
    });
 
    $(this).blur(function () {
      if ($(this).val() == "") {
        $(this).prev("label.inlined").removeClass("has-text").removeClass("focus");
      }
    });
  });
});