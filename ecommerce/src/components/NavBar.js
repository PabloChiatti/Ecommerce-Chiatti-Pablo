import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/Productos">Productos</Link>
    </li>
    <li>
      <Link to="/SobreNosotros">Sobre Nosotros</Link>
    </li>
    <li>
      <Link to="/Revendedor">Ser Revendedor</Link>
    </li>
  </div>
  );
}
export default navbar;