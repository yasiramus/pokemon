// card component

import {PropagateLoader} from "react-spinners";

const override = {
    
    margin: "auto",

  };

const Card = ({pokemon, loading}) => {
    
    return (
      
        <>
            
            {
                loading === false ? ( 

                    // <div className="flex m-auto w-2/4 justify-center items-center" >

                        <PropagateLoader color="#36d7b7" cssOverride={override} size={70}/>
                        
                    // </div>    
                ) : (

                    pokemon.splice( 0, 16 ).map( ( item, index ) => {

                        return (
                
                            <a href="#" key={index}>
                
                                <div className="rounded shadow-black shadow-lg bg-sky-500/100 w-full flex justify-center items-center gap-4 md:gap-2 p-4 md:px-5 md:m-auto m-auto">
                
                                    <img src={item.sprites.front_default} alt="specie pic" className="w-2/4  md:w-2/5"/>
                
                                     <h1 className="md:text-sm text-base1 font-medium tracking-tight text-black capitalize">{item.name}</h1>
                
                                </div>
                
                            </a>
                            
                        )
                        
                    } )
                )
            }
            
        </>
        
    )
    
};

export default Card;
