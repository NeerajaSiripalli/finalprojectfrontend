import React from "react";
import background from './images/fruit2.jpg'
import {Outlet} from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from './Footer.js'
import Headerone from "./Headerone";

const Layout = () => {
    const myStyle={
        backgroundImage: `url(${background})` ,
        height:'100vh'
    }
    
return (
    <>
<div style={myStyle}>
<nav>
  
<div>
    <Link to="/"></Link>
</div>
< Headerone />
<div style={{float:'right',margin:'1rem' ,fontSize:'larger',fontFamily:'sans-serif',position:'relative',bottom:'3rem'}}>
   <Link style={{color:'white'}} to="/Login">Login</Link>
</div>
<div style={{float:'right',margin:'1rem' ,fontSize:'larger',fontFamily:'sans-serif',position:'relative',bottom:'3rem'}}>
     <Link style={{color:'white'}} to="/Register">Register</Link>
</div> 


</nav>

<div style={{float:'none',paddingTop:'13rem',fontSize:'150px',fontFamily:'sans-serif',fontStyle:'revert-layer'}}><span style={{color:'red'}}>O</span><span style={{color:'green'}}>R</span>
<span style={{color:'brown'}}>G</span><span style={{color:'voilet'}}>A</span><span style={{color:'blue'}}>N</span>
<span style={{color:'pink'}}>I</span><span style={{color:'darkolivegreen'}}>C</span></div>
<Footer/>
<Outlet />
</div>
</>

);
};

export default Layout;