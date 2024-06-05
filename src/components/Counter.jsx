import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increaseby1,decreaseby1,increaseby10,decreaseby10 } from '../redux/counterSlice'


function Counter() {
    const count = useSelector((a)=>a.counter)
    const dispatch = useDispatch();

  return (
    <>
        <h1>{count}</h1> 
        <button onClick={()=> dispatch(increaseby1())}>increaseby1</button>
        <button onClick={()=> dispatch(decreaseby1())}>decreaseby1</button>
        <button onClick={()=>dispatch(increaseby10())}>increaseby10</button>
        <button onClick={()=>dispatch(decreaseby10())}>decreaseby10</button>
    </>
  )
}

export default Counter
