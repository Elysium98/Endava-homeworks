import "./App.css";
import { Welcome } from "./components/Welcome";
import { useState } from "react";
import { TextField } from "@material-ui/core";
import { Products } from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Deposit } from "./components/Deposit";
import Nav from "./common/Nav";
import Product from "./components/Product";
import AddProduct from "./components/Add-product";

function App() {
  const [value, setValue] = useState();

  const handleChangeInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <Welcome name={value} />
      <TextField
        id="filled-basic"
        label="Introduce your name !"
        variant="filled"
        onChange={handleChangeInput}
      />

      <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Products></Products>}></Route>
          <Route path="/deposit" element={<Deposit></Deposit>}></Route>
          <Route path="/product/:id" element={<Product></Product>} />
          <Route path="/new" element={<AddProduct></AddProduct>} />
          <Route path="/edit/:id" element={<AddProduct></AddProduct>} />
          <Route path="*" element={<div>Not found</div>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
