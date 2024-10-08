
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useOrder } from '../context/orderContext';
import { fetchProduct } from '../service/product';
import { CiShoppingCart } from "react-icons/ci";


const DetailsProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToOrder } = useOrder();
  const navigate = useNavigate();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProduct(id);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    };

    getProduct()

    return () => { }
  }, [])

  return product !== null ? (<div className='h-full m-10'>
    <div className="flex p-6 max-w-4xl bg-white rounded-xl space-y-4">
      <img className="flex-1 max-h-2/5 w-3/5 object-cover" src={product.images[0]} alt={product.name} />
      <div>
        <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
        <p className="text-gray-600 mt-4">{product.description}</p>
        <p className="text-xl text-gray-700 mt-4">{product.price} $</p>
        <div className='flex gap-4'>
          <button onClick={() => addToOrder(product, 1)} className="z-10 w-full bg-neutral text-neutral-50 font-thin p-4 text-sm mt-4 hover:bg-gray-500">Add to your cart</button>
          <button onClick={() => navigate('/cart')} className="z-10 w-full bg-neutral text-neutral-50 font-thin p-4 text-sm mt-4 hover:bg-gray-500"><div className='flex justify-center gap-4'><CiShoppingCart />Go to cart</div></button>
        </div>
      </div>

    </div>
  </div>) : <div className='flex items-center justify-center h-full'><span className="loading loading-dots loading-lg"></span></div>
}
export default DetailsProduct



