import React, { useRef } from 'react'
import { MdOutlineDirectionsBike } from 'react-icons/md'
import HomeCard from '../component/HomeCard'
import { useSelector } from 'react-redux'
import CardFeature from '../component/CardFeature';
import { GrPrevious, GrNext } from 'react-icons/gr'
import AllProduct from '../component/AllProduct';

function Home() {

  const productData = useSelector((state) => state.product.productList);
  const homeCarList = productData.filter(e => e.category === "food", []);
  const homeProductCartListVegetables = productData.filter(e => e.category === "vegetable", []);

  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200
  }

  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200
  }

  const slideProductRef = useRef();

  return (
    <div className='p-2 md:p-4 '>
      <div className='md:flex gap-4 py-2'>

        <div className='md:w-1/2'>
          <div className='flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full'>
            <p className='text-sm font-medium text-slate-900'>Bike Dlivery</p>
            <MdOutlineDirectionsBike className='h-7'></MdOutlineDirectionsBike>
          </div>
          <h2 className='text-4xl md:text-7xl font-bold py-3'>Fresh delicacies every day in <span className='text-yellow-400'>your Home</span></h2>
          <p className='py-3 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sit tempore perspiciatis, molestiae at fugit pariatur laborum, recusandae minus exercitationem impedit quis cumque eos repellendus aperiam facere libero. Suscipit, iusto!</p>

          <button className='font-bold bg-yellow-400 hover:bg-yellow-500 cursor-pointer text-white px-10 py-3 my-5 rounded-md'>Order Now</button>
        </div>


        {/* flex flex-wrap gap-5 */}
        <div className='md:w-1/2 p-4 justify-center'>
          {
            //homeProductCarList[0] asegura que el arreglo no sea nulo 
            // homeProductCarList[1] && homeProductCarList.map(e => {
            //   return (
            //     <HomeCard
            //       key={e._id}
            //       image={e.image}
            //       name={e.name}
            //       price={e.price}
            //       category={e.category}>
            //     </HomeCard>
            //   )
            // }) 
          }
          <HomeCard homeCarList={homeCarList}></HomeCard>
        </div>

      </div>

      <div className=''>
        <div className='flex w-full items-center '>
          <h2 className='font-bold text-2xl text-slate-800 mb-4'>Fresh vegetables</h2>
          <div className='ml-auto flex gap-4'>
            <button onClick={preveProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded'><GrPrevious></GrPrevious></button>
            <button onClick={nextProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded'><GrNext></GrNext></button>
          </div>
        </div>

        <div className='flex gap-5 overflow-scroll scrollbar-none scroll-smooth' ref={slideProductRef}>

          {
            homeProductCartListVegetables.map(e => {
              return (
                <CardFeature
                  key={e._id}
                  _id={e._id}
                  name={e.name}
                  category={e.category}
                  price={e.price}
                  image={e.image}>
                </CardFeature>
              )
            })
          }
        </div>

      </div>

      <AllProduct heading={'Your Product'}></AllProduct>

    </div >
  )
}

export default Home;