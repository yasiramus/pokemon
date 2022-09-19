// importation of the card component 
import Card from "../Components/Card";

// search input component 
import SearchPokemon from "../Components/SearchPokemon";

// importation of spinner 
import { PropagateLoader } from "react-spinners";

// imporation of pagination component 
import Pagination from "../Pagination/Pagination";

// main component
const Main = ({pokemons, loader, nextData, prevData }) => {
    
    const override = {

        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        padding:"5rem 0"

    };

    return (
      
        <>
      
            <div className="bg-gray-50">

                <main className="container mx-auto p-5 md:container md:mx-auto">

                    <div className="text-center py-5">

                        <h4 className="text-red-700  text-tiny font-medium">Pokédex</h4>

                        <p className="md:whitespace-normal text-base1 md:text-sm font-normal py-4 text-gray-700">The Pokédex contains detailed stats for every creature from the Pokemon games.</p>
                        
                    </div>
                    
                    <SearchPokemon searchPokemons = {pokemons}/>
                    
                    {
                       loader ? (<PropagateLoader color="#b91c1c" cssOverride={override} size={50}/>):
                    
                            (<>
                                <div className="mt-8">

                                    <div className="grid grid-rows-4 grid-cols-4 gap-4 md:grid-rows-5 md:grid-cols-3">

                                        {pokemons?.map((data, index) => {
                                    
                                            return <Card pokemonDetails={data} key={index}/>
                                    
                                        })}

                                    </div>

                                </div>
                                    
                                <Pagination nextPage={nextData} prevPage={prevData} />       
                            </>    
                        ) 
                        
                    }

                </main>

            </div>
        </>
        
    )
    
};

export default Main;
