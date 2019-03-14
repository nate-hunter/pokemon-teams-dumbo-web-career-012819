const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const mainTag = document.querySelector('main');

const trainerCard = (trainer) => {
  return `<div class="card" data-id="${trainer.id}"><p>${trainer.name}</p>
  <button data-trainer-id="${trainer.id}">Add Pokemon</button>
  <ul>
  </ul>
</div>`;
}




// GET '/trainers':
fetch(TRAINERS_URL)
  .then(response => response.json())
  .then((parsedJson) => {
    parsedJson.forEach(trainer => {
      mainTag.innerHTML += trainerCard(trainer)
      // w/Tony's help:
      let trainerCardDiv = document.querySelector(`[data-id='${trainer.id}']`)
      trainer.pokemons.forEach(pokemon => {
        trainerCardDiv.innerHTML +=
          `<li>
            ${pokemon.nickname} (${pokemon.species})
            <button class="release" data-pokemon-id="140">Release</button>
          </li>
        `
      })
    })
  })






// POST '/pokemons'
// let formData = {
//   trainer_id = `${}`
// }

// let configObj = {
//   method: "POST"
//   body: formData
// }
//
// fetch('http://localhost:3000/trainers', configObj)
//   .then(...)
//   .then(...)
