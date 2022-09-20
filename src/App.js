// importation of Routes and route from react-router-dom
import { Routes, Route } from "react-router-dom";

// importation of the main page
import Main from "./Page/Main";

import PokeInfo from "./Page/PokeInfo";
// importation of useSelector, useDispatch from react-redux for the binding 
import { useSelector, useDispatch } from "react-redux";

// import useEffect which will only activate if the values in the list change.
import { useEffect } from "react";

// importation of fetchPokemonRecord from slice folder 
import { fetchPokemonRecord } from "./Store/Slice/PokemonSlice";

const App = () => {

  //useSelector is a hook give us access to the redux store's state which is the (data) and return the selected data
  const records = useSelector((state) => state.recordsOfPokemon);

  //pokeError will return  the selected data which is the error 
  const pokeError = useSelector(state => state.recordsOfPokemon.error);

  //loadingState will return  the selected data which is the loading
  const loadingState = records.loading;

  //allPokemons willl an array of data of pokemon records which consist of an obeject with keys  and value containing the name and url link 
  const allPokemons = records.pokemonRecord.results;
  
  //the nextLink will return a data of a url link to the next data 
  const nextLink = records.pokemonRecord.next;

  //previousLink will return null
  const previousLink = records.pokemonRecord.previous;

  //the dispatch an action from the redux store which is the function.
  const dispatch = useDispatch();
  
  //setting of general url link here for the third party api which is the pokemon api
  const endPoint = "https://pokeapi.co/api/v2/pokemon/?limit=16";

  //useEffect Accepts a function that can return a cleanup function, possibly effectful code.
  // and a dependency array if present, effect will only activate if the values in the list change
  useEffect(() => {
  
    // dispatch is been used here to dispatch an action 
    dispatch(fetchPokemonRecord(endPoint));
         
    // passing a dependency array to only render when changes occurs within the store state 
  }, [dispatch]);
  
  return (

    <>
      <Routes>

        {/* the main page*/}
        <Route index element={<Main pokemons={allPokemons} loader={loadingState} nextData={nextLink} prevData={previousLink} pokeError={ pokeError} />}></Route>

        {/* <Route path="/pokemon/:name" element={<PokeInfo detailed={detailed}/>}></Route> */}
        
        {/* pokemon Info page  */}
        <Route path="/pokemon/:name" element={<PokeInfo/>}></Route>

        {/* 404 route  */}
        <Route path="*" element={<p className="text-center">There's nothing here: 404!</p>} />
          
      </Routes>
        
    </>

  )

};

export default App;
