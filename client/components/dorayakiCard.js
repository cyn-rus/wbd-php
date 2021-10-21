function renderDorayakiCard(dorayaki, searchPage) {
    return `
        <div class='dorayaki-card' onclick='window.location.href="dorayaki.html?id=${dorayaki.id}"'>
            <img src='../../db/images/${dorayaki.image}' alt=${capitalizeSentence(dorayaki.name)}>
            <h1 class='dorayaki-name'>${capitalizeSentence(dorayaki.name)}</h1>
            <h3 class='dorayaki-desc'>${dorayaki.description}</h3>
            ${searchPage !== true ? `<h3 class='dorayaki-sold'>Sold: ${dorayaki.sold}</h3>` : ''}
        </div> 
    `
}