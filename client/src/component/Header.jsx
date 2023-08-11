import React, { useState } from 'react';
import logoSofi from '../assest/logoSofi.png';
import { Link } from 'react-router-dom';
import { HiOutlineUserCircle } from 'react-icons/hi'
import { BsCartFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import '../css/header.css'
import { logoutRedux } from '../redux/userSlice'
import { toast } from 'react-hot-toast';

function Header() {

    const [showMenu, setShowMenu] = useState(false);
    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleLogout = () => {
        dispatch(logoutRedux());
        toast('Logout succesfully');
    };


    const cartItemNumber = useSelector((state) => state.product.cartItem);

    return (
        <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white'>

            {/* Desktop */}

            <div className="flex items-center h-full justify-between">
                <Link to='/'>
                    <div className='h-[125px]'>
                        <img src={logoSofi} className='h-full w-full' />
                    </div>
                </Link>

                <div className='flex items-center gap-4 md:gap-7'>

                    <nav className='gap-4 md:gap-6 text-base md:text-lg hidden md:flex'>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/contact'>Contact</Link>
                    </nav>

                    <div className='text-2xl text-slate-600 relative'>
                        <Link to={'cart'}>
                            <BsCartFill></BsCartFill>
                            <div className='absolute bottom-3 left-3 text-white bg-red-500 
                            rounded-full text-sm h-4 w-4 text-center'>{cartItemNumber.length}</div>
                        </Link>
                    </div>


                    <div className='text-3xl text-slate-600' onClick={handleShowMenu}>

                        {/* imagen del usuario registrado */}
                        <div className='cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md shadow-md'>

                            {userData.image ? <img src={userData.image} className='h-full w-full '></img> :
                                <HiOutlineUserCircle></HiOutlineUserCircle>
                            }

                        </div>

                        {
                            showMenu && (
                                <div className='absolute right-2 bg-white py-2 text-lg w-40 my-3 mx-2 px-2 shadow drop-shadow-md flex flex-col min-w-[120px] text-center'>
                                    {
                                        userData.email === import.meta.env.VITE_APP_ADMIN_EMAIL && <Link to='/newproduct' className='whitepace-nowrap' >New product</Link>
                                    }

                                    {
                                        userData.image ?
                                            <p className='cursor-pointer text-white bg-red-500 px-2 mt-1 rounded-md' onClick={handleLogout}>Logout {userData.firstname}</p>
                                            :
                                            <Link to='/login' className='hover:bg-slate-300 transition-colors duration-300 ease-in-out py-2 px-4 whitepace-nowrap cursor-pointer'>Login</Link>
                                    }

                                    <nav className='border-t border-gray-300 text-base md:text-lg flex flex-col md:hidden'>
                                        <Link to='/' className='py-2 px-4 hover:bg-slate-300 transition-colors duration-300 ease-in-out'>Home</Link>
                                        <Link to='/about' className=' py-2 px-4 border-t hover:bg-slate-300 border-gray-300 transition-colors duration-300 ease-in-out'>About</Link>
                                        <Link to='/contact' className='border-t border-gray-300 hover:bg-slate-300 py-2 px-4 transition-colors duration-300 ease-in-out'>Contact</Link>
                                    </nav>
                                </div>


                            )
                        }

                    </div>
                </div>
            </div>


        </header>
    )
}

export default Header;