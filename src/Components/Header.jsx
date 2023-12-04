import React from "react";
import { Link } from "react-router-dom";

function Header(){
  return (
    <header>
      <h2>eu sou a header</h2>
      <Link to="/">Inicio</Link>
      <Link to="/Sobre">Sobre</Link>
    </header>
  )
}
export default Header