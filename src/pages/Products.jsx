import { useEffect, useState } from "react";
import ProductList from '../Components/ProductList/Products'


const Products = ()=> {
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

    return (<div>
        {products !== null ? <ProductList products={products} /> : <></>}
    </div>)

}
export default Products