// isAdmin: boolean
// admin: ga ada harga
// user: ada harga
const imgPath = '../../db/images/'

function isStockValid(availableStock, currStock) {
    if (currStock >= 0 && currStock <= availableStock) return true
    if (currStock > availableStock && isAdmin) return true
    return false
}

function changeStock(price, stock) {
    let totalPrice = price * stock
    document.getElementById('dorayakiTotalPrice').innerHTML = totalPrice
    document.getElementById('currStock').innerHTML = stock
}

async function renderStock(dorayakiID) {
    document.title = (isAdmin ? 'Change Dorayaki Stock' : 'Buy Dorayaki') + ' | Mahi Mahi'

    const dorayaki = await fetchDatas(`helper/getDorayakiByID.php?q=${dorayakiID}`)
        .then(data => {
            return parseDataFromAJAX(data)[0]
        })
    
    if (!dorayaki) {
        document.getElementById('container').innerHTML = `
            <h1>
                Page not found!
            </h1>
        `
        return
    }

    let availableStock = dorayaki.stock
    let currStock = dorayaki.stock
    const successText = document.getElementById('successText')

    function reduceStock() {
        if (isStockValid(availableStock, currStock-1)) {
            currStock--
            addButton.style.opacity = 1
            submitButton.style.opacity = currStock === availableStock ? 0 : 1
            successText.style.opacity = 0
            changeStock(dorayaki.price, currStock)

            if (currStock === 0) {
                reduceButton.style.opacity = 0
            }
        }
    }

    function addStock() {
        if (isStockValid(availableStock, currStock+1)) {
            currStock++
            reduceButton.style.opacity = 1
            successText.style.opacity = 0
            changeStock(dorayaki.price, currStock)

            submitButton.style.opacity = currStock === availableStock ? 0 : 1
        }
    }

    document.getElementById('stockImg').src = imgPath + dorayaki.image
    document.getElementById('stockImg').alt = capitalizeSentence(dorayaki.name)
    document.getElementById('dorayakiName').innerHTML = capitalizeSentence(dorayaki.name)
    const dorayakiAvailableStock = document.getElementById('dorayakiAvailableStock')
    dorayakiAvailableStock.innerHTML = availableStock
    document.getElementById('currStock').innerHTML = currStock
    const submitButton = document.getElementById('submitStock')
    submitButton.style.opacity = isAdmin ? 0 : 1

    if (isAdmin) {
        document.getElementById('dorayakiPrice').style.display = 'none'
        document.getElementById('changeStockPrice').style.display = 'none'
        successText.innerHTML = 'Stock changed successfully!'
    } else {
        document.getElementById('dorayakiPrice').innerHTML = dorayaki.price
        document.getElementById('dorayakiTotalPrice').innerHTML = dorayaki.price * availableStock
        successText.innerHTML = 'Bought successfully!<br>Thank you for purchasing!'
    }
    

    const reduceButton = document.getElementById('reduceStock')    
    if (availableStock === 0) {
        reduceButton.style.opacity = 0
    }
    reduceButton.onclick = function() {reduceStock()}

    const addButton = document.getElementById('addStock')
    addButton.style.opacity = isAdmin ? 1 : 0
    addButton.onclick = function() {addStock()}

    submitButton.onclick = async function() {
        try {
            const changedStock = Math.abs(availableStock - currStock)
            const endpoint = isAdmin ? `changeStock.php?name=${dorayaki.name}&stock=${changedStock}&type=${currStock > availableStock ? 'add' : 'reduce'}` : `buyDorayaki.php?name=${dorayaki.name}&stock=${changedStock}`

            await fetchDatas(endpoint)
                .then(data => {
                    return JSON.parse(data)
                })
           
            successText.style.opacity = 1

            dorayakiAvailableStock.innerHTML = currStock
            availableStock = currStock
            submitButton.style.opacity = 0

        } catch(err) {
            console.log(err)
            successText.style.opacity = 1
            successText.innerHTML = isAdmin ? 'Dorayaki stock not successfully changed!' : 'Dorayaki not bought successfully!'
        }
    }
}

const params = window.location.search
const i = params.split('=')[1]
renderStock(i)