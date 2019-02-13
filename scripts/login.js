
function alertOnClick(){
    window.location.href="../index.html"
}

function redirectOnRegister(){
    window.location.href="../pages/register.html"
}

const facebook = document.getElementById('facebook');
const loginBtn = document.getElementById("login");
const username = document.getElementById("username");
const password = document.getElementById("password")
function getSiteName (sitename) {
    alert ('You have clicked ' + sitename);
}

facebook.addEventListener('click', () => getSiteName("facebook"))
twitter.addEventListener('click', () => getSiteName("twitter"))
google.addEventListener('click', () => getSiteName("google"))

loginBtn.addEventListener("click" , function(){
    console.log(users)
if (username.value === "") {
    alert ('please enter username'); 
    return;
}
if (password.value === "") {
    alert ('please enter password');
    return;
}
    alert ('username = ' + username.value + 'password = ' + password.value)
}) 
  

    



