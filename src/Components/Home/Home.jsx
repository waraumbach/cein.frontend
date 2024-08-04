import { useEffect, useState } from 'react'
import HeroSection from '../Hero/HeroSection'
import ProductList from '../ProductList/Products'

const Home = () => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://localhost:3000/products`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching suggestions:', error);
            }
        };

        fetchProducts()
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