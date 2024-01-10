import React from 'react'
import User from "./Task/User"
import Cart from './Task/Cart'
import { Link, Route, Routes } from 'react-router-dom'
import Order from './Task/Order'


export default function App() {
  return (
   <>
 <Routes>

    <Route path='/' element={<User/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/orders' element={<Order/>}></Route>
 </Routes>

 {/* <Link to={"/user"}>Home</Link> */}
 {/* <Link to={"/cart"}></Link> */}
   </>
  )
}
