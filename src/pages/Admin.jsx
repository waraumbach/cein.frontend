import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../service/product';

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
            <button className='self-end w-fit p-4 border border-neutral-content'>Add new product</button>
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
                            <tr onClick={() => handleRowClick(product._id)} className="hover cursor-pointer hover:bg-neutral-content">
                                <th>{product.name}</th>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Admin