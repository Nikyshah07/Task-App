import React, { useState,useEffect } from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import { useDispatch , useSelector} from 'react-redux'
import axios from 'axios'
import { authactions } from '../store/auth'
const Login = () => {
  const history=useNavigate()
  const islogin=useSelector((state)=>state.auth.islogin)
  // if(islogin===true)
  //   {
  //    history("/")
  //   }
  useEffect(() => {
    if (islogin) {
        history("/");
    }
}, [islogin, history]);

  const [Data,setdata]=useState(
      {username:"",
        password:""
  
      })
const dispatch=useDispatch()
    const change=(e)=>{
const {name,value}=e.target;
setdata({...Data,[name]:value})

    }
//     const submit=async()=>{
      
//       if(Data.username==="" ||  Data.password==="")
//       {
// alert("All fields are required")
//       }
//       else{
// const response=await axios.post("http://localhost:5000/login",Data)
// setdata({username:"",
 
//   password:""})
  
//   localStorage.setItem("id",response.data.id)
//   localStorage.setItem("token",response.data.token)
//   dispatch(authactions.login())
//   history("/")
      
//     }
//   }

const submit = async (e) => {
  e.preventDefault(); // Prevent default form submission
  if (Data.username === "" || Data.password === "") {
      alert("All fields are required");
      return;
  }

  try {
      const response = await axios.post("http://localhost:5000/login", Data);
      setdata({ username: "", password: "" });
      
      // Store user ID and token in local storage
      localStorage.setItem("id", response.data.id);
      localStorage.setItem("token", response.data.token);
      
      // Dispatch login action
      dispatch(authactions.login());
      
      // Redirect to home page
      history("/");
  } catch (error) {
      // Check if the error response indicates invalid credentials
      if (error.response && error.response.status === 401) {
          alert("Invalid credentials. Please try again.");
      } else {
          console.error('Login failed:', error);
          alert("An error occurred. Please try again later.");
      }
  }
};

  return (
    <>
    <div className='logmain'>
        <div className='log1'>
    <div><h1 style={{textAlign:"center"}}>Login</h1></div>
    <div className='log2'>
        <input type='text' placeholder='username' name="username" value={Data.username} onChange={change}/><br/>
        <input type='password' placeholder='password' name="password" value={Data.password} onChange={change}/><br/>
        <div>
        <button onClick={submit} className='logbtn'>Login</button><br/><br/>
        
        </div>
        <Link to="/sign" style={{fontSize:"20px"}}>Don't have  an account ? Sign up</Link>
        </div>
    </div>
    </div></>
  )
}

export default Login

