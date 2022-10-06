import { typesAndColors } from "../primitives/typesAndColors.js";

//input: takes an array of types
//output: returns an object of types as keys and colors as values
const pokemonTypes = (types) => {
  let typesObject = {};
  types.forEach((el) => {
    const color = typesAndColors[el] ?? "neutral";
    Object.assign(typesObject, { [el]: color });
  });
  return typesObject;
};
//input: array of types
//output: returns the color of the first type in the array
const pokemonMainColor = (types) => {
  const mainType = types[0].toLowerCase().trim();
  return typesAndColors[mainType] ?? "neutral";
};

//accepts a pokemon object and returns only the necessary data
export const pokemonSchema = (pokemon, all = false) => {
  const imgUrl = pokemon.sprites.other["official-artwork"].front_default;
  const typesArray = pokemon.types.map((el) => el.type.name);
  const color = pokemonMainColor(typesArray);
  const types = pokemonTypes(typesArray);
  const id = pokemon.id;
  const name = pokemon.name;

  let pokemonData = { name, id, url: imgUrl, types, color };

  if (all === true) {
    const weight = pokemon.weight;
    const height = pokemon.height;
    const abilities = pokemon.abilities.map((el) => el.ability.name);
    const stats = pokemon.stats.map((el) => ({
      stat: el.base_stat,
      name: el.stat.name,
    }));
    pokemonData = Object.assign(pokemonData, {
      stats,
      abilities,
      weight,
      height,
    });
  }
  return pokemonData;
};
