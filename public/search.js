const searchBar = document.querySelector(".js-search-input");
const searchBtn = document.querySelector(".js-search-btn");

searchBtn.addEventListener("click", () => {
  getPokemonDetails(searchBar);
});

searchBar.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key !== "Enter") return;
  getPokemonDetails(searchBar);
});

const getPokemonDetails = (searchInput) => {
  const searchValue = searchInput.value;
  if (isNullOrUndefined(searchValue)) return;
  const pokemonName = getPokemonName(searchValue);
  const location = `http://localhost:8080/pokemon/${pokemonName}`;
  window.location = location;
};

const getPokemonName = (input) => {
  const pokemonName = input;
  return pokemonName.trim().toLowerCase();
};

const isNullOrUndefined = (value) => {
  if (value === null || value === undefined) return true;
  return false;
};
