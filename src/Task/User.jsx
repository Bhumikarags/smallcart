import React, { useEffect } from 'react'
import data from './data'
import Cart from './Cart'
import { useDispatch, useSelector } from 'react-redux'
import {ADD_TO_CART} from "./Reducer"
import { useNavigate} from 'react-router-dom'
import "./user.css"
import { FaCartPlus,FaRegUserCircle,FaGlobe,FaTruckMoving  } from "react-icons/fa";
import $ from "jquery"




export default function User() {
    const dispatch=useDispatch();
    const nav =useNavigate();
    // const data=useSelector(state=>state.main.select )

    useEffect(()=>{
      
     
      $(".box").on("click",function(){
        $(this).addClass("large");
        $(".img").addClass("size");
      })
      $(".box").on("dblclick",function(){
        $(this).removeClass("large");
        $(".img").removeClass("size");
      })
    
      
    },[])
  return (
   <>
   {/* -------------nav---------------- */}
   <nav>
    <div className="mid">
      <div className="logo">
        
     
        <FaGlobe/>
        
        <i className='li_item'> <h3>Craxkart</h3></i>
      </div>
       <div className="list">
          <FaRegUserCircle className='li_item'/>
         <FaTruckMoving onClick={()=>{nav("/orders")}} className='li_item'/>
         <FaCartPlus onClick={()=>{nav("/cart")}}  className='li_item'/>
       </div>
    </div>
   </nav>
   {/* -------------products------------ */}
   <section>
   
    <div className="section">
   {

     data.map((x,i)=>{

      
        return(
         
        <div key={i} className='box'>
            <div className="img"><img src={x.img} alt="network error!" /></div> 
           
            <h3>{x.prod}</h3>
            <h4>{x.price}</h4>
          <button onClick={()=>{dispatch(ADD_TO_CART({value:x}))}}>Add to cart</button>
          
        </div>
        
        )

      })
   }

   
   </div>
   </section>
   </>
  )
}
