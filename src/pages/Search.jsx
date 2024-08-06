import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import ProductList from '../Components/ProductList/Products'


const Search = () => {
  const [products, setProducts] = useState(null)
  const [searchParams] = useSearchParams();

  const searchTerm = searchParams.get("term")
  
  useEffect(() => {
    const searchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/search?productName=${searchTerm}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };

    searchProducts()

    return () => {

    }
  }, [searchParams])


  return products !== null ? <ProductList products={products} /> : <></>
}

export default Search