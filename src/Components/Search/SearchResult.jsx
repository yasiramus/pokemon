import axios from "axios";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const SearchResult = ({ filteredData }) => {

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

                <div className="rounded shadow-white shadow-md bg-red-500 hover:bg-red-600 w-full flex justify-center items-center gap-4 md:gap-2  sm:gap-1 p-4 md:px-5 md:m-auto m-auto">
        
                    <img src={getPokemonImage}  alt="specie pic" className=" md:w-2/4 md:m-auto" />

                    <h1 className="md:text-sm md:m-auto text-base1 font-medium tracking-tight text-white capitalize">{filteredData.name}</h1>

                </div>

            </Link>
  
        </>
        
    )
    
}

export default SearchResult;
