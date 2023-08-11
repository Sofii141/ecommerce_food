import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import loginSignupImage from '../assest/login-animation.gif'
import { BiShow, BiHide } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { loginRedux } from '../redux/userSlice'

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  //redux
  const userData = useSelector(state => state.user)
  // console.log(userData.user);
  const dispatch = useDispatch(loginRedux);


  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
    console.log(e.target.value);
  }

  const signupPost = async (e) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_APP_SERVER_DOMIN}/login`, data);
      console.log(res.data);
      toast(res.data.message);

      if (res.data.alert) {
        dispatch(loginRedux(res.data));
        setTimeout(() => {
          navigate('/');
        }, 1000)
      }


      console.log('data redux' +userData);

    } catch (error) {
      console.error('Error al realizar la solicitud POST:', error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = data;

    if (email && password) {
      signupPost();
    } else {
      alert('Please Enter required fields');
    }
  };

  return (
    <div className='p-3 md:p-4'>
      <div className='w-full max-w-sm bg-white m-auto flex  flex-col p-4 '>
        {/* <h1 className='text-center text-2xl font-bold '>Signup</h1> */}
        <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto '>
          <img src={loginSignupImage} className='w-full' />
        </div>

        <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>

          <label htmlFor='email'>Email</label>
          <input type='text' id='email' name='email' className='mt-1 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300'
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor='Password'>Password</label>
          <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300'>
            <input type={showPassword ? 'text' : 'password'} id='password' name='password' className='w-full bg-slate-200 border-none outline-none'
              value={data.password}
              onChange={handleOnChange} />
            <span className='flex text-xl' onClick={handleShowPassword}>{showPassword ? <BiShow /> : <BiHide></BiHide>}</span>
          </div>

          <button type='submit'
            className='max-w-[150px] m-auto w-full bg-red-500 text-white text-center py-1 rounded-full mt-4 text-xl hover:bg-red-600 cursor-pointer'
          >Login</button>
        </form>
        <p className='text-left text-sm mt-2'>Don't have account ?
          <Link to='/signup' className='text-red-500 underline'>Sign up</Link></p>
      </div>
    </div>
  )
}

export default Login;