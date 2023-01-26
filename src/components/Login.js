import React,{useEffect, useState} from "react";
 
import{useNavigate} from 'react-router-dom'
const Login =()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem
        ("user");
        if(auth)
        {
            navigate('/Studentinfo')
        }
    })
    const handleLogin= async()=>{
        console.warn("email,password",email,password);
        let result = await fetch('http://localhost:7676/login',{
            method: 'post',
            body: JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            },
        });
        result = await result.json()
        console.warn(result);
        if(result.name)
        {
            localStorage.setItem("user",JSON.stringify(result));
            navigate('/Studentinfo')
        }else{
            alert("invalid username or password")
        }
        
    }
    return(
        <div className="register">
            <h1>Login</h1>
           

            <input className="inputBox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter Email" />

            <input className="inputBox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Enter Password" />

            <button onClick={handleLogin} className="appButton" type="appbutton">Sign Up</button>
        </div>
    )
}
export default Login;