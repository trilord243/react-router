import React, { useState } from "react";
import { blogdata } from "./blogdata";
function CrearBlog() {
  const [state, setState] = useState({
    tittle: "",
    content: "",
    slug: "",
  });
  const crearBlog = () => {
    blogdata.push({
      tittle: state.tittle,
      content: state.content,
      slug: state.tittle,
    });
  };
  return (
    <>
      <h1>Crea nuevo blog</h1>

      <p>Pon un titulo</p>

      <input
        type="text"
        placeholder="Agrega"
        value={state.tittle}
        onChange={(event) => {
          setState({ ...state, tittle: event.target.value });
        }}
      ></input>
      <p>Agregar contenido </p>
      <input
        type="text"
        value={state.content}
        onChange={(event) => {
          setState({ ...state, content: event.target.value });
        }}
      />
      <button onClick={crearBlog}>Agregar</button>
    </>
  );
}

export default CrearBlog;
