// card component
import 'animate.css';

import axios from "axios";

import { useEffect, useState } from "react";

import { useNavigate,Link } from "react-router-dom";

// import { fetchSinglePokemonRecord } from "../Store/Slice/PokemonSlice";

// importation of useSelector and useDispatch from react-redux liberary
// import {  useDispatch } from "react-redux";

//destructer  pokemonDetailsand passed as props from the main component which is the parent component of the card section 
const Card = ({pokemonDetails}) => {

    // const dispatch = useDispatch();

    // const history = useNavigate();
   
    // image state 
    const [getPokemonImage, setGetPokemonImage] = useState("");

    const [getPokemon, setGetPokemon] = useState("");

    //useffect for displaying of image 
    useEffect(() => {

        //fetching of image from individual pokemon 
        const fetchImg = async () => {
            
            // making an api call to individual pokemon 
            const getPokemonData = await axios.get(pokemonDetails.url);

            // access to pokemon data 
            const { data } = getPokemonData;
            
            setGetPokemon(data.name)
            // access to image 
            setGetPokemonImage(data.sprites.back_default);

        };

        fetchImg();

    },[pokemonDetails]);

    
    // this for fetching a single data 
    // const fetchpokemon = () => {
    //     dispatch(fetchSinglePokemonRecord(pokemonDetails));
    //     history(`/pokemon/${pokemonDetails.name}`)
    // }
    
    return (
      
        <>
            {/* <div onClick={() => fetchpokemon() }className="cursor-pointer hover:transition-all animate__animated animate__backInLeft"> */}

            <Link to={`/pokemon/${getPokemon}`} className="cursor-pointer hover:transition-all animate__animated animate__backInLeft">

                <div className="rounded shadow-white shadow-md bg-red-500 hover:bg-red-600 w-full flex justify-center items-center gap-4 md:gap-2  sm:gap-1 p-4 md:px-5 md:m-auto m-auto">
                        
                    {/* <img src={getPokemonImage}  alt="specie pic" className="w-2/4  md:w-2/5" /> */}
                    <img src={getPokemonImage}  alt="specie pic" className=" md:w-2/4 md:m-auto" />

                    <h1 className="md:text-sm md:m-auto text-base1 font-medium tracking-tight text-white capitalize">{ pokemonDetails.name}</h1>

                </div>

            </Link>

            {/* </div> */}
        </>
        
    )
    
};

export default Card;
