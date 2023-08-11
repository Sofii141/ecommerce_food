import React from 'react'
import { CiForkAndKnife } from 'react-icons/ci'
import iconHam from '../assest/iconHam.png'
import iconFruit from '../assest/iconFruit.png'
import iconDrink from '../assest/iconDrink.png'
import iconSan from '../assest/iconSan.png'
import iconCake from '../assest/iconCake.png'
import iconAv from '../assest/iconAv.png'
import iconIce from '../assest/iconIce.png'
import iconPizza from '../assest/iconPizza.png'
import iconRice from '../assest/iconRice.png'
import iconSushi from '../assest/iconSushi.png'


function FilterProduct({ category, onClick }) {
    return (
        <div onClick={onClick}>
            <div className='min-w-[40px] mt-5 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 transition-transform duration-300 hover:scale-110 text-3xl p-6 bg-yellow-300 rounded-full cursor-pointer'>

                {
                    category == 'cake' ? <img src={iconCake} className='max-w-[40px]'></img> :
                        category == 'burger' ? <img src={iconHam} className='max-w-[40px]'></img> :
                            category == 'icream' ? <img src={iconIce} className='max-w-[40px]'></img> :
                                category == 'sandwich' ? <img src={iconSan} className='max-w-[40px]'></img> :
                                    category == 'dosa' ? <img src={iconDrink} className='max-w-[40px]'></img> :
                                        category == 'fruits' ? <img src={iconFruit} className='max-w-[40px]'></img> :
                                            category == 'rice' ? <img src={iconRice} className='max-w-[40px]'></img> :
                                                category == 'pizza' ? <img src={iconPizza} className='max-w-[40px]'></img> :
                                                    category == 'vegetable' ? <img src={iconAv} className='max-w-[40px]'></img> :
                                                        category == 'panner' ? <img src={iconSushi} className='max-w-[40px]'></img> :

                                                            <CiForkAndKnife></CiForkAndKnife>
                }

            </div>

            <p className='text-center font-medium my-1 capitalize'>{category}</p>
        </div>
    )
}

export default FilterProduct