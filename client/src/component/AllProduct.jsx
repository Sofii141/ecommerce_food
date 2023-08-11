import React, { useEffect, useState } from 'react'
import CardFeature from './CardFeature'
import FilterProduct from './FilterProduct'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function AllProduct({ heading }) {
    const productData = useSelector((state) => state.product.productList);
    //categorias de los productos en un arreglo
    const categoryList = [... new Set(productData.map(el => el.category))];

    //filter data display
    const [dataFilter, setDataFilter] = useState([]);

    useEffect(() => {
        setDataFilter(productData)
    }, [productData]);

    const handleFilterProduct = (category) => {
        const filter = productData.filter(el => el.category === category);

        setDataFilter(() => {
            return [
                ...filter
            ];
        });
    };

    return (
        <div className='my-5 '>
            <h2 className='font-bold text-2xl text-slate-800 mb-4'>{heading}</h2>
            <div className='flex gap-4 justify-center overflow-scroll scrollbar-none'>
                {
                    categoryList[0] && categoryList.map(el => {
                        return (
                            <FilterProduct
                                category={el}
                                key={el}
                                onClick={() => handleFilterProduct(el)}
                            ></FilterProduct>
                        )
                    })
                }
            </div>


            <div className='flex flex-wrap justify-center gap-4 my-4'>
                {
                    dataFilter.map(el => {
                        return (
                            <Link to={`/menu/${el._id}`}>
                                <CardFeature
                                    key={el._id}
                                    image={el.image}
                                    name={el.name}
                                    category={el.category}
                                    price={el.price}>
                                </CardFeature>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllProduct;