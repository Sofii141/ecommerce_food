import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './page/Home.jsx'
import About from './page/About.jsx'
import Menu from './page/Menu.jsx'
import Contact from './page/Contact.jsx'
import Login from './page/Login.jsx'
import NewProduct from './page/NewProduct.jsx'
import Signup from './page/signup.jsx'
import { store } from './redux/index.js'
import { Provider } from 'react-redux'
import Cart from './page/Cart.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App></App>}>
            <Route index element={<Home></Home>}></Route>
            {/* <Route path='/menu' element={<Menu></Menu>}></Route> */}
            <Route path='/menu/:id' element={<Menu></Menu>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/newproduct' element={<NewProduct></NewProduct>}></Route>
            <Route path='/signup' element={<Signup></Signup>}></Route>
            <Route path='cart' element={<Cart></Cart>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
