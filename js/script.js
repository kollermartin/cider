const navHome = document.querySelector('.nav--home');
const navAbout = document.querySelector('.nav--about');
const navStory = document.querySelector('.nav--story');
const navContact = document.querySelector('.nav--contact');
const header = document.querySelector('.header');

const homeEl = document.querySelector('.landscape');
const aboutEl = document.querySelector('.about');
const storyEl = document.querySelector('.story');
const contactEl = document.querySelector('.contact');

const getOffset = function(el){
    const rect = el.getBoundingClientRect();
    const headerProps = header.getBoundingClientRect();
    return {
        top: rect.top + window.scrollY - headerProps.height,
    };
}

const scrollToElement = function(el) {
    const position = getOffset(el);
    window.scrollTo({
        top: position.top,
        behavior: "smooth"
    })
}

navHome.addEventListener("click",function(){
    scrollToElement(homeEl);
});

navAbout.addEventListener("click",function(){
    scrollToElement(aboutEl);
});

navStory.addEventListener("click",function(){
    scrollToElement(storyEl);
});

navContact.addEventListener("click",function(){
    scrollToElement(contactEl);
});

function pageRedirect() {
    window.location.replace("https://kollermartin.github.io/cider/bottle.html");
} 

