import { Outlet } from "react-router-dom";
import Header from "./component/Header"
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";
import axios from 'axios'
import { setDataProduct } from './redux/productSlice'
import { useDispatch, useSelector } from "react-redux";


const App = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts(); 
  }, []);

  const getProducts = async () => {
    const res = await axios.get(`${import.meta.env.VITE_APP_SERVER_DOMIN}/products`);
    dispatch(setDataProduct(res.data));
  }

  return (
    <div>
      <Toaster></Toaster>
      <div>
        <Header />
        <main className="pt-16 min-h-[calc(100vh)] md:mx-5 mx-3">
          <Outlet/>
        </main>
      </div>
    </div>

  );
};

export default App;
