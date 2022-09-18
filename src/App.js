// importation of the main page 
import { Routes, Route } from "react-router-dom";

import Main from "./Page/Main";

import PokeInfo from "./Page/PokeInfo";

const App = () => {

  return (

    <>
      <Routes>
          
          <Route index element={<Main />}></Route>

          <Route path="/poke/" element={<PokeInfo/>}></Route>

          <Route path="*" element={<p className="text-center">There's nothing here: 404!</p>} />
          
      </Routes>
        
    </>

  )

};

export default App;
