import { configureStore } from "@reduxjs/toolkit";

// imporation of pokemonReducer from the slice folder 
import pokemonReducer from "./Slice/PokemonSlice";

// configuring the store 
export const store = configureStore({

    reducer: { recordsOfPokemon: pokemonReducer }

});