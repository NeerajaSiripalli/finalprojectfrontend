import React,{useState} from 'react'
import {  useNavigate } from "react-router-dom";
import Headerone from './Headerone';
function ForgetPassword(){
    const Navigate = useNavigate();
const[userName,setUserName]= useState(null);
    const[newpassword,setNewpassword]= useState(null);
    const[confirmpassword,setConfirmpassword]=useState(null);
    const[newpasswordError,setNewpasswordError]= useState('');
    const[userNameError,setUserNameError]= useState('');
    const[confirmpasswordError,setConfirmpasswordError]=useState('');
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "userName"){
        setUserName(value);
        }
        if(id ==="newpassword"){
            setNewpassword(value);
        }
        if(id==="confirmpassword"){
            setConfirmpassword(value);
        }
    }
    const handleSubmit = ()=>{
        console.log(userName,newpassword);
        setUserNameError("");
        setNewpasswordError("");
        setConfirmpasswordError("");
        if(userName==null || userName ==''){
            setUserNameError("Please enter User Name");
        }
        if(newpassword ==null || newpassword ==''){
            setNewpasswordError("Please enter New Password");
        }
        if(confirmpassword ==null || confirmpassword ==''){
            setConfirmpasswordError("Please fill Confirm Password");
        }
        if(confirmpassword===newpassword){
            const requestOptions={
                method:"PUT",
                headers:{'Content-type':'application/json'},
            
                body:JSON.stringify({'username':userName,'password':newpassword})
            }
            fetch("http://localhost:8080/userdetails/updatedetails",requestOptions)
            .then((response) =>{
               console.log(response);
               if(response.status==200){
                
                window.location.href ="/Login";
                
               }
            })
        }
         }
    return(
        <div>
        <Headerone/>
        <div className="form">
            <div className="form-body">
<div><a href="/Login" className="backButton"> &larr; BACK </a></div>
<div className="userName">
    <span className="errorMessage">{userNameError}</span><br></br>
    <label className="form__label" for="userName">User Name :</label>
    <input className="form__input" type="text" value={userName} onChange = {(e) => handleInputChange(e)} id="userName" placeholder="User Name"/>
    </div>
    <div className="newpassword">
    <span className="errorMessage">{newpasswordError}</span><br></br>
<label className="form__label" for="newpassword">New Password &nbsp;&nbsp;&nbsp;:</label>
<input className="form__input" type="newpassword" id="newpassword" value={newpassword} onChange = {(e) => handleInputChange(e)} placeholder="New Password"/>
</div>
<div className="confirmpassword">
    <span className="errorMessage">{confirmpasswordError}</span><br></br>
<label className="form__label" for="confirmpassword">Confirm Password &nbsp;&nbsp;&nbsp;:</label>
<input className="form__input" type="confirmpassword" id="confirmpassword" value={confirmpassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
</div>
<div className="footer">
<button onClick={()=>handleSubmit()} type="submit" className="btn">Submit</button>
        </div>
        </div>
        </div>
        </div>
    )
}
export default ForgetPassword;