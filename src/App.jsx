import React from 'react'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import Product from './components/Product'
import Cart from './components/Cart'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
      {/* <h1>Hello I am Nasee Here</h1> */}
      {/* <Counter/> */}
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path='/'element={<Product/>}/>
          <Route path='/cart'element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
