import { useEffect, useState } from 'react'
import HeroSection from '../Hero/HeroSection'
import ProductList from '../ProductList/Products'
import { fetchProducts } from '../../service/product'
import { Link } from 'react-router-dom'

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
            <div className='flex mx-20 my-4'>
                <div className='flex-1'>
                    {products !== null ? <ProductList products={products} /> : <></>}
                </div>
                <Link to="/products" className='p-4 bg-neutral text-white mx-10 self-end hover:bg-neutral-content'>View all products</Link>
            </div>
        </>

    )
}

export default Home