// versi admin & user
// admin: search bar, tambah varian (add), logout
// user: search bar, daftar pembelian (bonus), logout

// isAdmin: boolean
function renderHeader(isAdmin) {
    if (isAdmin){
        return(
            <div>
            <div class='search-bar'>
                <form>
                    <input type="text" id='searchDorayaki' name='searchDorayaki'></input>
                </form>
            </div>
            <button onclick="window.location.href='./pages/add.html'">Add Dorayaki Variant</button>
            <button onclick="window.location.href='./pages/login.html'">Logout</button>
            </div>
        )
    }
    
    return(
        <div>
        <div class='search-bar'>
            <form>
                <input type="text" id='searchDorayaki' name='searchDorayaki'></input>
            </form>
        </div>
        {/* <button onclick="window.location.href='./pages/add.html'">History</button> */}
        <button onclick="window.location.href='./pages/login.html'">Logout</button>
        </div>
    )
}