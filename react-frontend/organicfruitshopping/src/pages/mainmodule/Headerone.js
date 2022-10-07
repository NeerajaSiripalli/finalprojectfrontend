import React from 'react';
import './cssmodule/Product.css';
import img from './images/Logo4.png';



function Headerone ()
{
  return (
        <div className="Headerone">
          <div className="title_logo">
       <img  style={{height: '3.6rem',  marginRight: '34rem'}} src={img}  alt="Logo"></img>
      </div>
      </div>
      
    )
  
}
export default Headerone;