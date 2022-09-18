// card component
import 'animate.css';

import axios from "axios";

import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

// import { singlePokemonData } from "../Helper/singlePokemonData";
import { fetchSinglePokemonRecord } from "../Store/Slice/PokemonSlice";

// importation of useSelector and useDispatch from react-redux liberary
import {  useDispatch } from "react-redux";

const Card = ({pokemonDetails}) => {

    const dispatch = useDispatch();

    const history = useNavigate();
   
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
  
       //useEffect been used here
    
    const fetchpokemon = () => {

        dispatch(fetchSinglePokemonRecord(pokemonDetails));

        history('/poke')

    }

    return (
      
        <>

            <div onClick={() => fetchpokemon() } className="cursor-pointer hover:transition-all animate__animated animate__backInLeft">

                <div className="rounded shadow-white shadow-md bg-red-500 hover:bg-red-600 w-full flex justify-center items-center gap-4 md:gap-2 p-4 md:px-5 md:m-auto m-auto">

                    <img src={getPokemonImage}  alt="specie pic" className="w-2/4  md:w-2/5" />

                    <h1 className="md:text-sm text-base1 font-medium tracking-tight text-white capitalize">{ pokemonDetails.name}</h1>

                </div>

            </div>

            
        </>
        
    )
    
};

export default Card;
