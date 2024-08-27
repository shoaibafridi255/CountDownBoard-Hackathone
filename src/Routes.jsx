import React from 'react'
import { Routes , Route } from 'react-router-dom'
import About from './Frontend/pages/About'
import Contact from './Frontend/pages/Contact'
import SignUp from './Auth/SignUp'
import SignIn from './Auth/SignIn'
import CountDownBoard from './Frontend/pages/CountDownBoard'
import Home from './Frontend/pages/Home'


export default function Index() {
  return (
    <>
    
    <Routes>

       
        <Route path='/' element= { <Home/> }></Route>
        <Route path='/CountDownBoard' element= { <CountDownBoard/> }></Route>
        <Route path='/About' element= { <About/> }></Route>
        <Route path='/Contact' element= { <Contact/> }></Route>

        <Route path='/SignUp' element={ <SignUp/> } ></Route>
        <Route path='/SignIn' element={ <SignIn/> } ></Route>
        <Route path='*' element= { <h1 className='text-center text-white'>404! Page Not Found</h1> }></Route>

    </Routes>
 
    
    
    
    </>
  )
}


