// CHANGE NAV BAR COLOR ON SCROLL
console.clear()
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
('window-scroll',window.scrollY > 0)
})  

// HIDE/DISPLAY FAQS SECTION

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => { 
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
    });
}) ;


// NavBar open/hide on Tablets

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display ='none';
});

// close Nav 
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener('click', closeNav)
