import { configureStore } from "@reduxjs/toolkit";

import pokemonReducer from "./Slice/PokemonSlice";

export const store = configureStore({

    reducer: { recordsOfPokemon: pokemonReducer }

});