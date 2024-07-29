
import { useParams } from 'react-router-dom';



const DetailsProduct =()=>{
    const { id } = useParams();

      // Mock data for demonstration purposes
  const product = {
    id,
    name: 'Sample Product',
    description: 'This is a detailed description of the product.',
    price: '$99.99',
    image: 'https://via.placeholder.com/150'
  };

  
    return (<>
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div className="flex items-center space-x-4">
        <img className="h-48 w-48 object-cover" src={product.image} alt={product.name} />
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
          <p className="text-xl text-gray-700">{product.price}</p>
          <p className="text-gray-600 mt-4">{product.description}</p>
        </div>
      </div>
    </div>
    </>)
}
export default DetailsProduct



