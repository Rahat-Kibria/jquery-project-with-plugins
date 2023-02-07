$(document).ready(function () {
  // navbar background color change
  $(window).scroll(function () {
    $(".container-fluid").toggleClass(
      "fixed-top when-scrolled",
      $(this).scrollTop() > 100
    );
  });

  $(".navbar-toggler").on("click", function () {
    $(".navbar-collapse").toggle("slow");
    if (window.matchMedia("(max-width: 600px)")) {
      $(".cover-title").css({ "padding-top": "4rem" });
    }
  });

  // text effect on cover title
  new Typed(".cover-title", {
    strings: [
      "JQuery Project",
      "Frontend JQuery Project",
      "Learn JQuery via Project",
    ],
    typeSpeed: 100,
    loop: true,
  });

  // todo app
  $(".todo-button").click(function () {
    var input_value = $(".todo-input").val();
    $(".todo-ul").append(
      "<li>" + input_value + "<i class='fa-solid fa-trash-can'></i>" + "</li>"
    );
  });
  $(".todo-ul").on("click", ".fa-trash-can", function () {
    $(this).parent().hide();
  });

  // create barchart using canvas js
  window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
      title: {
        text: "Last 7 years of growth",
      },
      axisY: {
        title: "Yearly value in %",
      },
      data: [
        {
          showInLegend: true,
          legendText: "Month Year",
          dataPoints: [
            { y: 60, label: "Jan 2016" },
            { y: 70, label: "Jan 2017" },
            { y: 40, label: "Jan 2018" },
            { y: 90, label: "Jan 2019" },
            { y: 70, label: "Jan 2020" },
            { y: 50, label: "Jan 2021" },
            { y: 80, label: "Jan 2022" },
          ],
        },
      ],
    });
    chart.render();
  };

  // counter using counter js 2
  const counterUp = window.counterUp.default;
  const callback = (entries) => {
    entries.forEach((entry) => {
      const element = entry.target;
      if (entry.isIntersecting) {
        counterUp(element, {
          duration: 2000,
          delay: 16,
        });
      }
    });
  };
  const observer = new IntersectionObserver(callback, { threshold: 1 });
  const element1 = document.querySelector(".counter");
  const element2 = document.querySelector(".counter2");
  const element3 = document.querySelector(".counter3");
  observer.observe(element1);
  observer.observe(element2);
  observer.observe(element3);

  // tiny slider
  var slider = tns({
    container: ".tiny-slider",
    items: 1,
    // center: true,
    controls: false,
    speed: 400,
    // "slideBy": "page",
    // mouseDrag: true,
    swipeAngle: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    autoplayButtonOutput: false,
    navPosition: "bottom",
    controlsPosition: "bottom",
    autoplayPosition: "bottom",
    // navContainer: "center",
    // controlsContainer: "center",
    // autoplayButton: "center",
    responsive: {
      600: {
        edgePadding: 20,
        gutter: 20,
        items: 2,
      },
      700: {
        gutter: 30,
      },
      900: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  // swiper slider
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    autoplayDisableOnInteraction: true,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
  });

  $(".swiper").hover(
    function () {
      this.swiper.autoplay.stop();
    },
    function () {
      this.swiper.autoplay.start();
    }
  );

  // animation using animate.css
  function isElScrolledIntoView(entries) {
    // again loop over all entries (element)
    entries.forEach((entry) => {
      // check if the entry is intersecting at our set threshold
      if (entry.isIntersecting) {
        // set a class to toggle animation
        entry.target.classList.add("scrolled-into-view");
        // if we only want to play the animation once per page, let's also add a class for that
        // entry.target.classList.add('scrolled-into-view-first-time');
      } else {
        // if we've stopped intersecting, let's remove the animation
        entry.target.classList.remove("scrolled-into-view");
      }
    });
  }
  let observer2 = new IntersectionObserver(isElScrolledIntoView, {
    root: null,
    rootMargin: "0px",
    threshold: 0.25,
  });
  const elements = document.querySelectorAll(".is-animated");
  elements.forEach((element) => {
    observer2.observe(element);
  });
});
