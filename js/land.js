fetch('/json/land.json')
    .then(res => res.json())
    .then(data => showData(data))

const showData = (cards) => {
    const cardContainer = document.getElementById('card')
    for (let card of cards) {
        const cardDiv = document.createElement('div')
        cardDiv.className = ('p-5', 'rounded-3xl', 'border-2')
        cardDiv.innerHTML = `
        <img class="h-56 p-3 rounded-3xl" src=${card.img} alt=""/>
        <h1 class="text-3xl pb-4 font-semibold text-black text-center">${card.names}</h1>
        `;
        cardContainer.appendChild(cardDiv)

    }

}