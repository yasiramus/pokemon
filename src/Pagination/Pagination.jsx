// importation of use dispatch for dispacting action 
import { useDispatch } from "react-redux";

// importation of fetchPokemonRecord from slice folder 
import { fetchPokemonRecord } from "../Store/Slice/PokemonSlice";

//destructer  nextPage, prevPage and passed as props from the search component which is the parent component of the paginaton section 
const Pagination = ({ nextPage, prevPage }) => {
   
    const dispatch = useDispatch();

    // the next page func  for dispatch of next action url 
    const getNextPokemonData = () => {

        // the nextPage is a url link that contains data which is passed to fetchPokemonRecord func or action 
        // which which make an api call to the next url link 
        dispatch(fetchPokemonRecord(nextPage));

    };

    // the previous page func  for dispatch of next action url 
    const getPreviousPokemonData = () => {

        // the prevPage is a url link that contains data which is passed to fetchPokemonRecord func or action
        // but the iniatial data is null 
        // which which make an api call to the previous url link
        dispatch(fetchPokemonRecord(prevPage));

    };

    return (
      
        <>
        
            <div className="flex md:gap-4 flex-row w-1/3 justify-around align-center mx-auto my-5 pt-10">
                
                {/* if the prvious contain an expyt value it should return null else it should show the previous button */}
                {(!prevPage) ? (null): (<button onClick={() => getPreviousPokemonData()} className="px-6 py-2  border-2 border-red-700 rounded hover:bg-red-700 hover:text-white shadow-md hover:transition-colors">Previous</button>)}

                <button onClick={() =>  getNextPokemonData()} className="px-6 py-2  border-2 border-red-700 rounded hover:bg-red-700 hover:text-white shadow-md hover:transition-colors">Next</button>

            </div>
            
        </>

    )
    
}

export default Pagination;
