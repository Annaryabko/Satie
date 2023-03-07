'use strict';

function displayBlock() {
    var header = document.getElementById("header");
    header.classList.toggle("header-mobile");

    var headerNav = document.getElementById("header-nav");
    headerNav.classList.toggle("header-nav-mobile");
    
    var headerMenu = document.getElementById("header-menu");
    headerMenu.classList.toggle("header-menu-mobile");

    var headerSocial = document.getElementById("header-social");
    headerSocial.classList.toggle("header-social-mobile");
}

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        if (window.history) {
            window.history.pushState({}, null, this.getAttribute('href'));
        }
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


function whatWeDoDisplay() {
    var header = document.getElementById("header");
    header.classList.toggle("header-mobile");

    var headerNav = document.getElementById("header-nav");
    headerNav.classList.toggle("header-nav-mobile");

    var headerSocial = document.getElementById("header-social");
    headerSocial.classList.toggle("header-social-mobile");
}




/*
.whatWeDo-elem:hover .whatWeDo-elem-branding-picture {
    display: none;
}
*/
//function changeCoverVisibility(exceptElem, visible) {
//    document.querySelectorAll('.whatWeDo-elem').forEach(function(elem) {
//        if (elem === exceptElem) return;
//        if (visible) {
//            elem.querySelector('.whatWeDo-elem-cover').style.display = 'block';
//        } else {
//            elem.querySelector('.whatWeDo-elem-cover').style.display = 'none';
//        }
//    });
//}
//
//document.addEventListener('DOMContentLoaded', function () {
//    document.querySelectorAll('.whatWeDo-elem').forEach(function (elem) {
//        elem.addEventListener('mouseover', function () {
//            elem.querySelector('.whatWeDo-elem-picture').style.display = 'none';
//            changeCoverVisibility(elem, true);
//        });
//        elem.addEventListener('mouseout', function () {
//            elem.querySelector('.whatWeDo-elem-picture').style.display = 'block';
//            changeCoverVisibility(elem, false);
//        });
//    });
//});

