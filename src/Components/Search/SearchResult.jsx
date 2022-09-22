// axios importation
import axios from "axios";

// useEffect and useState importation
import { useEffect, useState } from "react";

// Link importation 
import { Link } from "react-router-dom";

// thefilteredData has been passed here as prop from the main page which the parent component of this component 
const SearchResult = ({ filteredData }) => {

    // pokemon image state 
    const [getPokemonImage, setGetPokemonImage] = useState("");

    //useffect for displaying of image 
    useEffect(() => {

        //fetching of image from individual pokemon 
        const fetchImg = async () => {
            
            // making an api call to individual pokemon 
            const getPokemonData = await axios.get(filteredData.url);

            // access to pokemon data 
            const { data } = getPokemonData;
            
            // access to image 
            setGetPokemonImage(data.sprites.back_default);

        };

        fetchImg();

    },[filteredData]);
    
    return (
      
        <>
            <Link to={`/pokemon/${filteredData.name}`} className="cursor-pointer hover:transition-all animate__animated animate__backInLeft">

                <div className="rounded shadow-white shadow-md bg-red-500 hover:bg-red-600 w-full  md:h-20 flex justify-center items-center gap-4 md:gap-0  sm:gap-0 p-4  md:px-8 md:m-auto m-auto">
        
                    <img src={getPokemonImage} loading="lazy" alt="specie pic" className=" md:w-2/4 md:m-auto" />

                    <h1 className="md:text-sm md:m-auto text-base1 font-medium tracking-tight text-white capitalize">{filteredData.name}</h1>

                </div>

            </Link>
  
        </>
        
    )
    
}

export default SearchResult;
