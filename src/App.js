import React from "react";
import { Routes, Route } from "react-router-dom";
import { Register } from "./components/Register/register";
import { reducer } from "./components/contextApi/Reducer";
import { context } from "./components/contextApi/ContextValue";
import Contact from "./components/Contact/contact";
import ShopPage from "./components/ShopPage/ShopPage";
import Home from "./components/Home/home";
import Shop from "./components/Shop/shop";
import Preview from "./components/Preview/preview";
import "./App.css";

function App() {
  let [state, dispatch] = React.useReducer(
    reducer,
    React.useContext(context.ContextValue)
  );

  return (
    <div>
      <context.ContextValue.Provider value={{ state, dispatch }}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="shop" element={<Shop />}>
              <Route path="products" element={<ShopPage />}></Route>
              <Route path="product/:productId" element={<Preview />} />
              <Route path="register" element={<Register />}></Route>
              <Route path="contact" element={<Contact />}></Route>
            </Route>
          </Routes>
        </div>
      </context.ContextValue.Provider>
    </div>
  );
}

export default App;
