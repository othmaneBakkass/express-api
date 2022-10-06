import fetch from "node-fetch";
import { pokemonSchema } from "./pokemonSchema.mjs";

export const getAllPokemon = async () => {
  try {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
    const { results: pokemonList } = await fetchData(url);

    const pokemonURLs = pokemonList.map(({ url }) => url);

    const pokemonData = pokemonURLs.map(async (url) => {
      const pokemonDetails = await fetchData(url);
      return pokemonSchema(pokemonDetails);
    });
    const response = await Promise.all(pokemonData);

    return { status: 200, content: response };
  } catch (error) {
    return { status: 500, content: error };
  }
};

export const getPokemonByName = async (pokemonName) => {
  try {
    const pokemonInfo = await fetchData(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const response = pokemonSchema(pokemonInfo, true);
    return { status: 200, content: response };
  } catch (error) {
    return { status: 500, content: error };
  }
};

//fetches data than returns it in json format on success
const fetchData = async (url) => {
  const data = await fetch(url);
  const formattedData = await data.json();
  return formattedData;
};
