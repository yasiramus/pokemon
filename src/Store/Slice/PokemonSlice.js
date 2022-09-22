// importation of createSlice and createAysncthunk functions fom redux toolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// current is imported and used when you want to console.log the state 
// you call the current as a func and pass the state to it 

// importation of axios for performing of api call  
import axios from "axios";

// fetching pokemon record thunk get request
export const fetchPokemonRecord = createAsyncThunk("pokemon/fetchPokemon", async (url) => {

    // const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=16");

    // the url will passed to the fetchPokemonRecord in the root component which is app
    const response = await axios.get(url);
    
    // this returns an object containing the result, next, previous and count 
    const { data } = response;
    
    // return all data 
    return data;

});

//get single pokemon record thunk get request
// export const fetchSinglePokemonRecord = createAsyncThunk("pokemon/singlePokemon", async (pokemonData) => {

//     // the parameter here is an object 
//     const response = await axios.get(pokemonData.url);
    
//     // this will return and object containing individual data 
//     const { data } = response;

//     return data;

// });

// action type is the combination of both the name and action creator which is "pokemon/pokemonRecord"

// createSlice is a function that accepts an initial state, an object full of reducer functions, and a "slice name", and 
// automatically generates action creators and action types that correspond to the reducers and state.
const pokemonSlice = createSlice({
    
    // all what is written within the createSlice are know as the slice operations 
    // example the slice name is a slice operation just as the extra reducers

    // slice name
    name: "pokemon",

    //this represent the state 
    initialState: {

        pokemonRecord: {},

        // singlePokemonRecord: {},

        loading: true,

        error: ""
        
    },

    //the extra reducers communicate with the thunk, they work together, the other cant be used without the other 
    extraReducers: builder => {
        
        // fetching of pokemon data begins from here
        // pending state 
        // at the pending state loading is true that is when the data is still being fetched 
        builder.addCase(fetchPokemonRecord.pending, state => { state.loading = true })
        
            //fulfilled state 
            //when fulfilled loading state changes to false that is when the data has been fatched 
            .addCase(fetchPokemonRecord.fulfilled, (state, action) => {

                state.loading = false;

                state.pokemonRecord = action.payload;
               
            }) 
                
            // rejected state 
            // when rejected the loading state is false this beause there is an error and no data is being fetched or has been fetched 
            .addCase(fetchPokemonRecord.rejected, (state, action) => {

                state.loading = false;

                // at the rejected state pokemon record will be set to an empty object 
                state.pokemonRecord = {};

                // at the rejected state it should set the error message 
                state.error = action.error.message;

            })
            // fetching of pokemon data ends here

             // fetch single data 
            // pending state 
            // .addCase(fetchSinglePokemonRecord.pending, state => { state.loading = true })
        
            // // fulfilled state 
            // .addCase(fetchSinglePokemonRecord.fulfilled, (state, action) => {
    
            //     state.loading = false;
                
            //     state.singlePokemonRecord = action.payload;
    
            // }) 
                    
    
            // rejected state 
            // .addCase(fetchSinglePokemonRecord.rejected, (state, action) => {
    
            //     state.loading = false;
    
            //     state.singlePokemonRecord = {};
    
            //     state.error = action.error.message;
    
            // })
            // fetching of pokemon data ends here
    }
    
});

// exportation of reducer
export default pokemonSlice.reducer;