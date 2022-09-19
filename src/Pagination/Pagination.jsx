
import { useDispatch } from "react-redux";

import { fetchPokemonRecord } from "../Store/Slice/PokemonSlice";

const Pagination = ({ nextPage, prevPage }) => {
   
    const dispatch = useDispatch();

    const getNextPokemonData = () => {

        dispatch(fetchPokemonRecord(nextPage));

    };

    const getPreviousPokemonData = () => {

        dispatch(fetchPokemonRecord(prevPage));

    };

    return (
      
        <>
        
            <div className="flex md:gap-4 flex-row w-1/3 justify-around align-center mx-auto my-5 pt-10">

                {(!prevPage) ? (null ): (<button onClick={() => getPreviousPokemonData()} className="px-6 py-2  border-2 border-red-700 rounded hover:bg-red-700 hover:text-white shadow-md hover:transition-colors">Previous</button>)}

                <button onClick={() =>  getNextPokemonData()} className="px-6 py-2  border-2 border-red-700 rounded hover:bg-red-700 hover:text-white shadow-md hover:transition-colors">Next</button>

            </div>
            
        </>

    )
    
}

export default Pagination;
