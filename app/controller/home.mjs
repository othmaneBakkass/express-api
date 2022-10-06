import { getAllPokemon, getPokemonByName } from "../modals/pokemon.mjs";

export const allPokemonManager = async (req, res) => {
  try {
    const pokemon = await getAllPokemon();
    if (pokemon.status == 200) {
      res.render("home.ejs", { content: pokemon.content });
    } else {
      res.sendStatus(500);
      console.log(pokemon.content);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export const singlePokemonManager = async (req, res) => {
  try {
    const pokemon = await getPokemonByName(req.params.pokemonName);
    if (pokemon.status == 200) {
      res.render("pokemon.ejs", { content: pokemon.content });
    } else {
      res.sendStatus(404);
      console.log(pokemon.content);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
