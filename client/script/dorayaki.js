// isAdmin: string
// user: beli
// admin: ubah stok, delete

function confirmDelete(){
    let deleteConfirmation = confirm("Apakah anda yakin mau menghapus varian dorayaki ini?")
    if (deleteConfirmation == true){
        const paramString = window.location.search
        const searchParams = new URLSearchParams(paramString)
        const dorayakiId = searchParams.get("id")

        alert("Dorayaki variant deleted")
        window.location = `../../server/deleteDorayaki.php?id=${dorayakiId}`

    }
    else{
        alert("Deletion canceled")
    }
}



async function renderDorayakiPage() {
    const paramString = window.location.search
    const searchParams = new URLSearchParams(paramString)
    const dorayakiId = searchParams.get("id")
    
    const dorayakiDetails = await fetchDatas(`dorayaki.php?id=${dorayakiId}`)
    .then(data =>{
        return parseDataFromAJAX(data)
    })

    console.log(dorayakiDetails)

    const dorayakiDetailsContainer = document.getElementById('container')
    let child = `<img src="${dorayakiDetails[0].image}">
                    <h1>${dorayakiDetails[0].name}</h1>
                    <div>${dorayakiDetails[0].description}</div>
                    <div>Price: ${dorayakiDetails[0].price}</div>
                    <div>Stock: ${dorayakiDetails[0].stock}</div>
                    <div>Sold: ${dorayakiDetails[0].sold}</div>`

    const isAdmin = getCookie("isadmin")
    
    if (isAdmin === "1"){
        console.log(isAdmin)
        child += `<button class='changeStockButton' onclick="window.location.href='stock.html?id=${dorayakiId}'">Change Stock</button>`
        child += `<button class='deleteButton' onclick="confirmDelete()">Delete</button>`
    }
    else{
        child += `<button class='buyButton' onclick="window.location.href='stock.html?id=${dorayakiId}'">Buy</button>`
    }

    child += `<button class='backButton' onclick="window.location.href='./dashboard.html'">Back</button>`

    dorayakiDetailsContainer.innerHTML += child

}


renderDorayakiPage()


