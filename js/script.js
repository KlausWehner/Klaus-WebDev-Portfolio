// email validation for online contact-form
(function() {
    let form = document.querySelector("#contact-form");
    let emailInput = document.querySelector("#contact-email");

    function showErrorMessage(input, message) {
        let container = input.parentElement; // the .input-wrapper or ?, added to html

        //remove an existing error message (otherwise they would add)
        let error = container.querySelector(".error-message");
        if (error) {
            container.removeChild(error);
        }

        // adding the error message if the message is not empty
        if (message) {
            let error = document.createElement("div");
            error.classList.add("error-message"); // added here (no dot) -styled in css to be red
            error.innerText = message;
            container.appendChild(error);
        }
    }

    function validateEmail() {
        let value = emailInput.value;

        if(!value) {
            showErrorMessage(emailInput, "Please enter your email address in order to post your message.");
            return false;
        }


        if (value.indexOf("@") === -1) {
            showErrorMessage(emailInput, "Email address must contain an '@' symbol.");
            return false;
        }

        showErrorMessage(emailInput, null);
        return true;
    }    

    function validateForm() {
        let isValidEmail = validateEmail();
        return isValidEmail;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
         if (validateForm()) {
            alert("Your message was sent and disappeared in cyber space!");
            }   
    });

    emailInput.addEventListener("input", validateEmail);

        


    








})();    
