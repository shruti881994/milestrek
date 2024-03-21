  (function($){
  'use strict';
  $(document).ready(function(){
    $('.active-slider').owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      autoplay: false,
      dots: true,
  //icon for nav
      navText: ['<i class="next"></i>', '<i class="prev"></i>']
    });
  });
})(jQuery);

 // Binding of init has to be before intialization!
$('.slick-slider').on('init', (event, slick, currentSlide) => {
  let slideIndex = slick.currentSlide;
  let slidesLength = slick.slideCount;
})

// Initialise.
$('.slick-slider').slick({
  slidesToShow: 3,
  dots: true,
  //centerMode: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
})

let slideIndex = $('.slick-slide:not(.slick-cloned)').length
  $('.add-slide').on('click', () => {
    slideIndex++
    $('.slick-slider').slick('slickAdd','<li><h3>' + slideIndex + '</h3></li>')
    $('.slick-slider').slick('slickGoTo', 'slickCurrentSlide' + 1)
  })

  $('.remove-slide').on('click', () => {
    $('.slick-slider').slick('slickRemove', slideIndex - 1)
      if (slideIndex !== 0) {
        slideIndex--
      }
  })

  $(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 250) {
            $(".header-top, .header-transparent").css('display', 'none');
            $(".main_div").addClass("fixed_onscroll");
            $(".banner-area.treking").addClass("fixed_bnr");
            $(".baner_dtls h1").addClass("fixedh1");
            $(".duration").addClass("flex");
            $(".coupon-code-badge").css('display', 'none');
            $(".scrollable").css('margin-top', '10px');
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".main_div").removeClass("fixed_onscroll");
            $(".header-top, .header-transparent").css('display', 'block');
            $(".banner-area.treking").removeClass("fixed_bnr");
            $(".baner_dtls h1").removeClass("fixedh1");
            $(".duration").removeClass("flex");
            $(".coupon-code-badge").css('display', 'block');
            $(".scrollable").css('margin-top', '0px');
            
        }
    });

// scroll hide icons
    $(document).ready(function() {
      $("#prev").css("display", "none");
  $("#tripnav").scroll(function() {
    if ($("#tripnav").scrollLeft() == 0) {
      $("#next").css("display", "none");
    }

    if ($("#tripnav").scrollLeft() > 0) {
      $("#next").css("display", "block");
    }
    var fullWidth = $('#tripnav')[0].scrollWidth - $('#tripnav')[0].offsetWidth - 1;

    if ($("#tripnav").scrollLeft() >= fullWidth) {
      $("#prev").css("display", "block");
    }

    if ($("#tripnav").scrollLeft() == fullWidth) {
      $("#prev").css("display", "none");
    }

  });
});

// sliding horizontal 
      const boxslider = document.getElementById('tripnav');
      
document.getElementById("next").onclick = () => {
  boxslider.scroll({
         left: boxslider.scrollLeft + 100,
         behavior: 'smooth'
  });

}
     
document.getElementById("prev").onclick = () => {
  boxslider.scroll({
         left: boxslider.scrollLeft - 100,
         behavior: 'smooth'
  });

}

// $(function() {
//     $('a.page-scroll').bind('click', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//         scrollTop: ($('[href="' + target + '"]').offset().top - 250)
//     }, 1200, 'easeInOutExpo');
//         event.preventDefault();
//     });
// });

// onscroll link active script
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    // $('a[href^="#"]').on('click', function (e) {
    //     e.preventDefault();
    //     $(document).off("scroll");
        
    //     $('a').each(function () {
    //         $(this).removeClass('qlinks');
    //     })
    //     $(this).addClass('qlinks');
      
    //     var target = this.hash,
    //         menu = target;
    //     $target = $(target);
    //     $('html, body').stop().animate({
    //         'scrollTop': $target.offset().top+2
    //     }, 500, 'swing', function () {
    //         window.location.hash = target;
    //         $(document).on("scroll", onScroll);
    //     });
    // });
});

function onScroll(event){
    var scrollpos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var activlink = $(this);
        var reflink = $(activlink.attr("href"));
        if (reflink.position().top <= scrollpos && reflink.position().top + reflink.height() > scrollpos) {
            $('#menu-center ul li a').removeClass("qlinks");
            activlink.addClass("qlinks");
        }
        else{
            activlink.removeClass("qlinks");
        }
    });
}

    // $(document).ready(() => {
    //   $('#link1').click(function (e) {
    //     $(document).scrollTop(-150);
    //     // e.target.href = '#${e.target.dataset.link}'

    //   });
    //   $('#link2').click(function (e) {
    //     e.target.href = '#${e.target.dataset.link}'
    //   });
    //   $('#link3').click(function (e) {
    //     e.target.href = '#${e.target.dataset.link}'
    //   });
    //   $('#link4').click(function (e) {
    //     e.target.href = '#${e.target.dataset.link}'
    //   });
    // })



// gallery js
     jQuery("#animated-thumbnails-gallery")
  .justifiedGallery({
    captions: true,
    thumbnail: true,
    
  })
  .on("jg.complete", function () {
    window.lightGallery(
      document.getElementById("animated-thumbnails-gallery"),
      {
        autoplayFirstVideo: true,
        pager: false,
        plugins: [lgThumbnail],
        mobileSettings: {
          controls: false,
          showCloseIcon: true,
          download: false,
          rotate: false
        }
      }
    );
  });


 // $("#link1").click(function() {
 //        $('html,body,header').animate({
 //            scrollTop: $("#overview").offset().top -290},
 //            5);

 //    });
 //    $("#link2").click(function() {
 //        $('html,body').animate({
 //            scrollTop: $("#dates").offset().top -470},
 //            5);
 //    });
 //    $("#link3").click(function() {
 //        $('html,body').animate({
 //            scrollTop: $("#offers").offset().top -540},
 //            5);
 //    });
 //    $("#link4").click(function() {
 //        $('html,body').animate({
 //            scrollTop: $("#inclusions").offset().top -630},
 //            5);
 //    });
 //    $("#link5").click(function() {
 //        $('html,body').animate({
 //            scrollTop: $("#highlights").offset().top -690},
 //            5);
 //    });
 //    $("#link6").click(function() {
 //        $('html,body').animate({
 //            scrollTop: $("#faq").offset().top -980},
 //            5);
 //    });
 //    $("#link7").click(function() {
 //        $('html,body').animate({
 //            scrollTop: $("#reviews").offset().top -470},
 //            5);
 //    });


});


 

