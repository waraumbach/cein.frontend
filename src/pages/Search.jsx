import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import ProductList from '../Components/ProductList/Products'
import { searchProducts } from '../service/product';


const Search = () => {
  const [products, setProducts] = useState(null)
  const [searchParams] = useSearchParams();

  const searchTerm = searchParams.get("term")
  
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await searchProducts(searchTerm);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };

    getProducts()

    return () => {

    }
  }, [searchParams])


  return products !== null ? <ProductList products={products} /> : <></>
}

export default Search