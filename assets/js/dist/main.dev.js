"use strict";

// Jquery
!function () {
  $('.countdown-time').syotimer({
    year: 2020,
    month: 12,
    day: 15
  });
}(); // Custom JS

!function () {
  // Function: Custom Selector
  var $ = function $(selector, areAll) {
    var all = document.querySelectorAll(selector);
    var single = document.querySelector(selector);
    return areAll ? all : single;
  }; // Iframe height


  !function () {
    iframes = $(".youtube-video iframe", true);
    console.log(iframes);

    function iframeVideo() {
      iframes.forEach(function (iframe) {
        var iframeWidth = iframe.offsetWidth;
        iframe.style.height = iframeWidth / 100 * 56 + "px";
      });
    }

    window.addEventListener("resize", iframeVideo);
    document.addEventListener("DOMContentLoaded", iframeVideo);
  }(); // Accordion

  !function () {
    var buttons = $("#accordion .card-header button", true);
    console.log(buttons);

    function accordion() {
      var collapses = $("#accordion .collapse", true);
      var $this = this || window;

      if ($this.nodeType === 1) {
        collapses.forEach(function (collapse) {
          collapse.parentElement.style.borderColor = "#7f7f7f";
        });
        console.log(this);
        $this.parentElement.parentElement.parentElement.style.borderColor = "#d41816";
      }

      collapses.forEach(function (collapse) {
        setTimeout(function () {
          if (collapse.classList.contains("show")) {
            collapse.parentElement.querySelector(".fa.fa-minus").style.display = "inline-block";
            collapse.parentElement.querySelector(".fa.fa-plus").style.display = "none";
            console.log(true);
          } else {
            collapse.parentElement.querySelector(".fa.fa-minus").style.display = "none";
            collapse.parentElement.querySelector(".fa.fa-plus").style.display = "inline-block";
            console.log(false);
          }
        }, 500);
      });
    }

    accordion();
    buttons.forEach(function (button) {
      button.addEventListener("click", accordion);
    });
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var collapses = $("#accordion .collapse", true);
        collapses.forEach(function (collapse) {
          setTimeout(function () {
            if (!collapse.classList.contains("show")) {
              collapse.parentElement.style.borderColor = "#7f7f7f";
            }
          }, 500);
        });
      });
    });
  }();
}();