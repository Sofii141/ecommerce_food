import React, { useState } from 'react';
import { BsCloudUpload } from 'react-icons/bs';
import { ImagetoBase64 } from '../utility/imagetoBase64';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function newProduct() {

  const [data, setData] = useState({
    name: '',
    category: '',
    image: '',
    price: '',
    description: '',
  });

  console.log(data);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    });
  };

  const productPost = async (e) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_APP_SERVER_DOMIN}/uploadProduct`, data);
      console.log(res.data);
      toast(res.data.message);

      setData(() => {
        return {
          name: '',
          category: '',
          image: '',
          price: '',
          description: '',
        }
      });

    } catch (error) {
      console.error('Error al realizar la solicitud POST:', error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, image, category, price } = data;

    if (name && image && category && price) {
      productPost();
    } else {
      toast('Enter required Fields');
    }
  };

  const handleUploadImage = async (e) => {
    const dataImage = await ImagetoBase64(e.target.files[0]);

    setData((prev) => {
      return {
        ...prev,
        image: dataImage
      }
    })
  }

  return (
    <div className='p-4'>
      <form className='m-auto w-full max-w-md my-2 shadow flex flex-col p-3 bg-white'
        onSubmit={handleSubmit}>

        <label htmlFor='name'>Name</label>
        <input type='text'
          name='name'
          className='bg-slate-200 p-1 my-1'
          onChange={handleOnChange}
          value={data.name}>
        </input>

        <label htmlFor='category'>Category</label>

        <select className='bg-slate-200 p-1 my-1'
          name='category'
          onChange={handleOnChange}
          value={data.category}>
          <option value={'other'}>Select category</option>
          <option value={'fruits'}>Fruits</option>
          <option value={'vegetable'}>Vegetable</option>
          <option value={'icream'}>Icream</option>
          <option value={'pizza'}>Pizza</option>
          <option value={'rice'}>Rice</option>
          <option value={'cake'}>Cake</option>
          <option value={'burger'}>Burger</option>
          <option value={'dosa'}>Dosa</option>
          <option value={'panner'}>Panner</option>
          <option value={'sandwich'}>Sandwich</option>
          <option value={'food'}>Food</option>
        
        </select>
        
        <label htmlFor='image' className='my-1'>Image
          <div className='h-40 w-full bg-slate-200 my-3 rounded cursor-pointer flex items-center justify-center'>

            {
              data.image ? <img src={data.image} className='h-full' /> : <span className='text-5xl'><BsCloudUpload /></span>
            }

            <input type='file'
              accept='image/*'
              id='image'
              name='image'
              onChange={handleUploadImage}
              className='hidden'>
            </input>
          </div>
        </label>


        <label htmlFor='price' className='my-1'>Price</label>
        <input type="text"
          className='bg-slate-200 p-1 my-1'
          name='price'
          onChange={handleOnChange}
          value={data.price}
        />

        <label htmlFor='description'>Description</label>
        <textarea rows="2" name='description' className='bg-slate-200 p-1 my-1 resize-none' onChange={handleOnChange}
          value={data.description}></textarea>

        <button type='submit'
          className='bg-red-500 hover:bg-red-600
         text-white text-lg font-medium shadow'>Save
        </button>

      </form>
    </div >
  )
};

export default newProduct;