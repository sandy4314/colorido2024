
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".gallery-slider", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

const sr = ScrollReveal({
    distance:'80px',
    duartion:3000,
    delay:800,
    reset:true
})

sr.reveal('.para1', { 
    delay: 200, 
    origin: 'top' 
});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (window.innerWidth < 760) {
        document.getElementById("mynav").style.background = "none";
        document.querySelectorAll(".nav-data").forEach(el => el.style.color = "white");
    } else {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            document.getElementById("mynav").style.background = "white";
            document.querySelectorAll(".nav-data").forEach(el => el.style.color = "black");
        } else {
            document.getElementById("mynav").style.background = "none";
            document.querySelectorAll(".nav-data").forEach(el => el.style.color = "white");
        }
    }
}

// Trigger the function to set the initial state
scrollFunction();



sr.reveal('.home-para h1',{delay:400,origin:'bottom',easing:'ease'});
sr.reveal('.home-para button',{delay:600,origin:'bottom',easing:'ease'});
sr.reveal('.about-img',{delay:200,origin:'left',easing:'ease'});
sr.reveal('.about-head',{delay:400,origin:'right',easing:'ease'});
sr.reveal('.holiday',{delay:600,origin:'bottom',easing:'ease'});
sr.reveal('.about-para p',{delay:800,origin:'bottom',easing:'ease'});
sr.reveal('.card1',{delay:200,origin:'bottom',easing:'ease'});
sr.reveal('.card2',{delay:600,origin:'bottom',easing:'ease'});
sr.reveal('.card3',{delay:1000,origin:'bottom',easing:'ease'});

sr.reveal('.contact-info',{delay:400,origin:'left',easing:'ease'});
sr.reveal('.contact-form',{delay:400,origin:'right',easing:'ease'});
sr.reveal('.about-address',{delay:900,origin:'right',easing:'ease'});
sr.reveal('.cu1',{delay:200,origin:'bottom',easing:'ease'});
sr.reveal('.cu2',{delay:400,origin:'bottom',easing:'ease'});
sr.reveal('.cu3',{delay:600,origin:'bottom',easing:'ease'});
sr.reveal('.cu4',{delay:800,origin:'bottom',easing:'ease'});
sr.reveal('.cu5',{delay:1000,origin:'bottom',easing:'ease'});
sr.reveal('.cu6',{delay:1200,origin:'bottom',easing:'ease'});
sr.reveal('.tu1',{delay:200,origin:'bottom',easing:'ease'});
sr.reveal('.tu2',{delay:400,origin:'bottom',easing:'ease'});
sr.reveal('.tu3',{delay:600,origin:'bottom',easing:'ease'});
sr.reveal('.tu4',{delay:800,origin:'bottom',easing:'ease'});
sr.reveal('.tu5',{delay:1000,origin:'bottom',easing:'ease'});
sr.reveal('.tu6',{delay:1200,origin:'bottom',easing:'ease'});

document.getElementById("foot-button").addEventListener("click", function() {
    window.location.href = "index.html"; // Replace with the path to your new HTML page
});