import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './Page/Home.jsx'
import AboutMultynet from './Page/Services.jsx'
import Product from './Page/Work.jsx'
import News from './Page/WhyXotek.jsx'
import Contact from './Page/Contact.jsx'
import CompanyProfile from './Page/Dropdowns/CompanyProfile.jsx'
import CompanyCulture from './Page/Dropdowns/CompanyCulture.jsx'
import VideoCenter from './Page/Dropdowns/VideoCenter.jsx'
import HomeEntertainment from './Page/Dropdowns/HomeEntertainment.jsx'
import ParallaxZoom from './components/carousel3D/ParallaxZoom.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<Layout/>}>

       <Route path='' element={<Home/>}/>
       <Route path='/about-multynet' element={<AboutMultynet/>}/>
       <Route path='/product' element={<Product/>}/>
       <Route path='/news' element={<News/>}/>
       <Route path='/contact' element={<Contact/>}/>

       <Route path='/company-profile' element={<CompanyProfile/>}/>
       <Route path='/company-culture' element={<CompanyCulture/>}/>
       <Route path='/video-center' element={<VideoCenter/>}/>

       <Route path='/home-entertainment' element={<HomeEntertainment/>}/>


       {/* Projects with parallax zoom routes  */}
       <Route path="/" element={<ParallaxZoom />} />
        <Route path="/section1" element={<div>Welcome to Section 1</div>} />
        <Route path="/section2" element={<div>Welcome to Section 2</div>} />
        <Route path="/section3" element={<div>Welcome to Section 3</div>} />
        <Route path="/section4" element={<div>Welcome to Section 4</div>} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
     <RouterProvider router={router}/>

  </StrictMode>,
)
