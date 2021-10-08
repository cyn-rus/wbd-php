// import renderDorayakiContainer from "../components/dorayakiCard";

const maxDisplayedDorayaki = 8;


const username = document.getElementById("username");
let usernameCookie = decodeURIComponent(document.cookie);
// let usernameCookie = document.cookie;
let x = usernameCookie.split('=');
let usernameFromCookie = x[1];
const child = `<div>${usernameFromCookie}<\div>`
username.innerHTML = child;


function topDorayakiDisplay(){
    for (i = 0; i < maxDisplayedDorayaki; i++)
    {
        
    }
}



