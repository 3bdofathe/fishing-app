
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Routes, Route } from "react-router-dom";
import Home1 from "./pages/Home1/Home1";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ProductDesc from "./components/ProductDesc/ProductDesc";
import ShoppinCartProvider from "./context/SoppingCartContext";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import ShoppingFavourite from "./pages/ShoppingFavourite/ShoppingFavourite";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Payment1 from "./pages/Payment/Payment1";
import Payment2 from "./pages/Payment/Payment2";
import Payment3 from "./pages/Payment/Payment3";
import Payment4 from "./pages/Payment/Payment4";
import Payment5 from "./pages/Payment/Payment5";
import Roote from "./pages/Roote";


function App() {

  return (
    <ShoppinCartProvider>
      <Routes>
        <Route path="/" element={<Roote />}>
          <Route index element={<Home1 />} />          
          <Route path="/product" element={<ProductDesc />} />
          <Route path="/favourite" element={<ShoppingFavourite />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/payment1" element={<Payment1 />} />
          <Route path="/payment2" element={<Payment2 />} />
          <Route path="/payment3" element={<Payment3 />} />
          <Route path="/payment4" element={<Payment4 />} />
          <Route path="/payment5" element={<Payment5 />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ScrollToTop />
      <ToastContainer />
    </ShoppinCartProvider>
  );
}

export default App;
