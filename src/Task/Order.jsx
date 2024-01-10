import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RMV } from './Reducer2';
import "./user.css"
import { useNavigate } from 'react-router-dom';
import { FaHome,FaCartPlus} from "react-icons/fa";

export default function Order() {
    const orderData =useSelector(state=>state.custom.orders)
    const dispatch=useDispatch();
     const nav=useNavigate();

    console.log(orderData);
  return (
<>
{/* -----------------------------nav--------- */}

<nav className="cartnav">
      <div className="mid cmid">
        <div>
      <FaHome onClick={()=>{nav("/")} } className='li_item'/>
      My Orders
      </div>
      <FaCartPlus onClick={()=>{nav("/cart")}}  className='li_item'/>
      </div>
    </nav>

    {/* ------------------------------ */}
    <section>
      <div className="section">  
    {
      orderData.map((d)=>{
       return(
        <>
        <div className="box"> 
        <div>
        <div className="img"><img src={d.img} alt="network error!" /></div> 
        <h3>{d.prod}</h3>
        <h3>{d.price}</h3>
        <p>Qty:{d.Qty}</p>
        {/* <button onClick={()=>dispatch(RMV(d))}>Remove from cart</button> */}
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
