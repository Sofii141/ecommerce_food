import React, { useState } from 'react'
import loginSignupImage from '../assest/login-animation.gif'
import { BiShow, BiHide } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom';
import { ImagetoBase64 } from '../utility/imagetoBase64'
import axios from 'axios'
import { toast } from 'react-hot-toast'

function Signup() {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [data, setData] = useState({
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: ''
  });

  console.log(data);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleOnChange = (e) => {
    /*name se utiliza para identificar el campo que está siendo modificado 
    y la propiedad value contiene el nuevo valor del campo.
    */
    //elemento que genero el evento (email, pass, name...)
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        //nuevo valor ingresado en el campo del formulario
        [name]: value
      }
    })
    console.log(e.target.value);
  }

  const signupPost = async (e) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_APP_SERVER_DOMIN}/signup`, data);
      console.log(res.data);
      toast(res.data.message);
      if (res.data.alert) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud POST:', error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, email, password, confirmPassword, image } = data;

    if (firstname && email && password && confirmPassword && image) {
      if (password === confirmPassword) {
        signupPost();
      } else {
        toast('password and confirm password not equal');
      }
    } else {
      toast('Please Enter required fields');
    }
  };

  const handleUploadProfileImage = async (e) => {
    const dataImage = await ImagetoBase64(e.target.files[0]);
    
    setData((preve) => {
      return {
        ...preve,
        image: dataImage
      }
    })
  }

  return (
    <div className='p-3 md:p-4'>
      <div className='w-full max-w-sm bg-white m-auto flex  flex-col p-4 '>
        {/* <h1 className='text-center text-2xl font-bold '>Signup</h1> */}
        <div className='w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative cursor-pointer'>
          <img src={data.image ? data.image : loginSignupImage} className='w-full h-full' />
          <label htmlFor='profileImage'>
            <div className='absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-40 w-full text-center cursor-pointer'>
              <p className='text-sm p-1 text-white'>UpLoad</p>
            </div>
            <input type='file' id='profileImage' accept='image/*' className='hidden' onChange={handleUploadProfileImage}
            ></input>
          </label>
        </div>

        <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>

          <label htmlFor='firstname'>First Name</label>
          <input type='text'
            id='firstname'
            name='firstname'
            className='mt-1 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300'
            value={data.firstname}
            onChange={handleOnChange}
          />

          <label htmlFor='lastname'>Last Name</label>
          <input type='text'
            id='lastname'
            name='lastname'
            className='mt-1 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300'
            value={data.lastname}
            onChange={handleOnChange}
          />

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

          <label htmlFor='confirmPassword'>Password</label>
          <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300'>
            <input type={showConfirmPassword ? 'text' : 'password'} id='confirmPassword' name='confirmPassword' className='w-full bg-slate-200 border-none outline-none'
              value={data.confirmPassword}
              onChange={handleOnChange} />
            <span className='flex text-xl' onClick={handleShowConfirmPassword}>{showConfirmPassword ? <BiShow /> : <BiHide></BiHide>}</span>
          </div>

          <button type='submit'
            className='max-w-[150px] m-auto w-full
             bg-red-500 text-white text-center 
             py-1 rounded-full mt-4 text-xl
             hover:bg-red-600 cursor-pointer'
          >Sign up</button>
        </form>
        <p className='text-left text-sm mt-2'>Already have account ? <Link to='/login' className='text-red-500 underline'>Login</Link></p>
      </div>
    </div>
  )
}

export default Signup