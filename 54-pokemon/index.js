const URL = "https://api.pokemontcg.io/v1/cards";
const pokemonList = document.querySelector(".pokemons");

const fetchData = async (url) => {
  return await fetch(url).then((response) => response.json());
};

const getPokemonData = (pokemons) =>
  pokemons.map(
    ({ imageUrl, name, hp, id, nationalPokedexNumber, set, types }) => ({
      id,
      imageUrl,
      hp,
      name,
      nationalPokedexNumber,
      set,
      types,
    })
  );

const pokemonDomElements = (pokemon) => {
  const { imageUrl, name, hp, id, nationalPokedexNumber, set, types } = pokemon;
  const typeList = Array.isArray(types) ? types.join(`, `) : ``;

  const li = document.createElement(`li`);

  li.classList.add(`pokemon`);

  li.innerHTML = `
  <img src="${imageUrl}" alt="${name}">
   <p class="name">${name || ""}</p>
   <div class="details">
   <div class="id">
   <h3>ID:</h3>
   <p>${id || ``}</p>
   </div>
   <div class="hp">
   <h4>HP:</h4>
   <p>${hp || ``}</p>
   </div>
    <div class="pokemonNumber">
   <h4>Pokemon Number:</h4>
   <p>${nationalPokedexNumber || ``}</p>
   </div>
    <div class="set">
   <h4>Set:</h4>
   <p>${set || ``}</p>
   </div>
    <div class="types">
   <h4>Types:</h4>
   <p>${typeList || ``}</p>
   </div></div>`;
  return li;
};

const fetchPokemons = async () => {
  const pokemonData = await fetchData(`${URL}`);
  const pokemons = getPokemonData(pokemonData.cards);
  pokemons.forEach((pokemon) => {
    let pokemonElement = pokemonDomElements(pokemon);
    pokemonList.appendChild(pokemonElement);
  });
};

fetchPokemons();
