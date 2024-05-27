import React from 'react'
import { Link } from 'react-router-dom';
import { BiSolidDashboard } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";
import { FaRegCalendarTimes } from "react-icons/fa";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { MdOutlineTopic } from "react-icons/md";
import { IoEarthOutline } from "react-icons/io5";

import Intensity from '../PagesElement/Intensity';
import BarCharts from '../PagesElement/BarCharts';

import YearChart from '../PagesElement/YearChart';
import CountryCharts from '../PagesElement/CountryCharts';
import TopicCharts from '../PagesElement/TopicCharts';
import RegionChart from '../PagesElement/RegionChart';




const Sidebar = () => {
  return (
    <>
      <div className='h-screen flex'>
        <div className='w-1/4 bg-gray-100 h-screen' >
        <div className="p-4 flex flex-col items-center">
          <ul className="space-y-2 ">
           <Link  to="/Intensity" className="flex items-center font-bold p-2 w-36 text-gray-100 rounded-lg bg-gray-50 hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700">  
           <BiSolidDashboard/>
            <span className="ml-2">Intensity </span>
            
          </Link>
          <Link  to="/Likelihood" className="flex items-center font-bold p-2 w-36 p-2 text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700">  
          <AiFillLike />
            <span className="ml-2">Likelihood</span>
          </Link>
          <Link  to="/year" className="flex items-center  font-bold p-2 w-36 p-2 text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700">  
            <FaRegCalendarTimes/>
            <span className="ml-6">Year</span>
          </Link>
          <Link  to="/Country" className="flex items-center  font-bold p-2 w-36 p-2 text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700">  
            <FaFontAwesomeFlag/>
            <span className="ml-6">Country</span>
          </Link>
          <Link  to="/Topics" className="flex items-center  font-bold p-2 w-36 p-2 text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700">  
           <MdOutlineTopic/>
            <span className="ml-6">Topics</span>
          </Link>
          <Link  to="/Region" className="flex items-center  font-bold p-2 w-36 p-2 text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700">  
           <IoEarthOutline/>
            <span className="ml-6">Region</span>
          </Link>
         
      </ul>
    </div>
        </div>
        <div className='w-3/4  h-screen'>
        
        <div className="p-4">
          <ul className="space-x-2 flex flex-row m-2">
          
          <Link to="/SectorFilter"  className="flex items-center font-bold  w-36 h-12  text-gray-900 rounded-lg bg-red-500 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700">  
            <span className="ml-2">Sectors</span>
            
          </Link>
          <Link  to="/endYearFilter" className="flex  items-center font-bold  w-36  h-12  text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700">  
          
            <span className="ml-6">EndYear</span>
          </Link>
          <Link  to="/countryfilter" className="flex items-center  font-bold  w-36 h-12  text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700">  
           
            <span className="ml-6">Country</span>
          </Link>
          <Link  to="/topicFilter" className="flex items-center  font-bold  w-36 h-12  text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700">  
          
            <span className="ml-6">Topics</span>
          </Link>
          <Link  to="/regionFilter" className="flex items-center  font-bold  w-36 h-12  text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700">  
          
            <span className="ml-6">Region </span>
          </Link>
          <Link  to="/PestFilter" className="flex items-center  font-bold  w-36 h-12  text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700">  
            
            
            <span className="ml-6">PEST</span>
          </Link>
          <Link  to="/sourceFilter" className="flex items-center  font-bold  w-36 h-12  text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700">  
            
            
            <span className="ml-6">Source</span>
          </Link>
         
      </ul>
    </div>
    {/* end of filers */}
    {/* mainsection */}
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
    <h1 className='font-bold text-4xl'>Intensity Graph</h1>
      <Intensity/>  
    </div>
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
    <h1 className='font-bold text-4xl'>LikeHood Graph</h1>      
      <BarCharts/>
      
    
    </div>
  
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
    <h1 className='font-bold text-4xl'>Year Graph</h1>
      <YearChart/>
    
    </div>
    {/* Country Charts */}
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
    <h1 className='font-bold text-4xl'>Country Graph</h1>
      <CountryCharts/>
    
    </div>
{/* topic Charts */}
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
    <h1 className='font-bold text-4xl'>Topic Graph</h1>
      <TopicCharts/>
    
    </div>


    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
    <h1 className='font-bold text-4xl'>RegionChart</h1>
      <RegionChart/>
    
    </div>
  
  
  
  
        </div>
      </div>
    </>
  )
}

export default Sidebar
