async function checkAvailability() {
    const inputUsername = document.getElementById('inputUsername')
    var username = inputUsername.value

    const availability = await fetchDatas(`check_availability.php?q=${username}`)
        .then(data => {
            return JSON.parse(data)
        })

    const found = availability.found

    const status = document.getElementById('status')
    status.innerHTML = ''
    const tmpStatus = document.createElement('p')

    if (found === 1) {
        tmpStatus.innerHTML = 'Username not available'
        status.appendChild(tmpStatus)
    } else {
        tmpStatus.innerHTML = 'Username available'
        status.appendChild(tmpStatus)
    }
}

const inputUsername = document.getElementById('inputUsername')
inputUsername.onblur = function() {checkAvailability()}