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

  // scroll to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".go_up").fadeIn();
    } else {
      $(".go_up").fadeOut();
    }
  });
  $(".go_up").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  // jquery ui dialog box
  $("#dialog_box").dialog();

  // tippy js
  tippy(".swiper-slider-title", {
    interactive: true,
    animation: "fade",
    arrow: true,
    content:
      '<strong>Bolded <span style="color: aqua;">content</span></strong>',
    allowHTML: true,
    delay: 500,
    followCursor: true,
  });
  tippy(".tiny-slider-title", {
    interactive: true,
    animation: "fade",
    arrow: true,
    content:
      '<strong>Bolded <span style="color: aqua;">content</span></strong>',
    allowHTML: true,
    delay: 500,
    followCursor: true,
  });
  tippy(".total-counts-title", {
    interactive: true,
    animation: "fade",
    arrow: true,
    content:
      '<strong>Bolded <span style="color: aqua;">content</span></strong>',
    allowHTML: true,
    delay: 500,
    followCursor: true,
  });
  tippy(".growth-todo-title", {
    interactive: true,
    animation: "fade",
    arrow: true,
    content:
      '<strong>Bolded <span style="color: aqua;">content</span></strong>',
    allowHTML: true,
    delay: 500,
    followCursor: true,
  });
  tippy(".services-title", {
    interactive: true,
    animation: "fade",
    arrow: true,
    content:
      '<strong>Bolded <span style="color: aqua;font-size:2rem;">content</span></strong>',
    allowHTML: true,
    delay: 500,
    followCursor: true,
  });

  // jquery ui menu
  $("#ui_menu").menu();

  // jquery ui slider
  $("#slider").slider({
    value: 100,
    min: 0,
    max: 500,
    step: 50,
    slide: function (event, ui) {
      $(".slider_amount").val("TK. " + ui.value);
    },
  });
  $(".slider_amount").val("TK. " + $("#slider").slider("value"));

  // jquery ui slider (range)
  let getOutput = $("#show_amount");
  let getSlider = $("#range_slider");
  getSlider.slider({
    range: true,
    values: [20, 40],
    min: 10,
    max: 100,
    slide: function (event, ui) {
      getOutput.html(ui.values[0] + "-" + ui.values[1] + " Taka");
    },
    stop: function (event, ui) {
      $("#min_amount").val(ui.values[0]);
      $("#max_amount").val(ui.values[1]);
    },
  });
  getOutput.html(
    getSlider.slider("values", 0) +
      "-" +
      getSlider.slider("values", 1) +
      " Taka"
  );
  $("#min_amount").val(getSlider.slider("values", 0));
  $("#max_amount").val(getSlider.slider("values", 1));

  // jquery ui slider (image control)
  $("#height_slider, #width_slider").slider({
    min: 100,
    max: 500,
    slide: control_img,
  });
  $("#opacity_slider").slider({
    min: 0,
    max: 100,
    value: 100,
    slide: control_img,
  });
  function control_img() {
    let ctrl_height = $("#height_slider").slider("value");
    let ctrl_width = $("#width_slider").slider("value");
    let ctrl_opacity = $("#opacity_slider").slider("value");
    $("#show_height_width").html(
      "Height:" +
        ctrl_height +
        " px<br>" +
        "Width:" +
        ctrl_width +
        " px<br>" +
        "Opacity:" +
        ctrl_opacity / 100
    );
    $("#resize_image").css({
      height: ctrl_height,
      width: ctrl_width,
      opacity: ctrl_opacity / 100,
    });
  }

  // jquery ui (animation)
  let toggle_animation = true;
  $("#animate_button").click(function () {
    if (toggle_animation) {
      $("#div_do_animation").animate({
        height: "90%",
        borderWidth: "4px",
        borderStyle: "solid",
        borderColor: "#191919",
        backgroundColor: "#905d5d",
        color: "#fcfcfc",
      });
    } else {
      $("#div_do_animation").animate({
        height: "40%",
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "#191919",
        backgroundColor: "#277e71",
        color: "#fcfcfc",
      });
    }
    toggle_animation = !toggle_animation;
  });

  // jquery ui datepicker
  $("#date").datepicker({
    dateFormat: "dd/mm/yy",
    changeMonth: true,
    changeYear: true,
    showOn: "both",
    buttonText: "Show Date",
    // numberOfMonths: 2,
  });

  // jquery ui tabs
  $("#tabs").tabs();

  // jquery ui autocomplete
  let prog_subject = [
    "PHP",
    "HTML",
    "CSS",
    "Javascript",
    "Python",
    "Laravel",
    "MySQL",
    "JQuery",
    "Ruby",
  ];
  $("#autocomplete_input").autocomplete({
    source: prog_subject,
    autoFocus: true,
    minLength: 2,
    delay: 500,
  });

  // jquery ui autocomplete
  $("#effect1").click(function () {
    $(this).effect(
      "shake",
      {
        time: 10,
        distance: 50,
      },
      3000,
      function () {
        $(this).css("background-color", "#905d5d");
      }
    );
  });
  $("#effect2").click(function () {
    $(this).effect({
      effect: "explode",
      easing: "easeInExpo",
      pieces: 4,
      duration: 3000,
    });
  });

  // jquery ui accordion
  $("#accordion").accordion({
    collapsible: true,
  });

  // jquery ui accordion
  $("#spinner").spinner({
    min: -10,
    max: 50,
    step: 5,
  });

  // jquery ui draggable
  $("#draggable_inner_div").draggable({
    containment: "parent",
    // containment: "#draggable_outer_div",
    cursor: "move",
    opacity: 0.7,
    revert: true,
    // axis: "x",
    // axis: "y",
  });
  $("#draggable_div,#put_draggable_div_in_this_div").draggable({
    snap: "#put_draggable_div_in_this_div",
    cancel: "#put_draggable_div_in_this_div",
    // snapTolerance: 50,
    stack: "#draggable_div",
    cursor: "move",
  });
  /* $("#draggable_div").mousedown(function () {
    let max_z_index = 0;
    $(this)
      .siblings("#draggable_div")
      .each(function () {
        let current_z_index = Number($(this).css("z-index"));
        max_z_index =
          current_z_index > max_z_index ? current_z_index : max_z_index;
      });
    $(this).css("z-index", "max_z_index+1");
  }); */

  // jquery ui droppable
  $("#draggable_items li").draggable({
    // helper: "clone",
    helper: function () {
      return "<ul><strong>" + $(this).text() + "</ul></strong>";
    },
    revert: "invalid",
  });
  $(".droppable_to_1").droppable({
    accept: "li[data-value='item1']",
    activeClass: "during_drag",
    // hoverClass: "during_drag",
    /*activate: function (event, ui) {
      $(this).addClass(".during_drag");
    },*/
    /*deactivate: function (event, ui) {
      $(this).removeClass(".during_drag");
    },*/
    /*over: function (event, ui) {
      $(this).addClass("during_drag");
    },*/
    /*out: function (event, ui) {
      $(this).removeClass("during_drag");
    },*/
    drop: function (event, ui) {
      $("#item1").append(ui.draggable);
    },
  });
  $(".droppable_to_2").droppable({
    accept: "li[data-value='item2']",
    activeClass: "during_drag",
    // hoverClass: "during_drag",
    /*activate: function (event, ui) {
      $(this).addClass(".during_drag");
    },*/
    /*deactivate: function (event, ui) {
      $(this).removeClass(".during_drag");
    },*/
    /*over: function (event, ui) {
      $(this).addClass("during_drag");
    },*/
    /*out: function (event, ui) {
      $(this).removeClass("during_drag");
    },*/
    drop: function (event, ui) {
      $("#item2").append(ui.draggable);
    },
  });

  // jquery ui resizable
  $("#resizable-div").resizable({
    ghost: true,
    minHeight: 100,
    minWidth: 100,
    maxHeight: 250,
    maxWidth: 250,
    start: function (event, ui) {
      $("#start_dim").html(live_dim(event, ui));
    },
    resize: function (event, ui) {
      $("#resize_dim").html(live_dim(event, ui));
    },
    stop: function (event, ui) {
      $("#stop_dim").html(live_dim(event, ui));
    },
  });
  function live_dim(event, ui) {
    let dimension = "Height: " + ui.size.height + ", Width: " + ui.size.width;
    return dimension;
  }

  // jquery ui resizable
  $("#selectable").selectable({
    stop: function () {
      let selected_items = "";
      $(".ui-selected").each(function () {
        selected_items += $(this).text() + "<br>";
      });
      $("#show_selected").html(selected_items);
    },
  });

  // jquery ui resizable
  $("#sortable1").sortable({
    placeholder: "placeholder",
    // opacity: 0.5,
    // axis: "y",
    items: "li[data-value='sort_type_1']",
    connectWith: "#sortable2",
  });
  $("#sortable2").sortable({
    placeholder: "placeholder",
    // opacity: 0.5,
    // axis: "y",
    items: "li[data-value='sort_type_2']",
    connectWith: "#sortable1",
  });

  // form validation
  $("#email_error_msg").hide();
  $("#username_error_msg").hide();
  $("#password_error_msg").hide();
  $("#confirm_password_error_msg").hide();
  let error_email = false;
  let error_username = false;
  let error_password = false;
  let error_confirm_password = false;
  $("#email").focusout(function () {
    check_email();
  });
  $("#username").focusout(function () {
    check_username();
  });
  $("#password").focusout(function () {
    check_password();
  });
  $("#confirm_password").focusout(function () {
    check_confirm_password();
  });
  function check_email() {
    let pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (pattern.test($("#email").val())) {
      $("#email_error_msg").hide();
    } else if ($("#email").val() != "") {
      $("#email_error_msg").html("*invalid email address");
      $("#email_error_msg").show();
      error_email = true;
    }
  }
  function check_username() {
    let username_length = $("#username").val().length;
    if (
      ($("#username").val() != "" && username_length < 5) ||
      username_length > 15
    ) {
      $("#username_error_msg").html(
        "*username should be between 5-15 characters"
      );
      $("#username_error_msg").show();
      error_username = true;
    } else {
      $("#username_error_msg").hide();
    }
  }
  function check_password() {
    let password_length = $("#password").val().length;
    if ($("#password").val() != "" && password_length < 8) {
      $("#password_error_msg").html(
        "*password should be at least 8 characters"
      );
      $("#password_error_msg").show();
      error_password = true;
    } else {
      $("#password_error_msg").hide();
    }
  }
  function check_confirm_password() {
    let password_val = $("#password").val();
    let confirm_password_val = $("#confirm_password").val();
    if (
      $("#confirm_password").val() != "" &&
      password_val != confirm_password_val
    ) {
      $("#confirm_password_error_msg").html("*password did not match");
      $("#confirm_password_error_msg").show();
      error_confirm_password = true;
    } else {
      $("#confirm_password_error_msg").hide();
    }
  }
  $("#validation_form").submit(function () {
    let error_email = false;
    let error_username = false;
    let error_password = false;
    let error_confirm_password = false;

    if (
      error_email == false &&
      error_username == false &&
      error_password == false &&
      error_confirm_password == false
    ) {
      return true;
    } else {
      return false;
    }
  });
});
