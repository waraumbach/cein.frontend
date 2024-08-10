import { useEffect, useState } from "react";
import ProductList from '../Components/ProductList/Products'
import { fetchProducts } from "../service/product";



const Products = () => {
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

    return (<div>
        {products !== null ? <ProductList products={products} /> : <></>}
    </div>)

}
export default Products