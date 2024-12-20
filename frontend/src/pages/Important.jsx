import React,{useEffect, useState} from 'react'
import Cards from '../components/Cards'
import axios from 'axios'

function Important() {
  const[Data,setData]=useState();
  const headers={
    id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`
  
  }
    useEffect(()=>{
      const fetch=async()=>{
          const response=await axios.get("http://localhost:5000/getimptask",
              {headers}
          );
  
  setData(response.data.data)
  }
      fetch()
  })
  return (
    <div>
      <Cards home={"false"} data={Data}/>
      </div>
  )
}

export default Important