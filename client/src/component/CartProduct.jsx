//8:24:20
import React from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { AiOutlineMinus } from 'react-icons/ai'
import '../css/CartProduct.css'
import { RxCross1 } from 'react-icons/rx'
import { useDispatch } from 'react-redux'
import { deleteCarItem, increseQty, decreceQty } from '../redux/productSlice.js'

function CartProduct({ id, name, image, category, qty, total, price }) {

    const dispatch = useDispatch();


    return (
        <div className='glass p-2 flex mt-4 gap-4 rounded-2xl drop-shadow-md'>
            <div className='p-1 md:p-3 bg-white rounded-md overflow-hidden transition-transform hover:scale-105 duration-300'>
                <img src={image} className='h-30 w-36 object-cover'></img>
            </div>

            <div className='flex flex-col gap-3 md:w-full'>

                <div className=''>
                    <h3 className='font-semibold text-slate-700 capitalize text-lg md:text-xl'>{name}</h3>
                    <p className='text-slate-500 font-medium my-1'>{category}</p>
                    <p className='font-semibold text-slate-600'><span className='text-red-400'>$</span><span>{price}</span></p>
                </div>

                <div className='flex justify-between gap-5'>
                    <div className='flex md:gap-5 my-2 gap-2 items-center'>
                        <button onClick={() => dispatch(increseQty(id))} className='transition-transform hover:scale-105 duration-300 bg-slate-400 md:min-w-[55px] min-w-[50px] py-1 mt-2 font-bold text-white rounded hover:bg-slate-500 ease-in-out flex justify-center'>
                            <BsPlusLg></BsPlusLg>
                        </button>
                        <p className='font-semibold'>{qty}</p>
                        <button onClick={() => dispatch(decreceQty(id))} className='transition-transform hover:scale-105 duration-300 bg-slate-400 md:min-w-[55px] min-w-[50px] py-1 mt-2 font-bold text-white rounded hover:bg-slate-500 ease-in-out flex justify-center'>
                            <AiOutlineMinus></AiOutlineMinus>
                        </button>
                    </div>

                    <div className='flex items-center gap-2 font-semibold text-slate-700'>
                        <p>Total</p>
                        <p>{total}</p>
                    </div>
                </div>


            </div>

            <div className='flex justify-end cursor-pointer transition-transform hover:scale-105 duration-300' onClick={() => dispatch(deleteCarItem(id))}>
                <RxCross1 className='absolute bg-red-400 text-white mx-3 my-2 hover:bg-red-500'></RxCross1>
            </div>

        </div>
    )
}

export default CartProduct;