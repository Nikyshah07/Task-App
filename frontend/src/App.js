import './App.css';
import All from './pages/All';
import Home from './pages/Home';
import {Routes,Route, useNavigate} from 'react-router-dom'; 
import Important from './pages/Important';
import Completed from './pages/Completed';
import Incompleted from './pages/Incompleted';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authactions } from './store/auth';
function App() {
  const navigate=useNavigate();
  const islogin=useSelector((state)=>state.auth.islogin)
  const dispatch=useDispatch()
  useEffect(()=>{
   if(localStorage.getItem("id") && localStorage.getItem("token"))
   {
    dispatch(authactions.login())
   }
   else if(islogin===false)
   {
    navigate("/sign")
   }
  },[])
  
  return (
   <>
   <div className='maindiv'>
   
    <Routes>
    <Route path='/' element={<Home/>}>
    <Route index element={<All/>}></Route>
    <Route path='/important' element={<Important/>}></Route>
    <Route path='/completed' element={<Completed/>}></Route>
    <Route path='/incompleted' element={<Incompleted/>}></Route>
    </Route>
    <Route path="/sign" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    </Routes>
   
   </div>
   </>
  );
}

export default App;
