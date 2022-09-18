// importation of createSlice and createAysncthunk functions fom redux toolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// current is imported and used when you want to console.log the state 
// you call rhe current as a func and pass the state to it 

// importation of axios for crud operations 
import axios from "axios";

// fetching pokemon record thunk get request
export const fetchPokemonRecord = createAsyncThunk("pokemon/fetchingPokemon", async () => {


    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    
    const { data } = response;

    return data.results;

});

// / get single pokemon record thunk get request
export const fetchSinglePokemonRecord = createAsyncThunk("pokemon/singlePokemon", async (pokemonData) => {

    // the parameter her is an object 
    const response = await axios.get(pokemonData.url);
    
    const { data } = response;

    return data;

});

// action type is the combination of both the name and action creator which is "record/addNewStudent"

// createSlice is a function that accepts an initial state, an object full of reducer functions, and a "slice name", and 
// automatically generates action creators and action types that correspond to the reducers and state.
const pokemonSlice = createSlice({
    
    // all what is written within the createSlice are know as the slice operations 
    // example the slice name is a slice operation just as the extra reducers

    // slice name
    name: "pokemon",

    //this represent the state 
    initialState: {

        pokemonRecord: [],

        singlePokemonRecord: {},

        loading: false,

        error: ""
        
    },

    // the extra reducers communicate with the thunk, they work together, the other cant be used without the other 
    extraReducers: builder => {
        
        // fetching of spokemon data begins from here
        // pending state 
        builder.addCase(fetchPokemonRecord.pending, state => { state.loading = true })
        
            // fulfilled state 
            .addCase(fetchPokemonRecord.fulfilled, (state, action) => {

                state.loading = false;

                state.pokemonRecord = action.payload;

            }) 
                

            // rejected state 
            .addCase(fetchPokemonRecord.rejected, (state, action) => {

                state.loading = false;

                state.pokemonRecord = [];

                state.error = action.error.message;

            })
            // fetching of pokemon data ends here

             // fetch single data 
            // pending state 
            .addCase(fetchSinglePokemonRecord.pending, state => { state.loading = true })
        
            // fulfilled state 
            .addCase(fetchSinglePokemonRecord.fulfilled, (state, action) => {
    
                state.loading = false;
                    console.log(action,"action")
                state.singlePokemonRecord = action.payload;
    
            }) 
                    
    
            // rejected state 
            .addCase(fetchSinglePokemonRecord.rejected, (state, action) => {
    
                state.loading = false;
    
                state.singlePokemonRecord = [];
    
                state.error = action.error.message;
    
            })
            // fetching of pokemon data ends here
    }
    
});

// when the pokemonSlice is log it output {name: 'record', actions: {…}, caseReducers: {…}, reducer: ƒ, getInitialState: ƒ}
// without the extraReducers

// exportation of reducer
export default pokemonSlice.reducer;