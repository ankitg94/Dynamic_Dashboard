import React, { Suspense, lazy } from 'react';
import { BrowserRouter,Routes, Route  } from 'react-router-dom';
import Loader from './components/Loader';

// import HomePage from './Pages/HomePage';

const Home = lazy(() => import('./Pages/HomePage'));
const Dash =lazy(()=>import('./Pages/AdminPage'))
const Intensity=lazy(()=>import('./PagesElement/Intensity.js'))
const LikeHoods =lazy(()=>import('./PagesElement/BarCharts.js'))
const Year =lazy(()=>import('./PagesElement/YearChart.js'))
const Country=lazy(()=>import('./PagesElement/CountryCharts.js'))
const Topics=lazy(()=>import('./PagesElement/TopicCharts.js'))
const Region=lazy(()=>import('./PagesElement/RegionChart.js'))
// filter
const TopicFilter =lazy(()=>import('./PagesFilter/SectorChartFilter.js'))
const EndYearFilter=lazy(()=>import('./PagesFilter/EndYearFilter.js'))
const CountryFilter=lazy(()=>import('./PagesFilter/CountryFilter.js'))
const TopicFilters=lazy(()=>import('./PagesFilter/TopicFilter.js'))
const RegionFilter=lazy(()=>import('./PagesFilter/RegionFilter.js'))
const PestFilter =lazy(()=>import('./PagesFilter/PestFilter.js'))
const SourceFilter=lazy(()=>import('./PagesFilter/SourceFilter.js'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
       <Routes> 
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Dash/>}/>
        <Route path="/Intensity" element={<Intensity/>}/>
        <Route path="/Likelihood" element={<LikeHoods/>}/>
        <Route path="/year" element={<Year/>}/>
        <Route path="/Country" element={<Country/>}/>
        <Route path="/Topics" element={<Topics/>}/>
        <Route path="/Region" element={<Region/>}/>

        {/* filter */}
        <Route path='/SectorFilter' element={<TopicFilter/>}/>
        <Route path='/endYearFilter' element={<EndYearFilter/>}/>
        <Route path='/countryfilter' element={<CountryFilter/>}/>
        <Route path='/topicFilter' element={<TopicFilters/>}/>
        <Route path='/regionFilter' element={<RegionFilter/>}/>
        <Route path="/sourceFilter" element={<SourceFilter/>}/>
        <Route path='/PestFilter' element={<PestFilter/>}/>
        
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
