import React, { useState }  from "react";
import "./App.css"

const Login=({loginUserFn,error})=>{
    const [details,setDetails]=useState({email:"",password:""});


    //data submission 
    const handleSubmit=(e)=>{
        e.preventDefault();
        loginUserFn(details);
    }
   return(
    <div className="login">
        <h1>Login Component</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <h1>Welcome to our Page</h1>
                <h2>Login Form</h2>
                <br/>
                <br/>
                <label>Enter Username or email :</label>
                <br/> <br/>
                <input 
                type="text"
                name="email"
                id="email"
                onChange={(e)=>setDetails({...details,email:e.target.value})}
                />

                <br/><br/>   
            </div>

            <div className="form-group">
                <label>Enter password :</label>
                <br/> <br/>
                <input 
                type="password"
                name="password"
                id="password"
                onChange={(e)=>setDetails({...details,password:e.target.value})}
                />
                <br/><br/>   
            </div>
            <div className="form-group">
                <button onClick={handleSubmit} value="Login">
                    Login
                </button>
            </div>
        </form>
    </div>
   
   )
}

export default Login;