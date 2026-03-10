const API="https://script.google.com/macros/s/AKfycbzv7znt-Qu7hjj3F-hV8YALg2x83YX4MDitgJW727sM1eXayUJQo1Y5QHjityd6ztPl/exec"

function login(){

let username=document.getElementById("username").value
let password=document.getElementById("password").value

fetch(`${API}?action=login&username=${username}&password=${password}`)

.then(res=>res.json())

.then(data=>{

if(data.status){

localStorage.setItem("user",username)

window.location="dashboard.html"

}else{

alert("Login Failed")

}

})

}
