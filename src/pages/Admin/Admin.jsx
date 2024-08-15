import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../../service/product';
import DeleteModal from '../../Components/Admin/DeleteModal/DeleteModal';
import EditModal from '../../Components/Admin/EditModal/EditModal';
import CreateModal from '../../Components/Admin/CreateModal/CreateModal';
import CategoryModal from '../../Components/Admin/CreateCategoryModal/CreateCategoryModal';

const Admin = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate();
    const handleRowClick = (id) => {
        navigate(`/products/${id}`);
    }

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

    return (
        <div className='h-full flex flex-col gap-4 p-4'>
            <h1 className='text-2xl'>Admin Panel</h1>
            <h2 className='font-thin'>Create, Edit, Delete your products here.</h2>
            <div className='border-b'></div>
            <CreateModal />
            <CategoryModal />
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product._id} className="hover cursor-pointer hover:bg-neutral-content">
                                <th onClick={() => handleRowClick(product._id)}>{product.name}</th>
                                <td onClick={() => handleRowClick(product._id)}>{product.description}</td>
                                <td onClick={() => handleRowClick(product._id)}>{product.price}</td>
                                <td onClick={() => handleRowClick(product._id)}>{product.quantity}</td>
                                <div>
                                <td><DeleteModal id={product._id} name={product.name} /></td>
                                <td><EditModal id={product._id} name={product.name} description={product.description} price={product.price} quantity={product.quantity} /></td>
                                </div>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Admin