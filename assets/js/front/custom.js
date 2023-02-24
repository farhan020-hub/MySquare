


// home slider
$('#homeslider').owlCarousel({
  margin:0,
  dots: true,
  video:true,
  loop:true,
  merge:true,
  nav:true,
  autoplay:true,
  autoplayTimeout: 5000,
  animateIn: 'fadeIn',
  animateOut: 'fadeOut',
  navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
  singleItem: true,
  afterAction: function(current) {
    current.find('video').get(0).play();
  },
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
// $('#homeslider').on('translate.owl.carousel', function () {
//   $('#homeslider img').addClass('sliderAnimaton');
// });


// testimonial
$('#testimonial').owlCarousel({
  loop:true,
  margin:10,
  dots: false,
  nav:true,
  navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
// testimonialSlider
$('#testimonialSlider').owlCarousel({
  stagePadding: 50,
  loop: true,
  margin: 5,
  nav: true,
  navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  ],
  mouseDrag: false,
  touchDrag: false,
  freeDrag: false,
  responsive:{
      0:{
          items: 1
      },
      600:{
          items: 1
      },
      1000:{
          items: 2
      }
  }
});


// our team
$('#ourteam').owlCarousel({
  loop:true,
  margin:10,
  dots: false,
  nav:true,
  navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})



// header resize
// $(window).scroll(function() {
//   if ($(document).scrollTop() > 100) {
//     $('.top-header #logo a img').css("width","110px");
//     $('.page-content').css("padding-top","90px");
//   } else {
//     $('.top-header #logo a img').css("width","125px");
//   }
// });

$(window).resize(function resize() {
  if ($(window).width() < 786) {
    $('.top-header #logo a img').css("width","110px");
    $('.page-content').css("padding-top","90px");
  }
  else {
    $('.top-header #logo a img').css("width","120px");
  }
});

$(window).resize(function resize() {
  if (($(window).width() > 786) && ($(window).width() < 1024)){
    $('.top-header #logo a img').css("width","125px");
    $('.page-content').css("padding-top","90px");
  }
  else {
    $('.top-header #logo a img').css("width","125px");
  }
});




// video
$( document ).ready(function() {
  var owl = $('#homeslider');
  owl.owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:false,
      items:1
  })
  if(!isMobile()){
    $('.owl-item .item').each(function(){
      var attr = $(this).attr('data-videosrc');
      if (typeof attr !== typeof undefined && attr !== false) {
        console.log('hit');
        var videosrc = $(this).attr('data-videosrc');
        $(this).prepend('<video muted autoplay loop><source src="'+videosrc+'" type="video/mp4"></video>');
      }
    });
    $('.owl-item.active video').attr('autoplay',true).attr('loop',true);
  }
});


function isMobile(width) {
	// if(width == undefined){
	// 	width = 719;
	// }
	if(window.innerWidth <= width) {
		return true;
	} else {
		return false;
	}
}




// mobile menu

// $("#menu-btn").click(function(event) {
//   alert('test');
//   if ($(".fix-header").hasClass("opened")){
//       $(".fix-header").removeClass("opened").addClass("closed");
//       // $(".full_overlay").css({"opacity":"1","visibility":"visible"});
//       $("#header").css("z-index","unset");
//       event.stopPropagation();
//   }
//   else
//       $(".fix-header").removeClass("closed").addClass("opened");
// });

$(".mobileMenuClose").click(function(event) {
  if ($("#nav-menu-container").hasClass("closed")){
      $("#nav-menu-container").removeClass("closed").addClass("opened");
  }
  else
      $("#nav-menu-container").removeClass("opened").addClass("closed");
      $(".full_overlay").css({"opacity":"0","visibility":"hidden"});
      event.stopPropagation();
});
$(".full_overlay").click(function(event) {
  if ($("#nav-menu-container").hasClass("closed")){
      $("#nav-menu-container").removeClass("closed").addClass("opened");
  }
  else
      $("#nav-menu-container").removeClass("opened").addClass("closed");
      $(".full_overlay").css({"opacity":"0","visibility":"hidden"});
      event.stopPropagation();
});



// submenu
// var coll = document.getElementsByClassName("submenu_open");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function() {
//     this.classList.toggle("menu-active");
//     var content = this.nextElementSibling;
//     if (content.style.maxHeight){
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     }
//   });
// }





