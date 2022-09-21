// importation of useSelector, useDispatch from react-redux for the binding 
import { useSelector, useDispatch } from "react-redux";

// import useEffect which will only activate if the values in the list change.
import { useEffect } from "react";

// importation of fetchPokemonRecord from slice folder 
import { fetchPokemonRecord } from "../Store/Slice/PokemonSlice";

// search input component 
import SearchPokemon from "../Components/Search/SearchPokemon";

// main component
const Main = () => {

    //the dispatch an action from the redux store which is the function.
    const dispatch = useDispatch();

  //useSelector is a hook give us access to the redux store's state which is the (data) and return the selected data
  const records = useSelector((state) => state.recordsOfPokemon);

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
      
            <div className="bg-gray-50">

                <main className="container mx-auto p-5 md:container md:mx-auto">

                    <div className="text-center py-5">

                        <h4 className="text-red-700  text-tiny font-medium">Pokédex</h4>

                        <p className="md:whitespace-normal text-base1 md:text-sm font-normal py-4 text-gray-700">The Pokédex contains detailed stats for every creature from the Pokemon games.</p>
                        
                    </div>
                    
                    {/* search component  */}
                    {/* pokemons passed down to search as props  */}
                    <SearchPokemon pokemons={records}/>

                </main>

            </div>
        </>
        
    )
    
};

export default Main;
