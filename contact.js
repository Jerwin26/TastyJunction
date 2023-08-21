/* function Validation() {
    let name = document.getElementById("contactbox_name").value;
    let email = document.getElementById("email_contactbox").value;
    let contactnumber = document.getElementById("phn_contactbox").value;
    let textarea = document.getElementById("contactbox_textarea").value;

    if (name === "" || email === "" || contactnumber === "" || textarea === "") {
        alert("Fill the feedback form")
    }
    else{
        alert("Feedback send Sucessfully")
    }

}

const contact_btn = document.getElementById("contactbox_btn");
contact_btn.addEventListener("click", Validation); */

function validateUsername() {
    let name = document.getElementById("contactbox_name");
    let email = document.getElementById("email_contactbox");
    let contactNumber = document.getElementById("phn_contactbox"); 
    let error = document.getElementById("nameError");
    let emailError = document.getElementById("emailerror"); 
    let contactError = document.getElementById("contacterror"); 

    let username = name.value.trim(); 
    let userEmail = email.value.trim();
    let userContact = contactNumber.value.trim(); 
    if (username === "") {
        error.textContent = "Enter your Name"; 
    } else {
        error.textContent = "";
    }

    if (userEmail === "") {
        emailError.textContent = "Enter your Email"; 
    } else {
        emailError.textContent = "";
    }

    if (userContact === "") {
        contactError.textContent = "Enter your Contact Number"; 
    } else {
        contactError.textContent = "";
    }
}

let contactBtn = document.getElementById("contactbox_btn");
contactBtn.addEventListener("click", validateUsername);

