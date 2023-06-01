import React, { useState } from 'react';
import Login from './Login';
import data from './data';
import "./App.css";

const App=()=>{
  const loginUser={
    username:"lavish@gmail.com",
    password:"admin123"
  }

    const [user,setUser]=useState({email:""});


    //validation or checking if email and password correct or not
    const loginUserFn=(details)=>{
       if(details.email===loginUser.username &&
          details.password===loginUser.password
        ){
          setUser({
            email:details.email,
          });
          console.log(user);
        }else{
          alert("invalid Credentials.kindly check username and password");
        }
    }

return(
  <div className='App'>
    {user.email?(
      <div className='container'>
        <h1>Welcome to EMployee List Page</h1>
        <table border={5} cellPadding={20}>
          <tbody>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Age</td>
              <td>Gender</td>
              <td>EMail</td>
              <td>PhoneNo.</td>
            </tr>
            {data.user.map((user,id)=>{
              return (
                <tr key={id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNo}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    ):(
      <Login loginUserFn={loginUserFn} errors={alert}/>
    )}
  </div>
)
}

export default App;