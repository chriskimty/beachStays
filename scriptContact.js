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

// On click, open slide-out nav and remove hamburger icon
hamElement.addEventListener("click", () => {
    slideOutMenu.classList.add("slideOutNavOpen");
    hamElement.style.opacity = 0;
})

// On click, close slide-out nav and show hamburger icon
hamCloseButton.addEventListener("click", () => {
    slideOutMenu.classList.remove("slideOutNavOpen");
    hamElement.style.opacity = 100;

})

// CONTACT FORM 
/* Upon submission of form (conditional - content should not be blank): 
    - remove the contact form
    - replace with confirmation message on screen (create)
    - clear original values entered 
    - create refresh button to return to original page
*/

// Selecting Elements
const submitForm = document.querySelector(".sendForm");
const nameElement = document.querySelector("input");
const emailElement = document.querySelector("input#email");
const messageElement = document.querySelector("textarea");
const contactForm = document.querySelector(".myForm");
const refreshButton = document.querySelector(".refreshButton");

// Function for contact form 
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (contactForm !== '') {
        // Create div & h2 submission confirmation message
        let div = document.createElement('div');
        div.id = 'newText';
        div.className = 'new';
        let h2 = document.createElement('h2');
        const fullName = nameElement.value;
        // ^why doesn't this work when outside of the function?
        h2.textContent = `Thank you, ${fullName}! We will respond to your message within the next 1-2 business days.`;
        div.appendChild(h2);
        const removedForm = document.querySelector(".fillForm");
        removedForm.appendChild(div);

    // Clear values 
        nameElement.value = "";
        emailElement.value = "";
        messageElement.value = "",
            
    // Remove contact form elements
        contactForm.style.display = "none";
        
    // Refresh Button
        refreshButton.style.display = "block";
    }  
})