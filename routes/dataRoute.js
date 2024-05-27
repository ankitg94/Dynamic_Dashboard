import express from "express";
import { GetAllDataController, GetCountryController, GetEndYearController, GetIntensityController, GetLikeHoodController, GetPestleController, GetRegionController, GetSectorController, GetSourceController, GetTopicController, GetYearController } from "../Controllers/dataController.js";
const route = express.Router()

route.get("/get-all-data",GetAllDataController)
// intensity
route.get("/get-intensity",GetIntensityController)

//likehood
route.get("/get-Likehood",GetLikeHoodController)

//end_year
route.get("/get-endyear",GetEndYearController)

//year 
route.get("/get-Year",GetYearController)

//country
route.get("/get-country",GetCountryController)

//topics
route.get("/get-topics",GetTopicController)
//region
route.get("/get-region",GetRegionController)
route.get("/get-sector",GetSectorController)
route.get("/get-pestle",GetPestleController)
route.get("/get-source",GetSourceController)

export default route

