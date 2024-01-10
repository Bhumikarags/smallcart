import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ORD } from './Reducer2';
import { useNavigate } from 'react-router-dom';
import { DEC, INC,REMOVE } from './Reducer';
import { RMV } from './Reducer2';
import "./user.css"
import { FaHome,FaTruckMoving } from "react-icons/fa";
export default function Cart() {
  const nav = useNavigate();
    const cartData = useSelector(state=>state.main.select);
   const dispatch=useDispatch();
    // const c=useSelector(state=>state.main.c)

 
  return (
    <>
    <nav className="cartnav">
      <div className="mid cmid">
        <div>
      <FaHome onClick={()=>{nav("/")} } className='li_item'/>
      Cart
      </div>
      <FaTruckMoving onClick={()=>{nav("/orders")}} />
      </div>
    </nav>
{/* -------------------------------------- */}

    <section>
      {/* <h1 onClick={()=>{nav("/orders")}}>MyOrders</h1> */}
      
       
       <div className="section">
       {
        cartData.map((g)=>{
         
            return(

                <>
                <div className='box'>
                <div className="img"><img src={g.img} alt="network error!" /></div> 
                  <h3>{g.prod}</h3>
                  <h3>{g.price}</h3>
                   {/* <button onClick={()=>{dispatch(ORD({value:g}))}}>order</button> */}
                  <div style={{display:"flex"}}>

                  <div className='qty'>
                  <p>Qty:{g.Qty} 
                  <button style={{width:"20px"}} onClick={()=>dispatch(INC({val:g}))}>+</button> 
                  <button style={{width:"20px"}} onClick={()=>dispatch(DEC({val:g}))}>-</button> 
                  </p>
                  </div>

                  </div>
                  <div className='odiv'>
                  <button onClick={()=>{dispatch(ORD({value:g}))}}>order</button>
                  <button onClick={()=>dispatch(REMOVE(g))}>Remove from cart</button>
                  </div>
                </div>
                </>
            )
        })
       }
       </div> 
       </section>
    </>
  )
}
