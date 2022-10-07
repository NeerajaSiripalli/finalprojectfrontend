import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import {useNavigate} from 'react-router-dom';

import Headerone from './Headerone';
function Payment(){
  
  const Navigate=useNavigate();

  const onToken=(token)=>{
    console.log(token);
    Navigate("/Thankyou")
    
  };
  return(
    <div className="payment">
<Headerone /> 
<div><a href="/Products" className="backButton" style={{position:'relative',bottom:'2rem'}}> &larr; BACK </a>
<h3>To pay with card please click on the button below</h3>
      <StripeCheckout
      token={onToken}
      name="Payment"

      stripeKey="pk_test_51LpupfSDt7M1CwqrqyscmHln8aGER4ogtH3EdtYJDEJZZ8s1pKa8TaT3ojK4ryMqGtrtvPIYH4CKQ9rOzwVc1IhJ00VjauM3RZ"/>
      <div className="Footer" style={{top:'30rem'}} ><p>Copyright &copy; 2022,All rights reserved </p></div>
    </div>
    </div>

  )
}
export default Payment;