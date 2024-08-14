import { useEffect, useState } from "react";
import ProductList from '../Components/ProductList/Products'
import { fetchProducts } from "../service/product";
import { fetchCategories } from "../service/category";



const Products = () => {
    const [products, setProducts] = useState(null)
    const [filteredProducts, setFilteredProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [currentCategory, setCurrentCategory] = useState('');

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

    useEffect(() => {
        if (products) {
            const filtered = products.filter(p => p.categoryId[0]._id === currentCategory)

            setFilteredProducts(filtered)
        }

        return () => {

        }
    }, [currentCategory])


    return (<div>
        <div className="flex gap-4 p-6 w-full bg-secondary bg-opacity-10">
            <p onClick={() => setFilteredProducts([])} className="font-thin underline">Shop All</p>
            <p>|</p>
            {categories.map(c => <span onClick={() => setCurrentCategory(c._id)} className="font-thin w-fit hover:underline cursor-pointer">{c.name}</span>)}
        </div>
        <div className="container mx-auto">
            <p className="text-sm font-thin">Reversed Formulations</p>
            <p className="text-lg">Essentials For Every Skincare</p>
        </div>
        {products !== null && filteredProducts.length === 0 ? <ProductList products={products} /> : <></>}
        {filteredProducts.length !== 0 ? <ProductList products={filteredProducts} /> : <></>}
    </div>)

}
export default Products