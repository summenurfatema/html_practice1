fetch('/json/land.json')
    .then(res => res.json())
    .then(data => showData(data))

const showData = (cards) => {
    const cardContainer = document.getElementById('card')
    for (let card of cards) {
        const cardDiv = document.createElement('div')
        cardDiv.className = ('p-5', 'border-2')
        cardDiv.innerHTML = `
        <img class="h-56 p-3 rounded-3xl" src=${card.img} alt=""/>
        <h1 class="text-3xl pb-4 font-semibold text-black text-center">${card.names}</h1>
        `;
        cardContainer.appendChild(cardDiv)

    }

}
// 
function menu(e) {
    let list = document.querySelector("nav")
    e.name === "open" ? (e.name = "close", list.classList.add("top-[80px]"), list.classList.add("opacity-100"), list.classList.remove("hidden"), list.classList.remove("sm:hidden"), list.classList.remove("md:hidden")) : (e.name = "open", list.classList.remove("top-[80px]"), list.classList.remove("opacity-100"), list.classList.add("hidden"), list.classList.add("sm:hidden"), list.classList.add("md:hidden"))


}