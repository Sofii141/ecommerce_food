import React from 'react'
import { Link } from 'react-router-dom';
import { deleteCarItem, addCarItem } from '../redux/productSlice.js'
import { useDispatch } from 'react-redux'

function CardFeature({ image, name, price, category, _id }) {

    const dispatch = useDispatch();

    const handleAddCartProduct = (e) => {
        //objeto que contiene información sobre el producto a añadir al carrito.
        dispatch(addCarItem({
            _id: _id,
            name: name,
            price: price,
            category: category,
            image: image,
        }));
    };

    return (
        <div className='w-full shadow-md transition-transform duration-300 hover:scale-105 min-w-[200px] rounded-2xl max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 mb-5 mt-5 px-4 cursor-pointer flex flex-col overflow-hidden hover:'>
            <Link to={`/menu/${_id}`} onClick={() => window.scrollTo({ top: '0', behavior: 'smooth' })} className='cursor-pointer'>
                <div className='h-28 flex flex-col justify-center items-center'>
                    <img src={image} className='h-screen ' />
                </div>
                <h3 className='font-semibold text-slate-600 capitalize text-lg mt-4 whitespace-nowrap'>{name}</h3>
                <p className='text-slate-500 font-medium'>{category}</p>
                <p className='font-bold '><span className='text-red-500'>$</span><span>{price}</span></p>
            </Link>

            <button className='bg-yellow-300 min-w-[100px] py-1 px-4 mt-2 font-bold text-white rounded
             hover:bg-yellow-400 transition duration-300 ease-in-out w-full'
                onClick={handleAddCartProduct}>Add cart
            </button>

        </div>
    )
}

export default CardFeature;