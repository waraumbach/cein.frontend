
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const DetailsProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
          const response = await fetch(`http://localhost:3000/products/${id}`);
          const data = await response.json();
          setProduct(data);
      } catch (error) {
          console.error('Error fetching suggestions:', error);
      }
  };

    fetchProduct()
  
    return () => {}
  }, [])
  
  return product !== null ? (<div className='h-full m-10'>
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div className="flex items-center space-x-4">
        <img className="h-48 w-48 object-cover" src={product.images[0]} alt={product.name} />
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
          <p className="text-xl text-gray-700">{product.price}</p>
          <p className="text-gray-600 mt-4">{product.description}</p>
        </div>
      </div>
    </div>
  </div>) : <div className='flex items-center justify-center h-full'><span className="loading loading-dots loading-lg"></span></div>
}
export default DetailsProduct



