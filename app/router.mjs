import express from "express";
export const router = express.Router();
import * as homeController from "./controller/home.mjs";

router.get("/", homeController.allPokemonManager);

router.get("/pokemon/:pokemonName", homeController.singlePokemonManager);
