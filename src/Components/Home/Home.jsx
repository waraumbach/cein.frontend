import { useEffect, useState } from 'react'
import HeroSection from '../Hero/HeroSection'
import ProductList from '../ProductList/Products'
import { fetchProducts } from '../../service/product'
import { Link } from 'react-router-dom'
import { MdArrowRightAlt } from "react-icons/md";

const Home = () => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        getProducts()
        return () => {
        }
    }, [])


    return (
        <>
            <HeroSection />
            <div className='flex flex-col mx-20 gap-4'>
                <Link to="/products" className='text-neutral font-thin m-4 underline'><span>All Products &#8594;</span></Link>
                <div className='flex-1 border-b'>
                    {products !== null ? <ProductList products={products} /> : <></>}
                </div>
                <Link to="/products" className='text-neutral font-thin m-4 underline'><span>All Products &#8594;</span></Link>
            </div>
        </>

    )
}

export default Home