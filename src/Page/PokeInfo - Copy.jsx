// pokeInfo componen

import axios from "axios";

// importation of useSelector and useDispatch from react-redux liberary
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import { PropagateLoader } from "react-spinners";

import 'animate.css';

const PokeInfo = () => {

    const [detailedData, setDetailed] = useState();
    
    let {name} = useParams();

    //loading state 
    const getLoading = useSelector((state) => state.recordsOfPokemon.loading);

    const getLoadingd = useSelector((state) => state.recordsOfPokemon.pokemonRecord.results?.find(data => data?.name === name));
    
    useEffect(() => {

        const fetchData = async () => {
            
            try {
                
                let url = getLoadingd.url;

                const getPokemonData = await axios.get(url);
        
                const { data } = getPokemonData;
            
                setDetailed(data);
                
            } catch (error) {

                console.log(error.message);
            }
    
        }
    
        fetchData();

    }, [getLoadingd])
    
    const override = {

        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        padding:"5rem 0"

    };

    // const getPokemonDetails = useSelector((state) => state.recordsOfPokemon.singlePokemonRecord);

    // single pokemon data
    // const getPokemonDetails = useSelector((state) => state.recordsOfPokemon.singlePokemonRecord.find(data => data.name === name ))
    
    return (
      
        <div className="container mx-auto p-5 md:container md:mx-auto animate__animated animate__backInDown">

                <div className="mb-2">
                    
                    <Link to="/" className="md:text-sm text-base1 font-medium tracking-tight text-blacl capitalize text-left">Back Home</Link>
                    
                </div>
            
            {
                
                getLoading ? (<PropagateLoader color="#b91c1c" cssOverride={override} size={50}/>) : (
                    
                <div className="w-2/4 md:w-full md:m-auto m-auto p-4 bg-red-500 rounded-lg flex flex-col items-center ">
            
                    {/* species type  section*/}
                    <div className="my-5 mx-auto">
    
                        {/* <img src={getPokemonDetails.sprites.back_default} alt="specie pic" className="md:w-2/5 m-auto" /> */}
                        
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${detailedData?.id}.svg`} alt="specie pic" className="md:w-2/5 m-auto" />
                            
                        <h3 className=" mt-2.5 md:text-sm text-base1 font-medium tracking-tight text-white capitalize text-center">{detailedData?.name}</h3>
                    </div>
    
                    {/* content section  */}
                    <div className="capitalize">
                            
                        {/* species name section  */}
                        <div className="mb-1">
    
                            <h2 className="text-white text-xl font-normarl">Species</h2>
    
                            <p className="text-white text-lg font-extralight mt-2">{detailedData?.species?.name}</p>
    
                        </div>
    
                        {/* stats section  */}
                        <div>
    
                            <h2 className="text-white text-xl font-normarl">Base Stats</h2>
    
                            <div className="grid grid-cols-3 gap-4 my-2">
    
                                {
                                    detailedData?.stats?.map((value, index) => {
    
                                        return (<div className="bg-gray-200 rounded-lg py-1 px-2 text-center" key={index}>
    
                                            <h3 className="text-black font-semibold">{value.stat.name}</h3>
    
                                            <span className="text-gray-800">{value.base_stat}</span>
    
                                        </div>)
                                    })
    
                                }
    
                            </div>
    
                        </div>
    
                        {/* types*/}
                        <div >
    
                            <h2 className="text-white text-xl font-normarl">Types</h2>
    
                            <div className="flex gap-2 flex-wrap my-2  text-center">
                                
                                {
                                    detailedData?.types?.map((value, index) => {
    
                                        return (
                                           
                                            <div key={index}>
    
                                                <span className="text-black rounded-full py-1 px-3 bg-gray-200 ">{value.type.name}</span>
                                            
                                            </div>
                                            
                                        )
                                    })
                              }
    
                            </div>
    
                        </div>
    
                        {/* weight section  */}
                        <div className="my-2">
    
                            <h3 className="text-white text-xl font-normarl my-1">Weight</h3>
    
                            <span className="text-white lowercase">{detailedData?.weight}<span>lbs</span></span>
    
                        </div>
    
                        <div>
    
                            <h2 className="text-white text-xl font-normarl">Moves</h2>
    
                            <div className="flex my-2 gap-2 flex-wrap">
                                {
                                    
                                    detailedData?.moves?.slice(0,20).map((value, index) => {
                            
                                        return (
                            
                                            <div key={index} className="m-1.5">
    
                                                <span className="text-black rounded-full py-1 px-3 bg-gray-200">{value.move.name}</span>
                                                
                                            </div>    
                                        )
                                    })
                                    
                                }
                            </div>
                            
                        </div>
    
                    </div>
    
                </div>
                    
                )
           }
                
        </div>
        
    )
    
};

export default PokeInfo;
