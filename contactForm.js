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
        h2.textContent = `Thank you, ${fullName}. Please allow 1-2 business days for our response, or your message to be approved!`;
        // How do I make two different messages (one for blog and one for contact)? Or do I need to create two separate functions and use different classes for each? 
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