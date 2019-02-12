
function alertOnClick(){
    window.location.href="file:///C:/Users/Mihra_Minja/Desktop/vje%C5%BEba/JS-Tutorial/index.html#"
}
const facebook = document.getElementById('facebook');
const loginBtn = document.getElementById("login");
const username = document.getElementById("username");
const password = document.getElementById("password")
function getSiteName (sitename) {
    alert ('You have clicked ' + sitename);
}

facebook.addEventListener('click', () => getSiteName("facebook"))

loginBtn.addEventListener("click" , function(){
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
  

    



