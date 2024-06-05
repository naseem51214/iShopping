import React,{useState} from "react";
import { Products } from "../data.js";
import { useSelector, useDispatch } from "react-redux";
import {addToCart,selectCartItems} from '../redux/cartSlice'
function Product() {
    const [text,setText]=useState(0);
    const dispatch = useDispatch()
    const cartItem = useSelector(selectCartItems)
    console.log(cartItem)

    const handleAddToCart = (item)=>{
        dispatch(addToCart(item))
    }
  return (
    <>
      <div className="container" >
        <div className="row" >
          {Products.map((item) => (
            <div key={item.id} className="container col-md-4 my-5" 
            style={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }}>
              <div className="card " style={{ width: "18rem" }}>
                <div className="p-3 d-flex justify-content-center align-items-center">
                <img src={item.image} className=" card-img-top" alt="..." style={{
                    width:"200px",
                    height:"200px",
                    borderRadius:"10px"
                }}/>
                </div>
                <div className="card-body text-light text-center">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    {/* {item.description} */}
                    
                  </p>
                  <div style={{display:"flex",flexDirection:"column", width:"250px",
                  }}>
                  <button className="btn btn-primary my-3">{item.price}{" USD"}</button>
                  <button className="btn btn-warning mx-3" onClick={()=>handleAddToCart(item)}>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
