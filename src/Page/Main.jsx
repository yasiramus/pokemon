// main component
// importation of useSelector and useDispatch from react-redux liberary
import { useSelector, useDispatch } from "react-redux";

// import useEffect which will only activate if the values in the list change.
import { useEffect } from "react";

// importation of the card component 
import Card from "../Components/Card";

// search input component 
import SearchPokemon from "../Components/SearchPokemon";

// importation of fetchPokemonRecord from the store slice folders 
import { fetchPokemonRecord } from "../Store/Slice/PokemonSlice";

import {PropagateLoader} from "react-spinners";

const Main = () => {
 
    // useSelector is a hook to access the redux store's state(data)
    const records = useSelector((state) => state.recordsOfPokemon);

    // useDispatch been set here 
    const dispatch = useDispatch();

   // useEffect been used here 
    useEffect(() => {

        // dispatch is been used here to dispatch an action 
        dispatch(fetchPokemonRecord());
       
        // passing a dependency array to the useEffect to only render when changes occurs within the store state 
    }, [dispatch]);

    const override = {

        margin: "0 auto"

    };

    return (
      
        <>
      
            <div className="bg-gray-50">

                <main className="container mx-auto p-5 md:container md:mx-auto">

                    <div className="text-center py-5">

                        <h4 className="text-red-700  text-tiny font-medium">Pokédex</h4>

                        <p className="md:whitespace-normal text-base1 md:text-sm font-normal py-4 text-gray-700">The Pokédex contains detailed stats for every creature from the Pokemon games.</p>
                        
                    </div>
                    
                    <SearchPokemon />
                    
                    {
                        records.loading ? (<PropagateLoader color="#36d7b7" cssOverride={override} size={50}/>):
                    
                           ( <div className="mt-8">

                                <div className="grid grid-rows-4 grid-cols-4 gap-4 md:grid-rows-5 md:grid-cols-3">

                                    {records.pokemonRecord.map((data, index) => {
                                   
                                        return <Card pokemonDetails={data} key={index} />
                                  
                                    })}

                                </div>

                            </div>
                        ) 
                        
                    }

                </main>

            </div>
        </>
        
    )
    
};

export default Main;
