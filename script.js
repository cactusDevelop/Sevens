const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchtoggle"),
      sidebarOpen = document.querySelector(".sidebar-open"),
      sidebarClose = document.querySelector(".sidebar-close"),
      imgGold = document.querySelector('.gold'),
      loadingText = document.querySelector('.loading-text'),
      videoHero = document.querySelector('.hero-video'),
      alex = document.querySelector('.alex');

let getMode = localStorage.getItem("mode");

// DARK MODE
if(getMode){
    if(getMode === "dark-mode"){
        body.classList.add("dark");
    }
}else{
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        body.classList.add("dark");
    }
    console.log("getMode false");
}
modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    if(!body.classList.contains("dark")){
        localStorage.setItem("mode", "light-mode");
    }else{
        localStorage.setItem("mode", "dark-mode");
    }
})

// SEARCH BUTTON
searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active");
})

// MENU BUTTON
sidebarOpen.addEventListener("click", () =>{
    nav.classList.add("active");
})
body.addEventListener("click", e =>{
    let clickedElm = e.target;
    if(!clickedElm.classList.contains("sidebar-open") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
})

// NAVMENU ANIM
window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

// LOADING
imgGold.addEventListener('load', () => {
    loadingText.style.opacity = '0';
    loadingText.style.display = 'none';
    imgGold.style.opacity = '1';
});
videoHero.addEventListener('canplay', () => {
    videoHero.style.display = 'block';
    videoHero.style.opacity = '1';
});


// TEST AREA
document.addEventListener("DOMContentLoaded", function () {
    const sparkle = document.querySelector(".sparkle");

    imgGold.addEventListener("click", function(){
        sparkle.style.display = "block";
        sparkle.addEventListener("animationend", function () {
            sparkle.style.display = "none";
        }, { once: true });
    });
});
