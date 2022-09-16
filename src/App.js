// importation of the main page 
import Main from "./Page/Main";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import PokeInfo from "./Components/PokeInfo";

const App = () => {

  return (

    <>
      
      <BrowserRouter>

        <Routes>
          
          <Route index element={<Main />}></Route>

          <Route path="/pokeinf" element={<PokeInfo />}></Route>

        </Routes>
        
      </BrowserRouter>
       
    </>

  )

};

export default App;
