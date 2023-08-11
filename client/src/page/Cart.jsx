import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../component/CartProduct'

function Cart() {

  const productCarItem = useSelector((state) => state.product.cartItem);
  console.log(productCarItem);

  return (
    <div className='p-2 md:p-4'>
      <h2 className='text-lg md:text-2xl font-bold text-slate-600'>Your Car Items</h2>
      <div className='my-4'>
        {/* Display car items */}
        <div className='w-full max-w-3xl p-6'>
          {
            productCarItem.map(el => {
              return (
                <CartProduct
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  image={el.image}
                  category={el.category}
                  qty={el.qty}
                  total={el.total}
                  price={el.price} />
              )
            })
          }

        </div>

        {/* total car item */}
        <div className=''>

        </div>
      </div>
    </div>
  )
}

export default Cart