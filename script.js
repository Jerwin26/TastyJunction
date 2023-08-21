function register () {
    let firstName = document.getElementById("fname").value
    let lasttName = document.getElementById("lname").value
    let dob = document.getElementById("DOB").value
    let age = document.getElementById("age").value
    let gender = ""

    if(document.getElementById("male").checked) gender = "Male"
    else if(document.getElementById("male").checked) gender = "Female"
    else gender = "Other"

    let email = document.getElementById("email").value
    let contact = document.getElementById("phno").value
    let address = document.getElementById("add").value
    let state = document.getElementById("state").value
    let city = document.getElementById("city").value

    let userName = document.getElementById("uname").value
    let password = document.getElementById("pass").value
    let cpassword = document.getElementById("cpass").value


    let nameError =document.getElementById("fnameerror")
    let lasttNameError =document.getElementById("lnameerror")
    let doberror =document.getElementById("doberror")
    let unameerror =document.getElementById("unameerror")
    let passerror =document.getElementById("passerror")
    let cpasserror =document.getElementById("cpasserror")
    let emailerror = document.getElementById("emailerror")
    let contacterror =document.getElementById("contacterror")

    nameError.textContent = ""
    lasttNameError.textContent = ""
    doberror.textContent = ""
    unameerror.textContent =""
    passerror.textContent =""
    cpasserror.textContent =""
    emailerror.textContent =""
    contacterror.textContent=""


    if (firstName === "") {
        nameError.textContent = "Enter your First Name"
    }

    if (lasttName === "") {
        lasttNameError.textContent = "Enter your Last Name"
    }

    if (dob === "") {
        doberror.textContent = "Enter Date of Birth"
    }

    if (userName=== ""){
        unameerror.textContent ="Invalid username"
    }
    
    if (password=== ""){
        passerror.textContent ="Invalid password"
    }    
    if (cpassword=== ""){
        cpasserror.textContent ="Mismatch Password"
    }    
    
    if (email=== ""){
        emailerror.textContent =" Enter your mail id"
    }
    if (contact=== ""){
        contacterror.textContent =" Enter Valid contact number"
    }
    
    

    

    //validation

    //empty validation

    /*if(
        firstName === "" ||
        lasttName === "" ||
        dob === "" ||
        age === "" ||
        gender === "" ||
        email === "" ||
        contact === "" ||
        address === "" ||
        state === "Select State" ||
        city === "Select City" ||
        userName === "" ||
        password === "" ||
        cPassword === ""
    )
    {
        alert("All field is required")
        return
    }


    //age validation
    if(isNaN(parseInt(age)))
    {
        alert("Age Must Be Number")
        return
    } 

    // password match validation
    if(password !== cPassword) {
        alert("Enter the correct Password")
        return
    }

    
    alert("Registeration Successfull")*/

}



const regBtn = document.getElementById("btn")

regBtn.addEventListener("click", register)


// state dropdown

const state = document.getElementById("state");
const city = document.getElementById("city");

const tn =["Chennai", "Coimbatore", "Salem", "Maduari","kanyakumari"];
const kl =["kochi", "kozhicode", "kannu","Thiruvanathapuram","Kottayam"];
const up =["Lucknow","Ghazib","Kanpur","Agra","Varanasi"]
const mp =["Indore","Bhopal","Gwalior","Jabalpur","Ujjain"]
const ap =["Kurnool","Vijayawada","Visakhapatnam","Tirupati","Rajahmundry"]

function dropdown() {
    city.innerHTML = "";

    if (state.value == "TN") {
        for (let i = 0; i < tn.length; i++) {
            var newOption = document.createElement("option");

            newOption.value = tn[i]; 
            newOption.textContent = tn[i]; 

            city.appendChild(newOption);
        }
    } else if (state.value == "KL") {
        for (let i = 0; i < kl.length; i++) {
            var newOption = document.createElement("option");

            newOption.value = kl[i];
            newOption.textContent = kl[i] 

            city.appendChild(newOption);
        }

    }else if (state.value =="UP"){
        for (let i = 0; i < up.length; i++) {
            var newOption = document.createElement("option");

            newOption.value = up[i]; 
            newOption.textContent = up[i] 

            city.appendChild(newOption);
        }
    }else if(state.value =="MP"){
            for (let i = 0; i < mp.length; i++) {
                var newOption = document.createElement("option");
    
                newOption.value = mp[i]; 
                newOption.textContent = mp[i] 
    
                city.appendChild(newOption);
            }
    }else if(state.value=="AP"){
            for (let i = 0; i < ap.length; i++) {
                var newOption = document.createElement("option");
    
                newOption.value = ap[i]; 
                newOption.textContent = ap[i]
    
                city.appendChild(newOption);
            }
    }
    else{
        var newOption = document.createElement("option");

        newOption.value = "Select City"; 
        newOption.textContent = "Select City"

        city.appendChild(newOption);

    }
}

state.addEventListener("change", dropdown);




