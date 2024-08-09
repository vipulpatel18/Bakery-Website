const bars = document.querySelector("#bars");
const bar = document.querySelector("#bars i");
const nave_menu = document.querySelector(".nav-menu");
const mobile_overlay = document.querySelector(".mobile-overlay")

bars.addEventListener("click", function () {
    nave_menu.classList.add("nav-menu-open")
    bar.classList.replace("fa-bars", "fa-xmark")
    mobile_overlay.classList.add("mobile-overlay-open")
    
})

mobile_overlay.addEventListener("click", function () {
    nave_menu.classList.remove("nav-menu-open")
    bar.classList.replace("fa-xmark", "fa-bars");
    mobile_overlay.classList.remove("mobile-overlay-open")
})

document.addEventListener("scroll" , function(){
    nave_menu.classList.remove("nav-menu-open")
    bar.classList.replace("fa-xmark", "fa-bars");
    mobile_overlay.classList.remove("mobile-overlay-open")
})




const header_overlay = document.querySelector(".header-overlay");
const nav = document.querySelector("nav");
document.addEventListener("scroll", function (e) {
    if (window.scrollY > 47) {
        header_overlay.classList.add("header-overlay-open");
        nav.classList.add("nav-open")
    } else {
        header_overlay.classList.remove("header-overlay-open");
        nav.classList.remove("nav-open")
    }

});
$('.review-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

let dots = document.querySelectorAll(".slick-dots li");
dots[0].classList.add("dots-open")
dots.forEach(function (dot) {
    dot.addEventListener("click", function () {
        dots.forEach(function (d) {
            d.classList.remove("dots-open");
        });
        dot.classList.add("dots-open");
    });
});
