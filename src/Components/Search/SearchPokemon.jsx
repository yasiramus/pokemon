// seach component 
import { useState } from "react";

// import { useSelector } from "react-redux";
import Card from "../Card";

import SearchResult from "./SearchResult";

// importation of spinner 
import { PropagateLoader } from "react-spinners";

// imporation of pagination component 
import Pagination from "../../Pagination/Pagination";

const SearchPokemon = ({ pokemons }) => {

    // input value state 
    const [wordEntered, setWordEntered] = useState("");

    // fetch data state 
    const [filteredData, setFilteredData] = useState([]);

    // const [searchOutcome, setSearchOutcome] = useState('');

    // pokemon data for the search
    const pokemon = pokemons.pokemonRecord.results;

    // handle search function for performing of search query 
    const handleSearchFilter = (text) => {

        // grabbing the input value 
        const searchWord = text.target.value;
       
        setWordEntered(searchWord);

        // the newFilter will return an array of object containing the search result
        const newSearch = pokemon.filter((value) => {
            
            //this will return the a data that has the searchWord in it
            return value.name.includes(searchWord.toLowerCase());
            
        });

        // check to see if the type word exit 
        const wordPresent = newSearch.some(data => data.name);  
       
        // if searchWord is less 3 return an empty array meaning 3 isnt part 3 is the expected word type to begin the search
        if (searchWord.length < 3) {

            setFilteredData([]);
            
        } else if(wordPresent) {

            // if type word is present return the data
            setFilteredData(newSearch);

        } else {

            // setSearchOutcome("sorry we don't have this particular pokemon")
            return ("sorry we don't have this particular pokemon")
        }

    };

    // clearing the input field 
    const clearInputField = () => {

        setFilteredData([]);

        setWordEntered("");

    };

      //override the default spinner css 
      const override = {

        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        padding:"5rem 0"

    };

    return (
      
        <>
            <form className="w-2/4 m-auto md:m-auto flex items-center justify-center md:w-11/12 bg-white border-2 border-gray-300 rounded-lg hover:border-red-700 shadow-md shadow-black">
                
                <input type="text" value={wordEntered} onChange={handleSearchFilter} autoComplete="off" placeholder="Seacrh for Pokemon" className="w-full px-3 py-3 flex-auto rounded-lg outline-0" />
                
                {
                    (filteredData.length === 0) ? ( <div type="submit" className="text-gray-600 flex-none m-2.5"><i className="fa fa-search text-base1"></i></div>): 
                    
                    (<button type="submit" onClick={clearInputField} className="text-gray-600 flex-none m-2.5"><i className="fa fa-times text-base1"></i></button>)
                }

            </form>

            {/* this contain both the search result and card component  */}
            <div className="mt-8">

                {
                  // { checking to see if the length filteredData isnt empty, if it isnt it will show the search result component else it show the card component */}
                    (filteredData.length !== 0 ) ?
                        
                        (<>
                            
                            <p className="text-center my-12 text-xl ffont-normal text-black capitalize">Search Results for "{wordEntered}"</p>
                            
                            <div className="flex gap-6 w-11/12 mt-15 mx-auto justify-center">
                            
                                {
                                    // mapping through the filtered data to return the needed data 
                                    filteredData.map((value, index) => (

                                        <SearchResult filteredData={value} key={index} />
                                        
                                    ))

                                }

                            </div>
                        </>           
                    ) : (
                    <>
                        {
                            // if error show the error message or show the loader or the data depending on the condition met
                            (pokemons.error) ? (<h2>Oops sorry something just went wrong</h2>) : (pokemons.loading) ? (<PropagateLoader color="#b91c1c" cssOverride={override} size={50} />) :
                                        
                                (<>
                                    <div className="grid grid-rows-4 grid-cols-4 gap-4 md:grid-rows-5 md:grid-cols-3">

                                        {/* looping through the pokemon data  */}
                                        {pokemon?.map((data, index) => {

                                            // data passed down to card component as props
                                            return (<Card pokemonDetails={data} key={index} />)
                            
                                        })}

                                    </div>
                                            
                                    {/* // Pagination component  which contains the button for next and previous
                                    //nextData and prevData passed down to Pagination as props       */}
                                    <Pagination nextPage={pokemons.pokemonRecord.next} prevPage={pokemons.pokemonRecord.previous} />  
                                            
                                </>)
                            }        
                    </>)            
                            
                }

            </div>

        </>
        
    )
    
};

export default SearchPokemon;
