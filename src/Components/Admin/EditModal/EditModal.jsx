import React, { useState } from 'react'
import { FaPen } from "react-icons/fa";
import { editProduct } from '../../../service/product';
import { useNavigate } from 'react-router-dom';

const EditModal = ({ id, name, description, price, quantity }) => {
    const [newName, setName] = useState(name);
    const [newQuantity, setQuantity] = useState(quantity);
    const [newDescription, setDescription] = useState(description);
    const [newPrice, setPrice] = useState(price);
    const navigate = useNavigate(0);

    const handleEdit = async () => {
        await editProduct(id, newName, newQuantity, newDescription, newPrice)
        navigate(0);
    }

    return (
        <div>
            <button className="btn hover:bg-gray-200" onClick={() => document.getElementById('edit' + id).showModal()}><FaPen className='' /></button>
            <dialog id={'edit' + id} className="modal">
                <div className="modal-box h-fit">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className='mb-4 font-thin'>Edit your product here.</p>
                    <div className='flex flex-col gap-4'>
                        <label>Name:</label>
                        <input value={newName} onChange={e => setName(e.target.value)} type="text" placeholder="Your product name" className="input input-bordered w-full max-w-xs" />
                        <label>Description:</label>
                        <input value={newDescription} onChange={e => setDescription(e.target.value)} type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" />
                        <label>Quantity:</label>
                        <input value={newQuantity} onChange={e => setQuantity(e.target.value)} type="number" placeholder="Quantity" className="input input-bordered w-full max-w-xs" />
                        <label>Price:</label>
                        <input value={newPrice} onChange={e => setPrice(e.target.value)} type="number" placeholder="Price" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <div className='flex gap-4'>
                            <button onClick={handleEdit} className="btn mr-4 border border-primary text-primary hover:bg-primary hover:bg-opacity-10">Yes</button>
                            <button className="btn border border-red-500 text-red-500 hover:bg-red-500 hover:bg-opacity-10">No</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div >
    )
}

export default EditModal