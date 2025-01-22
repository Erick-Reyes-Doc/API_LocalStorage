
const API_URL = "https://rickandmortyapi.com/api/character";

const characterList = document.getElementById("character-list");
const selectedCardContainer = document.getElementById("selected-card-container");


async function fetchCharacters() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        renderCharacterList(data.results);
    } catch (error) {
        console.error("Error al obtener datos de la API:", error);
    }
}

function renderCharacterList(characters) {
    characters.forEach((character) => {
        const characterItem = document.createElement("div");
        characterItem.className = "character-item";
        characterItem.innerHTML = `
      <img src="${character.image}" alt="${character.name}" />
      <h3>${character.name}</h3>
      <p>${character.status}</p>
    `;

        characterItem.addEventListener("click", () => {
            addCardToSelected(character);
        });

        characterList.appendChild(characterItem);
    });
}

function addCardToSelected(character) {
    const card = {
        id: character.id,
        image: character.image,
        name: character.name,
        status: character.status,
    };

    saveToLocalStorage(card);
    renderSelectedCards();
}

function saveToLocalStorage(card) {
    let savedCards = JSON.parse(localStorage.getItem("selectedCards")) || [];
    const isAlreadySaved = savedCards.some((c) => c.id === card.id);

    if (!isAlreadySaved) {
        savedCards.push(card);
        localStorage.setItem("selectedCards", JSON.stringify(savedCards));
    }
}

function renderSelectedCards() {
    const savedCards = JSON.parse(localStorage.getItem("selectedCards")) || [];
    selectedCardContainer.innerHTML = "";
    savedCards.forEach((card) => {
        const cardElement = document.createElement("div");
        cardElement.className = "selected-card";
        cardElement.innerHTML = `
      <img src="${card.image}" alt="${card.name}" />
      <h3>${card.name}</h3>
      <p>${card.status}</p>
    `;

        selectedCardContainer.appendChild(cardElement);
    });
}


function init() {
    renderSelectedCards();
    fetchCharacters();
}

init();
