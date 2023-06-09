function validatePassword(){
    
    var InputValue = document.getElementById("password").value;
   var regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
     
     if(!regex.test(InputValue)) {
         alert('Error! Please Enter a Valid Password')
     }
     else{
        alert('Password is correct')

 }
}
console.log(InputValue);