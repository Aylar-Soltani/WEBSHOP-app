import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              WEB SHOP
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>

            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/product/:id" component={ProductPage}></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
