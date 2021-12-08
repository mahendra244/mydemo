import React from "react";
import CartItem from "./CartItem";
function App() {
  const name= 'mahiu';
  const isloggedin = true;
  return (
    <div className="App">
     {/* <h1>Cart</h1> */}
     <CartItem />
    </div>
  );
}

export default App;
