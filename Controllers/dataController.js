import Data from "../modals/dataModel.js"

//get all data
export const GetAllDataController =async(req,res)=>{
  try{
    const data =await Data.find({})

    return res.status(200).send({
        total:data.length,
        success:true,
        message:"YOUR ALL Data",
        data
    })


  } catch(error){
    return res.status(500).send({
        success:true,
        message:"Error in getting the data"
    })

  } 
}

//intensity
export const GetIntensityController=async(req,res)=>{
    try{
        const intensity =await Data.find({})
        const abc=await intensity.map((item)=>item.intensity)
        //return succes 
        return res.status(200).send({
            success:true,
            message:"YOUR ALL Data",
            abc
        })
    }
    catch(error){
            return res.status(500).send({
            success:true,
            message:"Error in getting the data"
        })

    }
}



export const GetLikeHoodController=async(req,res)=>{
    try{
        const intensity =await Data.find({})
        const LikeHood=await intensity.map((item)=>item.likelihood)



        //return succes 
        return res.status(200).send({
            success:true,
            message:"YOUR ALL Data",
            LikeHood
            
        })


    }
    catch(error){
        return res.status(500).send({
            success:true,
            message:"Error in getting the data"
        })

    }
}




export const GetYearController=async(req,res)=>{
    try{
        const intensity =await Data.find({})
        const year=await intensity.map((item)=>item.start_year)



        //return succes 
        return res.status(200).send({

            
            
            success:true,
            message:"YOUR ALL Data",
            year
            
        })


    }
    catch(error){
        return res.status(500).send({
            success:true,
            message:"Error in getting the data"
        })

    }
}

//country



export const GetCountryController=async(req,res)=>{
    try{
        const data =await Data.find({})
        const country=await data.map((item)=>item.country)


        //return succes 
        return res.status(200).send({
            
            success:true,
            message:"YOUR ALL Data",
            country
            
        })


    }
    catch(error){
        return res.status(500).send({
            success:true,
            message:"Error in getting the data"
        })

    }
}





export const GetTopicController=async(req,res)=>{
    try{

        const data =await Data.find({})
        const topic =await data.map((item)=>item.topic)

        //return succes 
        return res.status(200).send({
            success:true,
            message:"YOUR ALL Data",
            topic
        })
    }
    catch(error){
            return res.status(500).send({
            success:true,
            message:"Error in getting the data"
        })

    }
}


export const GetRegionController=async(req,res)=>{
    try{
const data =await Data.find({})
const Region =await data.map((item)=>item.region)

        //return succes 
        return res.status(200).send({
            
            success:true,
            message:"YOUR ALL Data",
            Region
        })


    }
    catch(error){
        return res.status(500).send({
            success:true,
            message:"Error in getting the data"
        })

    }
}


export const GetSectorController=async(req,res)=>{
    try{
         const data =await Data.find({})
         const sector=await data.map((item)=>item.sector)

        //return succes 
        return res.status(200).send({
            success:true,
            message:"YOUR ALL Data",
            sector            
        })


    }
    catch(error){
        return res.status(500).send({
            success:true,
            message:"Error in getting the data"
        })

    }
}



export const GetEndYearController=async(req,res)=>{
    try{
      const data =await Data.find({})
       const end_year=data.map((item)=>item.end_year)
        //return succes 
        return res.status(200).send({
            
            success:true,
            message:"YOUR ALL Data",
            end_year
            
        })


    }
    catch(error){
        return res.status(500).send({
            success:true,
            message:"Error in getting the data"
        })

    }
}


export const GetPestleController=async(req,res)=>{
    try{
      const data =await Data.find({})
       const Pest =await data.map((item)=>item.pestle) 
        //return succes 
        return res.status(200).send({
            success:true,
            message:"YOUR ALL Data",
            Pest
            
        })


    }
    catch(error){
        return res.status(500).send({
            success:true,
            message:"Error in getting the data"
        })

    }
}



export const GetSourceController=async(req,res)=>{
    try{
         const data =await Data.find({})
         const source = await data.map((item)=>item.source)

        //return succes 
        return res.status(200).send({
            success:true,
            message:"YOUR ALL Data",
            source
            
        })


    }
    catch(error){
        return res.status(500).send({
            success:true,
            message:"Error in getting the data"
        })

    }
}
//sample
/*

export const =async(req,res)=>{
    try{
const data =await Data.find({})

        //return succes 
        return res.status(200).send({
            
            success:true,
            message:"YOUR ALL Data",
            
        })


    }
    catch(error){
        return res.status(500).send({
            success:true,
            message:"Error in getting the data"
        })

    }
}
*/