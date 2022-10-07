import React,{useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import background from "./images/fruit2.jpg";
import Headerone from './Headerone.js'
import Footer from './Footer.js'


function Login() {
    const myStyle={
        backgroundImage: `url(${background})` ,
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        };
       
        
    const Navigate = useNavigate();
    const[userName,setUserName]= useState(null);
    const[password,setPassword]= useState(null);
    const[passwordError,setPasswordError]= useState('');
    const[userNameError,setUserNameError]= useState('');
    const[invalidCredentialsError,setInvalidCredentialsError]= useState('');
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "userName"){
        setUserName(value);
        }
        if(id ==="password"){
            setPassword(value);
        }
    }
    const handleSubmit = ()=>{
        console.log(userName,password);
        setUserNameError("");
        setPasswordError("");
        setInvalidCredentialsError("");

        if(userName==null || userName ==''){
            setUserNameError("Please enter User Name");
        }
        if(password ==null || password ==''){
            setPasswordError("Please enter Password");
        }

        if((userName !=null && userName !='') && (password!=null && password !='')){
            const requestOptions={
                method:"POST",
                headers:{'Content-type':'application/json'},
                body:JSON.stringify({'username':userName,'password':password})
                
            }
           
            fetch("http://localhost:8080/login",requestOptions)
            .then((response) =>{
                console.log(response);
                if(response.status==200){
                 
                    Navigate("/Home")
                 
                }
                if(response.status==401){
                 
                    setInvalidCredentialsError("Invalid Credintials.")
                 
                }
             }
             )
           .catch(err => setInvalidCredentialsError("Invalid User Name or Password"));
        }
        
    }
return (
    <div style={myStyle}>
        <Headerone/>
<div className="form">

<div className="form-body">
<div><a href="/" className="backButton"> &larr; BACK </a></div>
<div className="logintitle"  ><h4>Login </h4></div>
<span style={{color:'red',fontWeight:'bold'}}>{invalidCredentialsError}</span><br></br>
    <div className="userName">
    <span className="errorMessage">{userNameError}</span><br></br>
    <label className="form__label" for="userName">User Name :</label>
    <input className="form__input" type="text" value={userName} onChange = {(e) => handleInputChange(e)} id="userName" placeholder="User Name"/>
    </div>

    <div className="password">
    <span className="errorMessage">{passwordError}</span><br></br>
<label className="form__label" for="password">Password &nbsp;&nbsp;&nbsp;:</label>
<input className="form__input" type="password" id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
</div>
<a href="/ForgetPassword"></a><nav style={{marginTop:'1rem'}}>
<Link to ="/ForgetPassword">forgotpassword ??</Link></nav>

<div class="footer">
<button onClick={()=>handleSubmit()} type="submit" class="btn">Submit</button>
<a href="/Register"></a>
<nav style={{marginTop:'1rem',fontSize:'larger'}}>
<Link to="/Register">Register</Link></nav>
</div>

</div>
</div>
<Footer/>
</div>

)
}

export default Login;