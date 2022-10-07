import React, {useState} from 'react';
import './cssmodule/Register.css'
import validator from 'validator';
import Footer from './Footer.js';
import background from './images/fruit2.jpg';
import Headerone from './Headerone';


function Register() {
    const myStyle={
        backgroundImage: `url(${background})` ,
        height:'100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        };
    

const [userName, setUserName] = useState(null);
const [email, setEmail] = useState(null);
const [password,setPassword] = useState(null);
const [validationError,setValidationError]=useState('');
const [passwordError,setPasswordError]=useState('');
const [userNameError,setUserNameError]=useState('');


const handleInputChange = (e) => {
const {id , value} = e.target;
if(id === "userName"){
setUserName(value);
}
if(id === "email"){
setEmail(value);
}
if(id === "password"){
setPassword(value);
}


}

const handleSubmit = () => {

console.log(userName,email,password);
setValidationError("");
setUserNameError("");
setPasswordError("");  

if(userName==null || userName ==''){
    setUserNameError("Please enter User Name");
}


if( password !=null && password !=''){
if(!validator.isStrongPassword(password,{
minLength: 10,
minNumbers:2,
minSymbols : 1,
minUppercase:1})){
    setPasswordError("password must have 10 letters,including 1 symbol,2 numbers and 1 uppercase");
    return false;
}
}else{
    setPasswordError("Please enter password");  
    return false;
}

if(email !=null && email !=''){
    
    if(!validator.isEmail(email)){
        
            setValidationError("Invalid email");
            return false;
        }
}else{
    setValidationError("Please enter email"); 
    return false;
}
const requestOptions={
    method:"POST",
    headers:{'Content-type':'application/json'},

    body:JSON.stringify({'username':userName,'email':email,'password':password})
}
fetch("http://localhost:8080/userdetails/savedetails",requestOptions)
.then((response) =>{
   console.log(response);
   if(response.status==200){
    alert('User added successfully. ')
       window.location.href ="/Login";
    
   }else{
    alert('User Already exists.'); 
    return false;
   }
}
)

    }
return(
    
    <div style={myStyle}>
  <Headerone />
      
    
<div className="form">

<div><a href="/" className="backButton" style={{bottom:'12rem'}}> &larr; BACK </a></div> 
    
<div className="form-body">
<div className="logintitle"  ><h4>Register Here </h4></div>
<div className="usernameRegister">
<span className="errorMessage">{userNameError}</span> <br></br>
<label className="form__label" for="userName">User Name :</label>
<input className="form__input" type="text" value={userName} onChange = {(e) => handleInputChange(e)} id="userName" placeholder="User Name"/>
</div>

<div className="email">
<span className="errorMessage">{validationError}</span> <br></br>
<label className="form__label" for="email">Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:</label>
<input type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
</div>

<div className="passwordRegister">
<span className="errorMessage">{passwordError}</span> <br></br>
<label className="form__label" for="password">Password &nbsp;&nbsp;:</label>
<input className="form__input" type="password" id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
</div>



</div>
<div class="footer">
<button onClick={()=>handleSubmit()}  style={{right:'5rem'}}type="submit" class="btn">Submit</button>
</div>

</div>
<Footer/>
</div>


)
}



export default Register