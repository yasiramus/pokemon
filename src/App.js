// importation of the main page 
import { Routes, Route } from "react-router-dom";

import Main from "./Page/Main";

// import PokeInfo from "./Page/PokeInfo";

import PokeInfo from "./Page/PokeInfo - Copy";

import { useSelector, useDispatch } from "react-redux";

// import useEffect which will only activate if the values in the list change.
import { useEffect } from "react";
import { fetchPokemonRecord } from "./Store/Slice/PokemonSlice";

// import {  } from "../Store/Slice/PokemonSlice";
  
const App = () => {


      // useSelector is a hook to access the redux store's state(data)
      const records = useSelector((state) => state.recordsOfPokemon);
    
  const singlePokemonRecord = records.singlePokemonRecord;
  // console.log(records);
      const loadingState = records.loading;

      const allPokemons = records.pokemonRecord.results;
  
      const nextLink = records.pokemonRecord.next;

      const previousLink = records.pokemonRecord.previous;
  
      const detailed = records.pokemonRecord;
      // useDispatch been set here 
      const dispatch = useDispatch();
  
      const endPoint = "https://pokeapi.co/api/v2/pokemon/?limit=16";
      //useEffect been used here 
      useEffect(() => {
  
          // dispatch is been used here to dispatch an action 
          dispatch(fetchPokemonRecord(endPoint));
         
          // passing a dependency array to the useEffect to only render when changes occurs within the store state 
      }, [dispatch]);

  
  return (

    <>
      <Routes>
          
        <Route index element={<Main pokemons={allPokemons} loader={loadingState} nextData={nextLink} prevData={ previousLink} />}></Route>

        {/* <Route path="/pokemon/:name" element={<PokeInfo detailed={detailed}/>}></Route> */}
        
        <Route path="/pokemon/:name" element={<PokeInfo detailed={detailed}/>}></Route>

          <Route path="*" element={<p className="text-center">There's nothing here: 404!</p>} />
          
      </Routes>
        
    </>

  )

};

export default App;
