import React from 'react'
import Headerone from './mainmodule/Headerone';


function Aboutus() {

return (
<div>
<Headerone /> <div><a href="/Home" className="backButton" style={{position:'relative',bottom:'2rem'}}> &larr; BACK </a></div>
<h5>Our Aim</h5>
<p>
   At ORGANIC, we provide organic fruits and our primary goal is to provide our customers with fresh and healthy fruits which are produced through natural methods with minimal use of chemical and also at an effordable price.
</p>
<h5>Why we are unique?</h5>
<p>
 Although there are many online stores which provide organic products ,we advice you to visit and use our website to purchase organic fruits ,as this website is particularly designed to provide organic fruits and we also thrive to provide fruits at low price which can be afforded by public,and our website has simple design with easy registration and login process.In simple terms our website is user friendly which makes it stand out from other online webstores.
</p>
<div className="Footer" style={{top:'27rem'}} ><p>Copyright &copy; 2022,All rights reserved </p></div>
</div>
)
}

export default Aboutus;