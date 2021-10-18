async function renderSearch(dorayaki) {
    const inputField = document.getElementById('searchDorayaki')
    inputField.value = dorayaki

    let currPage = 1
    const dorayakisPerPage = 2
    const dorayakis = await fetchDatas(`searchDorayaki.php?q=${dorayaki}`)
        .then(data => {
            return parseDataFromAJAX(data)
        })

    const totalPages = Math.ceil(dorayakis.length / dorayakisPerPage)
    const totalPagination = document.getElementById('totalPages')
    totalPagination.textContent = totalPages
    const previousButton = document.getElementById('previousButton')
    previousButton.onclick = function() {prevPage()}
    const nextButton = document.getElementById('nextButton')
    nextButton.onclick = function() {nextPage()}

    function prevPage() {
        if (currPage > 1) {
            currPage--
            renderPagination(currPage)
        }
    }

    function nextPage() {
        if (currPage < totalPages) {
            currPage++
            renderPagination(currPage)
        }
    }

    function renderPagination(idx) {
        const searchResult = document.getElementById('searchResult')
        const currPagination = document.getElementById('currPage')

        if (idx < 1) {
            idx = 1
            currPage = 1
        }

        if (idx > totalPages) {
            idx = totalPages
            currPage = totalPages
        }

        currPagination.textContent = idx

        searchResult.innerHTML = ''
        for (let i = (idx - 1) * dorayakisPerPage; i < (idx * dorayakisPerPage) && i < dorayakis.length; i++) {
            searchResult.innerHTML += dorayakis[i].name + '<br>'
        }
    }

    function renderSelect() {
        const selectPagination = document.getElementById('selectPagination')
        selectPagination.innerHTML = ''
        for (let i = 1; i <= totalPages; i++) {
            const number = document.createElement('button')
            number.innerHTML = i + ' '
            number.id = 'pageNumber'
            number.onclick = function() {
                currPage = i
                renderPagination(i)
            }
            selectPagination.appendChild(number)
        }
    }

    renderSelect()
    renderPagination(currPage)
}

const dorayaki = window.location.search.split('=')[1]

renderSearch(dorayaki)