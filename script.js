const charCard = document.getElementById('card');
let charList = [];

fetch(`https://api.brawlify.com/v1/brawlers`)
    .then(response => response.json())
    .then(data => {
        charList = [...data.list] // Concatenate results correctly
        console.log(charList)
    })
    
const clickRare = document.getElementById("clickRare")
const clickSuperRare = document.getElementById("clickSuperRare")
const clickEpic = document.getElementById("clickEpic")
const clickMythic = document.getElementById("clickMythic")
const clickLegendary = document.getElementById("clickLegendary")
const clickReset = document.getElementById("clickReset")
const clickHome = document.getElementById("icon")
const cardHolder = document.getElementById("cardHolder")

clickRare.addEventListener("click", () => {
    const filteredChars = charList.filter(char => char.rarity.name === 'Rare');
    console.log(filteredChars);
    filter(filteredChars)
});

clickSuperRare.addEventListener("click", () => {
    const filteredChars = charList.filter(char => char.rarity.name === 'Super Rare');
    console.log(filteredChars);
    filter(filteredChars)
});

clickEpic.addEventListener("click", () => {
    const filteredChars = charList.filter(char => char.rarity.name === 'Epic');
    console.log(filteredChars);
    filter(filteredChars)
});

clickMythic.addEventListener("click", () => {
    const filteredChars = charList.filter(char => char.rarity.name === 'Mythic');
    console.log(filteredChars);
    filter(filteredChars)
});

clickLegendary.addEventListener("click", () => {
    const filteredChars = charList.filter(char => char.rarity.name === 'Legendary');
    console.log(filteredChars);
    filter(filteredChars)
});

clickReset.addEventListener("click", () => {
    const filteredChars = charList;
    console.log(filteredChars);
    filter(filteredChars)
});

clickHome.addEventListener("click", () => {
    const filteredChars = charList;
    console.log(filteredChars);
    filter(filteredChars)
});

function filter(charsArray) {
    cardHolder.innerHTML=""
    for (i=0; i<charsArray.length; i++) {
        const name = charsArray[i].name;
        const imgsrc = charsArray[i].imageUrl2;
        const desc = charsArray[i].description;
    
    const newCard = `
        <div class="col-sm-4">
          <div class="card">
            <img class="card-img" src="${imgsrc}">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${desc}</p>
            </div>
          </div>
        </div>
        `;
    cardHolder.innerHTML+=newCard;
    }
}