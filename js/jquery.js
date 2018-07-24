$(document).ready(function() {
  $(window).scroll(function() {
    scrollPos = $(this).scrollTop();
    $(".intro, .header, .bgimg-1").css({
      opacity: 1 - scrollPos / 200
    });
    if (scrollPos > 200) {
      $(".intro").css({});
    }
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $(".opaque-navbar").addClass("opaque");
    } else {
      $(".opaque-navbar").removeClass("opaque");
    }
  });

  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 200) {
      $(".switch-text").hover(
        function() {
          $(this).css("color", "#acbfc8");
        },
        function() {
          $(this).css("color", "#9d9d9d");
        }
      );
    } else {
      $(".switch-text").hover(
        function() {
          $(this).css("color", "#fff");
        },
        function() {
          $(this).css("color", "#9d9d9d");
        }
      );
    }
  });
});
