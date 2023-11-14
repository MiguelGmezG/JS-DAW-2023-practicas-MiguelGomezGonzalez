const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
let arrPokemons;
let misPokemons = [];
let currentPage = 1;
let itemsPerPage = 20;
let totalItems;

const pokemonTableContainer = document.getElementById('pokemonTableContainer');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const currentPageElement = document.getElementById('currentPage');
const perPageSelect = document.getElementById('perPage');

function updatePokemonTable() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPokemonList = misPokemons.slice(startIndex, endIndex);

  const table = document.createElement('table');
  const header = table.createTHead();
  const row = header.insertRow(0);
  const nameHeader = row.insertCell(0);
  const imageHeader = row.insertCell(1);
  const abilitiesHeader = row.insertCell(2);

  nameHeader.innerHTML = 'Nombre';
  imageHeader.innerHTML = 'Imagen';
  abilitiesHeader.innerHTML = 'Habilidades';

  const body = table.createTBody();

  currentPokemonList.forEach(pokemon => {
    const row = body.insertRow();
    const nameCell = row.insertCell(0);
    const imageCell = row.insertCell(1);
    const abilitiesCell = row.insertCell(2);

    nameCell.innerHTML = pokemon[0];
    imageCell.innerHTML = `<img src="${pokemon[1]}" alt="${pokemon[0]}" width="150" height="150">`;
    abilitiesCell.innerHTML = pokemon[2];
  });

  pokemonTableContainer.innerHTML = '';
  pokemonTableContainer.appendChild(table);

  currentPageElement.textContent = currentPage;
}

function updatePaginationButtons() {
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage * itemsPerPage >= totalItems;
}

function updatePageSize() {
  itemsPerPage = parseInt(perPageSelect.value, 10);
  currentPage = 1;
  fetchDataAndRender();
}

function changePage(change) {
  currentPage += change;
  fetchDataAndRender();
}

function fetchDataAndRender() {
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  
  if (misPokemons.slice(startIdx, endIdx).length === 0) {
    fetch(`${BASE_URL}?offset=${startIdx}&limit=${itemsPerPage}`)
      .then(response => response.json())
      .then(data => {
        totalItems = data.count;
        const newPokemons = data.results;
        const fetchDataPromises = newPokemons.map(pokemon => {
          const url = pokemon.url;
          return fetch(url)
            .then(response => response.json())
            .then(data => {
              const abilities = data.abilities.map(ability => ability.ability.name);
              return [pokemon.name, data.sprites.front_default, abilities.join(', ')];
            });
        });

        Promise.all(fetchDataPromises)
          .then(pokemonDataArray => {
            misPokemons = [...misPokemons.slice(0, startIdx), ...pokemonDataArray, ...misPokemons.slice(endIdx)];
            updatePokemonTable();
            updatePaginationButtons();
          })
          .catch(error => {
            console.error('Error al obtener datos de Pokémon:', error);
          });
      })
      .catch(error => {
        console.error('Error al obtener datos de Pokémon:', error);
      });
  } else {
    updatePokemonTable();
    updatePaginationButtons();
  }
}

document.addEventListener('DOMContentLoaded', fetchDataAndRender);
