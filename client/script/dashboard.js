// import renderDorayakiContainer from "../components/dorayakiCard";


// Menampilkan username pengguna
const username = document.getElementById("username");
let usernameCookie = decodeURIComponent(document.cookie);
// let usernameCookie = document.cookie;
let x = usernameCookie.split('=');
let usernameFromCookie = x[1];
const child = `<div>${usernameFromCookie}<\div>`
username.innerHTML = child;



const maxDisplayedDorayaki = 8;

async function renderDashboardDorayaki(){
    const popularDorayakis = await fetchDatas(`dashboard.php?max=${maxDisplayedDorayaki}`)
        .then(data =>{
            return parseDataFromAJAX(data)
        })
    console.log(popularDorayakis)
    function renderPopularDorayakiDisplay(){
        const popularDorayakiDisplay = document.getElementById('popularDorayakiDisplay')
        for (let i = 0; i < maxDisplayedDorayaki && i < popularDorayakis.length; i++){
            popularDorayakiDisplay.innerHTML += popularDorayakis[i].name + '<br>'
            popularDorayakiDisplay.innerHTML += popularDorayakis[i].amount + '<br>'
            console.log(popularDorayakis[i].name)
        }
    }

    renderPopularDorayakiDisplay()
}

renderDashboardDorayaki()

// function topDorayakiDisplay(){
//     for (i = 0; i < maxDisplayedDorayaki; i++)
//     {
        
//     }
// }



