import { useEffect, useState } from "react";
import ProductList from '../Components/ProductList/Products'
import { fetchProducts } from "../service/product";
import { fetchCategories } from "../service/category";



const Products = () => {
    const [products, setProducts] = useState(null)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        const getCategories = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        getProducts()
        getCategories()
        return () => {
        }
    }, [])

    return (<div>
        <div className="flex gap-4 p-6 w-full bg-secondary bg-opacity-10">
            <p className="font-thin underline">Shop All</p>
            <p>|</p>
            {categories.map(c => <span className="font-thin w-fit">{c.name}</span>)}
        </div>
        <div className="container mx-auto">
            <p className="text-sm font-thin">Reversed Formulations</p>
            <p className="text-lg">Essentials For Every Skincare</p>
        </div>
        {products !== null ? <ProductList products={products} /> : <></>}
    </div>)

}
export default Products