import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../css/HomeCard.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

function HomeCard({ homeCarList }) {

    return (
        <Swiper className='custom-swiper text-slate-500 md:min-h-[650px] md:min-w-[650px] min-h-[500px] min-w-[500px]'
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}>
            <div>
                {homeCarList.map((products) => (

                    <SwiperSlide key={products._id}>
                        <Link to={`/menu/${products._id}`} className='cursor-pointer'>
                            <img src={products.image} />
                            <h3 className='font-semibold text-slate-600 text-center capitalize text-lg'>{products.name}</h3>
                            <p className='text-center text-slate-500 font-medium'>{products.category}</p>
                            <p className='text-center font-bold '><span className='text-red-500'>$</span><span>{products.price}</span></p>
                        </Link>
                    </SwiperSlide>

                ))}
            </div>

        </Swiper>
    );
};

export default HomeCard;

// function HomeCard({name, image, category, price}) {
//     return (
//         <div className='bg-white shadow-md p-2 rounded'>
//             <div className='w-40 min-h-[150px]'>
//                 <img src={image} className='h-full w-full'></img>
//             </div>
//             <h3 className='font-semibold text-slate-600 text-center capitalize text-lg'>{name}</h3>
//             <p className='text-center text-slate-500 font-medium'>{category}</p>
//             <p className='text-center font-bold '><span className='text-red-500'>$</span><span>{price}</span></p>
//         </div>
//     )
// }