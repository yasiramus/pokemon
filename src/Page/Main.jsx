// main component
import { useEffect, useState } from "react";

import axios from "axios";

// importation of the card component 
import Card from "../Components/Card";

// search input component 
import SearchPokemon from "../Components/SearchPokemon";

const Main = () => {
 
    const [pokemonData, setPokemonData] = useState([]);

    const [loading, setLoading] = useState(true);

    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

    
    const pokemonDatas = async () => {
    
        setLoading(true);

        const PokemonDataResult = await axios.get(url);

        // console.log(PokemonDataResult.data.results, 'hh');

        getPokemonData(PokemonDataResult.data.results);
        
        setLoading(false);

    };


        
    const getPokemonData = async (Pokemondata) => {
      
        await Pokemondata.map( async (PokemonData) => {

            const result = await axios.get(PokemonData.url);

            
            setPokemonData(state => {
                
                state = [...state, result.data];
                
                return state;

            })            

        }) 

    };

    useEffect(() => {

        pokemonDatas();

    },[url]);

    return (
      
        <>
      
            <div className="bg-gray-50">

                <main className="container mx-auto p-5 md:container md:mx-auto">

                    <div className="text-center py-5">

                        <h4 className="text-red-700  text-tiny font-medium">Pokédex</h4>

                        <p className="md:whitespace-normal text-base1 md:text-sm font-normal py-4 text-gray-700">The Pokédex contains detailed stats for every creature from the Pokemon games.</p>
                        
                    </div>
                    
                    <SearchPokemon />
                    
                    <div className="mt-8">

                        <div className="grid grid-rows-4 grid-cols-4 gap-4 md:grid-rows-5 md:grid-cols-3">

                            <Card pokemon={pokemonData} loading={loading} />

                        </div>    

                    </div>   
                    
                </main>

            </div>
        </>
        
    )
    
};

export default Main;
