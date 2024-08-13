import React, { useEffect, useState } from 'react'
import { FaPen } from "react-icons/fa";
import { createProduct, editProduct } from '../../service/product';
import { useNavigate } from 'react-router-dom';
import { fetchCategories } from '../../service/category';

const CreateModal = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [imageUrl, setImageUrl] = useState('');
    const [categoryId, setCategoryId] = useState(0);
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate(0);

    const handleCreate = async () => {
        await createProduct(name, quantity, description, price, imageUrl, categoryId)
        navigate(0);
    }

    useEffect(() => {
        fetchCategories().then(
            data => {setCategories(data); setCategoryId(data[0])}
        )
        return () => {

        }
    }, [])

    return categories.length !== 0 ? (
        <div className='flex flex-col'>
            <button className="btn self-end hover:bg-gray-200" onClick={() => document.getElementById('create').showModal()}>Add new product</button>
            <dialog id={'create'} className="modal">
                <div className="modal-box h-fit">
                    <p className='mb-4'>Create your product here.</p>
                    <div className='flex flex-col gap-4'>
                        <label>Name:</label>
                        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Your product name" className="input input-bordered w-full max-w-xs" />
                        <label>Description:</label>
                        <input value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" />
                        <label>Quantity:</label>
                        <input value={quantity} onChange={e => setQuantity(e.target.value)} type="number" placeholder="Quantity" className="input input-bordered w-full max-w-xs" />
                        <label>Price:</label>
                        <input value={price} onChange={e => setPrice(e.target.value)} type="number" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                        <label>Image URL:</label>
                        <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} type="text" placeholder="Image URL" className="input input-bordered w-full max-w-xs" />
                        <label>Category:</label>
                        <select onChange={e => setCategoryId(e.target.value)} className="select w-full max-w-xs">
                            {categories.map((c, i) => <option value={categories[i]._id}>{categories[i].name}</option>)}
                        </select>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <div className='flex gap-4'>
                                <button onClick={handleCreate} className="btn mr-4 border border-primary text-primary hover:bg-primary hover:bg-opacity-10">Yes</button>
                                <button className="btn border border-red-500 text-red-500 hover:bg-red-500 hover:bg-opacity-10">No</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div >
    ) : <span className="loading loading-spinner loading-md"></span>
}

export default CreateModal