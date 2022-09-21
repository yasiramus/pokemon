// importation of Routes and route from react-router-dom
import { Routes, Route } from "react-router-dom";

// importation of the main page
import Main from "./Page/Main";

import PokeInfo from "./Page/PokeInfo";

const App = () => {

  return (

    <>
      <Routes>

        {/* the main page*/}
        <Route index element={<Main/>}></Route>
        
        {/* pokemon Info page  */}
        <Route path="/pokemon/:name" element={<PokeInfo/>}></Route>

        {/* 404 route  */}
        <Route path="*" element={<p className="text-center">There's nothing here: 404!</p>} />
          
      </Routes>
        
    </>

  )

};

export default App;
