import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AllProduct from '../component/AllProduct';
import { addCarItem } from '../redux/productSlice.js'

function Menu() {

  const { id } = useParams();
  console.log(id)
  const productData = useSelector((state) => state.product.productList);

  //data del producto por id enviado
  const productDisplay = productData.filter(el => el._id === id);

  const dispatch = useDispatch();

  const handleAddCartProduct = (e) => {
    //objeto que contiene información sobre el producto a añadir al carrito.
    dispatch(addCarItem(productDisplay));
  };

  return (
    <div className='p-2 md:p-4'>

      <div className='w-full bg-slate-100 max-w-4xl max-h-[600px] m-auto md:flex md:p-8 p-4'>

        <div className='m-auto max-w-[350px] p-5'>
          <img src={productDisplay[0].image} className=' shadow-lg drop-shadow-md h-full transition-transform duration-300 hover:scale-105'></img>
        </div>
        <div className='flex flex-col gap-2 p-5'>

          <div className=''>
            <h3 className='font-semibold text-slate-700 capitalize text-2xl md:text-5xl'>{productDisplay[0].name}</h3>
            <p className='text-slate-500 font-medium text-2xl my-1'>{productDisplay[0].category}</p>
            <p className='font-bold text-slate-800 md:text-2xl'><span className='text-red-400'>$</span><span>{productDisplay[0].price}</span></p>
          </div>


          <div className='flex md:gap-5 my-2 gap-3'>
            <button className='bg-yellow-300 md:min-w-[100px] min-w-[50px] py-2 px-4 mt-2 font-bold text-white rounded hover:bg-yellow-500 transition duration-300 ease-in-out'>Buy</button>
            <button className='bg-yellow-300 md:min-w-[100px] min-w-[50px]py-2 px-4 mt-2 font-bold text-white rounded hover:bg-yellow-500 transition duration-300 ease-in-out' onClick={handleAddCartProduct}>Add cart</button>
          </div>

          <div className='font-poppins'>
            <p className='text-slate-600 font-medium'>Description :</p>
            <p>{productDisplay[0].description}</p>
          </div>
        </div>
      </div>

      <AllProduct heading={'Related Product'}></AllProduct>
    </div>
  )
};

export default Menu;