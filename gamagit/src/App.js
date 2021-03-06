import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [usuario, setUsuario] = useState("");
  function handlePesquisa() {
    axios.get("https://api.github.com/users/JoyceKell/repos");
    console.log(usuario);
  }
  return (
    <>
      <p>{usuario}</p>
      <input
        className="usuarioInput"
        placeholder="usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <button type="button" onClick={handlePesquisa}>
        pesquisar
      </button>
    </>
  );
}

export default App;
