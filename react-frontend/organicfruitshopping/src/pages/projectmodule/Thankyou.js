import React from 'react'
import Headerone from './mainmodule/Headerone';



function Thankyou() {
   
return (
<div>

<Headerone /> <div><a href="/Home" className="backButton" style={{position:'relative',bottom:'2rem'}}> &larr; BACK </a></div>
    <h2 style={{top:'5rem'}}>order confirmed</h2>
<p>Thank you for visiting ORGANIC</p>
<div className="Footer" style={{top:'27rem'}} ><p>Copyright &copy; 2022,All rights reserved </p></div>
</div>

)
}

export default Thankyou;