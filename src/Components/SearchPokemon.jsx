// seach component 

import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonRecord, fetchSinglePokemonRecord } from "../Store/Slice/PokemonSlice";

const SearchPokemon = ({searchPokemons}) => {

    // const dispatch = useDispatch();

    // const [list, setList] = useState("");

    // const searchPokemonData = async (e) => {

    //     e.preventDefault();

    //     const a = searchPokemons.results.map(data => data.url)

    // //    const p = dispatch(fetchSinglePokemonRecord(a.url));
        
    //     const getPokemonData = await axios.get(a+list);
        
    // const { data } = getPokemonData;

        
    //     console.log(data,'pp');
    // }


    // // const getPokemon = (e) => {

    // //     e.preventDefault();
      

    // //     // console.log(a, 'searchPoke');
    // //     // return a;
    // // }

    // // const getPokemonDetails = useSelector((state) => state.recordsOfPokemon.singlePokemonRecord);
    // // const searchPokemonData =
    // //     async (e) => {

    // //     e.preventDefault();
    // //     // dispatch(fetchPokemonRecord(searchPokemons.url));

    // //     // console.log(dispatch(fetchPokemonRecord(searchPokemons.url)));


    // //     console.log(getPokemonDetails,'lkp');
    // //     };
    
    // // const endPoint = "https://pokeapi.co/api/v2/pokemon/?limit=16";
    
    // //  //useEffect been used here 
    // //  useEffect(() => {

    // //     // dispatch is been used here to dispatch an action 
    // //     dispatch(fetchPokemonRecord(endPoint));
       
    // //     // passing a dependency array to the useEffect to only render when changes occurs within the store state 
    // //  }, [dispatch]);
    
    return (
      
        <>

            <form className="w-2/4 m-auto md:m-auto flex items-center justify-center md:w-11/12 bg-white border-2 border-gray-300 rounded-lg hover:border-red-700 shadow-md shadow-black">

                <input type="search" autoComplete="off" placeholder="Seacrh for Pokemon" className="w-full px-3 py-3 flex-auto rounded-lg outline-0"
                
                />
                
                <button  type="submit" className="text-gray-600 flex-none m-2.5"><i className="fa fa-search text-base1"></i></button>
                
            </form> 
      
        </>
        
    )
    
};

export default SearchPokemon;
