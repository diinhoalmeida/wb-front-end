import { BrowserRouter, Routes as Routed, Route } from "react-router-dom";
import { LandingPage, WalletPage } from '../pages/index';

const Routes = () => {
   return(  
       <BrowserRouter>
            <Routed>
                <Route element={<LandingPage />} path="/" />
                <Route element={<WalletPage />} path="/walletpage" />
            </Routed>
       </BrowserRouter>
   )
}

export default Routes;