function getDorayakis() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'getDorayakis.php')

    xhr.onload = function() {
        console.log(this.responseText)
        return this.responseText
    }
    xhr.send()
    return []
}

function fetchDatas(destination) {
    return new Promise(function (resolve, reject) {
        const objXMLHttpRequest = new XMLHttpRequest()

        objXMLHttpRequest.onreadystatechange = function() {
            if (objXMLHttpRequest.readyState === 4) {
                if (objXMLHttpRequest.status === 200) {
                    resolve(objXMLHttpRequest.responseText)
                } else {
                    reject('Error code: ' + objXMLHttpRequest.status + '\nError message: ' + objXMLHttpRequest.statusText)
                }
            }
        }

        objXMLHttpRequest.open('GET', `../../server/${destination}`, true)
        objXMLHttpRequest.send()
    })
}

function parseDataFromAJAX(string) {
    const parsed = JSON.parse(string.slice(0, -2))
    return parsed
}