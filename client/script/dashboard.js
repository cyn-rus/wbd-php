// Menampilkan username pengguna
const username = document.getElementById("username")
const cookie = decodeURIComponent(document.cookie);
// const usernameCookie = (cookie.split(';'))[0]

// let usernameCookie = document.cookie;
// let x = usernameCookie.split('=');
// console.log(usernameCookie)
// const usernameFromCookie = (usernameCookie.split('='))[1]
const usernameFromCookie = getCookie("username")

// let usernameFromCookie = usernameCookie["username"];
const child = `<h3>Username  ${usernameFromCookie}</h3>`
username.innerHTML = child;



const maxDisplayedDorayaki = 8;

async function renderDashboardDorayaki(){
    const popularDorayakis = await fetchDatas(`dashboard.php?max=${maxDisplayedDorayaki}`)
        .then(data =>{
            return parseDataFromAJAX(data)
        })

    const container = document.getElementById('container')
    container.innerHTML = ''
    for (let i = 0; i < maxDisplayedDorayaki && i < popularDorayakis.length; i++) {
        container.innerHTML += renderDorayakiCard(popularDorayakis[i])
    }
}

renderDashboardDorayaki()