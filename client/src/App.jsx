import React from 'react'
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import {Home} from './pages/Home'
import {Movies} from './pages/Movies'
import {Favourite} from './pages/Favourite'
import {SeatLayout} from './pages/SeatLayout'
import {MyBookings} from './pages/MyBookings'
import { MovieDetails } from './pages/MovieDetails'
import {Toaster} from 'react-hot-toast'

// import Home from './pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom'

const App = ()=>{

  const isAdminRoute = useLocation().pathname.startsWith('/admin') //! to get the path of things that starts with admin

  return (
    <>
      <Toaster/>
      { !isAdminRoute && <Navbar/> }
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/movies' element={<Movies/>} />
          <Route path='/movies/:id' element={<MovieDetails/>} />
          <Route path='/movies/:id/:date' element={<SeatLayout/>} />  
          <Route path='/favourite' element={<Favourite/>} />
          <Route path='/my-bookings' element={<MyBookings/>} />
        </Routes>
      { !isAdminRoute && <Footer/>}

    </>
  )
}

export default App 