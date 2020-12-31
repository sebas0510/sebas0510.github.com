const navbar = document.getElementById('navbar');
const logo = document.getElementById('logo');
const logoimg = document.getElementById('logo-img');
const nav = document.getElementById('nav');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const nav4 = document.getElementById('nav4');
const nav5 = document.getElementById('nav5');


window.onscroll = function navbarScroll () {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.style.height = "12vh";
        navbar.style.padding = "10px"
        navbar.style.background = "white";
        navbar.style.boxShadow = "0px 2px 6px 1px rgba(0,0,0,0.6)";
        logo.style.height = "60px";
        logoimg.style.height = "60px";
        nav.style.color = "#0d4c8c";
        nav2.style.color = "#0d4c8c";
        nav3.style.color = "#0d4c8c";
        nav4.style.color = "#0d4c8c";
        nav4.addEventListener('mouseenter', e => {
            nav4.style.color = 'white';
        });
        nav4.addEventListener('mouseleave', e => {
            nav4.style.color = '#0d4c8c';
        });
        nav5.style.color = '#0d4c8c';
        
    } else {
        navbar.style.height = "20vh";
        navbar.style.padding = "0px"
        navbar.style.background = "none";
        navbar.style.boxShadow = "none";
        logo.style.height = "80px";
        logoimg.style.height = "80px";
        nav.style.color = "white";
        nav2.style.color = "white";
        nav3.style.color = "white";
        nav4.style.color = "white";
        nav4.addEventListener('mouseleave', e => {
            nav4.style.color = 'white';
        });
        nav5.style.color = 'white';
    }
}

