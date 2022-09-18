
import { useDispatch } from "react-redux";

import { fetchPokemonRecord } from "../Store/Slice/PokemonSlice";

const Pagination = ({changePage}) => {

    const dispatch = useDispatch();

    const getNextPokemonData = () => {

        dispatch(fetchPokemonRecord(changePage.next));

    };

    const getPreviousPokemonData = () => {

        dispatch(fetchPokemonRecord(changePage.previous));

    };

    return (
      
        <>
        
            <div className="flex md:gap-4 flex-row w-1/3 justify-around align-center mx-auto my-5 pt-10">

                {(!changePage.previous) ? (null ): (<button onClick={() => getPreviousPokemonData()} className="px-6 py-2  border-2 border-red-700 rounded hover:bg-red-700 hover:text-white shadow-md hover:transition-colors">Previous</button>)}

                <button onClick={() =>  getNextPokemonData()} className="px-6 py-2  border-2 border-red-700 rounded hover:bg-red-700 hover:text-white shadow-md hover:transition-colors">Next</button>

            </div>
            
        </>

    )
    
}

export default Pagination;
