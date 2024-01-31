<footer>
<div class="container"><img src="assets/images/logo.png" alt="log" class="m-auto d-block bg-white"><div class="row"><div class="col-lg-12 col-md-12 col-12"><ul class="footer_links"><li><a href="index.php">Home</a></li><li><a href="aboutus.php">About us</a></li><li><a href="destination.php">Destination</a></li><li><a href="gallery.php">Gallery</a></li><li><a href="contact.php">Contact us</a></li></ul>
<div class="social"><a href=""><i class="fa fa-phone phone" aria-hidden="true"></i></a><a href=""><i class="fa fa-whatsapp whatsapp" aria-hidden="true"></i></a><a href=""><i class="fa fa-facebook facebook" aria-hidden="true"></i></a><a href=""><i class="fa fa-instagram insta" aria-hidden="true"></i></a></div>
</div></div></div>
</footer>

  

    <script>
     jQuery(window).scroll(startCounter);
function startCounter() {
    var hT = jQuery('.counter-1').offset().top,
        hH = jQuery('.counter-1').outerHeight(),
        wH = jQuery(window).height();
    if (jQuery(window).scrollTop() > hT+hH-wH) {
        jQuery(window).off("scroll", startCounter);
        jQuery('.counts').each(function () {
            var $this = jQuery(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter) + '+');
                }
            });
        });
    }
}
$(document).ready(function(){
if ($('#myBtn').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#myBtn').addClass('show');
            } else {
                $('#myBtn').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#myBtn').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

});
    </script>

    <script>
 
        $('.owl-carousel4').owlCarousel({
            // navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            loop: true,
            margin: 10,
            nav: false,
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 3
                }
            }
        })
    </script>