// appointment modal
$(document).ready(function () {

  var navListItems = $('div.setup-panel div a'),
          allWells = $('.setup-content'),
          allNextBtn = $('.nextBtn');

  allWells.hide();

  navListItems.click(function (e) {
      e.preventDefault();
      var $target = $($(this).attr('href')),
              $item = $(this);

      if (!$item.hasClass('disabled')) {
          navListItems.removeClass('btn_blue').addClass('btn_simple');
          $item.addClass('btn_blue');
          allWells.hide();
          $target.show();
          $target.find('input:eq(0)').focus();
      }
  });

  allNextBtn.click(function(){
      var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          curr = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().children("a"),
          nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
          curInputs = curStep.find("input[type='text'],input[type='url']"),
          isValid = true;

          curr.addClass("btn_finish");
      $(".form-group").removeClass("has-error");
      for(var i=0; i<curInputs.length; i++){
          if (!curInputs[i].validity.valid){
              isValid = false;
              $(curInputs[i]).closest(".form-group").addClass("has-error");
          }
      }

      if (isValid)
          nextStepWizard.removeClass('disabled').trigger('click');
  });

  $('div.setup-panel div a.btn_blue').trigger('click');
});


// locationinfo page
$('#bologna-list a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})



// <!-- google translate js -->
// function googleTranslateElementInit() {
//   new google.translate.TranslateElement({
//     pageLanguage: 'en',
//     includedLanguages: 'es',
//     layout: google.translate.TranslateElement.InlineLayout.SIMPLE
//   }, 'google_translate_element');
// }
// function triggerHtmlEvent(element, eventName) {
//   var event;
//   if (document.createEvent) {
//     event = document.createEvent('HTMLEvents');
//     event.initEvent(eventName, true, true);
//     element.dispatchEvent(event);
//   } else {
//     event = document.createEventObject();
//     event.eventType = eventName;
//     element.fireEvent('on' + event.eventType, event);
//   }
// }

// jQuery('.lang-select').click(function() {
//   var theLang = jQuery(this).attr('data-lang');
//   jQuery('.goog-te-combo').val(theLang);

//   //alert(jQuery(this).attr('href'));
//   window.location = jQuery(this).attr('href');
//   location.reload();
// });



  // $(document).scroll(function() {
  //   var y = $(this).scrollTop();
  //   if (y > 200) {
  //     $('.disabilitybar .center_div').show();
  //   } else {
  //     $('.disabilitybar .center_div').hide();
  //   }
  // });



  function changeFontSize(target) {
    var demo = document.getElementById("body");
    var computedStyle = window.getComputedStyle
          ? getComputedStyle(demo)
          : demo.currentStyle;
    var fontSize;

    if (computedStyle) {
        fontSize = parseFloat(computedStyle && computedStyle.fontSize);

        if (target == document.getElementById("increaseFont")) {
          fontSize += 5;
        } else if (target == document.getElementById("decreaseFont")) {
          fontSize -= 5;
        }
        demo.style.fontSize = fontSize + "px";
    }
  }


$('.language_ul a').on('click', function(){
  var selected = $(this).attr("data-lang");

  // $(this).html('<ion-icon name="checkmark"></ion-icon>');

  if(selected == 'English'){
    $('.viewLang').text('Spanish');
    $('.language_ul a').find($('.fa-check')).removeClass('fa-check');
    $(this).find($('.fas')).addClass('fa-check');
  }
  else if(selected == 'Spanish'){
    $('.viewLang').text('English');
    $('.language_ul a').find($('.fa-check')).removeClass('fa-check');
    $(this).find($('.fas')).addClass('fa-check');
  }
})


$(document).on('click', '.dropdown-menu', function (e) {
  e.stopPropagation();
});



$(document).on('click', '.dropdown-menu', function (e) {
  e.stopPropagation();
});

// make it as accordion for smaller screens
if ($(window).width() < 992) {
  $('.submenu_open').click(function(){
      if($(this).next('.dropdown-menu').length){
        $(this).next('.dropdown-menu').toggle();
      }
      $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').hide();
      });
  });
}




  $(".show_hide").on("click", function () {
    var txt = $(".aboutText").is(':visible') ? 'Read More' : 'Read Less';
    $(".show_hide").text(txt);
    $('.aboutText').css('height', 'auto').slideToggle(200);
  });



