// pokeInfo componen

// importation of useSelector and useDispatch from react-redux liberary
import { useDispatch, useSelector } from "react-redux";

import { PropagateLoader } from "react-spinners";

import { Link, useParams } from "react-router-dom";

import 'animate.css';
import { fetchPokemonRecord } from "../Store/Slice/PokemonSlice";
import { useEffect, useState } from "react";
import axios from "axios";

const PokeInfo = ({detailed}) => {

    const dispatch = useDispatch();
    // console.log(detailed.results);

    const endPoint = "https://pokeapi.co/api/v2/pokemon/?limit=16";
    //useEffect been used here
  

    const b = () => {

        const arr = detailed.results;

    // console.log(arr.length);

        const result = [];

        // for (let index = 0; index < arr.length; index++) {
        //     const element = array[index];
            
        // }


    }

b()
    const datas = () => {

        if (detailed.results) {
            
            console.log(detailed.results.name);
            // const getName = (name) => {
        
            //     const dat = detailed.results.find(data => data.name === name)

            //     console.log(dat, 'dat');
            // } 
            
            // getName();
        } else {
            
           console.log("no data was found");
                
        };
        
    }

    datas()

    useEffect(() => {

        // dispatch is been used here to dispatch an action 
        dispatch(fetchPokemonRecord(endPoint));
       
        // passing a dependency array to the useEffect to only render when changes occurs within the store state 
    }, [dispatch]);

    const {id} = useParams();

    const [getAllData, setPokemonData] = useState();

    // const getName = (name) => {
        
    //     return detailed?.find(data => data.name === name);
    // };

    // const oneData = getName('pidgey')

    // console.log(oneData?.join("")?.name)
    
    const getData = async() => {
        
        try {
          
            const justOne = await axios.get('knhgj');

            const { data } = justOne;

            console.log(data);
            setPokemonData(data);
            
        } catch (error) {
            console.log(error.message);
      }
    }

    // getData();
// console.log(getAllData);
    
    const override = {

        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        padding:"5rem 0"

    };
    
    const getPokemonDetails = useSelector((state) => state.recordsOfPokemon.singlePokemonRecord);

    return (
      
        <div className="container mx-auto p-5 md:container md:mx-auto animate__animated animate__backInDown">

                <div className="mb-2">
                    
                    <Link to="/" className="md:text-sm text-base1 font-medium tracking-tight text-blacl capitalize text-left">Back Home</Link>
                    
                </div>
            
            {/* { */}
                
                {/* // getLoading ? (<PropagateLoader color="#b91c1c" cssOverride={override} size={50}/>) : ( */}
                    
                <div className="w-2/4 md:w-full md:m-auto m-auto p-4 bg-red-500 rounded-lg flex flex-col items-center ">
            
                    {/* species type  section*/}
                    <div className="my-5 mx-auto">
    
                        <img src={getPokemonDetails?.sprites?.back_default} alt="specie pic" className="md:w-2/5 m-auto" />
                        
                        <h3 className=" mt-2.5 md:text-sm text-base1 font-medium tracking-tight text-white capitalize text-center">{getPokemonDetails?.name}</h3>
                    </div>
    
                    {/* content section  */}
                    <div className="capitalize">
                            
                        {/* species name section  */}
                        <div className="mb-1">
    
                            <h2 className="text-white text-xl font-normarl">Species</h2>
    
                            <p className="text-white text-lg font-extralight mt-2">{getPokemonDetails?.species?.name}</p>
    
                        </div>
    
                        {/* stats section  */}
                        <div>
    
                            <h2 className="text-white text-xl font-normarl">Base Stats</h2>
    
                            <div className="grid grid-cols-3 gap-4 my-2">
    
                                {
                                    getPokemonDetails?.stats?.map((value, index) => {
    
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
                                    getPokemonDetails?.types?.map((value, index) => {
    
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
    
                            <span className="text-white lowercase">{getPokemonDetails?.weight}<span>lbs</span></span>
    
                        </div>
    
                        <div>
    
                            <h2 className="text-white text-xl font-normarl">Moves</h2>
    
                            <div className="flex my-2 gap-2 flex-wrap">
                                {
                                    
                                    getPokemonDetails?.moves?.slice(0,20).map((value, index) => {
                            
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
                    
                {/* )
           } */}
                
        </div>
        
    )
    
};

export default PokeInfo;
