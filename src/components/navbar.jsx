/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import cart from '../images/cart.png';

const NavBar = ({totalCounters, counters}) => {
  
  const totales = counters.map(count=> count.price * count.value)
  
  let total=0;

  totales.forEach(i=> total += i)
  
  return (

    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={cart} width="50" height="50" alt="Chango"></img>
         <span className="navbar-shopping">Shopping</span> 
        <span className="badge badge-pill badge-primary badge-descrip">
          {totalCounters}
        </span>
         <span className="navbar-total">TOTAL: ${total} </span> 
      </a>
    </nav>
  );
};

export default NavBar;
