import React from "react";
import { useSelector } from "react-redux";
import {selectCartItems,selectCartTotalPrice} from '../redux/cartSlice'
import { Link } from "react-router-dom";
function Navbar() {

    const cartItem = useSelector(selectCartItems);
    const totalPrice = useSelector(selectCartTotalPrice)
    console.log(totalPrice)

  return (
    <>
    
      <div className="nav-bar sticky-top " style={
        {
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
        }
      }>
        <Link to={"/"} className="left" style={{
            textDecoration:"none",
            color:"white",
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            margin:"2px"
            }}>
          <h3>iShopping</h3>
        </Link>
        <div className="middle">
          <button className="btn btn-warning">
            <h7>Total Price = {totalPrice}{" USD"}</h7>
          </button>
        </div>
        <Link to={"/cart"} className="right">
          <button type="button" className="btn btn-primary position-relative">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartItem.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </Link>
      </div>
      
    </>
  );
}

export default Navbar;
