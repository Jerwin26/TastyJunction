function validate() {
  let name = document.getElementById("loginname");
  let pass = document.getElementById("loginpass"); 
  let nameError = document.getElementById("error");
  let passError = document.getElementById("loginpasserror"); 

  let username = name.value.trim(); 
  let userPass = pass.value.trim();
  if (username === "") {
      error.textContent = "Enter your UserName"; 
  } else {
      error.textContent = "";
  }

  if (userPass === "") {
      passError.textContent = "Enter your Password"; 
  } else {
      passError.textContent = "";
  }
}



let loginBtn = document.getElementById("loginbtn");
loginBtn.addEventListener("click", validate);