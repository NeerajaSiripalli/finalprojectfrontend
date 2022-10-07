import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Whyorganic from './pages/Whyorganic';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Products from './pages/Products';
import ForgetPassword from './pages/ForgetPassword';
import ChangePassword from './pages/ChangePassword';
import Payment from './pages/Payment';
import Logout from './pages/Logout';
import Thankyou from './pages/Thankyou';
import './pages/images/fruit2.jpg';
import './pages/fruit5.jpg';





function App() {
  const myStyle={
    height:'100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    };
   

return (
  
  
<div className="App">
  
  <div style={myStyle}>
    
<BrowserRouter>

<Routes>

<Route path="/" element={<Layout />}></Route>
<Route path="Whyorganic" element={<Whyorganic />} />
<Route path="Aboutus" element={<Aboutus />} />
<Route path="Contactus" element={<Contactus />} />
<Route path="Login" element={<Login />} />
<Route path="Register" element={<Register />} />
<Route path="Home" element={<Home />} />
<Route path="Products" element={<Products />} />
<Route path="ForgetPassword" element ={<ForgetPassword/>} />
<Route path="Payment" element={<Payment />} />
<Route path="ChangePassword" element={<ChangePassword/>} />
<Route path="Logout" element={<Logout/>} />
<Route path="Thankyou" element={<Thankyou/>} />

</Routes>

</BrowserRouter>

</div>
</div>
);
}

export default App;
