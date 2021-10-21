var formValidity = true;

function validateAge()
{
    var errorAge = document.getElementById("errorAge");
    var age = document.getElementById('age').value;

    try {
        if(age === "") {
            return true;
          }
          age = parseInt(age, 10);
          if (isNaN(age) || age < 19 || age > 100) {         
              throw "Age must be above 18 to register";                        
          }else{
            errorAge.style.display = "none";
            errorAge.innerHTML = "";
          }             
    }
    catch (msg){
        errorAge.style.display = "block";
        errorAge.innerHTML = msg; 
    }
}

function validatePostalCode() {

    var postalCode = document.getElementById("postalcode").value;
    var regExp =(/([ABCEGHJKLMNPRSTVXY]\d)([ABCEGHJKLMNPRSTVWXYZ]\d){2}/i);
    var errorPostalCode = document.getElementById("errorPost");
    var postalValidity = true;
    var validCode = regExp .test(postalCode);
try{
    if(postalCode === "") {
        return true;
      }

    if(validCode === true )
    {
        postalValidity = true;
        errorPostalCode.style.display = "none";
        errorPostalCode.innerHTML="";
    } else {
        throw "Please enter valid postal code.";
    }    
}
catch(msg){
    errorPostalCode.style.display = "block";
    errorPostalCode.innerHTML = msg; 
}
}   

function validateEmail(email) {
    var email = document.getElementById("email");
    var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    try{
    if(email === "") {
        return true;
      }

    if (mailformat.test(email.value)) {
         return true;
    } else{
        throw "Please enter valid email address.";
    }
    }
    catch(msg) {
        errorEmail.style.display = "block";
        errorEmail.innerHTML = msg;
    }
}
function validateProvince() {
    var province = document.getElementById("province");
    var errorProvince = document.getElementById("errorProvince");

    var cities = ['QC', 'ON', 'MN', 'SK', 'AB', 'BC']
    try{
        if(province === cities){
            return true;
        }
        else{
            throw "Please enter valid province.";
        }
    }
    catch(msg){
        errorProvince.style.display="block";
        errorProvince.innerHTML = msg;
    }
}
   
function validatePassword() {
    var pass1Element = document.getElementById("password");
   var pass2Element = document.getElementById("confirmpwd");
   var errorPassword = document.getElementById("errorPassword");
   var passwordMismatch = false;

   try {
    var invColor = "rgb(255,233,233)";
    pass1Element.style.background = "";
    pass2Element.style.background = "";
    errorPassword.style.display = "none";
    if (( pass1Element.value !== "" && pass2Element.value !== "")) {
       if (pass1Element.value !== pass2Element.value) {
          // passwords don't match
          passwordMismatch = true;
          throw "Passwords entered do not match; please reenter.";
       }
    }
    }
 catch(msg) {
    errorPassword.innerHTML = msg;
    errorPassword.style.display = "block";
    if (passwordMismatch) {
       pass1Element.style.background = invColor;
       pass2Element.style.background = invColor;
    } else {
       if (pass1Element.value === "") {
          pass1Element.style.background = invColor;
       }
       if (pass2Element.value === "") {
          pass2Element.style.background = invColor;
       }
    }
    formValidity = false;
 }

 var passwordFormat = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/; 
 try{    
    if (passwordFormat.test(pass1Element.value && pass2Element.value )) {
         return true;
    } else{
        throw "Please enter strong password.";
    }
    }
    catch(msg) {
        errorPassword.style.display = "block";
        errorPassword.innerHTML = msg;
    }
}

function validateRequired() {
    var inputElements = document.querySelectorAll("#personalinfo input");
    var errorDiv = document.getElementById("errorText");
    var elementCount = inputElements.length;
    var requiredValidity = true;
    var currentElement;
    try {
       for (var i = 0; i < elementCount; i++) { 
          // validate all input elements in fieldset
          currentElement = inputElements[i];
          if (currentElement.value === "") {
             currentElement.style.background = "rgb(255,233,233)";
             requiredValidity = false;
          } else {
             currentElement.style.background = "white";
          }
       }
       if (requiredValidity === false) { 
          throw "Please fix the indicated problems and then resubmit your information";
       } 
       errorDiv.style.display = "none";
       errorDiv.innerHTML = "";
    }
    catch(msg) {
       errorDiv.style.display = "block";
       errorDiv.innerHTML = msg; 
       formValidity = false;
    }
 }

 function validateForm(evt) {
    if (evt.preventDefault) {
       evt.preventDefault(); // prevent form from submitting
    } else {
       evt.returnValue = false; // prevent form from submitting in IE8
    }
    formValidity = true; // reset value for revalidation
    validateRequired();
    validatePostalCode();
    validateAge();
    validateEmail();
    validateProvince();
    validatePassword() ;

    if (formValidity === true) {
       document.getElementsByTagName("form")[0].submit();
       alert ("Thanks for registering with our website, your customer record was created successfully.")
    }
 } 
 
function createEventListeners()
{
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener){
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }

    var reset = document.getElementById("resetpage");
    if (reset.addEventListener) {
        reset.addEventListener("unload", validateForm);
    }
    else if(reset.attachEvent) {
        reset.attachEvent("onunload", validateForm)
    }
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
 } else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
 }
