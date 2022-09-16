// pokeInfo component

import axios from "axios";

// importation of useSelector and useDispatch from react-redux liberary
import { useSelector, useDispatch } from "react-redux";

// import useEffect which will only activate if the values in the list change.
import { useEffect } from "react";

// importation of fetchPokemonRecord from the store slice folders 
import { fetchPokemonRecord } from "../Store/Slice/PokemonSlice";

import { PropagateLoader } from "react-spinners";

const PokeInfo = () => {

          // image state 
    // const [getPokemonImage, setGetPokemonImage] = useState("");
    
       // useSelector is a hook to access the redux store's state(data)
       const records = useSelector((state) => state.recordsOfPokemon);

       // useDispatch been set here 
       const dispatch = useDispatch();
   
      // useEffect been used here 
       useEffect(() => {
   
           // dispatch is been used here to dispatch an action 
           dispatch(fetchPokemonRecord());

            //    get individual data 
           const getIndividualData = async () => {
               
            const getPokemonData = await axios.get(records.pokemonRecord.url);
            
               const { data } = getPokemonData;
               
            console.log(data,'dddd');
            // setGetPokemonImage(data.sprites.back_default);

           }

           getIndividualData()
          
           // passing a dependency array to the useEffect to only render when changes occurs within the store state 
       }, [dispatch]);

    return (
      
        <div className="container mx-auto p-5 md:container md:mx-auto">
            
            <div className="w-2/4 md:w-full  md:m-auto m-auto p-4 bg-red-500 rounded-lg flex flex-col items-center">
            
                {/* species type  section*/}
                <div className="my-5 mx-auto">

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" alt="specie pic" className="md:w-2/5 m-auto" />
                    
                    <h3 className=" mt-2.5 md:text-sm text-base1 font-medium tracking-tight text-white capitalize text-center">charmander</h3>
                    
                </div>

                {/* content section  */}
                <div className="capitalize">
                        
                    {/* species name section  */}
                    <div className="mb-1">

                        <h2 className="text-white text-xl font-normarl">Species</h2>

                        <p className="text-white text-lg font-extralight mt-2">charmander</p>

                    </div>

                    {/* stats section  */}
                    <div>

                        <h2 className="text-white text-xl font-normarl">Base Stats</h2>

                            <div className="grid grid-cols-3 gap-4 my-2">

                                <div className="bg-gray-200 rounded-lg py-1 px-2 text-center">

                                    <h3 className="text-black font-semibold">Hp</h3>

                                    <span className="text-gray-800">58</span>
                                    
                                </div>

                                <div className="bg-gray-200 rounded-lg py-1 px-2 text-center">

                                    <h3 className="text-black font-semibold">Hp</h3>

                                    <span className="text-gray-800">58</span>
                                    
                                </div>


                                <div className="bg-gray-200 rounded-lg py-1 px-2 text-center">

                                    <h3 className="text-black font-semibold">Hp</h3>

                                    <span className="text-gray-800">58</span>

                                </div>

                                <div className="bg-gray-200 rounded-lg py-1 px-2 text-center">

                                    <h3 className="text-black font-semibold">Hp</h3>

                                    <span className="text-gray-800">58</span>

                                </div>

                                <div className="bg-gray-200 rounded-lg py-1 px-2 text-center">

                                    <h3 className="text-black font-semibold">Hp</h3>

                                    <span className="text-gray-800">58</span>

                                </div>

                            </div>

                        </div>

                        {/* types*/}
                        <div >

                            <h2 className="text-white text-xl font-normarl">Types</h2>

                            <div className="flex gap-2 flex-wrap my-2  text-center">
                            
                                <span className="text-black rounded-full py-1 px-3 bg-gray-200 ">fire</span>

                                <span className="text-black rounded-full py-1 px-3 bg-gray-200 ">fire</span>

                            </div>

                        </div>

                        {/* weight section  */}
                        <div className="my-2">

                            <h3 className="text-white text-xl font-normarl my-1">Weight</h3>

                            <span className="text-white">85 ibs</span>

                        </div>

                        <div>

                        <h2 className="text-white text-xl font-normarl">Moves</h2>

                            <div className="flex my-2 gap-2 flex-wrap">

                                <span  className="text-black rounded-full py-1 px-3 bg-gray-200">h</span>
                                <span  className="text-black rounded-full py-1 px-3 bg-gray-200">hjhm</span>
                                <span className="text-black rounded-full py-1 px-3 bg-gray-200">ulgiykuftycghvjkb</span>
                                <span className="text-black rounded-full py-1 px-3 bg-gray-200">;oijj</span>
                                <span className="text-black rounded-full py-1 px-3 bg-gray-200">kljnjk</span>
                                <span className="text-black rounded-full py-1 px-3 bg-gray-200">n;lkjljnk</span>
                                <span className="text-black rounded-full py-1 px-3 bg-gray-200">lojk</span>
                                <span className="text-black rounded-full py-1 px-3 bg-gray-200">bjk,jhj</span>
                                <span className="text-black rounded-full py-1 px-3 bg-gray-200">j,bh,b</span>
                                <span className="text-black rounded-full py-1 px-3 bg-gray-200">jmgh</span>

                            </div>

                    </div>

                </div>
                
            </div>

        </div>  
        
    )
    
};

export default PokeInfo;
