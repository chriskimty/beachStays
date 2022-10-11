// HAMBURGER MENU
/* On the hamburger/nav button
    - on click, show the slide-out menu
    - on click, hide the hamburger button (class navButton) */

/*  On the X button on the slide-out nav
    - on click, hide the slide-out menu
    - on click, hide the class of hamburger menu */

// Selecting Elements
const hamElement = document.querySelector(".navButton");
const slideOutMenu = document.querySelector(".slideOutNav");
const hamCloseButton = document.querySelector(".xButton");
let hamIsOpen = false;

// On click, open slide-out nav and remove hamburger icon
hamElement.addEventListener("click", () => {
  slideOutMenu.classList.add("slideOutNavOpen");
  hamElement.style.opacity = 0;

  /* personal note: 
  what I target.object.method (add is exclusive to the classList). Classlist specifies that this is a class so you don't need the dot! */
});

// On click, close slide-out nav and show hamburger icon
hamCloseButton.addEventListener("click", () => {
  slideOutMenu.classList.remove("slideOutNavOpen");
  hamElement.style.opacity = 100;
});


// IMAGE CAROUSEL 
//  <!-- Citation: referenced https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/ to achieve image carousel -->

// SELECTING ELEMENTS
// Select all the slides (.slide)
const slideShow = document.querySelectorAll(".slide");
// select next slide button
const nextSlide = document.querySelector(".nextImage");
// select previous slide button
const previousSlide = document.querySelector(".previousImage");

// loop through images and set each translateX property to index * 100% 
slideShow.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

// current slide counter
let currentSlide = 0;
// maximum number of slides
let maxSlide = slideShow.length -1;

// NEXTSLIDE: add event listener and navigation function
nextSlide.addEventListener("click", function () {
    // check if current slide is the last one and reset current slide

    if (currentSlide === maxSlide) {
        currentSlide = 0;
    } else {
       currentSlide++; 
    }
     
  slideShow.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
});

// PREVIOUS SLIDE: add event listener and navigation function
previousSlide.addEventListener("click", function () {
    // check if current slide is the first one and reset current slide

    if (currentSlide === 0) {
        currentSlide = maxSlide;
    } else {
       currentSlide--; 
    }
     
  slideShow.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
});

