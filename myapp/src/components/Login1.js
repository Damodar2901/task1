import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './login1.css'

const Login1 = () => {
    const data=useLocation().state.SubmitedData;
    const navigate = useNavigate();
    const [loginData, setLoginData]= useState({
      email:"",
      password:"",
    })

    const handleChange=(e)=>{
        const{name, value}=e.target;
        setLoginData({
          ...loginData,
          [name]: value,
        })
      }
  

    const handleSubmit = (e) => {e.preventDefault();
        // navigate('/Dashboard', {state:{ Submitteddata: loginData}});

        if(data.Email===loginData.email && data.Password===loginData.password){
          navigate('/reg', {state:{ Submitteddata: loginData}});
        }
        else{
            alert("Worng Credencials")
          navigate('/')
        }
      }
  

  return (
    <div className='con'>
    <div className='Logincon'>
        
<form onSubmit={handleSubmit}>
       <div>
        <label htmlFor="email">Email:</label><br />
        <input
           type="email"
           placeholder="Email"
           name='email'
           value={loginData.email} onChange={handleChange}
          
         />
       </div>
        <div>
          <label htmlFor="password">Password:</label><br />
          <input
           type="password"
           placeholder="Password"
           name='password'
           value={loginData.password} onChange={handleChange}
          
         />
        </div>
         <div ><a href="/Register">Forget Password</a></div>
        <div> <button onClick={handleSubmit}>Sign In</button></div>
        
</form>
</div>


    </div>
  )
}

export default Login1