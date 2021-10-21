function redirectPage() {
    const username = getCookie('username')

    if (window.location.pathname.includes('index.html')) {
        if (username) {
            window.location = './pages/dashboard.html'
        } else {
            window.location = './pages/login.html'
        }
    } else {
        if (!username) {
            window.location = './login.html'
        }
    }

}

redirectPage()