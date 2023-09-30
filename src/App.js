import './App.css';
import { BrowserRouter , Route, Routes } from "react-router-dom";

import Landing from './components/Landing';
import Xrp from './components/xrp';
import Aifi from './components/aifi';
import Usdt from './components/usdt';
function App() {
  return (


    <BrowserRouter>
    <Routes>

  <Route path ="/" element={<Landing/>} />
  <Route path='/xrp' element={<Xrp/>}/>
  <Route path='/usdt' element={<Usdt/>}/>
  <Route path='/aifi' element={<Aifi/>}/>
    </Routes>
  </BrowserRouter>

    );

  }

  export default App;
