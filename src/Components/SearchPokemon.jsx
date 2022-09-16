// seach component 

const SearchPokemon = () => {

    return (
      
        <>

            <form className="w-2/4 m-auto md:m-auto flex items-center justify-center md:w-11/12 bg-white border-2 border-gray-300 rounded-lg hover:border-red-700 shadow-md shadow-black">

                <input type="search" name="pokemonsearch" id="pokemonsearch" autoComplete="off" placeholder="Seacrh for Pokemon" className="w-full px-3 py-3 flex-auto rounded-lg outline-0" />
                
                <button type="submit" className="text-gray-600 flex-none m-2.5"><i className="fa fa-search text-base1"></i></button>
                
            </form> 
      
        </>
        
    )
    
};

export default SearchPokemon;
