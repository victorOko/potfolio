$(document).ready(function () {
  let $btns = $(".project-area .button-group button");

  $btns.click(function (e) {
    $(".project-area .button-group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $(".project-area .grid").isotope({
      filter: selector,
    });

    return false;
  });

  $(".project-area .button-group #btn1").trigger("click");

  $(".project-area .grid").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: { enabled: true },
  });

  // Owl-carousel

  $(".site-main .about-area .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      560: {
        items: 2,
      },
    },
  });

  // sticky navigation menu

  let nav_offset_top = $(".header_area").height() + 50;

  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header_area .main-menu").addClass("navbar_fixed");
        } else {
          $(".header_area .main-menu").removeClass("navbar_fixed");
        }
      });
    }
  }

  navbarFixed();

  (function ($) {
    "use strict";

    /*==================================================================
    [ Focus Contact2 ]*/
    $(".input100").each(function () {
      $(this).on("blur", function () {
        if ($(this).val().trim() != "") {
          $(this).addClass("has-val");
        } else {
          $(this).removeClass("has-val");
        }
      });
    });

    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var message = $('.validate-input textarea[name="message"]');

    $(".validate-form").on("submit", function () {
      var check = true;

      if ($(name).val().trim() == "") {
        showValidate(name);
        check = false;
      }

      if (
        $(email)
          .val()
          .trim()
          .match(
            /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
          ) == null
      ) {
        showValidate(email);
        check = false;
      }

      if ($(message).val().trim() == "") {
        showValidate(message);
        check = false;
      }

      return check;
    });

    $(".validate-form .input100").each(function () {
      $(this).focus(function () {
        hideValidate(this);
      });
    });

    function showValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).addClass("alert-validate");
    }

    function hideValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).removeClass("alert-validate");
    }
    /*Scroll to top when arrow up clicked BEGIN*/
    $(window).scroll(function () {
      var height = $(window).scrollTop();
      if (height > 100) {
        $("#back2Top").fadeIn();
      } else {
        $("#back2Top").fadeOut();
      }
    });
    $(document).ready(function () {
      $("#back2Top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });
    });
    /*Scroll to top when arrow up clicked END*/
  })(jQuery);
});
