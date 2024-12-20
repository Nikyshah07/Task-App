import axios from 'axios'
import React,{useState} from 'react'

function Cards({home,setinput,data,setupdatedata}) {
    const [Data,setData]=useState()
    const headers={
        id:localStorage.getItem("id"),
        authorization:`Bearer ${localStorage.getItem("token")}`

    }
const handlecomplete=async(id)=>{
        try{
      const response=await axios.put(`http://localhost:5000/updatecomptask/${id}`,
       {},
      {headers}
);}catch(err){
console.log(err)
}}

const handleimptask=async(id)=>{
        try{
       const response=await axios.put(`http://localhost:5000/updateimptask/${id}`,
       {},
       {headers}
);}catch(err){
console.log(err)
}}

const deletetask=async(id)=>{
    try{
   const response=await axios.delete(`http://localhost:5000/deletetask/${id}`,
   
   {headers}
);
console.log(response.data.message)
}catch(err){
console.log(err)
}}

const handleupdate=async(id,title,desc)=>{
    setinput("fixed")
    setupdatedata({id:id,title:title,desc:desc})
}
  return (
    
    <div className='alltask'>
       
        {

            data && data.map((items,i) =>(
                <div>
                <div key={i} className='alltask1'>
                    <h3>{items.title}</h3>
                    <p>{items.desc}</p>
                    
                    
                    <div className='alltask2'>
                        <div className='all2btn'>
                    <button  style={{ backgroundColor: items.complete === false ? 'red' : 'green' }} onClick={()=>handlecomplete(items._id)}>
                        {items.complete===true?"Completed":"Incompleted"}
                        </button>
                    </div>
                    <div className='all2btn2'>

                        <button onClick={()=>handleimptask(items._id)}>
                            {items.important === false ?
                        <ion-icon name="heart-outline"></ion-icon>: <ion-icon name="heart" style={{color:"red"}}></ion-icon>}
                        </button>
                    {home!=="false" &&( 
                        <button>
                    <ion-icon name="create-outline" onClick={()=>handleupdate(items._id,items.title,items.desc)}></ion-icon>
                            </button>)
}

                        <button onClick={()=>deletetask(items._id)}>
                            <ion-icon name="trash-outline"></ion-icon>
                            </button>
                        </div>
                        </div>
                    </div>
                </div>    
            ))
        }
        {home==="true" && 
        <div className='addtask'>
        <button onClick={()=>setinput("fixed")}><ion-icon name="add-outline"></ion-icon></button>
            <h2 className='addtaskh2'>Add Task</h2>
        </div>
        }
        
    </div>
  )
}

export default Cards



