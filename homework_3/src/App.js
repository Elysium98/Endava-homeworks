import "./App.css";
import { Welcome } from "./components/Welcome";
import { useState } from "react";
import { Input, TextField } from "@material-ui/core";
import { Products } from "./components/Products";

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
      <Products></Products>
    </div>
  );
}

export default App;
