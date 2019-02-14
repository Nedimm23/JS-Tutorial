
function alertOnClick(){
    window.location.href="../index.html"
}

function actionOnClick(){
    window.location.href="./login.html"
}


const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repeatpassword = document.getElementById("repeatpassword");
const registerBtn = document.getElementById("register");

registerBtn.addEventListener("click" , function(){
    console.log(users)
    const passwordLength = password.value.length;
    const repeatPasswordLength = repeatpassword.value.length;  
    if (username.value === "") {
        alert ('please enter username'); 
        return;
    }
    if (email.value === "") {
        alert ('please enter email');
        return;
    }
    if (password.value === "") {
        alert ('please enter password');
        return;
        }
    if (passwordLength <= 5) {
        alert ('password must be at least six caracters long')
        return
        }
       
    if (repeatpassword.value === "") {
        alert ('please repeat password');
        return;
            
    } 
    if (repeatPasswordLength <= 5) {
        alert ('your repeat password must be at least six caracters');
        return;
    }
    if (password.value !== repeatpassword.value) {
        alert ('passwords do not match')
        return;
    }

    
    const newUser = {
        username: username.value,
        email: email.value,
        password: password.value
    
    }
    users.push(newUser);      
    }) 

     
      