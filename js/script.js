$(document).ready(function(){
  alert();
$("header").append('<nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="nav-bar" data-spy="affix"data-offset-top="50"><div class="container"><a class="navbar-brand" href="index.html"><img src="assets/images/logo.png" width="120px"></a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav ml-auto"><li class="nav-item"><a class="nav-link link-hvr" href="index.php">Home</a></li><li class="nav-item dropdown "><a class="nav-link  link-hvr " data-target="aboutus.php" href="aboutus.php" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">About Us</a><ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"><li class="dropdown-submenu "><a class="dropdown-item" href="terms-and-conditions.php">Terms & Conditions</a></li></ul></li><li class="nav-item dropdown "><a class="nav-link  link-hvr " data-target="destination.php" href="destination.php" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">Destination</a><ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"><li class="dropdown-submenu "><a class="dropdown-item dropdown-toggle" href="">Karnataka</a><ul class="dropdown-menu" id="prgrm"><li class="dropdown-submenu"><a class="dropdown-item " href="kumara-parvatha.php"> Kumara Parvatha Trek</a></li><li class="dropdown-submenu"> <a class="dropdown-item " href="kodachadri-trek.php">Kodachadri Trek </a></li><li class="dropdown-submenu"><a class="dropdown-item " href="kudaremukh-trek.php">Kudremukh Trek</a></li><li class="dropdown-submenu"> <a class="dropdown-item " href="chikmangalur-camping.php">Chikmangalur Camping</a></li><li class="dropdown-submenu"> <a class="dropdown-item " href="gokarna-trek.php">Gokarna Trek</a></li><li class="dropdown-submenu"> <a class="dropdown-item " href="tadiandamol-trek.php">Tadiandamol Trek</a></li><li class="dropdown-submenu"> <a class="dropdown-item " href="gandikota-camping-and-adventure-activities-blr-to-blr.php">Gandikota Adventure(Bangalore – Banagalore)</a></li><li class="dropdown-submenu"> <a class="dropdown-item " href="antargange-trek.php">Anthargange Trek</a></li><li class="dropdown-submenu"> <a class="dropdown-item " href="makalidurga-trek.php">Makalidurga Trek</a></li><li class="dropdown-submenu"> <a class="dropdown-item " href="kabbaladurga-trek.php">Kabbaladurga Trek</a></li><li class="dropdown-submenu"> <a class="dropdown-item " href="savandurga-trek.php">Savandurga Trek</a></li><li class="dropdown-submenu"> <a class="dropdown-item " href="skandagiri-sunrise-trek.php">Skandagiri Sunrise Trek</a></li><li class="dropdown-submenu"> <a class="dropdown-item " href="uttari-betta-trek.php">Uttari Betta Trek</a></li></ul></li><li class="dropdown-submenu "><a class="dropdown-item dropdown-toggle" href="">Andra Pradesh</a><ul class="dropdown-menu" id="prgrm"><li class="dropdown-submenu"><a class="dropdown-item " href="gandikota-adventure.php"> Gandikota Adventure</a></li></ul></li><li class="dropdown-submenu "><a class="dropdown-item dropdown-toggle" href="">Goa</a><ul class="dropdown-menu" id="prgrm"><li class="dropdown-submenu"><a class="dropdown-item " href="dudhsagar-trek.php">Dudhsagar Trek</a></li></ul></li><li class="dropdown-submenu "><a class="dropdown-item dropdown-toggle" href="">Maharastra</a><ul class="dropdown-menu" id="prgrm"><li class="dropdown-submenu"><a class="dropdown-item " href="kalsubai-monsoon-trek.php">Kalsubai Trek</a></li><li class="dropdown-submenu"><a class="dropdown-item " href="rajmachi-trek.php">Rajmachi Trek</a></li></ul></li><li class="dropdown-submenu "><a class="dropdown-item dropdown-toggle" href="">Jammu & Kashmir</a><ul class="dropdown-menu" id="prgrm"><li class="dropdown-submenu"><a class="dropdown-item " href="great-lakes-of-kashmir.php">Great Lakes of Kashmir</a></li><li class="dropdown-submenu"><a class="dropdown-item " href="tarsar-marsar-trek.php">Tarmar Marsar Trek</a></li><li class="dropdown-submenu"><a class="dropdown-item " href="markha-valley-trek.php">Markha Valley Trek</a></li><li class="dropdown-submenu"><a class="dropdown-item " href="kang-yatze-ii.php">Kang Yatze II</a></li></ul></li><li class="dropdown-submenu "><a class="dropdown-item dropdown-toggle" href="">Utharakhand</a><ul class="dropdown-menu" id="prgrm"><li class="dropdown-submenu"><a class="dropdown-item" href="pangarchulla-peak-trek.php">Pangarchulla Peak Trekking</a></li></ul></li><li class="dropdown-submenu "><a class="dropdown-item dropdown-toggle" href="">Himachal Pradesh</a><ul class="dropdown-menu" id="prgrm"><li class="dropdown-submenu"><a class="dropdown-item " href="beas-kund-trek.php">Beas Kund</a></li><li class="dropdown-submenu"><a class="dropdown-item " href="bhrigu-lake-trek.php">Brighu Lake Trek</a></li><li class="dropdown-submenu"><a class="dropdown-item " href="hampta-pass-trek.php">Hampta Pass Trek</a></li></ul></li><li class="dropdown-submenu "><a class="dropdown-item" href="nepal-trek.php">Nepal</a></li><li class="dropdown-submenu "><a class="dropdown-item" href="sikkim-trek.php">Sikkim</a></li></ul></li><li class="nav-item"><a class="nav-link link-hvr" href="gallery.php">Gallery</a></li><li class="nav-item"><a class="nav-link link-hvr" href="contact.php">Contact us</a></li></ul> <a href="" class="btn btn-success my-2 my-sm-0 ml-5">Join Us</a></div></div></nav>');
});
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