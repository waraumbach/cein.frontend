import { useEffect, useState } from 'react'
import HeroSection from '../Hero/HeroSection'
import ProductList from '../ProductList/Products'
import { fetchProducts } from '../../service/product'

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
            {products !== null ? <ProductList products={products} /> : <></>}
        </>

    )
}

export default Home