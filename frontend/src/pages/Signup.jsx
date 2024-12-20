import React, { useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import axios from 'axios'
const Signup = () => {
  const history=useNavigate()
  const islogin=useSelector((state)=>state.auth.islogin)
  if(islogin===true)
    {
     history("/")
    }
  const [Data,setdata]=useState(
    {username:"",
      email:"",
      password:""

    })
    
    
    const change=(e)=>{
const {name,value}=e.target;
setdata({...Data,[name]:value})

    }
    const submit=async()=>{
      try{
      if(Data.username==="" || Data.email==="" || Data.password==="")
      {
alert("All fields are required")
      }
      else{
const response=await axios.post("http://localhost:5000/sign",Data)
setdata({username:"",
  email:"",
  password:""})
  alert(response.data.message)
history("/login")
      }
    }
    catch(err)
    {
alert(err.response.data.message)



    }
    }
  return (
    <>
    <div className='signmain'>
        <div className='sign1'>
    <div className='signtext'><h1>SignUp</h1></div>
    <div className='sign2'>
        <input type='text' placeholder='username' name="username" value={Data.username} onChange={change}/><br/>
        <input type='text' placeholder='email' name="email" value={Data.email} onChange={change} required/><br/>
        <input type='password' placeholder='password' name="password" value={Data.password} onChange={change}/><br/>
        <div>
        <button className='signbtn' onClick={submit}>Sign up</button><br/>
        
        </div><br/>
        <Link to="/login" style={{fontSize:"20px"}}>Already have an account ? Login</Link>
        </div>
    </div>
    </div>
    </>
  )
}

export default Signup