// isAdmin: boolean
// admin: ga ada harga
// user: ada harga
function isStockValid(availableStock, currStock) {
    if (currStock >= 0 && currStock <= availableStock) {
        return true
    }
    return false
}

function changeStock(price, stock) {
    let totalPrice = price * stock
    document.getElementById('dorayakiTotalPrice').innerHTML = totalPrice
    document.getElementById('currStock').innerHTML = stock
}

async function renderStock(dorayakiID) {
    const dorayaki = await fetchDatas(`helper/getDorayakiByID.php?q=${dorayakiID}`)
        .then(data => {
            return parseDataFromAJAX(data)[0]
        })

    const availableStock = dorayaki.stock
    let currStock = dorayaki.stock

    function reduceStock() {
        if (isStockValid(availableStock, currStock-1)) {
            currStock--
            changeStock(dorayaki.price, currStock)
        }
    }

    function addStock() {
        if (isStockValid(availableStock, currStock+1)) {
            currStock++
            changeStock(dorayaki.price, currStock)
        }
    }

    document.getElementById('stockImg').src = dorayaki.image
    document.getElementById('dorayakiName').innerHTML = dorayaki.name
    document.getElementById('dorayakiPrice').innerHTML = dorayaki.price
    document.getElementById('dorayakiAvailableStock').innerHTML = availableStock
    document.getElementById('dorayakiTotalPrice').innerHTML = dorayaki.price * availableStock
    document.getElementById('currStock').innerHTML = currStock
    const reduceButton = document.getElementById('reduceStock')    
    reduceButton.onclick = function() {reduceStock()}
    const addButton = document.getElementById('addStock')
    addButton.onclick = function() {addStock()}

    const submitStock = document.getElementById('submitStock')
    submitStock.onclick = async function() {
        const submitted = await fetchDatas(`updateStock.php?id=${dorayakiID}&newStock=${currStock}`)
            .then(data => {
                return JSON.parse(data)
            })
       
        const changed = submitted.changed

        if (changed === 1) {
            console.log('hore')
        } else {
            console.log('hiks')
        }
    }
    // ini harusnya post
    // submitStock.onclick = 
}

renderStock(1)