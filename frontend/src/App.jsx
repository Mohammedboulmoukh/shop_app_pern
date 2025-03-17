
import { Toaster } from "react-hot-toast";
//components
import NavBar from "./components/NavBar";
// import the pages
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutUs from "./pages/AboutUs";

import {Routes, Route} from "react-router-dom";



function App() {
  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300" data-theme="forest">

      
      <NavBar /> 
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/product/:id" element={<ProductPage/>} />
        <Route path="/AboutUs" element={<AboutUs/>} />
      </Routes>

      <Toaster/>


    </div>
  );
}

export default App;
