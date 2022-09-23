// Hide the hamburger menu on click
// - on click, show the slide-out menu
// - on click, hide the hamburger button (class navButton)

const hamElement = document.querySelector(".navButton");
const slideOutMenu = document.querySelector(".slideOutNav");
const hamCloseButton = document.querySelector(".xButton");

// ES5 version
// hamElement.addEventLister('click', function() {
//code here
// });

// ES6
hamElement.addEventListener("click", () => {
    slideOutMenu.classList.add("slideOutNavOpen")
    // what I target.object.method (add is exclusive to the classList). Classlist specifies that this is a class so you don't need the dot!
})



// X button
// - on click, hide the slide-out menu
// - on click, hide the class of hamburger menu