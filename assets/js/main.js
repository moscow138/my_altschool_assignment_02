/*=============== SHOW MENU ===============*/
const    navMenu = document.getElementById('nav-menu');
const    navToggle = document.getElementById('nav-toggle');
const    navClose = document.getElementById('nav-close');

//MENU SHOW
//validate if const exist
if(navToggle){
    
    navToggle.addEventListener('click',() => {
        
       
    navMenu.classList.add('show-menu');  
        
    });
}
//HHIDE MENU
//validate if const exist..
if(navClose){
    
    navClose.addEventListener('click',() => {
    navMenu.classList.remove('show-menu');  
        
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navlink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    //when we click on any nav__link,we remove the show menu class
    navMenu.classList.remove('show-menu');
}

navlink.forEach(n => n.addEventListener('click',linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header');
    //when the scroll greater than 50 viewport height, add blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
    
}
window.addEventListener('scroll',blurHeader);

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
//when the scroll is higher than 350 viewport,add the show-scroll class to the a tag with the scroll..
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll',scrollUp);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    
    origin:'top',
    distance:'60px',
    duration:2500,
    delay:400,
//    reset:true Animation repeat
})

sr.reveal(`.home__checkout, .home__freelancer`)

