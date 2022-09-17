// card component

import axios from "axios";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Card = ({pokemonDetails}) => {

    // image state 
    const [getPokemonImage, setGetPokemonImage] = useState("");

    // useffect for displaying of image 
    useEffect(() => {

        const fetchImg = async () => {
            
            const getPokemonData = await axios.get(pokemonDetails.url);
            
            const { data } = getPokemonData;
            
            setGetPokemonImage(data.sprites.back_default);

        }

        fetchImg();

    },[pokemonDetails]);
  

    return (
      
        <>

            <Link to="/pokeinf">

                <div className="rounded shadow-white shadow-md bg-red-500 w-full flex justify-center items-center gap-4 md:gap-2 p-4 md:px-5 md:m-auto m-auto">

                    <img src={getPokemonImage}  alt="specie pic" className="w-2/4  md:w-2/5" />

                    <h1 className="md:text-sm text-base1 font-medium tracking-tight text-white capitalize">{ pokemonDetails.name}</h1>

                </div>

            </Link>

            
        </>
        
    )
    
};

export default Card;
