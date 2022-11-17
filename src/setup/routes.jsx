import { BrowserRouter, Routes as Routed, Route } from "react-router-dom";
import { LandingPage } from '../pages/index';

const Routes = () => {
   return(  
       <BrowserRouter>
            <Routed>
                <Route element={<LandingPage />} path="/" />
            </Routed>
       </BrowserRouter>
   )
}

export default Routes;