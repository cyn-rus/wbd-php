// isAdmin: boolean
// user: beli
// admin: ubah stok, edit, delete

function renderDorayakiPage(isAdmin) {
    if (isAdmin){
        return (
            <div>
            <button onclick="window.location.href='./pages/stock.html'">Change Stock</button>
            <button>Delete</button>
            </div>
        )
    }
    
    return (
        <div>
        <button onclick="window.location.href='./pages/stock.html'">Buy</button>
        </div>
    )
}