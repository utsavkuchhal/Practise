const nextIcon = '<img src = "images/Vector.svg">';
const prevIcon = '<img src = "images/Vector-1.svg">'; 

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:64,
    nav:true,
    navText: [
        prevIcon,
        nextIcon
    ],
    dots: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})