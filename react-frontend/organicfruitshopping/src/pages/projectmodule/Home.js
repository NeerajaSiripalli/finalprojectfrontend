import React from 'react'
import {Link} from 'react-router-dom';
import background from "./images/fruit2.jpg";
import Headerone from './mainmodule/Headerone.js';



function Home() {
    const myStyle={
        backgroundImage: `url(${background})` ,
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        };
return (
    
<div style={myStyle}>
<Headerone />
<nav>

<div style={{float:'left',margin:'1rem',fontSize:'larger',position:'relative',bottom:'3rem'}}>
     <Link  style={{color:'white',textDecorationLine:'none'}} to= "/Whyorganic">Why Organic ??</Link>
</div>
<div style={{float:'left',margin:'1rem',fontSize:'larger',position:'relative',bottom:'3rem'}}>
     <Link style={{color:'white',textDecorationLine:'none'}} to="/Aboutus">Aboutus</Link>
</div>
<div style={{float:'left',margin:'1rem',fontSize:'larger',position:'relative',bottom:'3rem'}}>
     <Link style={{color:'white',textDecorationLine:'none'}} to="/Contactus">Contactus</Link>
</div>
<div style={{float:'right',margin:'1rem',fontSize:'larger',position:'relative',bottom:'3rem'}}>
     <Link style={{color:'white',textDecorationLine:'none'}} to="/ChangePassword">ResetPassword</Link>
</div>
<div style={{float:'right',margin:'1rem',fontSize:'larger',position:'relative',bottom:'3rem'}}>
     <Link style={{color:'white',textDecorationLine:'none'}} to="/Login">Logout</Link>
</div> 
</nav> 
<div className="button">
<div style={{float:'centre',margin:'3rem',fontSize:'1.5rem'}}>
    <Link style={{color: 'white',textDecorationLine:'none'}} to="/Products">Shop Now</Link> </div>
    </div>
    <div className="Footer" style={{top:'23rem'}}><p>Copyright &copy; 2022,All rights reserved </p></div>
</div>

)
}

export default Home;