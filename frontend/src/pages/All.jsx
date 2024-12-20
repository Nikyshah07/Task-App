import React, { useState,useEffect } from 'react'
import Cards from '../components/Cards'
import Inputdata from '../components/Inputdata'
import axios from "axios"

function All() {
  const [input,setinput]=useState("hidden")
const [Data,setData]=useState()
const [updatedata,setupdatedata]=useState({
  id:"",
  title:"",
  desc:""
})
const headers={
  id:localStorage.getItem("id"),
  authorization:`Bearer ${localStorage.getItem("token")}`

}
  useEffect(()=>{
    const fetch=async()=>{
        const response=await axios.get("http://localhost:5000/getalltask",
            {headers}
        );
// console.log(response);
setData(response.data.data)
}
    if(localStorage.getItem("id") && localStorage.getItem("token")){
      fetch()
    }
})
  return (
    <>
    <div>
      <div className='startingadd'>
      <button onClick={()=>setinput("fixed")}><ion-icon name="add-outline"></ion-icon></button>
      </div>
     {Data &&<Cards home={"true"} setinput={setinput} data={Data.tasks} setupdatedata={setupdatedata}/>}
      </div>
      <div>
<Inputdata input={input} setinput={setinput} updatedata={updatedata} setupdatedata={setupdatedata}/>
      </div>
      </>
  )
}

export default All