import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Inputdata = ({input,setinput,updatedata,setupdatedata}) => {
  const[Data,setData]=useState({title:"",desc:""});
  useEffect(()=>{
setData({title:updatedata.title,desc:updatedata.desc})

  },[updatedata])
  const headers={
    id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`

}
  const change=(e)=>{
    const {name,value}=e.target;
    setData({...Data,[name]:value});
  }



const submitdata = async () => {
  if (Data.title === "" || Data.desc === "") {
      alert("All fields are required");
  } else {
      try {
          await axios.post("http://localhost:5000/createtask", Data, { headers });
          setData({ title: "", desc: "" });
          setinput("hidden");
      } catch (error) {
          console.error("Error submitting data:", error);
          alert("There was an error submitting the data.");
      }
  }
}

const updatetask = async () => {
  if (Data.title === "" || Data.desc === "") {
      alert("All fields are required");
  } else {
      try {
          await axios.put(`http://localhost:5000/updatetask/${updatedata.id}`, Data, { headers });
          setData({ title: "", desc: "" });
          setupdatedata({id:"",title: "", desc: "" })
          setinput("hidden");
      } catch (error) {
          console.error("Error submitting data:", error);
          alert("There was an error submitting the data.");
      }
  }
}
  return (
    <>
    <div className={`${input} inputdata`}>

    </div>
    <div className={`${input} change`}>
       
        <div className='inputform'>
        <div className='closebtn'>
        <button onClick={()=>{setinput("hidden"); 
          setData({
          title:"",
            desc:""
          })

          setupdatedata({
            id:"",
            title:"",
            desc:""
          })}} >
            <ion-icon name="close-outline"></ion-icon>
            </button>
        </div>
        <div>
<input type='text' placeholder='Title' name="title" value={Data.title} onChange={change}/><br/>

<textarea name="desc" id="" cols="30" rows="10" placeholder='Description...' value={Data.desc} onChange={change}/><br/>
{
  updatedata.id===""?(<button className='submitbtn' onClick={submitdata}>Submit</button>):
  (<button className='submitbtn' onClick={updatetask}>update</button>)
}

</div>
        </div>
    </div>
    </>
  )
}

export default Inputdata