$(".googleWidget").on("click", function () {
  $('.modal.left').addClass('in');
});


$(".readMoreReview").on("click", function () {
    $('.review-text').toggleClass('heightUnset');
});



// appointment modal new

  (function ($) {
      "use strict";
      function verificationForm() {
          var current_fs, next_fs, previous_fs;

          $(".next").click(function () {
              current_fs = $(this).parent();
              next_fs = $(this).parent().next();

              if ($(".locationinqre:checked").length > 0) {
                $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
                $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

                next_fs.show();
                current_fs.hide();

                $("#progressbar li .processStep .checkIcon").addClass('fa-check');
              }
              else{
                  $('.errorMsg').css('display','block');
              }
          });

          $(".previous").click(function () {
              current_fs = $(this).parent();
              previous_fs = $(this).parent().prev();
              $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
              $("#progressbar li").eq($("fieldset").index(previous_fs)).addClass("active");

              $("#progressbar li .processStep .checkIcon").removeClass('fa-check');

              previous_fs.show();
              current_fs.hide();
              $('.errorMsg').css('display','none');
          });

          $(".submit").click(function () {
              return false;
          })
      };

      verificationForm();

    })(jQuery);


  $('.moreServiceCarousel').owlCarousel({
      loop:true,
      margin:10,
      dots: true,
      nav:true,
      navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:4
          },
          1000:{
              items:4
          }
      }
  })

  $(".readMoreBtn").click(function () {
    $(this).prev('.firstSec').toggleClass('moreread');
    $(this).html(function(i, html){
        return html === '<strong><span>read more</span> <i class="fas fa-arrow-right"></i></strong>' ? '<strong><span>read less</span> <i class="fas fa-arrow-right"></i></strong>' : '<strong><span>read more</span> <i class="fas fa-arrow-right"></i></strong>';
    });
  });



$(".sliderInput1").on("input change", (e)=>{
  const sliderPos = e.target.value;
  $('.foreground-img1').css('width', `${sliderPos}%`);
  $('.slider1').css('left', `calc(${sliderPos}% - 18px)`)
});

$(".sliderInput2").on("input change", (e)=>{
  const sliderPos = e.target.value;
  $('.foreground-img2').css('width', `${sliderPos}%`);
  $('.slider2').css('left', `calc(${sliderPos}% - 18px)`)
});

$(".sliderInput3").on("input change", (e)=>{
  const sliderPos = e.target.value;
  $('.foreground-img3').css('width', `${sliderPos}%`);
  $('.slider3').css('left', `calc(${sliderPos}% - 18px)`)
});

$(".sliderInput4").on("input change", (e)=>{
  const sliderPos = e.target.value;
  $('.foreground-img4').css('width', `${sliderPos}%`);
  $('.slider4').css('left', `calc(${sliderPos}% - 18px)`)
});

$(".sliderInput5").on("input change", (e)=>{
  const sliderPos = e.target.value;
  $('.foreground-img5').css('width', `${sliderPos}%`);
  $('.slider5').css('left', `calc(${sliderPos}% - 18px)`)
});

$(".sliderInput6").on("input change", (e)=>{
  const sliderPos = e.target.value;
  $('.foreground-img6').css('width', `${sliderPos}%`);
  $('.slider6').css('left', `calc(${sliderPos}% - 18px)`)
});

$(".sliderInput7").on("input change", (e)=>{
  const sliderPos = e.target.value;
  $('.foreground-img7').css('width', `${sliderPos}%`);
  $('.slider7').css('left', `calc(${sliderPos}% - 18px)`)
});

$(".sliderInput8").on("input change", (e)=>{
  const sliderPos = e.target.value;
  $('.foreground-img8').css('width', `${sliderPos}%`);
  $('.slider8').css('left', `calc(${sliderPos}% - 18px)`)
});