import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Clothes from "./Clothes";
import Cart from "./components/cart";
import Details1 from "./components/Details1";
import cartContext from "./context/cartContext";
import { useContext } from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";

const App = () => {
  const [cartData, setCartData] = useState([]);

  
  
  return (
    
    <div>
    <BrowserRouter>
      <cartContext.Provider value={{ cartData, setCartData }}>
      <Routes>
        <Route exact path="/" element={<Clothes/>} />
        <Route exact path="/details/:name" element={<Details1/>} />
        <Route exact path="/cart" element={<Cart/>} />
      </Routes>
      </cartContext.Provider>
    </BrowserRouter>
    </div>
  );
};
//ReactDOM.render(React.createElement(App), document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
