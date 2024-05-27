import React, { useEffect, useState } from 'react'
import D3Graph from "../D3Element/D3Graph"
import axios from "axios"
import toast from 'react-hot-toast'


// import D3Graph from "../D3Element/D3Graph"

const Intensity = () => {

  const [intensity,SetIntensity]=useState([])
  
  //get the intensity
  const GetIntensityData =async()=>{
    const {data} = await axios.get("/api/v1/data/get-intensity")
    try{
    if(data?.success){
         toast.success("Your all Data is given") 
        SetIntensity(data?.abc || [])
        console.log(intensity)
    }
}catch(error){
    toast.error("Error in getting the Data")

}
}
  useEffect(()=>{
   GetIntensityData() 
  },[])



  return (
    <>
    <h1>Intensity Occurrences</h1>
      {intensity.length > 0 ? (
        <D3Graph data={intensity} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

 export default Intensity
